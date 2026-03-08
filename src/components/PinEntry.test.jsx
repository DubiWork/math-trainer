/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import PinEntry from './PinEntry'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const defaultProps = {
  profileName: 'Dubi',
  onSubmit: vi.fn(),
  onCancel: vi.fn(),
}

function renderPinEntry(overrides = {}) {
  return render(<PinEntry {...defaultProps} {...overrides} />)
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('PinEntry', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  // ── Rendering ─────────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders the "Enter PIN" heading', () => {
      renderPinEntry()
      expect(screen.getByText('Enter PIN')).toBeTruthy()
    })

    it('displays the profile name', () => {
      renderPinEntry({ profileName: 'SonicFan' })
      expect(screen.getByText('SonicFan')).toBeTruthy()
    })

    it('renders 4 dots initially (all empty)', () => {
      renderPinEntry()
      const status = screen.getByRole('status')
      expect(status).toBeTruthy()
      expect(status.getAttribute('aria-label')).toBe('0 of 4 digits entered')
    })

    it('renders a dialog with correct aria-label', () => {
      renderPinEntry({ profileName: 'Dubi' })
      const dialog = screen.getByRole('dialog')
      expect(dialog.getAttribute('aria-label')).toBe('Enter PIN for Dubi')
      expect(dialog.getAttribute('aria-modal')).toBe('true')
    })

    it('renders all 10 digit buttons', () => {
      renderPinEntry()
      for (let i = 0; i <= 9; i++) {
        expect(screen.getByLabelText(`Digit ${i}`)).toBeTruthy()
      }
    })

    it('renders backspace button', () => {
      renderPinEntry()
      expect(screen.getByLabelText('Delete last digit')).toBeTruthy()
    })

    it('renders cancel button', () => {
      renderPinEntry()
      expect(screen.getByLabelText('Cancel PIN entry')).toBeTruthy()
    })
  })

  // ── Digit input ───────────────────────────────────────────────────────

  describe('digit input', () => {
    it('fills dots as digits are tapped', () => {
      renderPinEntry()

      fireEvent.click(screen.getByLabelText('Digit 1'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '1 of 4 digits entered'
      )

      fireEvent.click(screen.getByLabelText('Digit 2'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '2 of 4 digits entered'
      )
    })

    it('calls onSubmit with the 4-digit string after 4th digit', async () => {
      const onSubmit = vi.fn()
      renderPinEntry({ onSubmit })

      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      fireEvent.click(screen.getByLabelText('Digit 3'))
      fireEvent.click(screen.getByLabelText('Digit 4'))

      // onSubmit is deferred via setTimeout
      await act(async () => {
        vi.runAllTimers()
      })

      expect(onSubmit).toHaveBeenCalledWith('1234')
    })

    it('does not accept more than 4 digits', () => {
      renderPinEntry()

      for (let i = 1; i <= 5; i++) {
        fireEvent.click(screen.getByLabelText(`Digit ${i % 10}`))
      }

      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '4 of 4 digits entered'
      )
    })

    it('digit buttons are disabled when all 4 digits are entered', () => {
      renderPinEntry()

      // Enter 4 digits
      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      fireEvent.click(screen.getByLabelText('Digit 3'))
      fireEvent.click(screen.getByLabelText('Digit 4'))

      expect(screen.getByLabelText('Digit 5').disabled).toBe(true)
    })
  })

  // ── Backspace ─────────────────────────────────────────────────────────

  describe('backspace', () => {
    it('removes the last entered digit', () => {
      renderPinEntry()

      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '2 of 4 digits entered'
      )

      fireEvent.click(screen.getByLabelText('Delete last digit'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '1 of 4 digits entered'
      )
    })

    it('backspace button is disabled when no digits entered', () => {
      renderPinEntry()
      expect(screen.getByLabelText('Delete last digit').disabled).toBe(true)
    })
  })

  // ── Keyboard support ──────────────────────────────────────────────────

  describe('keyboard support', () => {
    it('accepts digit keys 0-9', () => {
      renderPinEntry()

      fireEvent.keyDown(window, { key: '5' })
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '1 of 4 digits entered'
      )
    })

    it('accepts Backspace key', () => {
      renderPinEntry()

      fireEvent.keyDown(window, { key: '1' })
      fireEvent.keyDown(window, { key: '2' })
      fireEvent.keyDown(window, { key: 'Backspace' })
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '1 of 4 digits entered'
      )
    })

    it('calls onCancel on Escape key', () => {
      const onCancel = vi.fn()
      renderPinEntry({ onCancel })

      fireEvent.keyDown(window, { key: 'Escape' })
      expect(onCancel).toHaveBeenCalledTimes(1)
    })

    it('keyboard submits after 4 digits', async () => {
      const onSubmit = vi.fn()
      renderPinEntry({ onSubmit })

      fireEvent.keyDown(window, { key: '9' })
      fireEvent.keyDown(window, { key: '8' })
      fireEvent.keyDown(window, { key: '7' })
      fireEvent.keyDown(window, { key: '6' })

      await act(async () => {
        vi.runAllTimers()
      })

      expect(onSubmit).toHaveBeenCalledWith('9876')
    })

    it('ignores non-relevant keys', () => {
      renderPinEntry()

      fireEvent.keyDown(window, { key: 'a' })
      fireEvent.keyDown(window, { key: 'Enter' })
      fireEvent.keyDown(window, { key: ' ' })

      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '0 of 4 digits entered'
      )
    })
  })

  // ── Cancel ────────────────────────────────────────────────────────────

  describe('cancel', () => {
    it('calls onCancel when cancel button is clicked', () => {
      const onCancel = vi.fn()
      renderPinEntry({ onCancel })

      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(onCancel).toHaveBeenCalledTimes(1)
    })
  })

  // ── Error state and shake ─────────────────────────────────────────────

  describe('error state', () => {
    it('displays error message when error prop is set', () => {
      renderPinEntry({ error: 'Oops! Wrong PIN. Try again.' })
      expect(screen.getByRole('alert')).toBeTruthy()
      expect(screen.getByText('Oops! Wrong PIN. Try again.')).toBeTruthy()
    })

    it('does not display error message when error is null', () => {
      renderPinEntry({ error: null })
      expect(screen.queryByText('Oops! Wrong PIN. Try again.')).toBeNull()
    })

    it('triggers shake animation on error (class added)', () => {
      const { container } = renderPinEntry({ error: 'Wrong PIN' })
      const dotsContainer = container.querySelector('.animate-shake')
      expect(dotsContainer).toBeTruthy()
    })

    it('clears digits on error', () => {
      const { rerender } = render(
        <PinEntry {...defaultProps} error={null} />
      )

      // Enter some digits
      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '2 of 4 digits entered'
      )

      // Trigger error
      rerender(
        <PinEntry {...defaultProps} error="Wrong PIN" />
      )

      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '0 of 4 digits entered'
      )
    })

    it('removes shake class after 500ms', async () => {
      const { container } = renderPinEntry({ error: 'Wrong' })
      expect(container.querySelector('.animate-shake')).toBeTruthy()

      await act(async () => {
        vi.advanceTimersByTime(500)
      })

      expect(container.querySelector('.animate-shake')).toBeNull()
    })
  })

  // ── Rate limiting / cooldown ──────────────────────────────────────────

  describe('rate limiting', () => {
    it('shows cooldown message when attempts reach maxAttempts', () => {
      renderPinEntry({ attempts: 3, maxAttempts: 3, cooldownSeconds: 30 })
      expect(screen.getByText(/Too many tries! Wait 30s/)).toBeTruthy()
    })

    it('does not show cooldown when attempts are below max', () => {
      renderPinEntry({ attempts: 2, maxAttempts: 3 })
      expect(screen.queryByText(/Too many tries/)).toBeNull()
    })

    it('disables digit buttons during cooldown', () => {
      renderPinEntry({ attempts: 3, maxAttempts: 3, cooldownSeconds: 30 })
      expect(screen.getByLabelText('Digit 1').disabled).toBe(true)
    })

    it('countdown decrements every second', async () => {
      renderPinEntry({ attempts: 3, maxAttempts: 3, cooldownSeconds: 5 })

      expect(screen.getByText(/Wait 5s/)).toBeTruthy()

      await act(async () => {
        vi.advanceTimersByTime(1000)
      })
      expect(screen.getByText(/Wait 4s/)).toBeTruthy()

      await act(async () => {
        vi.advanceTimersByTime(1000)
      })
      expect(screen.getByText(/Wait 3s/)).toBeTruthy()
    })

    it('re-enables buttons when attempts drops below maxAttempts after cooldown', async () => {
      const { rerender } = render(
        <PinEntry {...defaultProps} attempts={3} maxAttempts={3} cooldownSeconds={2} />
      )

      expect(screen.getByLabelText('Digit 1').disabled).toBe(true)

      // Simulate parent resetting attempts (e.g., after user cancels and reopens)
      rerender(
        <PinEntry {...defaultProps} attempts={0} maxAttempts={3} cooldownSeconds={2} />
      )

      // Wait for cooldown interval to clear
      await act(async () => {
        vi.advanceTimersByTime(2000)
      })

      expect(screen.getByLabelText('Digit 1').disabled).toBe(false)
    })

    it('keyboard input is blocked during cooldown', () => {
      renderPinEntry({ attempts: 3, maxAttempts: 3, cooldownSeconds: 30 })

      fireEvent.keyDown(window, { key: '1' })
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '0 of 4 digits entered'
      )
    })
  })

  // ── isVerifying state ─────────────────────────────────────────────────

  describe('verifying state', () => {
    it('shows "Checking..." while verifying', () => {
      renderPinEntry({ isVerifying: true })
      expect(screen.getByText('Checking...')).toBeTruthy()
    })

    it('disables digit buttons while verifying', () => {
      renderPinEntry({ isVerifying: true })
      expect(screen.getByLabelText('Digit 1').disabled).toBe(true)
    })

    it('ignores keyboard input while verifying', () => {
      renderPinEntry({ isVerifying: true })

      fireEvent.keyDown(window, { key: '1' })
      expect(screen.getByRole('status').getAttribute('aria-label')).toBe(
        '0 of 4 digits entered'
      )
    })
  })

  // ── Accessibility ─────────────────────────────────────────────────────

  describe('accessibility', () => {
    it('dots container has role="status" and aria-live="polite"', () => {
      renderPinEntry()
      const status = screen.getByRole('status')
      expect(status.getAttribute('aria-live')).toBe('polite')
    })

    it('error message has role="alert"', () => {
      renderPinEntry({ error: 'Bad PIN' })
      const alert = screen.getByRole('alert')
      expect(alert.textContent).toBe('Bad PIN')
    })

    it('individual dots are aria-hidden', () => {
      const { container } = renderPinEntry()
      const dots = container.querySelectorAll('[aria-hidden="true"]')
      // 4 dots + the avatar emoji could be hidden; filter to only dot elements
      expect(dots.length).toBeGreaterThanOrEqual(4)
    })

    it('contains motion-reduce classes for reduced motion support', () => {
      const { container } = renderPinEntry()
      const hasMotionReduce = container.innerHTML.includes('motion-reduce:')
      expect(hasMotionReduce).toBe(true)
    })
  })

  // ── Cleanup ───────────────────────────────────────────────────────────

  describe('cleanup', () => {
    it('removes keyboard listener on unmount', () => {
      const onCancel = vi.fn()
      const { unmount } = renderPinEntry({ onCancel })

      unmount()

      fireEvent.keyDown(window, { key: 'Escape' })
      expect(onCancel).not.toHaveBeenCalled()
    })
  })
})
