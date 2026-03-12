/**
 * useConfidence Hook
 *
 * Adaptive confidence scoring engine for Math Trainer.
 * Tracks player performance and determines when to level up or provide help.
 *
 * Uses useReducer to prevent stale closures — threshold checks always
 * see the latest state, not a captured snapshot.
 *
 * @param {number} [initialScore] - Starting score (default: 50, range 0-100)
 * @returns {Object} Confidence state and control functions
 */

import { useReducer, useCallback } from 'react'

// --- Scoring Constants ---
export const CORRECT_DELTA = 8
export const WRONG_DELTA = -12
export const FAST_BONUS = 3
export const SLOW_WRONG_DELTA = -8
export const FAST_THRESHOLD_MS = 3000
export const SLOW_THRESHOLD_MS = 10000
export const STREAK_2_MULTIPLIER = 1.3
export const STREAK_5_MULTIPLIER = 1.6
export const STRUGGLING_THRESHOLD = 35
export const CRITICAL_THRESHOLD = 20
export const CRITICAL_CONSECUTIVE_WRONG = 5
export const LEVEL_UP_THRESHOLD = 85
export const LEVEL_UP_CONSECUTIVE_CORRECT = 5
export const DEFAULT_INITIAL_SCORE = 50

// --- Action Types ---
const RECORD_ANSWER = 'RECORD_ANSWER'
const ACKNOWLEDGE_LEVEL_UP = 'ACKNOWLEDGE_LEVEL_UP'
const RESET = 'RESET'

/**
 * Clamp a value between 0 and 100 and round to integer.
 * @param {number} value
 * @returns {number}
 */
function clampScore(value) {
  return Math.min(100, Math.max(0, Math.round(value)))
}

/**
 * Calculate the raw delta for a correct answer including fast bonus.
 * @param {number} responseTimeMs
 * @returns {number}
 */
function calculateCorrectDelta(responseTimeMs) {
  let delta = CORRECT_DELTA
  if (responseTimeMs < FAST_THRESHOLD_MS) {
    delta += FAST_BONUS
  }
  return delta
}

/**
 * Calculate the raw delta for a wrong answer.
 * Slow wrong answers get a reduced penalty.
 * @param {number} responseTimeMs
 * @returns {number}
 */
function calculateWrongDelta(responseTimeMs) {
  if (responseTimeMs > SLOW_THRESHOLD_MS) {
    return SLOW_WRONG_DELTA
  }
  return WRONG_DELTA
}

/**
 * Apply streak multiplier to the delta.
 * The multiplier applies on the Nth correct answer itself.
 * @param {number} delta - Raw score delta
 * @param {number} streak - Current streak count (already incremented)
 * @returns {number}
 */
function applyStreakMultiplier(delta, streak) {
  if (streak >= 5) {
    return delta * STREAK_5_MULTIPLIER
  }
  if (streak >= 2) {
    return delta * STREAK_2_MULTIPLIER
  }
  return delta
}

/**
 * Create default state for the confidence reducer.
 * @param {number} initialScore
 * @returns {Object}
 */
function createInitialState(initialScore) {
  const score = clampScore(initialScore ?? DEFAULT_INITIAL_SCORE)
  return {
    score,
    streak: 0,
    consecutiveWrong: 0,
    shouldLevelUp: false,
    lastDelta: 0,
  }
}

/**
 * Confidence reducer — all state transitions in one place.
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
function confidenceReducer(state, action) {
  switch (action.type) {
    case RECORD_ANSWER: {
      const { isCorrect, responseTimeMs } = action.payload

      if (isCorrect) {
        const newStreak = state.streak + 1
        const rawDelta = calculateCorrectDelta(responseTimeMs)
        const multipliedDelta = applyStreakMultiplier(rawDelta, newStreak)
        const delta = Math.round(multipliedDelta)
        const newScore = clampScore(state.score + delta)

        const meetsLevelUp =
          newScore >= LEVEL_UP_THRESHOLD &&
          newStreak >= LEVEL_UP_CONSECUTIVE_CORRECT

        return {
          score: newScore,
          streak: newStreak,
          consecutiveWrong: 0,
          shouldLevelUp: state.shouldLevelUp || meetsLevelUp,
          lastDelta: delta,
        }
      }

      // Wrong answer
      const delta = calculateWrongDelta(responseTimeMs)
      const newScore = clampScore(state.score + delta)
      const newConsecutiveWrong = state.consecutiveWrong + 1

      return {
        score: newScore,
        streak: 0,
        consecutiveWrong: newConsecutiveWrong,
        shouldLevelUp: state.shouldLevelUp,
        lastDelta: delta,
      }
    }

    case ACKNOWLEDGE_LEVEL_UP: {
      return {
        ...state,
        shouldLevelUp: false,
      }
    }

    case RESET: {
      return createInitialState(action.payload)
    }

    default:
      return state
  }
}

/**
 * Custom hook for adaptive confidence scoring.
 *
 * @param {number} [initialScore] - Starting score (default: 50)
 * @returns {Object} Confidence state and control functions
 * @returns {number} returns.score - Current confidence score (0-100)
 * @returns {number} returns.streak - Consecutive correct answers
 * @returns {number} returns.consecutiveWrong - Consecutive wrong answers
 * @returns {boolean} returns.isStruggling - True when score < 35
 * @returns {boolean} returns.isCritical - True when score < 20 AND consecutiveWrong >= 5
 * @returns {boolean} returns.shouldLevelUp - True when score >= 85 AND streak >= 5 (sticky)
 * @returns {number} returns.lastDelta - Last score change for UI animations
 * @returns {Function} returns.recordAnswer - (isCorrect, responseTimeMs) => void
 * @returns {Function} returns.acknowledgeLevelUp - () => void
 * @returns {Function} returns.reset - (newScore?) => void
 */
export function useConfidence(initialScore) {
  const [state, dispatch] = useReducer(
    confidenceReducer,
    initialScore,
    createInitialState
  )

  const recordAnswer = useCallback((isCorrect, responseTimeMs) => {
    dispatch({
      type: RECORD_ANSWER,
      payload: { isCorrect, responseTimeMs },
    })
  }, [])

  const acknowledgeLevelUp = useCallback(() => {
    dispatch({ type: ACKNOWLEDGE_LEVEL_UP })
  }, [])

  const reset = useCallback((newScore) => {
    dispatch({ type: RESET, payload: newScore })
  }, [])

  // Derived flags (computed from reducer state)
  const isStruggling = state.score < STRUGGLING_THRESHOLD
  const isCritical =
    state.score < CRITICAL_THRESHOLD &&
    state.consecutiveWrong >= CRITICAL_CONSECUTIVE_WRONG

  return {
    // State
    score: state.score,
    streak: state.streak,
    consecutiveWrong: state.consecutiveWrong,
    isStruggling,
    isCritical,
    shouldLevelUp: state.shouldLevelUp,
    lastDelta: state.lastDelta,

    // Actions
    recordAnswer,
    acknowledgeLevelUp,
    reset,
  }
}

export default useConfidence
