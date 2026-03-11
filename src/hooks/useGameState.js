/**
 * useGameState Hook
 *
 * Manages complete game state and logic for Math Trainer.
 * - Handles game flow (start, answer, feedback, next problem)
 * - Manages scoring and streak tracking
 * - Composes useConfidence for adaptive confidence scoring
 * - Integrates with useGameProgress for Firestore persistence
 *
 * @param {Object} options - Hook options
 * @param {number} options.currentLevel - Current difficulty level (default: 1, clamped 1-13)
 * @param {Function} options.updateProgress - Function from useGameProgress to persist data
 * @param {Object} options.initialProgress - Initial progress data from Firestore
 * @returns {Object} Game state and control functions
 */

import { useState, useCallback, useRef, useEffect } from 'react'
import { generateProblem, validateAnswer } from '../utils/mathProblems'
import { useConfidence } from './useConfidence'
import { getLevelConfig, LEVELS } from '../config/levels'

// Feedback display duration (ms)
const FEEDBACK_DURATION_MS = 2000

// Points awarded for correct answer
const POINTS_PER_CORRECT = 10

// Valid level range boundaries
const MIN_LEVEL = 1
const MAX_LEVEL = LEVELS.length

/**
 * Clamp a level value to the valid range [1, LEVELS.length].
 * @param {number} level
 * @returns {number}
 */
function clampLevel(level) {
  return Math.max(MIN_LEVEL, Math.min(MAX_LEVEL, Math.floor(level)))
}

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
 * @param {number} options.currentLevel - Difficulty level (default: 1). Clamped to 1-13.
 * @param {Function} options.updateProgress - Callback to persist progress to Firestore
 * @param {Object} options.initialProgress - Initial progress from Firestore
 * @returns {Object} Game state and control functions
 */
export function useGameState({ currentLevel = 1, updateProgress, initialProgress } = {}) {
  // Clamp to valid range so getLevelConfig never throws
  const safeLevel = clampLevel(currentLevel)

  // Compose confidence engine (unconditional — rules of hooks)
  const confidence = useConfidence()

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
  // Track problem start time for response time calculation
  const problemStartTimeRef = useRef(null)

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
    const firstProblem = generateProblem(getLevelConfig(safeLevel))

    confidence.reset()
    problemStartTimeRef.current = Date.now()

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
  }, [safeLevel, confidence])

  /**
   * Generate and display next problem
   * Called after feedback animation completes
   */
  const nextProblem = useCallback(() => {
    if (!isMountedRef.current) return

    const newProblem = generateProblem(getLevelConfig(safeLevel))

    problemStartTimeRef.current = Date.now()

    setGameState((prev) => ({
      ...prev,
      currentProblem: newProblem,
      userAnswer: null,
      showFeedback: false,
      isCorrect: false,
    }))
  }, [safeLevel])

  /**
   * Process user's answer
   * Updates score, streak, and triggers feedback display
   *
   * @param {number} answer - User's selected answer
   */
  const handleAnswer = useCallback(
    (answer) => {
      // Guard: read current snapshot to bail out early
      // (avoids scheduling a no-op setState and side-effects)
      const snap = gameState
      if (!snap.isPlaying || !snap.currentProblem || snap.showFeedback) {
        return
      }

      const isCorrect = validateAnswer(answer, snap.currentProblem.correctAnswer)

      // Record answer in confidence engine (outside setState updater)
      const responseTimeMs = Date.now() - problemStartTimeRef.current
      confidence.recordAnswer(isCorrect, responseTimeMs)

      setGameState((prev) => {
        // Calculate new values (local streak for bestStreak tracking)
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
    [gameState, updateProgress, nextProblem, confidence]
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

    confidence.reset()

    setGameState((prev) => ({
      ...DEFAULT_GAME_STATE,
      // Preserve cumulative stats
      score: prev.score,
      bestStreak: prev.bestStreak,
      totalProblems: prev.totalProblems,
      correctAnswers: prev.correctAnswers,
    }))
  }, [confidence])

  /**
   * Full reset - clears all stats (for "Start Over" functionality)
   * Should be called alongside resetProgress from useGameProgress
   */
  const fullReset = useCallback(() => {
    // Clear any pending feedback timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current)
    }

    confidence.reset()

    setGameState(DEFAULT_GAME_STATE)
  }, [confidence])

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
    streak: confidence.streak,           // from confidence (single source of truth)
    bestStreak: gameState.bestStreak,
    isPlaying: gameState.isPlaying,
    showFeedback: gameState.showFeedback,
    isCorrect: gameState.isCorrect,
    totalProblems: gameState.totalProblems,
    correctAnswers: gameState.correctAnswers,

    // Confidence state
    confidenceScore: confidence.score,
    isStruggling: confidence.isStruggling,
    isCritical: confidence.isCritical,
    shouldLevelUp: confidence.shouldLevelUp,
    lastDelta: confidence.lastDelta,
    consecutiveWrong: confidence.consecutiveWrong,
    acknowledgeLevelUp: confidence.acknowledgeLevelUp,

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
