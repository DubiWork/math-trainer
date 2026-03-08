/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import { createElement } from 'react'

// ─── Mocks ────────────────────────────────────────────────────────────────────

// Mock useProfile hook
const mockProfileContext = {
  activeProfile: null,
  isLoading: false,
  clearActiveProfile: vi.fn(),
}

vi.mock('./context/useProfile', () => ({
  useProfile: () => mockProfileContext,
}))

// Mock useFirebase hook
const mockFirebase = {
  user: { uid: 'test-uid' },
  loading: false,
  error: null,
}

vi.mock('./hooks', () => ({
  useFirebase: () => mockFirebase,
  useGameProgress: () => ({
    progress: { score: 0, streak: 0, totalProblems: 0, correctAnswers: 0 },
    updateProgress: vi.fn(),
    forceSave: vi.fn(),
    loading: false,
  }),
}))

// Mock child components to isolate App logic
vi.mock('./components', () => ({
  StartScreen: ({ onStart, onSwitchProfile }) =>
    createElement('div', { 'data-testid': 'start-screen' },
      createElement('button', { 'data-testid': 'start-game', onClick: onStart }, 'Start'),
      createElement('button', { 'data-testid': 'switch-profile', onClick: onSwitchProfile }, 'Switch'),
    ),
  GameScreen: ({ onGameEnd }) =>
    createElement('div', { 'data-testid': 'game-screen' },
      createElement('button', {
        'data-testid': 'end-game',
        onClick: () => onGameEnd({ score: 10, streak: 3, totalProblems: 5, correctAnswers: 4 }),
      }, 'End Game'),
      createElement('button', {
        'data-testid': 'exit-game',
        onClick: () => onGameEnd(null),
      }, 'Exit'),
    ),
  ResultScreen: ({ onPlayAgain, onExit }) =>
    createElement('div', { 'data-testid': 'result-screen' },
      createElement('button', { 'data-testid': 'play-again', onClick: onPlayAgain }, 'Play Again'),
      createElement('button', { 'data-testid': 'exit-result', onClick: onExit }, 'Exit'),
    ),
  ProfileSwitcher: ({ onCreateProfile }) =>
    createElement('div', { 'data-testid': 'profile-switcher' },
      createElement('button', { 'data-testid': 'create-profile', onClick: onCreateProfile }, 'Create'),
    ),
}))

// Import after mocks
const { default: App } = await import('./App')

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('App', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
    mockProfileContext.activeProfile = null
    mockProfileContext.isLoading = false
    mockProfileContext.clearActiveProfile = vi.fn()
    mockFirebase.user = { uid: 'test-uid' }
    mockFirebase.loading = false
    mockFirebase.error = null
  })

  // ── Loading state ─────────────────────────────────────────────────────

  describe('loading state', () => {
    it('shows loading screen when profiles are loading', () => {
      mockProfileContext.isLoading = true
      render(<App />)
      expect(screen.getByText('Loading...')).toBeTruthy()
      expect(screen.getByText('Loading heroes...')).toBeTruthy()
    })

    it('shows loading screen when auth is loading', () => {
      mockProfileContext.activeProfile = { id: '1', nickname: 'D', firebaseUid: 'uid-1' }
      mockFirebase.loading = true
      render(<App />)
      expect(screen.getByText('Loading...')).toBeTruthy()
    })
  })

  // ── Profile-gated routing ─────────────────────────────────────────────

  describe('profile-gated routing', () => {
    it('shows ProfileSwitcher when no active profile', () => {
      mockProfileContext.activeProfile = null
      render(<App />)
      expect(screen.getByTestId('profile-switcher')).toBeTruthy()
    })

    it('shows StartScreen when active profile is set', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)
      expect(screen.getByTestId('start-screen')).toBeTruthy()
    })

    it('does not show game screens when no active profile', () => {
      mockProfileContext.activeProfile = null
      render(<App />)
      expect(screen.queryByTestId('start-screen')).toBeNull()
      expect(screen.queryByTestId('game-screen')).toBeNull()
      expect(screen.queryByTestId('result-screen')).toBeNull()
    })
  })

  // ── Profile switch flow ───────────────────────────────────────────────

  describe('profile switch flow', () => {
    it('calls clearActiveProfile when switch profile is clicked from start screen', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)

      fireEvent.click(screen.getByTestId('switch-profile'))
      expect(mockProfileContext.clearActiveProfile).toHaveBeenCalledTimes(1)
    })
  })

  // ── Game flow with active profile ─────────────────────────────────────

  describe('game flow preservation', () => {
    it('navigates from start to game screen', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      expect(screen.getByTestId('game-screen')).toBeTruthy()
    })

    it('navigates from game to result screen on game end', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)

      // Go to game
      fireEvent.click(screen.getByTestId('start-game'))
      // End game with stats
      fireEvent.click(screen.getByTestId('end-game'))

      expect(screen.getByTestId('result-screen')).toBeTruthy()
    })

    it('navigates from game back to start when exit is clicked (no stats)', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('exit-game'))

      expect(screen.getByTestId('start-screen')).toBeTruthy()
    })

    it('navigates from result back to game on play again', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('end-game'))
      fireEvent.click(screen.getByTestId('play-again'))

      expect(screen.getByTestId('game-screen')).toBeTruthy()
    })

    it('navigates from result back to start on exit', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('end-game'))
      fireEvent.click(screen.getByTestId('exit-result'))

      expect(screen.getByTestId('start-screen')).toBeTruthy()
    })
  })

  // ── handleCreateProfile ───────────────────────────────────────────────

  describe('handleCreateProfile', () => {
    it('does not crash when create profile is called (placeholder)', () => {
      mockProfileContext.activeProfile = null
      const spy = vi.spyOn(console, 'info').mockImplementation(() => {})
      render(<App />)

      fireEvent.click(screen.getByTestId('create-profile'))
      // Should log placeholder message
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining('Create profile flow not yet implemented')
      )
      spy.mockRestore()
    })
  })

  // ── Auth error state ──────────────────────────────────────────────────

  describe('auth error', () => {
    it('shows error screen when auth fails and profile is active', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      mockFirebase.error = { message: 'Auth failed' }
      render(<App />)

      expect(screen.getByText('Oops!')).toBeTruthy()
      expect(screen.getByText('Auth failed')).toBeTruthy()
    })

    it('offers "Play Anyway" button on auth error', () => {
      mockProfileContext.activeProfile = {
        id: '1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        currentLevel: 1,
      }
      mockFirebase.error = { message: 'Auth failed' }
      render(<App />)

      expect(screen.getByText('Play Anyway!')).toBeTruthy()
    })
  })
})
