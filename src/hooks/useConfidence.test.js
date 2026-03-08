/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import {
  useConfidence,
  CORRECT_DELTA,
  WRONG_DELTA,
  FAST_BONUS,
  SLOW_WRONG_DELTA,
  FAST_THRESHOLD_MS,
  SLOW_THRESHOLD_MS,
  STREAK_2_MULTIPLIER,
  STREAK_5_MULTIPLIER,
  STRUGGLING_THRESHOLD,
  CRITICAL_THRESHOLD,
  CRITICAL_CONSECUTIVE_WRONG,
  LEVEL_UP_THRESHOLD,
  LEVEL_UP_CONSECUTIVE_CORRECT,
  DEFAULT_INITIAL_SCORE,
} from './useConfidence'

// --- Helper: record N correct answers at normal speed ---
function recordCorrect(result, n = 1, timeMs = 5000) {
  for (let i = 0; i < n; i++) {
    act(() => {
      result.current.recordAnswer(true, timeMs)
    })
  }
}

// --- Helper: record N wrong answers at normal speed ---
function recordWrong(result, n = 1, timeMs = 5000) {
  for (let i = 0; i < n; i++) {
    act(() => {
      result.current.recordAnswer(false, timeMs)
    })
  }
}

// =============================================================
// Constants
// =============================================================
describe('useConfidence - exported constants', () => {
  it('should export all scoring constants with correct values', () => {
    expect(CORRECT_DELTA).toBe(8)
    expect(WRONG_DELTA).toBe(-12)
    expect(FAST_BONUS).toBe(3)
    expect(SLOW_WRONG_DELTA).toBe(-8)
    expect(FAST_THRESHOLD_MS).toBe(3000)
    expect(SLOW_THRESHOLD_MS).toBe(10000)
    expect(STREAK_2_MULTIPLIER).toBe(1.3)
    expect(STREAK_5_MULTIPLIER).toBe(1.6)
    expect(STRUGGLING_THRESHOLD).toBe(35)
    expect(CRITICAL_THRESHOLD).toBe(20)
    expect(CRITICAL_CONSECUTIVE_WRONG).toBe(5)
    expect(LEVEL_UP_THRESHOLD).toBe(85)
    expect(LEVEL_UP_CONSECUTIVE_CORRECT).toBe(3)
    expect(DEFAULT_INITIAL_SCORE).toBe(50)
  })
})

// =============================================================
// Initial State
// =============================================================
describe('useConfidence - initial state', () => {
  it('should default score to 50', () => {
    const { result } = renderHook(() => useConfidence())
    expect(result.current.score).toBe(DEFAULT_INITIAL_SCORE)
  })

  it('should accept a custom initial score', () => {
    const { result } = renderHook(() => useConfidence(75))
    expect(result.current.score).toBe(75)
  })

  it('should clamp initial score to 0-100', () => {
    const { result: low } = renderHook(() => useConfidence(-10))
    expect(low.current.score).toBe(0)

    const { result: high } = renderHook(() => useConfidence(120))
    expect(high.current.score).toBe(100)
  })

  it('should start with zero streak and consecutiveWrong', () => {
    const { result } = renderHook(() => useConfidence())
    expect(result.current.streak).toBe(0)
    expect(result.current.consecutiveWrong).toBe(0)
  })

  it('should start with shouldLevelUp false', () => {
    const { result } = renderHook(() => useConfidence())
    expect(result.current.shouldLevelUp).toBe(false)
  })

  it('should start with lastDelta 0', () => {
    const { result } = renderHook(() => useConfidence())
    expect(result.current.lastDelta).toBe(0)
  })

  it('should not be struggling at default score', () => {
    const { result } = renderHook(() => useConfidence())
    expect(result.current.isStruggling).toBe(false)
  })

  it('should not be critical at default score', () => {
    const { result } = renderHook(() => useConfidence())
    expect(result.current.isCritical).toBe(false)
  })
})

// =============================================================
// Correct Answers — Basic Scoring
// =============================================================
describe('useConfidence - correct answer scoring', () => {
  it('should add CORRECT_DELTA for a normal-speed correct answer', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordCorrect(result, 1, 5000)
    expect(result.current.score).toBe(50 + CORRECT_DELTA) // 58
    expect(result.current.lastDelta).toBe(CORRECT_DELTA)
  })

  it('should add CORRECT_DELTA + FAST_BONUS for fast correct (<3000ms)', () => {
    const { result } = renderHook(() => useConfidence(50))
    act(() => {
      result.current.recordAnswer(true, 2000)
    })
    expect(result.current.score).toBe(50 + CORRECT_DELTA + FAST_BONUS) // 61
    expect(result.current.lastDelta).toBe(CORRECT_DELTA + FAST_BONUS)
  })

  it('should NOT give fast bonus at exactly 3000ms', () => {
    const { result } = renderHook(() => useConfidence(50))
    act(() => {
      result.current.recordAnswer(true, 3000)
    })
    expect(result.current.score).toBe(50 + CORRECT_DELTA) // 58
  })

  it('should increment streak on correct answer', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordCorrect(result, 1)
    expect(result.current.streak).toBe(1)
    recordCorrect(result, 1)
    expect(result.current.streak).toBe(2)
  })

  it('should reset consecutiveWrong on correct answer', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordWrong(result, 3)
    expect(result.current.consecutiveWrong).toBe(3)
    recordCorrect(result, 1)
    expect(result.current.consecutiveWrong).toBe(0)
  })
})

// =============================================================
// Wrong Answers — Basic Scoring
// =============================================================
describe('useConfidence - wrong answer scoring', () => {
  it('should subtract WRONG_DELTA for a normal-speed wrong answer', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordWrong(result, 1, 5000)
    expect(result.current.score).toBe(50 + WRONG_DELTA) // 38
    expect(result.current.lastDelta).toBe(WRONG_DELTA)
  })

  it('should use SLOW_WRONG_DELTA for slow wrong (>10000ms)', () => {
    const { result } = renderHook(() => useConfidence(50))
    act(() => {
      result.current.recordAnswer(false, 11000)
    })
    expect(result.current.score).toBe(50 + SLOW_WRONG_DELTA) // 42
    expect(result.current.lastDelta).toBe(SLOW_WRONG_DELTA)
  })

  it('should NOT use slow penalty at exactly 10000ms', () => {
    const { result } = renderHook(() => useConfidence(50))
    act(() => {
      result.current.recordAnswer(false, 10000)
    })
    expect(result.current.score).toBe(50 + WRONG_DELTA) // 38
  })

  it('should reset streak on wrong answer', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordCorrect(result, 3)
    expect(result.current.streak).toBe(3)
    recordWrong(result, 1)
    expect(result.current.streak).toBe(0)
  })

  it('should increment consecutiveWrong on wrong answer', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordWrong(result, 1)
    expect(result.current.consecutiveWrong).toBe(1)
    recordWrong(result, 1)
    expect(result.current.consecutiveWrong).toBe(2)
  })
})

// =============================================================
// Score Clamping
// =============================================================
describe('useConfidence - score clamping', () => {
  it('should clamp score to 0 (never go negative)', () => {
    const { result } = renderHook(() => useConfidence(5))
    recordWrong(result, 1) // 5 + (-12) = -7 → clamped to 0
    expect(result.current.score).toBe(0)
  })

  it('should clamp score to 100 (never exceed)', () => {
    const { result } = renderHook(() => useConfidence(98))
    act(() => {
      result.current.recordAnswer(true, 2000) // 98 + 11 = 109 → clamped to 100
    })
    expect(result.current.score).toBe(100)
  })
})

// =============================================================
// Streak Multipliers
// =============================================================
describe('useConfidence - streak multipliers', () => {
  it('should apply x1.3 multiplier on 2nd consecutive correct', () => {
    const { result } = renderHook(() => useConfidence(50))

    // 1st correct: no multiplier → +8 → 58
    recordCorrect(result, 1)
    expect(result.current.score).toBe(58)

    // 2nd correct: x1.3 → 8 * 1.3 = 10.4 → rounds to 10 → 68
    recordCorrect(result, 1)
    expect(result.current.score).toBe(68)
    expect(result.current.lastDelta).toBe(Math.round(CORRECT_DELTA * STREAK_2_MULTIPLIER))
  })

  it('should apply x1.3 on 3rd and 4th consecutive correct too', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordCorrect(result, 1) // +8  = 58
    recordCorrect(result, 1) // +10 = 68 (x1.3)
    recordCorrect(result, 1) // +10 = 78 (x1.3)
    recordCorrect(result, 1) // +10 = 88 (x1.3)
    expect(result.current.score).toBe(88)
  })

  it('should apply x1.6 multiplier on 5th consecutive correct', () => {
    const { result } = renderHook(() => useConfidence(20))
    // 1st: +8  = 28
    // 2nd: +10 = 38 (x1.3)
    // 3rd: +10 = 48 (x1.3)
    // 4th: +10 = 58 (x1.3)
    // 5th: +13 = 71 (x1.6 → 8 * 1.6 = 12.8 → 13)
    recordCorrect(result, 5)
    expect(result.current.score).toBe(71)
    expect(result.current.lastDelta).toBe(Math.round(CORRECT_DELTA * STREAK_5_MULTIPLIER))
  })

  it('should combine fast bonus with streak multiplier', () => {
    const { result } = renderHook(() => useConfidence(50))

    // 1st fast correct: (8+3) = 11, no multiplier → 61
    act(() => result.current.recordAnswer(true, 1000))
    expect(result.current.score).toBe(61)

    // 2nd fast correct: (8+3) * 1.3 = 14.3 → 14 → 75
    act(() => result.current.recordAnswer(true, 1000))
    expect(result.current.score).toBe(75)
    expect(result.current.lastDelta).toBe(Math.round((CORRECT_DELTA + FAST_BONUS) * STREAK_2_MULTIPLIER))
  })

  it('should reset multiplier after a wrong answer breaks streak', () => {
    const { result } = renderHook(() => useConfidence(50))
    recordCorrect(result, 2) // streak = 2
    recordWrong(result, 1)   // streak resets to 0
    recordCorrect(result, 1) // 1st correct again — no multiplier
    // After: 50 + 8 + 10 + (-12) + 8 = 64
    expect(result.current.lastDelta).toBe(CORRECT_DELTA) // no multiplier
  })
})

// =============================================================
// Threshold Flags — isStruggling
// =============================================================
describe('useConfidence - isStruggling flag', () => {
  it('should be true when score < 35', () => {
    const { result } = renderHook(() => useConfidence(34))
    expect(result.current.isStruggling).toBe(true)
  })

  it('should be false when score === 35', () => {
    const { result } = renderHook(() => useConfidence(35))
    expect(result.current.isStruggling).toBe(false)
  })

  it('should become true after wrong answers drop score below 35', () => {
    const { result } = renderHook(() => useConfidence(40))
    expect(result.current.isStruggling).toBe(false)
    recordWrong(result, 1) // 40 - 12 = 28
    expect(result.current.isStruggling).toBe(true)
  })
})

// =============================================================
// Threshold Flags — isCritical
// =============================================================
describe('useConfidence - isCritical flag', () => {
  it('should be false when score < 20 but consecutiveWrong < 5', () => {
    const { result } = renderHook(() => useConfidence(15))
    recordWrong(result, 1) // score drops, consecutiveWrong = 1
    expect(result.current.isCritical).toBe(false)
  })

  it('should be false when consecutiveWrong >= 5 but score >= 20', () => {
    const { result } = renderHook(() => useConfidence(90))
    recordWrong(result, 5) // 90 - 60 = 30, consecutiveWrong = 5
    expect(result.current.score).toBe(30)
    expect(result.current.consecutiveWrong).toBe(5)
    expect(result.current.isCritical).toBe(false)
  })

  it('should be true when score < 20 AND consecutiveWrong >= 5', () => {
    // Start at 50, need 5 wrong answers to get below 20
    // 50 - 12*5 = -10 → clamped to 0
    const { result } = renderHook(() => useConfidence(50))
    recordWrong(result, 5)
    expect(result.current.score).toBeLessThan(CRITICAL_THRESHOLD)
    expect(result.current.consecutiveWrong).toBe(5)
    expect(result.current.isCritical).toBe(true)
  })
})

// =============================================================
// Threshold Flags — shouldLevelUp (sticky)
// =============================================================
describe('useConfidence - shouldLevelUp flag', () => {
  it('should become true when score >= 85 AND streak >= 3', () => {
    const { result } = renderHook(() => useConfidence(80))
    // Need score >= 85 and streak >= 3
    // 1st correct: +8  = 88, streak=1 → not yet
    // 2nd correct: +10 = 98, streak=2 → not yet
    // 3rd correct: +10 = 100 (clamped), streak=3 → LEVEL UP
    recordCorrect(result, 3)
    expect(result.current.shouldLevelUp).toBe(true)
  })

  it('should NOT trigger if score >= 85 but streak < 3', () => {
    const { result } = renderHook(() => useConfidence(90))
    recordCorrect(result, 1) // streak=1, score=98
    expect(result.current.shouldLevelUp).toBe(false)
  })

  it('should be sticky — stays true even after wrong answers', () => {
    const { result } = renderHook(() => useConfidence(80))
    recordCorrect(result, 3) // triggers shouldLevelUp
    expect(result.current.shouldLevelUp).toBe(true)

    recordWrong(result, 1) // score drops, streak resets
    expect(result.current.shouldLevelUp).toBe(true) // still true!
  })

  it('should be cleared by acknowledgeLevelUp()', () => {
    const { result } = renderHook(() => useConfidence(80))
    recordCorrect(result, 3)
    expect(result.current.shouldLevelUp).toBe(true)

    act(() => {
      result.current.acknowledgeLevelUp()
    })
    expect(result.current.shouldLevelUp).toBe(false)
  })

  it('should not re-trigger until conditions are met again after acknowledgement', () => {
    const { result } = renderHook(() => useConfidence(80))
    recordCorrect(result, 3) // triggers level up
    act(() => {
      result.current.acknowledgeLevelUp()
    })
    expect(result.current.shouldLevelUp).toBe(false)

    // One more correct — streak=4, score=100, but shouldLevelUp was cleared
    // Streak >= 3 and score >= 85, so it re-triggers
    recordCorrect(result, 1)
    expect(result.current.shouldLevelUp).toBe(true)
  })
})

// =============================================================
// reset()
// =============================================================
describe('useConfidence - reset', () => {
  it('should reset to DEFAULT_INITIAL_SCORE when called without args', () => {
    const { result } = renderHook(() => useConfidence(80))
    recordCorrect(result, 3)
    act(() => {
      result.current.reset()
    })
    expect(result.current.score).toBe(DEFAULT_INITIAL_SCORE)
    expect(result.current.streak).toBe(0)
    expect(result.current.consecutiveWrong).toBe(0)
    expect(result.current.shouldLevelUp).toBe(false)
    expect(result.current.lastDelta).toBe(0)
  })

  it('should reset to a custom score when provided', () => {
    const { result } = renderHook(() => useConfidence(50))
    act(() => {
      result.current.reset(30)
    })
    expect(result.current.score).toBe(30)
  })

  it('should clamp reset score to 0-100', () => {
    const { result } = renderHook(() => useConfidence(50))
    act(() => {
      result.current.reset(150)
    })
    expect(result.current.score).toBe(100)

    act(() => {
      result.current.reset(-20)
    })
    expect(result.current.score).toBe(0)
  })

  it('should clear shouldLevelUp on reset', () => {
    const { result } = renderHook(() => useConfidence(80))
    recordCorrect(result, 3)
    expect(result.current.shouldLevelUp).toBe(true)
    act(() => {
      result.current.reset()
    })
    expect(result.current.shouldLevelUp).toBe(false)
  })
})

// =============================================================
// Stable References
// =============================================================
describe('useConfidence - stable references', () => {
  it('should return stable recordAnswer reference across renders', () => {
    const { result, rerender } = renderHook(() => useConfidence())
    const ref1 = result.current.recordAnswer
    rerender()
    const ref2 = result.current.recordAnswer
    expect(ref1).toBe(ref2)
  })

  it('should return stable acknowledgeLevelUp reference across renders', () => {
    const { result, rerender } = renderHook(() => useConfidence())
    const ref1 = result.current.acknowledgeLevelUp
    rerender()
    const ref2 = result.current.acknowledgeLevelUp
    expect(ref1).toBe(ref2)
  })

  it('should return stable reset reference across renders', () => {
    const { result, rerender } = renderHook(() => useConfidence())
    const ref1 = result.current.reset
    rerender()
    const ref2 = result.current.reset
    expect(ref1).toBe(ref2)
  })
})

// =============================================================
// Integer scores
// =============================================================
describe('useConfidence - integer scores', () => {
  it('should always produce integer scores after multiplier', () => {
    const { result } = renderHook(() => useConfidence(50))
    // 1st: +8 = 58
    // 2nd: 8*1.3 = 10.4 → 10 → 68
    recordCorrect(result, 2)
    expect(Number.isInteger(result.current.score)).toBe(true)
    expect(Number.isInteger(result.current.lastDelta)).toBe(true)
  })
})

// =============================================================
// Edge case: rapid sequence of mixed answers
// =============================================================
describe('useConfidence - mixed answer sequences', () => {
  it('should handle alternating correct/wrong answers', () => {
    const { result } = renderHook(() => useConfidence(50))

    recordCorrect(result, 1) // +8 = 58, streak=1
    recordWrong(result, 1)   // -12 = 46, streak=0, consecutiveWrong=1
    recordCorrect(result, 1) // +8 = 54, streak=1, consecutiveWrong=0
    recordWrong(result, 1)   // -12 = 42, streak=0, consecutiveWrong=1

    expect(result.current.score).toBe(42)
    expect(result.current.streak).toBe(0)
    expect(result.current.consecutiveWrong).toBe(1)
  })
})
