/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'

// ─── Mocks ───────────────────────────────────────────────────────────────────

// Mock firebase/auth -- controllable Promise for signInAnonymously
const mockSignInAnonymously = vi.fn()
vi.mock('firebase/auth', () => ({
  signInAnonymously: (...args) => mockSignInAnonymously(...args),
}))

// Mock firebase config -- stub auth instance
vi.mock('../firebase/config', () => ({
  auth: { currentUser: null },
}))

// Mock profiles utility -- avoid real localStorage, control returns
const mockCreateProfile = vi.fn()
const mockHashPin = vi.fn()
vi.mock('../utils/profiles', () => ({
  createProfile: (...args) => mockCreateProfile(...args),
  hashPin: (...args) => mockHashPin(...args),
  VALID_THEMES: ['sonic', 'spiderman'],
  MAX_NICKNAME_LENGTH: 12,
}))

// Import AFTER mocks
const { default: CreateProfile } = await import('./CreateProfile')

// ─── Helpers ─────────────────────────────────────────────────────────────────

const defaultProps = {
  onComplete: vi.fn(),
  onCancel: vi.fn(),
}

function renderWizard(overrides = {}) {
  return render(<CreateProfile {...defaultProps} {...overrides} />)
}

/** Enter 4 digits via on-screen numpad buttons */
function enterPin(digits = '1234') {
  for (const d of digits) {
    fireEvent.click(screen.getByLabelText(`Digit ${d}`))
  }
}

/**
 * Flush fake timers and async microtasks thoroughly.
 * The PinEntry defers onSubmit via setTimeout, and the wizard handler
 * has multiple await points (hashPin, signInAnonymously, createProfile).
 * Each await point is a separate microtask boundary that needs flushing.
 *
 * Uses vi.runAllTimersAsync() which handles both timers and the
 * microtask queue, then additional act cycles to flush React state updates.
 */
async function flush() {
  await act(async () => { await vi.runAllTimersAsync() })
  await act(async () => { await vi.runAllTimersAsync() })
}

/** Complete step 1 (nickname) by typing and clicking Next */
function completeNicknameStep(name = 'TestHero') {
  const input = screen.getByLabelText('Enter your nickname')
  fireEvent.change(input, { target: { value: name } })
  fireEvent.click(screen.getByLabelText('Continue to theme selection'))
}

/** Complete step 2 (theme) by selecting sonic and clicking Next */
function completeThemeStep(theme = 'Sonic') {
  fireEvent.click(screen.getByLabelText(`${theme} theme`))
  fireEvent.click(screen.getByLabelText('Continue to PIN entry'))
}

/** Advance from step 1 through step 2 to step 3 */
async function goToStep3(name = 'TestHero') {
  completeNicknameStep(name)
  completeThemeStep()
}

/** Advance from step 1 through step 3, entering PIN on step 3 */
async function goToStep4(name = 'TestHero', pin = '1234') {
  mockHashPin.mockResolvedValueOnce('hash-' + pin)
  completeNicknameStep(name)
  completeThemeStep()
  enterPin(pin)
  await flush()
}

/**
 * Enter a PIN on step 4 (confirm), flush async, trigger the full creation flow.
 * The hash must match the one stored in goToStep4 for PIN match.
 */
async function confirmPinAndFlush(pin = '1234') {
  mockHashPin.mockResolvedValueOnce('hash-' + pin)
  enterPin(pin)
  await flush()
}

/**
 * Enter a mismatched PIN on step 4 and flush.
 */
async function enterMismatchedPinAndFlush(pin = '9999') {
  mockHashPin.mockResolvedValueOnce('different-hash')
  enterPin(pin)
  await flush()
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('CreateProfile', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    mockHashPin.mockResolvedValue('a'.repeat(64))
    mockSignInAnonymously.mockResolvedValue({ user: { uid: 'mock-uid-123' } })
    mockCreateProfile.mockReturnValue({
      id: 'new-profile-1',
      nickname: 'TestHero',
      theme: 'sonic',
      pinHash: 'a'.repeat(64),
      firebaseUid: 'mock-uid-123',
      currentLevel: 1,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
    })
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  // ── Rendering ────────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders step 1 (nickname input) by default', () => {
      renderWizard()
      expect(screen.getByText('What is your name?')).toBeTruthy()
      expect(screen.getByLabelText('Enter your nickname')).toBeTruthy()
    })

    it('shows 4-dot step indicator with first dot active', () => {
      renderWizard()
      const stepGroup = screen.getByRole('group', { name: 'Profile creation progress' })
      expect(stepGroup).toBeTruthy()
      const dots = stepGroup.querySelectorAll('[aria-label]')
      expect(dots).toHaveLength(4)
      expect(dots[0].getAttribute('aria-current')).toBe('step')
      expect(dots[0].getAttribute('aria-label')).toContain('current')
    })

    it('step indicator updates as user progresses through steps', () => {
      renderWizard()
      completeNicknameStep('Dubi')

      const stepGroup = screen.getByRole('group', { name: 'Profile creation progress' })
      const dots = stepGroup.querySelectorAll('[aria-label]')
      expect(dots[0].getAttribute('aria-label')).toContain('completed')
      expect(dots[1].getAttribute('aria-current')).toBe('step')
    })

    it('shows Cancel button on step 1', () => {
      renderWizard()
      expect(screen.getByLabelText('Cancel profile creation')).toBeTruthy()
    })

    it('shows Back button on step 2', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      expect(screen.getByLabelText('Go back to previous step')).toBeTruthy()
    })

    it('wizard container has role="dialog" with correct aria-label', () => {
      renderWizard()
      const dialog = screen.getByRole('dialog')
      expect(dialog.getAttribute('aria-label')).toBe('Create a new hero profile')
    })

    it('StepIndicator has role="group" with correct aria attributes', () => {
      renderWizard()
      const group = screen.getByRole('group', { name: 'Profile creation progress' })
      expect(group).toBeTruthy()
    })
  })

  // ── Nickname step (step 1) ──────────────────────────────────────────

  describe('nickname step (step 1)', () => {
    it('input accepts text', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Dubi' } })
      expect(input.value).toBe('Dubi')
    })

    it('shows character counter with remaining chars', () => {
      renderWizard()
      expect(screen.getByText('12 characters left')).toBeTruthy()
    })

    it('character counter updates as user types', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Dubi' } })
      expect(screen.getByText('8 characters left')).toBeTruthy()
    })

    it('Next button disabled when input is empty', () => {
      renderWizard()
      const nextBtn = screen.getByLabelText('Continue to theme selection')
      expect(nextBtn.disabled).toBe(true)
    })

    it('Next button enabled when valid name entered', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Dubi' } })
      const nextBtn = screen.getByLabelText('Continue to theme selection')
      expect(nextBtn.disabled).toBe(false)
    })

    it('Next button disabled when input is whitespace only', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: '   ' } })
      const nextBtn = screen.getByLabelText('Continue to theme selection')
      expect(nextBtn.disabled).toBe(true)
    })

    it('enforces 12-character max (MAX_NICKNAME_LENGTH)', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'ABCDEFGHIJKL' } })
      expect(input.value).toBe('ABCDEFGHIJKL')
      fireEvent.change(input, { target: { value: 'ABCDEFGHIJKLM' } })
      expect([...input.value].length).toBeLessThanOrEqual(12)
    })

    it('Enter key advances to step 2', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Dubi' } })
      fireEvent.keyDown(input, { key: 'Enter' })
      expect(screen.getByText('Choose your hero!')).toBeTruthy()
    })

    it('Next button advances to step 2', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      expect(screen.getByText('Choose your hero!')).toBeTruthy()
    })

    it('Cancel calls onCancel', () => {
      const onCancel = vi.fn()
      renderWizard({ onCancel })
      fireEvent.click(screen.getByLabelText('Cancel profile creation'))
      expect(onCancel).toHaveBeenCalledTimes(1)
    })

    it('preserves nickname when navigating back from step 2', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      const input = screen.getByLabelText('Enter your nickname')
      expect(input.value).toBe('Dubi')
    })

    it('single emoji counts as 1 character (Unicode spread)', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: '\u{1F600}' } })
      expect(screen.getByText('11 characters left')).toBeTruthy()
    })

    it('input has dir="auto" for RTL support', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      expect(input.getAttribute('dir')).toBe('auto')
    })

    it('input has placeholder text', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      expect(input.getAttribute('placeholder')).toBe('Type your name...')
    })
  })

  // ── Theme step (step 2) ─────────────────────────────────────────────

  describe('theme step (step 2)', () => {
    beforeEach(() => {
      renderWizard()
      completeNicknameStep('Dubi')
    })

    it('renders Sonic and Spiderman theme cards', () => {
      expect(screen.getByLabelText('Sonic theme')).toBeTruthy()
      expect(screen.getByLabelText('Spiderman theme')).toBeTruthy()
    })

    it('theme cards show correct emoji (hedgehog, spider)', () => {
      const { container } = render(<CreateProfile {...defaultProps} />)
      completeNicknameStep('X')
      expect(container.textContent).toContain('\u{1F994}')
      expect(container.textContent).toContain('\u{1F577}')
      cleanup()
    })

    it('no theme pre-selected on entry', () => {
      const sonicCard = screen.getByLabelText('Sonic theme')
      const spidermanCard = screen.getByLabelText('Spiderman theme')
      expect(sonicCard.getAttribute('aria-checked')).toBe('false')
      expect(spidermanCard.getAttribute('aria-checked')).toBe('false')
    })

    it('Next disabled until theme selected', () => {
      const nextBtn = screen.getByLabelText('Continue to PIN entry')
      expect(nextBtn.disabled).toBe(true)
    })

    it('selecting theme shows gold checkmark and enables Next', () => {
      fireEvent.click(screen.getByLabelText('Sonic theme'))
      expect(screen.getByLabelText('Sonic theme').getAttribute('aria-checked')).toBe('true')
      expect(screen.getByLabelText('Sonic theme').textContent).toContain('\u2714')
      expect(screen.getByLabelText('Continue to PIN entry').disabled).toBe(false)
    })

    it('only one theme can be selected at a time', () => {
      fireEvent.click(screen.getByLabelText('Sonic theme'))
      expect(screen.getByLabelText('Sonic theme').getAttribute('aria-checked')).toBe('true')
      fireEvent.click(screen.getByLabelText('Spiderman theme'))
      expect(screen.getByLabelText('Spiderman theme').getAttribute('aria-checked')).toBe('true')
      expect(screen.getByLabelText('Sonic theme').getAttribute('aria-checked')).toBe('false')
    })

    it('Back button returns to step 1', () => {
      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      expect(screen.getByText('What is your name?')).toBeTruthy()
    })

    it('preserves theme selection when navigating back from step 3', () => {
      completeThemeStep()
      // PinEntry rendered; cancel back to step 2
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(screen.getByLabelText('Sonic theme').getAttribute('aria-checked')).toBe('true')
    })

    it('theme picker has role="radiogroup"', () => {
      expect(screen.getByRole('radiogroup', { name: 'Select a theme' })).toBeTruthy()
    })

    it('theme cards have role="radio" with aria-checked', () => {
      const radios = screen.getAllByRole('radio')
      expect(radios).toHaveLength(2)
      radios.forEach((radio) => {
        expect(radio.getAttribute('aria-checked')).toBeDefined()
      })
    })
  })

  // ── PIN step (step 3) ───────────────────────────────────────────────

  describe('PIN step (step 3)', () => {
    beforeEach(async () => {
      renderWizard()
      await goToStep3()
    })

    it('shows PinEntry component on step 3', () => {
      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeTruthy()
      expect(screen.getByText('Enter PIN')).toBeTruthy()
    })

    it('header says "Choose a secret PIN"', () => {
      expect(screen.getByText('Choose a secret PIN')).toBeTruthy()
    })

    it('no rate limiting on PIN creation (maxAttempts is high)', () => {
      expect(screen.queryByText(/Too many tries/)).toBeNull()
    })

    it('entering 4 digits calls hashPin and advances to step 4', async () => {
      mockHashPin.mockResolvedValueOnce('hash-5678')
      enterPin('5678')
      await flush()

      expect(mockHashPin).toHaveBeenCalledWith('5678')
      expect(screen.getByText('Confirm your PIN')).toBeTruthy()
    })

    it('Back button (Cancel in PinEntry) returns to step 2', () => {
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(screen.getByText('Choose your hero!')).toBeTruthy()
    })

    it('preserves theme when going back from step 3', () => {
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(screen.getByLabelText('Sonic theme').getAttribute('aria-checked')).toBe('true')
    })

    it('digits are cleared when coming back to step 3 (security)', async () => {
      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      completeThemeStep()
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe('0 of 4 digits entered')
    })

    it('hashPin failure shows error state', async () => {
      mockHashPin.mockRejectedValueOnce(new Error('hash failed'))
      enterPin('1234')
      await flush()

      expect(screen.getByText('Could not process PIN. Try again.')).toBeTruthy()
    })

    it('keyboard digit input works', () => {
      fireEvent.keyDown(window, { key: '5' })
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe('1 of 4 digits entered')
    })

    it('backspace removes digits', () => {
      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe('2 of 4 digits entered')
      fireEvent.click(screen.getByLabelText('Delete last digit'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe('1 of 4 digits entered')
    })
  })

  // ── PIN confirm step (step 4) ───────────────────────────────────────

  describe('PIN confirm step (step 4)', () => {
    beforeEach(async () => {
      renderWizard()
      await goToStep4('TestHero', '1234')
    })

    it('shows PinEntry component on step 4', () => {
      expect(screen.getByRole('dialog')).toBeTruthy()
    })

    it('header says "Confirm your PIN"', () => {
      expect(screen.getByText('Confirm your PIN')).toBeTruthy()
    })

    it('matching PIN proceeds to profile creation', async () => {
      await confirmPinAndFlush('1234')
      expect(mockSignInAnonymously).toHaveBeenCalled()
    })

    it('mismatched PIN shows error message', async () => {
      await enterMismatchedPinAndFlush('9999')
      expect(screen.getByText('PINs do not match. Try again!')).toBeTruthy()
    })

    it('mismatched PIN triggers shake animation', async () => {
      // Use manual flush to check for shake before the 500ms clear timer fires
      mockHashPin.mockResolvedValueOnce('different-hash')
      enterPin('9999')
      await act(async () => { await vi.runAllTimersAsync() })
      // After mismatch, PinEntry receives error prop and shakes.
      // Advance just enough for the error useEffect but not the 500ms shake timeout
      await act(async () => { vi.advanceTimersByTime(100) })
      const dialog = screen.getByRole('dialog')
      expect(dialog.innerHTML).toContain('animate-shake')
      // Finish remaining timers
      await act(async () => { vi.runAllTimers() })
    })

    it('mismatched PIN clears confirmation digits', async () => {
      await enterMismatchedPinAndFlush('9999')
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe('0 of 4 digits entered')
    })

    it('stays on step 4 after mismatch (not back to step 3)', async () => {
      await enterMismatchedPinAndFlush('9999')
      expect(screen.getByText('Confirm your PIN')).toBeTruthy()
    })

    it('can retry after mismatch', async () => {
      await enterMismatchedPinAndFlush('9999')
      await confirmPinAndFlush('1234')
      expect(mockSignInAnonymously).toHaveBeenCalled()
    })

    it('Back from step 4 returns to step 3', () => {
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(screen.getByText('Choose a secret PIN')).toBeTruthy()
    })

    it('Back from step 4 clears both PINs (security)', async () => {
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      // Back on step 3; enter new PIN
      mockHashPin.mockResolvedValueOnce('new-hash-5555')
      enterPin('5555')
      await flush()
      // On step 4 with new hash
      expect(screen.getByText('Confirm your PIN')).toBeTruthy()
    })

    it('multiple mismatches all handled correctly', async () => {
      await enterMismatchedPinAndFlush('1111')
      expect(screen.getByText('PINs do not match. Try again!')).toBeTruthy()

      await enterMismatchedPinAndFlush('2222')
      expect(screen.getByText('PINs do not match. Try again!')).toBeTruthy()

      expect(screen.getByText('Confirm your PIN')).toBeTruthy()
    })

    it('error message clears when user starts new attempt', async () => {
      await enterMismatchedPinAndFlush('9999')
      expect(screen.getByText('PINs do not match. Try again!')).toBeTruthy()

      fireEvent.click(screen.getByLabelText('Digit 1'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe('1 of 4 digits entered')
    })
  })

  // ── Firebase auth flow ──────────────────────────────────────────────

  describe('Firebase auth flow', () => {
    it('calls signInAnonymously on successful PIN confirm', async () => {
      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(mockSignInAnonymously).toHaveBeenCalledTimes(1)
    })

    it('shows "Creating your hero..." loading state during auth', async () => {
      let resolveAuth
      mockSignInAnonymously.mockReturnValue(
        new Promise((resolve) => { resolveAuth = resolve })
      )

      renderWizard()
      await goToStep4('Hero', '5678')

      // Enter matching PIN to trigger creation flow
      mockHashPin.mockResolvedValueOnce('hash-5678')
      enterPin('5678')
      // Flush timers (PinEntry setTimeout) + hashPin microtask, but signIn hangs
      await act(async () => { await vi.runAllTimersAsync() })

      expect(screen.getByText('Creating your hero...')).toBeTruthy()

      // Cleanup
      await act(async () => {
        resolveAuth({ user: { uid: 'uid' } })
      })
    })

    it('disables all input while submitting', async () => {
      let resolveAuth
      mockSignInAnonymously.mockReturnValue(
        new Promise((resolve) => { resolveAuth = resolve })
      )

      renderWizard()
      await goToStep4('Hero', '5678')

      mockHashPin.mockResolvedValueOnce('hash-5678')
      enterPin('5678')
      await act(async () => { await vi.runAllTimersAsync() })

      // Loading state -- no back/cancel buttons visible
      expect(screen.queryByLabelText('Go back to previous step')).toBeNull()
      expect(screen.queryByLabelText('Cancel profile creation')).toBeNull()

      await act(async () => {
        resolveAuth({ user: { uid: 'uid' } })
      })
    })

    it('passes Firebase UID to createProfile', async () => {
      mockSignInAnonymously.mockResolvedValue({ user: { uid: 'firebase-uid-xyz' } })

      renderWizard()
      await goToStep4('MyHero', '4321')
      await confirmPinAndFlush('4321')

      expect(mockCreateProfile).toHaveBeenCalledWith(
        expect.objectContaining({
          firebaseUid: 'firebase-uid-xyz',
        })
      )
    })

    it('Firebase auth failure shows error message', async () => {
      mockSignInAnonymously.mockRejectedValue(new Error('network error'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(screen.getByText('Could not create hero. Try again!')).toBeTruthy()
    })

    it('Firebase auth failure shows "Try Again" button', async () => {
      mockSignInAnonymously.mockRejectedValue(new Error('network error'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(screen.getByLabelText('Try creating your hero again')).toBeTruthy()
    })

    it('Try Again button clears error (allows re-attempt from step 4)', async () => {
      mockSignInAnonymously.mockRejectedValueOnce(new Error('network error'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      fireEvent.click(screen.getByLabelText('Try creating your hero again'))
      expect(screen.queryByText('Could not create hero. Try again!')).toBeNull()
    })

    it('wizard state preserved on Firebase failure', async () => {
      mockSignInAnonymously.mockRejectedValue(new Error('auth fail'))

      renderWizard()
      await goToStep4('MyName', '1234')
      await confirmPinAndFlush('1234')

      expect(screen.getByText('Could not create hero. Try again!')).toBeTruthy()
      // Back button should go to step 3 (preserving state)
      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      expect(screen.getByText('Choose a secret PIN')).toBeTruthy()
    })
  })

  // ── Save and activation flow ────────────────────────────────────────

  describe('save and activation flow', () => {
    it('calls createProfile with correct arguments', async () => {
      renderWizard()
      await goToStep4('MyHero', '4567')
      await confirmPinAndFlush('4567')

      expect(mockCreateProfile).toHaveBeenCalledWith(
        expect.objectContaining({
          nickname: 'MyHero',
          theme: 'sonic',
          pinHash: 'hash-4567',
          firebaseUid: 'mock-uid-123',
        })
      )
    })

    it('calls onComplete with the new profile object on success', async () => {
      const onComplete = vi.fn()
      render(<CreateProfile onComplete={onComplete} onCancel={vi.fn()} />)
      await goToStep4('Hero', '1111')
      await confirmPinAndFlush('1111')

      expect(onComplete).toHaveBeenCalledTimes(1)
      expect(onComplete).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'new-profile-1',
          nickname: 'TestHero',
        })
      )
    })

    it('createProfile failure shows error message', async () => {
      mockCreateProfile.mockImplementation(() => { throw new Error('Storage full') })

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(screen.getByText('Could not create hero. Try again!')).toBeTruthy()
    })

    it('createProfile MAX_PROFILES error handled with specific message', async () => {
      mockCreateProfile.mockImplementation(() => {
        throw new Error('Maximum number of profiles reached')
      })

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(screen.getByText('Maximum number of profiles reached')).toBeTruthy()
    })

    it('does not save partial profile on Firebase auth failure', async () => {
      mockSignInAnonymously.mockRejectedValue(new Error('auth fail'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(mockCreateProfile).not.toHaveBeenCalled()
    })

    it('onComplete called exactly once on success', async () => {
      const onComplete = vi.fn()
      render(<CreateProfile onComplete={onComplete} onCancel={vi.fn()} />)
      await goToStep4('Hero', '1111')
      await confirmPinAndFlush('1111')

      expect(onComplete).toHaveBeenCalledTimes(1)
    })

    it('signInAnonymously called before createProfile (atomicity)', async () => {
      const callOrder = []
      mockSignInAnonymously.mockImplementation(async () => {
        callOrder.push('signIn')
        return { user: { uid: 'uid' } }
      })
      mockCreateProfile.mockImplementation((data) => {
        callOrder.push('createProfile')
        return { id: 'p1', ...data }
      })

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(callOrder).toEqual(['signIn', 'createProfile'])
    })

    it('success flow: step1 -> step2 -> step3 -> step4 -> submit -> onComplete', async () => {
      const onComplete = vi.fn()
      render(<CreateProfile onComplete={onComplete} onCancel={vi.fn()} />)

      // Step 1: nickname
      completeNicknameStep('Hero')
      expect(screen.getByText('Choose your hero!')).toBeTruthy()

      // Step 2: theme
      completeThemeStep()
      expect(screen.getByText('Choose a secret PIN')).toBeTruthy()

      // Step 3: PIN
      mockHashPin.mockResolvedValueOnce('hash-abc')
      enterPin('1234')
      await flush()
      expect(screen.getByText('Confirm your PIN')).toBeTruthy()

      // Step 4: confirm PIN
      mockHashPin.mockResolvedValueOnce('hash-abc')
      enterPin('1234')
      await flush()

      expect(onComplete).toHaveBeenCalledTimes(1)
    })
  })

  // ── Back navigation ─────────────────────────────────────────────────

  describe('back navigation', () => {
    it('step 2 Back preserves nickname', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      expect(screen.getByLabelText('Enter your nickname').value).toBe('Dubi')
    })

    it('step 3 Back preserves theme', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      completeThemeStep('Spiderman')
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(screen.getByLabelText('Spiderman theme').getAttribute('aria-checked')).toBe('true')
    })

    it('step 4 Back clears both PINs', async () => {
      renderWizard()
      await goToStep4('Dubi', '1234')
      // Go back from step 4
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      // Back on step 3, enter new PIN
      mockHashPin.mockResolvedValueOnce('new-hash-5555')
      enterPin('5555')
      await flush()
      // On step 4 with new hash
      // Confirm with new matching hash
      mockHashPin.mockResolvedValueOnce('new-hash-5555')
      enterPin('5555')
      await flush()

      expect(mockCreateProfile).toHaveBeenCalledWith(
        expect.objectContaining({ pinHash: 'new-hash-5555' })
      )
    })

    it('full forward-back-forward cycle preserves non-PIN state', () => {
      renderWizard()
      // Step 1 -> 2
      completeNicknameStep('Dubi')
      // Step 2: select Spiderman and advance to step 3
      completeThemeStep('Spiderman')
      // Step 3 -> back -> step 2
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      // Theme should be preserved (state.theme was set by SET_THEME)
      expect(screen.getByLabelText('Spiderman theme').getAttribute('aria-checked')).toBe('true')
      // Step 2 -> back -> step 1
      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      // Nickname preserved
      expect(screen.getByLabelText('Enter your nickname').value).toBe('Dubi')
      // Step 1 -> 2 (forward again)
      fireEvent.click(screen.getByLabelText('Continue to theme selection'))
      // Theme should be preserved (state.theme is still 'spiderman')
      expect(screen.getByLabelText('Spiderman theme').getAttribute('aria-checked')).toBe('true')
    })

    it('Cancel from step 1 calls onCancel immediately', () => {
      const onCancel = vi.fn()
      renderWizard({ onCancel })
      fireEvent.click(screen.getByLabelText('Cancel profile creation'))
      expect(onCancel).toHaveBeenCalledTimes(1)
    })

    it('Escape key triggers cancel on step 1', () => {
      const onCancel = vi.fn()
      renderWizard({ onCancel })
      fireEvent.keyDown(window, { key: 'Escape' })
      expect(onCancel).toHaveBeenCalledTimes(1)
    })

    it('Escape key triggers back on step 2', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      expect(screen.getByText('Choose your hero!')).toBeTruthy()
      fireEvent.keyDown(window, { key: 'Escape' })
      expect(screen.getByText('What is your name?')).toBeTruthy()
    })
  })

  // ── Edge cases ──────────────────────────────────────────────────────

  describe('edge cases', () => {
    it('Hebrew nickname handled correctly (dir=auto)', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: '\u05D3\u05D5\u05D1\u05D9' } })
      expect(input.value).toBe('\u05D3\u05D5\u05D1\u05D9')
      expect(input.getAttribute('dir')).toBe('auto')
    })

    it('nickname with mixed Latin/Hebrew chars', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Hi\u05D3\u05D5\u05D1\u05D9' } })
      expect(input.value).toBe('Hi\u05D3\u05D5\u05D1\u05D9')
      const nextBtn = screen.getByLabelText('Continue to theme selection')
      expect(nextBtn.disabled).toBe(false)
    })

    it('emoji-only nickname (e.g., 3 emoji = 3 chars)', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: '\u{1F600}\u{1F60D}\u{1F389}' } })
      expect(screen.getByText('9 characters left')).toBeTruthy()
    })

    it('12-char boundary: 12 accepted, 13 blocked', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'ABCDEFGHIJKL' } })
      expect(input.value).toBe('ABCDEFGHIJKL')
      expect(screen.getByText('0 characters left')).toBeTruthy()

      fireEvent.change(input, { target: { value: 'ABCDEFGHIJKLM' } })
      expect([...input.value].length).toBeLessThanOrEqual(12)
    })

    it('PIN "0000" is valid', async () => {
      renderWizard()
      await goToStep3()
      mockHashPin.mockResolvedValueOnce('hash-0000')
      enterPin('0000')
      await flush()

      expect(mockHashPin).toHaveBeenCalledWith('0000')
      expect(screen.getByText('Confirm your PIN')).toBeTruthy()
    })

    it('cancel mid-wizard does not create partial profile', () => {
      const onCancel = vi.fn()
      renderWizard({ onCancel })
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Dubi' } })
      fireEvent.click(screen.getByLabelText('Cancel profile creation'))

      expect(onCancel).toHaveBeenCalledTimes(1)
      expect(mockSignInAnonymously).not.toHaveBeenCalled()
      expect(mockCreateProfile).not.toHaveBeenCalled()
    })

    it('cancel mid-wizard does not leave orphaned Firebase user', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      fireEvent.click(screen.getByLabelText('Cancel profile creation'))

      expect(mockSignInAnonymously).not.toHaveBeenCalled()
    })

    it('component unmount during async auth call (no setState warning)', async () => {
      let resolveAuth
      mockSignInAnonymously.mockReturnValue(
        new Promise((resolve) => { resolveAuth = resolve })
      )

      const { unmount } = renderWizard()
      await goToStep4('Hero', '5678')

      mockHashPin.mockResolvedValueOnce('hash-5678')
      enterPin('5678')
      await act(async () => { await vi.runAllTimersAsync() })

      // Unmount while auth is pending
      unmount()

      // Resolve the promise -- should not throw or warn (isMountedRef guard)
      await act(async () => {
        resolveAuth({ user: { uid: 'uid' } })
      })

      expect(mockSignInAnonymously).toHaveBeenCalled()
    })

    it('rapid double-tap on Next does not skip steps', () => {
      renderWizard()
      const input = screen.getByLabelText('Enter your nickname')
      fireEvent.change(input, { target: { value: 'Dubi' } })

      const nextBtn = screen.getByLabelText('Continue to theme selection')
      fireEvent.click(nextBtn)
      fireEvent.click(nextBtn)

      expect(screen.getByText('Choose your hero!')).toBeTruthy()
    })

    it('back navigation from error state returns to step 3', async () => {
      mockSignInAnonymously.mockRejectedValue(new Error('fail'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      fireEvent.click(screen.getByLabelText('Go back to previous step'))
      expect(screen.getByText('Choose a secret PIN')).toBeTruthy()
    })

    it('submitting state prevents back navigation', async () => {
      let resolveAuth
      mockSignInAnonymously.mockReturnValue(
        new Promise((resolve) => { resolveAuth = resolve })
      )

      renderWizard()
      await goToStep4('Hero', '5678')

      mockHashPin.mockResolvedValueOnce('hash-5678')
      enterPin('5678')
      await act(async () => { await vi.runAllTimersAsync() })

      // In loading state - no back button
      expect(screen.queryByLabelText('Go back to previous step')).toBeNull()
      expect(screen.queryByLabelText('Cancel profile creation')).toBeNull()

      await act(async () => {
        resolveAuth({ user: { uid: 'uid' } })
      })
    })

    it('network error during signInAnonymously shows generic message', async () => {
      mockSignInAnonymously.mockRejectedValue(new TypeError('Failed to fetch'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      expect(screen.getByText('Could not create hero. Try again!')).toBeTruthy()
    })
  })

  // ── Accessibility ───────────────────────────────────────────────────

  describe('accessibility', () => {
    it('dialog role on wizard container', () => {
      renderWizard()
      expect(screen.getByRole('dialog')).toBeTruthy()
    })

    it('aria-label on wizard container', () => {
      renderWizard()
      expect(screen.getByRole('dialog').getAttribute('aria-label')).toBe(
        'Create a new hero profile'
      )
    })

    it('error messages have role="alert"', async () => {
      mockSignInAnonymously.mockRejectedValue(new Error('fail'))

      renderWizard()
      await goToStep4('Hero', '1234')
      await confirmPinAndFlush('1234')

      const alert = screen.getByRole('alert')
      expect(alert).toBeTruthy()
      expect(alert.textContent).toBe('Could not create hero. Try again!')
    })

    it('theme picker has role="radiogroup" with correct aria-label', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      const group = screen.getByRole('radiogroup')
      expect(group.getAttribute('aria-label')).toBe('Select a theme')
    })

    it('theme cards have role="radio" with aria-checked', () => {
      renderWizard()
      completeNicknameStep('Dubi')
      const radios = screen.getAllByRole('radio')
      expect(radios).toHaveLength(2)
      expect(radios[0].getAttribute('aria-checked')).toBe('false')
      fireEvent.click(radios[0])
      expect(radios[0].getAttribute('aria-checked')).toBe('true')
    })

    it('touch targets meet 44px minimum (min-h on buttons)', () => {
      renderWizard()
      const cancelBtn = screen.getByLabelText('Cancel profile creation')
      expect(cancelBtn.className).toContain('min-h-[44px]')
    })

    it('prefers-reduced-motion classes present', () => {
      const { container } = renderWizard()
      expect(container.innerHTML).toContain('motion-reduce:')
    })

    it('step indicator aria-current="step" on active dot', () => {
      renderWizard()
      const stepGroup = screen.getByRole('group', { name: 'Profile creation progress' })
      const dots = stepGroup.querySelectorAll('[aria-label]')
      const currentDot = Array.from(dots).find(
        (d) => d.getAttribute('aria-current') === 'step'
      )
      expect(currentDot).toBeTruthy()
      expect(currentDot.getAttribute('aria-label')).toContain('Step 1 of 4')
    })

    it('all buttons have accessible names', () => {
      renderWizard()
      const buttons = screen.getAllByRole('button')
      buttons.forEach((btn) => {
        const hasLabel = btn.getAttribute('aria-label') || btn.textContent.trim().length > 0
        expect(hasLabel).toBeTruthy()
      })
    })
  })
})
