/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi } from 'vitest'
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

// Import AFTER mock setup
const { useGameState } = await import('./useGameState')

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
