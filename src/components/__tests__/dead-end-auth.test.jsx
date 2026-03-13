/**
 * @vitest-environment happy-dom
 *
 * Tests for sub-issue #125: dead-end states and auth error flow.
 *
 * Covers:
 * - GameScreen shows "Go Back" button after 10s of no interaction
 * - GameScreen resets timeout when a new problem is presented
 * - Auth error shows translated message (not raw Firebase error string)
 * - "Play Anyway" dismisses the error and navigates to the game screen
 * - Error page does not reappear after dismissal
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup, waitFor } from '@testing-library/react'
import { createElement } from 'react'

// ── Mock state objects (mutated by tests) ─────────────────────────────────────

const mockGameState = {
  currentProblem: { num1: 3, num2: 2, operator: '+', correctAnswer: 5, options: [3, 4, 5, 6] },
  score: 0,
  streak: 0,
  bestStreak: 0,
  showFeedback: false,
  isCorrect: false,
  handleAnswer: vi.fn(),
  startGame: vi.fn(),
  isPlaying: true,
  totalProblems: 0,
  correctAnswers: 0,
  accuracy: 0,
  isStruggling: false,
  shouldLevelUp: false,
}

const mockFirebase = {
  user: { uid: 'test-uid' },
  loading: false,
  error: null,
}

const mockProfileContext = {
  activeProfile: {
    id: '1',
    nickname: 'Dubi',
    firebaseUid: 'uid-1',
    currentLevel: 1,
  },
  isLoading: false,
  clearActiveProfile: vi.fn(),
  createAndActivate: vi.fn(),
  updateProfile: vi.fn(),
}

// ── Module mocks ──────────────────────────────────────────────────────────────

vi.mock('../../config/levels', () => ({
  MAX_LEVEL: 13,
}))

vi.mock('../../context/useProfile', () => ({
  useProfile: () => mockProfileContext,
}))

vi.mock('../../hooks', () => ({
  useGameState: () => mockGameState,
  useFirebase: () => mockFirebase,
  useGameProgress: () => ({
    progress: { score: 0, streak: 0, totalProblems: 0, correctAnswers: 0 },
    updateProgress: vi.fn(),
    forceSave: vi.fn(),
    loading: false,
  }),
}))

// GameScreen imports child components from '../index' (i.e. src/components/index).
// App imports the same barrel as '../../components' from App.jsx's location.
// Both paths resolve to the same module, so one vi.mock covers both.
vi.mock('../index', () => ({
  // GameScreen children
  Problem: ({ num1, num2, operator }) =>
    createElement('div', { 'data-testid': 'problem' }, `${num1} ${operator} ${num2}`),
  AnswerButtons: ({ options, onAnswer, disabled }) =>
    createElement(
      'div',
      { 'data-testid': 'answer-buttons' },
      options.map((opt) =>
        createElement('button', {
          key: opt,
          'data-testid': `answer-${opt}`,
          onClick: () => onAnswer(opt),
          disabled,
        }, opt)
      )
    ),
  ScoreDisplay: ({ score, streak }) =>
    createElement('div', { 'data-testid': 'score-display' }, `Score: ${score} Streak: ${streak}`),
  Feedback: ({ isCorrect }) =>
    createElement('div', { 'data-testid': 'feedback' }, isCorrect ? 'Correct!' : 'Wrong!'),
  // App-level screen stubs (App imports this same barrel as '../../components')
  StartScreen: () => createElement('div', { 'data-testid': 'start-screen' }),
  GameScreen: ({ onGameEnd }) =>
    createElement(
      'div',
      { 'data-testid': 'game-screen' },
      createElement('button', { 'data-testid': 'exit-game', onClick: () => onGameEnd(null) }, 'Exit'),
    ),
  ResultScreen: () => createElement('div', { 'data-testid': 'result-screen' }),
  LevelUpScreen: () => createElement('div', { 'data-testid': 'levelup-screen' }),
  ProfileSwitcher: () => createElement('div', { 'data-testid': 'profile-switcher' }),
  CreateProfile: () => createElement('div', { 'data-testid': 'create-profile-wizard' }),
}))

vi.mock('../aids', () => ({
  LearningAid: () => createElement('div', { 'data-testid': 'learning-aid' }),
}))

// ── Import components after all mocks are registered ─────────────────────────

const { default: GameScreen } = await import('../GameScreen')
const { default: App } = await import('../../App')

// ── Default props for GameScreen ──────────────────────────────────────────────

// Use a very short timeout (50ms) to avoid fake timer complexity.
// This tests the behavior without caring about the exact 10s duration.
const STUCK_TIMEOUT_TEST_MS = 50

const defaultGameScreenProps = {
  onGameEnd: vi.fn(),
  updateProgress: vi.fn(),
  initialProgress: null,
  currentLevel: 1,
  onLevelUp: vi.fn(),
  stuckTimeoutMs: STUCK_TIMEOUT_TEST_MS,
}

// ── Suite: GameScreen timeout (dead-end fix) ──────────────────────────────────

describe('GameScreen timeout dead-end fix', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'] })
    mockGameState.currentProblem = { num1: 3, num2: 2, operator: '+', correctAnswer: 5, options: [3, 4, 5, 6] }
    mockGameState.score = 0
    mockGameState.streak = 0
    mockGameState.bestStreak = 0
    mockGameState.showFeedback = false
    mockGameState.isCorrect = false
    mockGameState.isPlaying = true
    mockGameState.totalProblems = 0
    mockGameState.correctAnswers = 0
    mockGameState.accuracy = 0
    mockGameState.isStruggling = false
    mockGameState.shouldLevelUp = false
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('does NOT show "Go Back" button before the timeout', () => {
    render(<GameScreen {...defaultGameScreenProps} />)

    act(() => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS - 1)
    })

    expect(screen.queryByTestId('go-back-button')).toBeNull()
    expect(screen.queryByTestId('stuck-banner')).toBeNull()
  })

  it('shows "Go Back" button after the timeout with no interaction', async () => {
    render(<GameScreen {...defaultGameScreenProps} />)

    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS)
    })

    expect(screen.getByTestId('go-back-button')).toBeTruthy()
    expect(screen.getByTestId('stuck-banner')).toBeTruthy()
  })

  it('shows stuck message text alongside the "Go Back" button', async () => {
    render(<GameScreen {...defaultGameScreenProps} />)

    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS)
    })

    expect(screen.getByText('Having trouble?')).toBeTruthy()
    expect(screen.getByText('Go Back')).toBeTruthy()
  })

  it('calls onGameEnd(null) when "Go Back" button is clicked', async () => {
    const onGameEnd = vi.fn()
    render(<GameScreen {...defaultGameScreenProps} onGameEnd={onGameEnd} />)

    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS)
    })

    fireEvent.click(screen.getByTestId('go-back-button'))
    expect(onGameEnd).toHaveBeenCalledTimes(1)
    expect(onGameEnd).toHaveBeenCalledWith(null)
  })

  it('resets timeout (hides stuck banner) when a new problem is shown', async () => {
    const { rerender } = render(<GameScreen {...defaultGameScreenProps} />)

    // Advance partway through the timeout
    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS - 10)
    })

    // Simulate a new problem arriving by changing totalProblems
    mockGameState.totalProblems = 1
    rerender(<GameScreen {...defaultGameScreenProps} />)

    // Advance only partway through the fresh timer — should NOT show stuck
    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS - 10)
    })

    // Stuck banner should NOT be visible (timer was reset)
    expect(screen.queryByTestId('stuck-banner')).toBeNull()
  })

  it('shows stuck banner again after full timeout from last problem reset', async () => {
    const { rerender } = render(<GameScreen {...defaultGameScreenProps} />)

    // Advance partway, then a new problem arrives
    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS - 10)
    })
    mockGameState.totalProblems = 1
    rerender(<GameScreen {...defaultGameScreenProps} />)

    // Advance full timeout from reset point
    await act(async () => {
      vi.advanceTimersByTime(STUCK_TIMEOUT_TEST_MS)
    })

    expect(screen.getByTestId('stuck-banner')).toBeTruthy()
  })
})

// ── Suite: Auth error mapping ─────────────────────────────────────────────────

describe('auth error mapping and Play Anyway fix', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
    mockFirebase.user = { uid: 'test-uid' }
    mockFirebase.loading = false
    mockFirebase.error = null
    mockProfileContext.activeProfile = {
      id: '1',
      nickname: 'Dubi',
      firebaseUid: 'uid-1',
      currentLevel: 1,
    }
    mockProfileContext.isLoading = false
  })

  it('shows translated message for network error (not raw Firebase string)', () => {
    mockFirebase.error = {
      message: 'Firebase: Error (auth/network-request-failed).',
      code: 'auth/network-request-failed',
    }
    render(<App />)

    expect(screen.getByText('No internet connection')).toBeTruthy()
    expect(screen.queryByText('Firebase: Error (auth/network-request-failed).')).toBeNull()
  })

  it('shows translated message for too-many-requests error', () => {
    mockFirebase.error = {
      message: 'Firebase: Too many requests.',
      code: 'auth/too-many-requests',
    }
    render(<App />)

    expect(screen.getByText('Too many attempts, try again later')).toBeTruthy()
  })

  it('shows translated message for internal error', () => {
    mockFirebase.error = {
      message: 'Firebase: Internal error.',
      code: 'auth/internal-error',
    }
    render(<App />)

    expect(screen.getByText('Something went wrong')).toBeTruthy()
  })

  it('shows generic translated message for unknown error code', () => {
    mockFirebase.error = {
      message: 'Some unexpected Firebase error.',
      code: 'auth/unknown-code',
    }
    render(<App />)

    expect(screen.getByText('Connection error')).toBeTruthy()
    expect(screen.queryByText('Some unexpected Firebase error.')).toBeNull()
  })

  it('shows generic translated message when error has no code', () => {
    mockFirebase.error = {
      message: 'Unknown error',
    }
    render(<App />)

    expect(screen.getByText('Connection error')).toBeTruthy()
  })

  it('"Play Anyway" button navigates to the game screen', () => {
    mockFirebase.error = {
      message: 'Firebase: Error (auth/network-request-failed).',
      code: 'auth/network-request-failed',
    }
    render(<App />)

    expect(screen.getByText('Play Anyway!')).toBeTruthy()
    fireEvent.click(screen.getByText('Play Anyway!'))

    expect(screen.getByTestId('game-screen')).toBeTruthy()
  })

  it('error page does NOT reappear after "Play Anyway" is clicked', () => {
    mockFirebase.error = {
      message: 'Firebase: Error (auth/network-request-failed).',
      code: 'auth/network-request-failed',
    }
    render(<App />)

    fireEvent.click(screen.getByText('Play Anyway!'))

    // Auth error screen should be gone
    expect(screen.queryByText('Oops!')).toBeNull()
    expect(screen.queryByText('Play Anyway!')).toBeNull()

    // Game screen should be present
    expect(screen.getByTestId('game-screen')).toBeTruthy()
  })

  it('game screen stays accessible after dismissal even though authError is still set', () => {
    mockFirebase.error = {
      message: 'Firebase: Internal error.',
      code: 'auth/internal-error',
    }
    render(<App />)

    // Dismiss error
    fireEvent.click(screen.getByText('Play Anyway!'))
    expect(screen.getByTestId('game-screen')).toBeTruthy()

    // Exiting the game should go to start screen, not error screen
    fireEvent.click(screen.getByTestId('exit-game'))
    expect(screen.getByTestId('start-screen')).toBeTruthy()
    expect(screen.queryByText('Oops!')).toBeNull()
  })
})
