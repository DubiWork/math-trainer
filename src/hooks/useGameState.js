/**
 * useGameState Hook
 *
 * Manages complete game state and logic for Math Trainer.
 * - Handles game flow (start, answer, feedback, next problem)
 * - Manages scoring and streak tracking
 * - Integrates with useGameProgress for Firestore persistence
 *
 * @param {Object} options - Hook options
 * @param {Function} options.updateProgress - Function from useGameProgress to persist data
 * @param {Object} options.initialProgress - Initial progress data from Firestore
 * @returns {Object} Game state and control functions
 */

import { useState, useCallback, useRef, useEffect } from 'react'
import { generateProblem, validateAnswer } from '../utils/mathProblems'

// Feedback display duration (ms)
const FEEDBACK_DURATION_MS = 2000

// Points awarded for correct answer
const POINTS_PER_CORRECT = 10

/**
 * Default game state
 */
const DEFAULT_GAME_STATE = {
  isPlaying: false,
  currentProblem: null,
  userAnswer: null,
  showFeedback: false,
  isCorrect: false,
  score: 0,
  streak: 0,
  bestStreak: 0,
  totalProblems: 0,
  correctAnswers: 0,
}

/**
 * Custom hook for managing game state
 *
 * @param {Object} options - Configuration options
 * @param {Function} options.updateProgress - Callback to persist progress to Firestore
 * @param {Object} options.initialProgress - Initial progress from Firestore
 * @returns {Object} Game state and control functions
 */
export function useGameState({ updateProgress, initialProgress } = {}) {
  // Initialize state with initial progress if available
  const [gameState, setGameState] = useState(() => ({
    ...DEFAULT_GAME_STATE,
    score: initialProgress?.score ?? 0,
    bestStreak: initialProgress?.streak ?? 0,
    totalProblems: initialProgress?.totalProblems ?? 0,
    correctAnswers: initialProgress?.correctAnswers ?? 0,
  }))

  // Track feedback timeout for cleanup
  const feedbackTimeoutRef = useRef(null)
  // Track if component is mounted
  const isMountedRef = useRef(true)

  // Cleanup on unmount
  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current)
      }
    }
  }, [])

  // Update state when initialProgress changes (e.g., after Firestore load)
  useEffect(() => {
    if (initialProgress && !gameState.isPlaying) {
      setGameState((prev) => ({
        ...prev,
        score: initialProgress.score ?? prev.score,
        bestStreak: initialProgress.streak ?? prev.bestStreak,
        totalProblems: initialProgress.totalProblems ?? prev.totalProblems,
        correctAnswers: initialProgress.correctAnswers ?? prev.correctAnswers,
      }))
    }
  }, [initialProgress, gameState.isPlaying])

  /**
   * Start a new game session
   * Generates first problem and sets isPlaying to true
   */
  const startGame = useCallback(() => {
    const firstProblem = generateProblem()

    setGameState((prev) => ({
      ...prev,
      isPlaying: true,
      currentProblem: firstProblem,
      userAnswer: null,
      showFeedback: false,
      isCorrect: false,
      score: 0, // Reset score for new session
      streak: 0, // Reset current streak on new game
    }))
  }, [])

  /**
   * Generate and display next problem
   * Called after feedback animation completes
   */
  const nextProblem = useCallback(() => {
    if (!isMountedRef.current) return

    const newProblem = generateProblem()

    setGameState((prev) => ({
      ...prev,
      currentProblem: newProblem,
      userAnswer: null,
      showFeedback: false,
      isCorrect: false,
    }))
  }, [])

  /**
   * Process user's answer
   * Updates score, streak, and triggers feedback display
   *
   * @param {number} answer - User's selected answer
   */
  const handleAnswer = useCallback(
    (answer) => {
      setGameState((prev) => {
        if (!prev.isPlaying || !prev.currentProblem || prev.showFeedback) {
          return prev
        }

        const isCorrect = validateAnswer(answer, prev.currentProblem.correctAnswer)

        // Calculate new values
        const newScore = isCorrect ? prev.score + POINTS_PER_CORRECT : prev.score
        const newStreak = isCorrect ? prev.streak + 1 : 0
        const newBestStreak = Math.max(prev.bestStreak, newStreak)
        const newTotalProblems = prev.totalProblems + 1
        const newCorrectAnswers = isCorrect
          ? prev.correctAnswers + 1
          : prev.correctAnswers

        // Persist progress to Firestore (debounced via useGameProgress)
        if (updateProgress) {
          updateProgress({
            score: newScore,
            streak: newBestStreak, // Firestore stores best streak
            currentStreak: newStreak,
            totalProblems: newTotalProblems,
            correctAnswers: newCorrectAnswers,
          })
        }

        return {
          ...prev,
          userAnswer: answer,
          showFeedback: true,
          isCorrect,
          score: newScore,
          streak: newStreak,
          bestStreak: newBestStreak,
          totalProblems: newTotalProblems,
          correctAnswers: newCorrectAnswers,
        }
      })

      // Clear any existing feedback timeout
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current)
      }

      // Auto-advance to next problem after feedback duration
      feedbackTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          nextProblem()
        }
      }, FEEDBACK_DURATION_MS)
    },
    [updateProgress, nextProblem]
  )

  /**
   * Reset game to initial state
   * Preserves persistent stats but clears current session
   */
  const resetGame = useCallback(() => {
    // Clear any pending feedback timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current)
    }

    setGameState((prev) => ({
      ...DEFAULT_GAME_STATE,
      // Preserve cumulative stats
      score: prev.score,
      bestStreak: prev.bestStreak,
      totalProblems: prev.totalProblems,
      correctAnswers: prev.correctAnswers,
    }))
  }, [])

  /**
   * Full reset - clears all stats (for "Start Over" functionality)
   * Should be called alongside resetProgress from useGameProgress
   */
  const fullReset = useCallback(() => {
    // Clear any pending feedback timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current)
    }

    setGameState(DEFAULT_GAME_STATE)
  }, [])

  /**
   * Calculate accuracy percentage
   * @returns {number} Accuracy as percentage (0-100)
   */
  const getAccuracy = useCallback(() => {
    if (gameState.totalProblems === 0) return 0
    return Math.round((gameState.correctAnswers / gameState.totalProblems) * 100)
  }, [gameState.totalProblems, gameState.correctAnswers])

  return {
    // State
    gameState,
    currentProblem: gameState.currentProblem,
    userAnswer: gameState.userAnswer,
    score: gameState.score,
    streak: gameState.streak,
    bestStreak: gameState.bestStreak,
    isPlaying: gameState.isPlaying,
    showFeedback: gameState.showFeedback,
    isCorrect: gameState.isCorrect,
    totalProblems: gameState.totalProblems,
    correctAnswers: gameState.correctAnswers,

    // Actions
    handleAnswer,
    startGame,
    nextProblem,
    resetGame,
    fullReset,

    // Computed
    accuracy: getAccuracy(),
  }
}

export default useGameState
