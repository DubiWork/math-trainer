/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, within, cleanup } from '@testing-library/react'
import { createElement } from 'react'

// ─── Mock useProfile hook ─────────────────────────────────────────────────────

const mockUseProfile = {
  profiles: [],
  selectProfile: vi.fn(async () => true),
  maxProfiles: 4,
}

vi.mock('../context/useProfile', () => ({
  useProfile: () => mockUseProfile,
}))

vi.mock('../context/profileReducer', () => ({
  MAX_PIN_ATTEMPTS: 3,
  COOLDOWN_SECONDS: 30,
}))

// Import after mocks
const { default: ProfileSwitcher } = await import('./ProfileSwitcher')

// ─── Helpers ──────────────────────────────────────────────────────────────────

const VALID_PIN_HASH = 'a'.repeat(64)

function makeProfile(overrides = {}) {
  return {
    id: `profile-${Math.random().toString(36).slice(2, 8)}`,
    nickname: 'TestHero',
    theme: 'sonic',
    pinHash: VALID_PIN_HASH,
    firebaseUid: null,
    currentLevel: 1,
    createdAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
    ...overrides,
  }
}

function renderSwitcher(props = {}) {
  const defaultProps = {
    onCreateProfile: vi.fn(),
    onProfileActivated: vi.fn(),
  }
  return { ...render(<ProfileSwitcher {...defaultProps} {...props} />), defaultProps }
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('ProfileSwitcher', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    mockUseProfile.profiles = []
    mockUseProfile.selectProfile = vi.fn(async () => true)
    mockUseProfile.maxProfiles = 4
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  // ── Zero profiles (empty state) ───────────────────────────────────────

  describe('zero profiles', () => {
    it('shows welcome message when no profiles exist', () => {
      mockUseProfile.profiles = []
      renderSwitcher()

      expect(screen.getByText('Welcome to Math Trainer!')).toBeTruthy()
      expect(screen.getByText('Create your first hero to start playing!')).toBeTruthy()
    })

    it('shows "Create Hero" button in empty state', () => {
      mockUseProfile.profiles = []
      renderSwitcher()

      expect(screen.getByText(/\+ Create Hero/)).toBeTruthy()
    })

    it('calls onCreateProfile when "Create Hero" button is clicked', () => {
      mockUseProfile.profiles = []
      const onCreateProfile = vi.fn()
      renderSwitcher({ onCreateProfile })

      fireEvent.click(screen.getByLabelText('Create your first hero profile'))
      expect(onCreateProfile).toHaveBeenCalledTimes(1)
    })

    it('does not show "Who\'s playing?" heading in zero-profile state', () => {
      mockUseProfile.profiles = []
      renderSwitcher()

      expect(screen.queryByText("Who's playing?")).toBeNull()
    })
  })

  // ── Rendering profile cards ───────────────────────────────────────────

  describe('profile cards', () => {
    it('renders a card for each profile', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi' }),
        makeProfile({ id: 'p2', nickname: 'Shai' }),
      ]
      renderSwitcher()

      expect(screen.getByText('Dubi')).toBeTruthy()
      expect(screen.getByText('Shai')).toBeTruthy()
    })

    it('shows "Who\'s playing?" heading when profiles exist', () => {
      mockUseProfile.profiles = [makeProfile()]
      renderSwitcher()

      // Component uses &apos; which renders as the right single quote
      expect(screen.getByText(/Who.*s playing/)).toBeTruthy()
    })

    it('displays level badge on each card', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi', currentLevel: 3 }),
      ]
      renderSwitcher()

      expect(screen.getByText('Level 3')).toBeTruthy()
    })

    it('card has correct aria-label with nickname and level', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi', currentLevel: 5 }),
      ]
      renderSwitcher()

      expect(screen.getByLabelText('Select Dubi, Level 5')).toBeTruthy()
    })

    it('shows hedgehog emoji for sonic theme', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', theme: 'sonic' }),
      ]
      const { container } = renderSwitcher()

      // Hedgehog emoji: U+1F994
      expect(container.textContent).toContain('\u{1F994}')
    })

    it('shows spider emoji for spiderman theme', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', theme: 'spiderman' }),
      ]
      const { container } = renderSwitcher()

      // Spider emoji: U+1F577
      expect(container.textContent).toContain('\u{1F577}')
    })

    it('falls back to first letter for unknown theme', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', theme: 'batman', nickname: 'Bruce' }),
      ]
      const { container } = renderSwitcher()

      expect(container.textContent).toContain('B')
    })
  })

  // ── Add Hero card ─────────────────────────────────────────────────────

  describe('Add Hero card', () => {
    it('shows "Add Hero" when under max profiles', () => {
      mockUseProfile.profiles = [makeProfile()]
      mockUseProfile.maxProfiles = 4
      renderSwitcher()

      expect(screen.getByText('Add Hero')).toBeTruthy()
    })

    it('hides "Add Hero" when at max profiles', () => {
      mockUseProfile.profiles = Array.from({ length: 4 }, (_, i) =>
        makeProfile({ id: `p${i}`, nickname: `P${i}` })
      )
      mockUseProfile.maxProfiles = 4
      renderSwitcher()

      expect(screen.queryByText('Add Hero')).toBeNull()
    })

    it('calls onCreateProfile when "Add Hero" is clicked', () => {
      mockUseProfile.profiles = [makeProfile()]
      const onCreateProfile = vi.fn()
      renderSwitcher({ onCreateProfile })

      fireEvent.click(screen.getByLabelText('Create a new hero profile'))
      expect(onCreateProfile).toHaveBeenCalledTimes(1)
    })
  })

  // ── Card tap opens PinEntry ───────────────────────────────────────────

  describe('PIN verification flow', () => {
    it('opens PinEntry overlay when a profile card is tapped', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi' }),
      ]
      renderSwitcher()

      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))

      // PinEntry dialog should appear
      expect(screen.getByRole('dialog')).toBeTruthy()
      expect(screen.getByText('Enter PIN')).toBeTruthy()
    })

    it('shows profile name in the PinEntry overlay', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi' }),
      ]
      renderSwitcher()

      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))

      // The PinEntry should display the profile name
      const dialog = screen.getByRole('dialog')
      expect(within(dialog).getByText('Dubi')).toBeTruthy()
    })

    it('closes PinEntry when cancel is clicked', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi' }),
      ]
      renderSwitcher()

      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))
      expect(screen.getByRole('dialog')).toBeTruthy()

      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))
      expect(screen.queryByRole('dialog')).toBeNull()
    })

    it('calls selectProfile on PIN submit and closes overlay on success', async () => {
      const profile = makeProfile({ id: 'p1', nickname: 'Dubi' })
      mockUseProfile.profiles = [profile]
      mockUseProfile.selectProfile = vi.fn(async () => true)

      renderSwitcher()

      // Open PinEntry
      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))

      // Enter 4 digits
      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      fireEvent.click(screen.getByLabelText('Digit 3'))
      fireEvent.click(screen.getByLabelText('Digit 4'))

      // Wait for deferred submit
      await act(async () => {
        vi.runAllTimers()
      })

      // Wait for async selectProfile
      await act(async () => {
        await Promise.resolve()
      })

      expect(mockUseProfile.selectProfile).toHaveBeenCalled()
      // PinEntry should be closed after successful verification
      expect(screen.queryByRole('dialog')).toBeNull()
    })

    it('shows error message on wrong PIN', async () => {
      const profile = makeProfile({ id: 'p1', nickname: 'Dubi' })
      mockUseProfile.profiles = [profile]
      mockUseProfile.selectProfile = vi.fn(async () => false)

      renderSwitcher()

      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))

      // Enter wrong PIN
      fireEvent.click(screen.getByLabelText('Digit 0'))
      fireEvent.click(screen.getByLabelText('Digit 0'))
      fireEvent.click(screen.getByLabelText('Digit 0'))
      fireEvent.click(screen.getByLabelText('Digit 0'))

      await act(async () => {
        vi.runAllTimers()
      })

      await act(async () => {
        await Promise.resolve()
      })

      expect(screen.getByText('Oops! Wrong PIN. Try again.')).toBeTruthy()
    })

    it('calls onProfileActivated after successful PIN verification', async () => {
      const profile = makeProfile({ id: 'p1', nickname: 'Dubi' })
      mockUseProfile.profiles = [profile]
      mockUseProfile.selectProfile = vi.fn(async () => true)
      const onProfileActivated = vi.fn()

      renderSwitcher({ onProfileActivated })

      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))

      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      fireEvent.click(screen.getByLabelText('Digit 3'))
      fireEvent.click(screen.getByLabelText('Digit 4'))

      await act(async () => {
        vi.runAllTimers()
      })
      await act(async () => {
        await Promise.resolve()
      })

      expect(onProfileActivated).toHaveBeenCalledTimes(1)
    })

    it('resets attempts when opening PinEntry for a new profile', () => {
      mockUseProfile.profiles = [
        makeProfile({ id: 'p1', nickname: 'Dubi' }),
        makeProfile({ id: 'p2', nickname: 'Shai' }),
      ]
      renderSwitcher()

      // Open first profile
      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))
      expect(screen.getByRole('dialog')).toBeTruthy()

      // Cancel
      fireEvent.click(screen.getByLabelText('Cancel PIN entry'))

      // Open second profile
      fireEvent.click(screen.getByLabelText('Select Shai, Level 1'))
      expect(screen.getByRole('dialog')).toBeTruthy()

      // Should show Shai's name
      const dialog = screen.getByRole('dialog')
      expect(within(dialog).getByText('Shai')).toBeTruthy()
    })
  })

  // ── Error handling ────────────────────────────────────────────────────

  describe('error handling', () => {
    it('shows generic error when selectProfile throws', async () => {
      const profile = makeProfile({ id: 'p1', nickname: 'Dubi' })
      mockUseProfile.profiles = [profile]
      mockUseProfile.selectProfile = vi.fn(async () => {
        throw new Error('Network error')
      })

      renderSwitcher()

      fireEvent.click(screen.getByLabelText('Select Dubi, Level 1'))

      fireEvent.click(screen.getByLabelText('Digit 1'))
      fireEvent.click(screen.getByLabelText('Digit 2'))
      fireEvent.click(screen.getByLabelText('Digit 3'))
      fireEvent.click(screen.getByLabelText('Digit 4'))

      await act(async () => {
        vi.runAllTimers()
      })
      await act(async () => {
        await Promise.resolve()
      })

      expect(screen.getByText('Something went wrong. Try again.')).toBeTruthy()
    })
  })
})
