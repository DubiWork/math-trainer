/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

// Mock generateProblem to return a deterministic problem
vi.mock('../utils/mathProblems', () => ({
  generateProblem: () => ({
    num1: 3,
    num2: 2,
    operator: '+',
    correctAnswer: 5,
    options: [3, 4, 5, 6],
  }),
  validateAnswer: (answer, correct) => answer === correct,
}))

// Mock getLevelConfig so tests don't depend on real level data
vi.mock('../config/levels', () => ({
  LEVELS: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Level ${i + 1}`,
    operators: ['+'],
    numberRange: { min: 1, max: 10 },
  })),
  getLevelConfig: vi.fn((id) => ({
    id: id ?? 1,
    name: `Level ${id ?? 1}`,
    operators: ['+'],
    numberRange: { min: 1, max: 10 },
  })),
}))

// Import AFTER mock setup
const { useGameState } = await import('./useGameState')
const { getLevelConfig } = await import('../config/levels')

describe('useGameState - startGame', () => {
  it('should reset score to 0 when starting a new game', () => {
    const progress = { score: 150, streak: 5, totalProblems: 20, correctAnswers: 15 }
    const { result } = renderHook(() =>
      useGameState({ initialProgress: progress })
    )

    // Verify initial score from progress
    expect(result.current.score).toBe(150)

    act(() => {
      result.current.startGame()
    })

    expect(result.current.score).toBe(0)
  })

  it('should reset streak to 0 when starting a new game', () => {
    const progress = { score: 100, streak: 8, totalProblems: 10, correctAnswers: 8 }
    const { result } = renderHook(() =>
      useGameState({ initialProgress: progress })
    )

    act(() => {
      result.current.startGame()
    })

    expect(result.current.streak).toBe(0)
  })

  it('should preserve bestStreak when starting a new game', () => {
    const progress = { score: 100, streak: 7, totalProblems: 20, correctAnswers: 15 }
    const { result } = renderHook(() =>
      useGameState({ initialProgress: progress })
    )

    // bestStreak is initialized from initialProgress.streak
    expect(result.current.bestStreak).toBe(7)

    act(() => {
      result.current.startGame()
    })

    expect(result.current.bestStreak).toBe(7)
  })

  it('should preserve totalProblems when starting a new game', () => {
    const progress = { score: 50, streak: 3, totalProblems: 25, correctAnswers: 20 }
    const { result } = renderHook(() =>
      useGameState({ initialProgress: progress })
    )

    expect(result.current.totalProblems).toBe(25)

    act(() => {
      result.current.startGame()
    })

    expect(result.current.totalProblems).toBe(25)
  })

  it('should preserve correctAnswers when starting a new game', () => {
    const progress = { score: 50, streak: 3, totalProblems: 25, correctAnswers: 20 }
    const { result } = renderHook(() =>
      useGameState({ initialProgress: progress })
    )

    expect(result.current.correctAnswers).toBe(20)

    act(() => {
      result.current.startGame()
    })

    expect(result.current.correctAnswers).toBe(20)
  })

  it('should set isPlaying to true when starting a game', () => {
    const { result } = renderHook(() => useGameState())

    expect(result.current.isPlaying).toBe(false)

    act(() => {
      result.current.startGame()
    })

    expect(result.current.isPlaying).toBe(true)
  })

  it('should generate a current problem when starting a game', () => {
    const { result } = renderHook(() => useGameState())

    expect(result.current.currentProblem).toBeNull()

    act(() => {
      result.current.startGame()
    })

    expect(result.current.currentProblem).not.toBeNull()
    expect(result.current.currentProblem).toHaveProperty('correctAnswer')
  })
})

// ---------------------------------------------------------------------------
// Confidence Integration Tests
// ---------------------------------------------------------------------------

describe('useGameState - confidence integration', () => {
  // Use fake timers throughout so we can advance past feedback periods
  // and control response time precisely. Default response time: ~0ms (fast).
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  /**
   * Helper: answer the current problem and advance past the feedback period.
   * After calling this, the hook is ready for the next answer.
   *
   * @param {Object} result - renderHook result
   * @param {number} answer - answer to submit
   * @param {number} thinkMs - ms to advance before answering (simulates response time)
   */
  function answerAndAdvance(result, answer, thinkMs = 500) {
    // Simulate thinking time
    vi.advanceTimersByTime(thinkMs)
    // Submit answer
    act(() => {
      result.current.handleAnswer(answer)
    })
    // Advance past FEEDBACK_DURATION_MS (2000ms) to trigger nextProblem
    act(() => {
      vi.advanceTimersByTime(2000)
    })
  }

  it('should expose confidenceScore starting at 50 when game starts', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    expect(result.current.confidenceScore).toBe(50)
  })

  it('should increase confidenceScore after correct answer', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Answer fast (500ms < FAST_THRESHOLD_MS=3000) → gets fast bonus
    vi.advanceTimersByTime(500)
    act(() => {
      result.current.handleAnswer(5)
    })

    // CORRECT_DELTA(8) + FAST_BONUS(3) = 11, streak=1 no multiplier
    // 50 + 11 = 61
    expect(result.current.confidenceScore).toBe(61)
  })

  it('should decrease confidenceScore after wrong answer', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    vi.advanceTimersByTime(500)
    act(() => {
      result.current.handleAnswer(999) // wrong
    })

    // WRONG_DELTA = -12 (responseTime 500ms < 10000ms, so full penalty)
    // 50 + (-12) = 38
    expect(result.current.confidenceScore).toBe(38)
  })

  it('should expose isStruggling flag reflecting confidence state', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Initial score is 50, not struggling
    expect(result.current.isStruggling).toBe(false)

    // Wrong answer 1: 50 - 12 = 38 (still >= 35, not struggling yet)
    answerAndAdvance(result, 999)
    expect(result.current.isStruggling).toBe(false)

    // Wrong answer 2: 38 - 12 = 26 (below STRUGGLING_THRESHOLD=35)
    answerAndAdvance(result, 999)
    expect(result.current.isStruggling).toBe(true)
  })

  it('should expose shouldLevelUp flag reflecting confidence state', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Need score >= 85 AND streak >= 5.
    // Fast answers (500ms): CORRECT_DELTA(8) + FAST_BONUS(3) = 11 base
    // Streak 1: +11                    → 50 + 11 = 61
    // Streak 2: +round(11*1.3)=+14     → 61 + 14 = 75
    // Streak 3: +round(11*1.3)=+14     → 75 + 14 = 89 >= 85, streak=3
    // Streak 4: +round(11*1.3)=+14     → 100 (clamped), streak=4
    // Streak 5: +round(11*1.6)=+18     → 100 (clamped), streak=5 >= 5

    answerAndAdvance(result, 5) // streak 1 → 61
    expect(result.current.shouldLevelUp).toBe(false)

    answerAndAdvance(result, 5) // streak 2 → 75
    expect(result.current.shouldLevelUp).toBe(false)

    answerAndAdvance(result, 5) // streak 3 → 89
    expect(result.current.shouldLevelUp).toBe(false)

    answerAndAdvance(result, 5) // streak 4 → 100
    expect(result.current.shouldLevelUp).toBe(false)

    answerAndAdvance(result, 5) // streak 5 → 100, LEVEL UP
    expect(result.current.shouldLevelUp).toBe(true)
  })

  it('should expose acknowledgeLevelUp that clears shouldLevelUp', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Drive to shouldLevelUp = true (5 fast correct answers)
    answerAndAdvance(result, 5) // streak 1 → 61
    answerAndAdvance(result, 5) // streak 2 → 75
    answerAndAdvance(result, 5) // streak 3 → 89
    answerAndAdvance(result, 5) // streak 4 → 100
    answerAndAdvance(result, 5) // streak 5 → 100, LEVEL UP

    expect(result.current.shouldLevelUp).toBe(true)

    act(() => {
      result.current.acknowledgeLevelUp()
    })

    expect(result.current.shouldLevelUp).toBe(false)
  })

  it('should keep streak in sync with confidence engine', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    expect(result.current.streak).toBe(0)

    // Correct answer → streak 1
    answerAndAdvance(result, 5)
    expect(result.current.streak).toBe(1)

    // Another correct → streak 2
    answerAndAdvance(result, 5)
    expect(result.current.streak).toBe(2)

    // Wrong answer → streak resets to 0
    answerAndAdvance(result, 999)
    expect(result.current.streak).toBe(0)
  })

  it('should pass level config to problem generator when currentLevel is provided', () => {
    getLevelConfig.mockClear()

    const { result } = renderHook(() => useGameState({ currentLevel: 7 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(7)
  })

  it('should default to level 1 when currentLevel not provided', () => {
    getLevelConfig.mockClear()

    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(1)
  })

  it('should reset confidence on fullReset', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Answer correctly to build confidence
    answerAndAdvance(result, 5)
    expect(result.current.confidenceScore).toBeGreaterThan(50)

    act(() => {
      result.current.fullReset()
    })

    expect(result.current.confidenceScore).toBe(50)
    expect(result.current.streak).toBe(0)
  })

  it('should reset confidence on startGame (new session)', () => {
    const { result } = renderHook(() => useGameState())

    // First session: answer correctly to build confidence
    act(() => {
      result.current.startGame()
    })
    answerAndAdvance(result, 5)

    expect(result.current.confidenceScore).toBeGreaterThan(50)

    // Start new session: confidence resets
    act(() => {
      result.current.startGame()
    })

    expect(result.current.confidenceScore).toBe(50)
    expect(result.current.streak).toBe(0)
  })

  it('should handle bestStreak correctly with confidence-driven streak', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Build a streak of 3
    answerAndAdvance(result, 5)
    answerAndAdvance(result, 5)
    answerAndAdvance(result, 5)
    expect(result.current.bestStreak).toBe(3)

    // Break the streak
    answerAndAdvance(result, 999)
    expect(result.current.streak).toBe(0)
    // bestStreak should still be 3
    expect(result.current.bestStreak).toBe(3)

    // Build a new shorter streak
    answerAndAdvance(result, 5)
    expect(result.current.streak).toBe(1)
    // bestStreak stays at 3
    expect(result.current.bestStreak).toBe(3)
  })

  it('should expose consecutiveWrong from confidence engine', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    expect(result.current.consecutiveWrong).toBe(0)

    answerAndAdvance(result, 999)
    expect(result.current.consecutiveWrong).toBe(1)

    answerAndAdvance(result, 999)
    expect(result.current.consecutiveWrong).toBe(2)

    // Correct answer resets consecutiveWrong
    answerAndAdvance(result, 5)
    expect(result.current.consecutiveWrong).toBe(0)
  })

  it('should expose lastDelta from confidence engine', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    expect(result.current.lastDelta).toBe(0)

    // Correct answer (fast, 500ms): 8 + 3 = 11
    answerAndAdvance(result, 5)
    expect(result.current.lastDelta).toBe(11)

    // Wrong answer (fast, 500ms): -12
    answerAndAdvance(result, 999)
    expect(result.current.lastDelta).toBe(-12)
  })
})

// ---------------------------------------------------------------------------
// Response Time Tests (focused on timing thresholds)
// ---------------------------------------------------------------------------

describe('useGameState - response time integration', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should measure response time and apply fast bonus for quick correct answers', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Advance 1 second (well under FAST_THRESHOLD_MS = 3000)
    vi.advanceTimersByTime(1000)

    act(() => {
      result.current.handleAnswer(5)
    })

    // CORRECT_DELTA(8) + FAST_BONUS(3) = 11, streak=1 no multiplier
    // 50 + 11 = 61
    expect(result.current.confidenceScore).toBe(61)
    expect(result.current.lastDelta).toBe(11)
  })

  it('should NOT apply fast bonus for slow correct answers', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Advance 5 seconds (above FAST_THRESHOLD_MS = 3000)
    vi.advanceTimersByTime(5000)

    act(() => {
      result.current.handleAnswer(5)
    })

    // CORRECT_DELTA(8) only, no fast bonus. Streak=1, no multiplier.
    // 50 + 8 = 58
    expect(result.current.confidenceScore).toBe(58)
    expect(result.current.lastDelta).toBe(8)
  })

  it('should apply reduced penalty for slow wrong answers', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Advance 11 seconds (above SLOW_THRESHOLD_MS = 10000)
    vi.advanceTimersByTime(11000)

    act(() => {
      result.current.handleAnswer(999)
    })

    // SLOW_WRONG_DELTA = -8 (reduced from WRONG_DELTA = -12)
    // 50 + (-8) = 42
    expect(result.current.confidenceScore).toBe(42)
    expect(result.current.lastDelta).toBe(-8)
  })

  it('should apply full penalty for fast wrong answers', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Advance 2 seconds (under SLOW_THRESHOLD_MS = 10000)
    vi.advanceTimersByTime(2000)

    act(() => {
      result.current.handleAnswer(999)
    })

    // WRONG_DELTA = -12 (full penalty)
    // 50 + (-12) = 38
    expect(result.current.confidenceScore).toBe(38)
    expect(result.current.lastDelta).toBe(-12)
  })

  it('should reset response timer on nextProblem after feedback', () => {
    const { result } = renderHook(() => useGameState())

    act(() => {
      result.current.startGame()
    })

    // Answer first problem fast (1s < 3s threshold)
    vi.advanceTimersByTime(1000)
    act(() => {
      result.current.handleAnswer(5) // correct, fast → +11, score=61
    })

    // Advance past feedback (2000ms) to trigger auto-advance to next problem.
    // This calls nextProblem() which resets problemStartTimeRef.
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    // Now wait 5 seconds on the NEW problem (above FAST_THRESHOLD_MS=3000)
    vi.advanceTimersByTime(5000)

    act(() => {
      result.current.handleAnswer(5) // correct, NOT fast → +8 base, streak=2 → *1.3 = 10.4 → 10
    })

    // Score: 61 + 10 = 71
    expect(result.current.confidenceScore).toBe(71)
    expect(result.current.lastDelta).toBe(10)
  })
})

// ---------------------------------------------------------------------------
// currentLevel prop threading & boundary clamping
// ---------------------------------------------------------------------------

describe('useGameState - currentLevel prop threading', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00.000Z'))
    getLevelConfig.mockClear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should pass the provided currentLevel to getLevelConfig on startGame', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: 5 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(5)
  })

  it('should pass the provided currentLevel to getLevelConfig on nextProblem', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: 9 }))

    act(() => {
      result.current.startGame()
    })

    getLevelConfig.mockClear()

    // Answer correctly and advance past feedback to trigger nextProblem
    vi.advanceTimersByTime(500)
    act(() => {
      result.current.handleAnswer(5)
    })
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(getLevelConfig).toHaveBeenCalledWith(9)
  })

  it('should clamp currentLevel below 1 to 1', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: 0 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(1)
  })

  it('should clamp currentLevel above 20 to 20', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: 99 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(20)
  })

  it('should clamp negative currentLevel to 1', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: -5 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(1)
  })

  it('should floor fractional currentLevel values', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: 3.7 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(3)
  })

  it('should use level 13 config when currentLevel is exactly 13', () => {
    const { result } = renderHook(() => useGameState({ currentLevel: 13 }))

    act(() => {
      result.current.startGame()
    })

    expect(getLevelConfig).toHaveBeenCalledWith(13)
  })
})
