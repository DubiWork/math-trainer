/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import { createElement } from 'react'

// ─── Mocks ────────────────────────────────────────────────────────────────────

// Mock useGameState hook with controllable state
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

vi.mock('../hooks', () => ({
  useGameState: () => mockGameState,
}))

// Mock child components (Problem, AnswerButtons, ScoreDisplay, Feedback)
vi.mock('./index', () => ({
  Problem: ({ num1, num2, operator }) =>
    createElement('div', { 'data-testid': 'problem' }, `${num1} ${operator} ${num2}`),
  AnswerButtons: ({ options, onAnswer, disabled }) =>
    createElement('div', { 'data-testid': 'answer-buttons' },
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
}))

// Mock LearningAid
vi.mock('./aids', () => ({
  LearningAid: () => createElement('div', { 'data-testid': 'learning-aid' }),
}))

// Import after mocks
const { default: GameScreen } = await import('./GameScreen')

describe('GameScreen', () => {
  const defaultProps = {
    onGameEnd: vi.fn(),
    updateProgress: vi.fn(),
    initialProgress: null,
    currentLevel: 1,
    onLevelUp: vi.fn(),
  }

  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
    // Reset mock state to defaults
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

  // ── Basic rendering ────────────────────────────────────────────────

  describe('basic rendering', () => {
    it('renders the game screen with problem and answers', () => {
      render(<GameScreen {...defaultProps} />)
      expect(screen.getByTestId('problem')).toBeTruthy()
      expect(screen.getByTestId('answer-buttons')).toBeTruthy()
    })

    it('renders exit button', () => {
      render(<GameScreen {...defaultProps} />)
      expect(screen.getByLabelText('Exit game and return to start screen')).toBeTruthy()
    })

    it('calls startGame when not playing', () => {
      mockGameState.isPlaying = false
      render(<GameScreen {...defaultProps} />)
      expect(mockGameState.startGame).toHaveBeenCalledTimes(1)
    })
  })

  // ── shouldLevelUp detection ────────────────────────────────────────

  describe('shouldLevelUp detection', () => {
    it('calls onLevelUp when shouldLevelUp is true and showFeedback is false', () => {
      mockGameState.shouldLevelUp = true
      mockGameState.showFeedback = false

      render(<GameScreen {...defaultProps} currentLevel={3} />)

      expect(defaultProps.onLevelUp).toHaveBeenCalledTimes(1)
      expect(defaultProps.onLevelUp).toHaveBeenCalledWith(3)
    })

    it('does NOT call onLevelUp when shouldLevelUp is false', () => {
      mockGameState.shouldLevelUp = false
      mockGameState.showFeedback = false

      render(<GameScreen {...defaultProps} currentLevel={3} />)

      expect(defaultProps.onLevelUp).not.toHaveBeenCalled()
    })

    it('does NOT call onLevelUp when showFeedback is true (waiting for feedback to clear)', () => {
      mockGameState.shouldLevelUp = true
      mockGameState.showFeedback = true

      render(<GameScreen {...defaultProps} currentLevel={3} />)

      expect(defaultProps.onLevelUp).not.toHaveBeenCalled()
    })

    it('does NOT call onLevelUp when onLevelUp prop is not provided', () => {
      mockGameState.shouldLevelUp = true
      mockGameState.showFeedback = false

      // Should not throw
      render(<GameScreen {...defaultProps} onLevelUp={undefined} />)
    })
  })

  // ── Exit (onGameEnd) ──────────────────────────────────────────────

  describe('exit button', () => {
    it('calls onGameEnd with session stats when exit is clicked', () => {
      mockGameState.score = 50
      mockGameState.bestStreak = 3
      mockGameState.totalProblems = 10
      mockGameState.correctAnswers = 7
      mockGameState.accuracy = 70

      render(<GameScreen {...defaultProps} />)
      fireEvent.click(screen.getByLabelText('Exit game and return to start screen'))

      expect(defaultProps.onGameEnd).toHaveBeenCalledWith({
        score: 50,
        streak: 3,
        totalProblems: 10,
        correctAnswers: 7,
        accuracy: 70,
      })
    })
  })
})
