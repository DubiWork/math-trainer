/**
 * @vitest-environment happy-dom
 *
 * Integration tests for the complete level progression flow.
 *
 * These tests exercise the App component with mocked child components,
 * verifying the full lifecycle:
 *   Start -> Game -> LevelUp -> Continue -> Game (next level)
 *   Start -> Game -> LevelUp (champion) -> Play Again -> Game (same level)
 *
 * Mocking strategy:
 * - Firebase (useFirebase, useGameProgress): fully mocked
 * - useProfile: mocked with controllable activeProfile
 * - Child components: lightweight createElement stubs exposing callbacks
 * - levels config: real LEVELS + MAX_LEVEL to test actual boundary at 13
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { createElement } from 'react'

// ── Mocks ────────────────────────────────────────────────────────────────────

// Mock levels config — use real values
vi.mock('../../config/levels', () => ({
  MAX_LEVEL: 13,
  LEVELS: [
    { id: 1, name: 'First Steps' },
    { id: 2, name: 'Addition Hero' },
    { id: 3, name: 'Minus Magic' },
    { id: 4, name: 'Mixed Warrior' },
    { id: 5, name: 'Cross the 10' },
    { id: 6, name: 'Subtract 20' },
    { id: 7, name: 'Mixed 20' },
    { id: 8, name: 'Tens Master' },
    { id: 9, name: 'Century Runner' },
    { id: 10, name: 'Speed of 2s' },
    { id: 11, name: 'Times Tables' },
    { id: 12, name: 'Division Quest' },
    { id: 13, name: 'Math Champion' },
  ],
  getLevelConfig: (id) => ({ id, name: `Level ${id}` }),
  default: [
    { id: 1, name: 'First Steps' },
    { id: 2, name: 'Addition Hero' },
    { id: 3, name: 'Minus Magic' },
    { id: 4, name: 'Mixed Warrior' },
    { id: 5, name: 'Cross the 10' },
    { id: 6, name: 'Subtract 20' },
    { id: 7, name: 'Mixed 20' },
    { id: 8, name: 'Tens Master' },
    { id: 9, name: 'Century Runner' },
    { id: 10, name: 'Speed of 2s' },
    { id: 11, name: 'Times Tables' },
    { id: 12, name: 'Division Quest' },
    { id: 13, name: 'Math Champion' },
  ],
}))

// Mock useProfile with controllable return value
const mockProfileCtx = {
  activeProfile: null,
  isLoading: false,
  clearActiveProfile: vi.fn(),
  createAndActivate: vi.fn(),
  updateProfile: vi.fn(),
}

vi.mock('../../context/useProfile', () => ({
  useProfile: () => mockProfileCtx,
}))

// Mock Firebase hooks
const mockFirebase = {
  user: { uid: 'test-uid' },
  loading: false,
  error: null,
}

const mockForceSave = vi.fn()

vi.mock('../../hooks', () => ({
  useFirebase: () => mockFirebase,
  useGameProgress: () => ({
    progress: { score: 0, streak: 0, totalProblems: 0, correctAnswers: 0 },
    updateProgress: vi.fn(),
    forceSave: mockForceSave,
    loading: false,
  }),
}))

// Mock child components with testable interaction surfaces.
// Each stub exposes its props via data attributes and onClick handlers
// so integration tests can drive the full App state machine.
vi.mock('../../components', () => ({
  StartScreen: ({ onStart, onSwitchProfile, currentLevel }) =>
    createElement('div', {
      'data-testid': 'start-screen',
      'data-current-level': currentLevel,
    },
      createElement('button', { 'data-testid': 'start-game', onClick: onStart }, 'Start'),
      createElement('button', { 'data-testid': 'switch-profile', onClick: onSwitchProfile }, 'Switch'),
    ),
  GameScreen: ({ onGameEnd, currentLevel, onLevelUp }) =>
    createElement('div', {
      'data-testid': 'game-screen',
      'data-current-level': currentLevel,
    },
      createElement('button', {
        'data-testid': 'end-game',
        onClick: () => onGameEnd({ score: 10, streak: 3, totalProblems: 5, correctAnswers: 4 }),
      }, 'End Game'),
      createElement('button', {
        'data-testid': 'exit-game',
        onClick: () => onGameEnd(null),
      }, 'Exit'),
      createElement('button', {
        'data-testid': 'trigger-level-up',
        onClick: () => onLevelUp(currentLevel),
      }, 'Level Up'),
    ),
  ResultScreen: ({ onPlayAgain, onExit }) =>
    createElement('div', { 'data-testid': 'result-screen' },
      createElement('button', { 'data-testid': 'play-again', onClick: onPlayAgain }, 'Play Again'),
      createElement('button', { 'data-testid': 'exit-result', onClick: onExit }, 'Exit'),
    ),
  LevelUpScreen: ({ completedLevel, onContinue }) =>
    createElement('div', {
      'data-testid': 'levelup-screen',
      'data-completed-level': completedLevel,
    },
      createElement('button', { 'data-testid': 'continue-level-up', onClick: onContinue }, 'Continue'),
    ),
  ProfileSwitcher: ({ onCreateProfile }) =>
    createElement('div', { 'data-testid': 'profile-switcher' },
      createElement('button', { 'data-testid': 'create-profile', onClick: onCreateProfile }, 'Create'),
    ),
  CreateProfile: ({ onComplete, onCancel }) =>
    createElement('div', { 'data-testid': 'create-profile-wizard' },
      createElement('button', {
        'data-testid': 'complete-wizard',
        onClick: () => onComplete({
          id: 'new-1', nickname: 'Hero', theme: 'sonic',
          pinHash: 'a'.repeat(64), firebaseUid: 'fb-uid', currentLevel: 1,
        }),
      }, 'Complete'),
      createElement('button', { 'data-testid': 'cancel-wizard', onClick: onCancel }, 'Cancel'),
    ),
}))

// Import App after mocks are in place
const { default: App } = await import('../../App')

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Standard active profile at a given level */
function setProfile(level = 1) {
  mockProfileCtx.activeProfile = {
    id: 'profile-1',
    nickname: 'Dubi',
    firebaseUid: 'uid-1',
    currentLevel: level,
  }
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('Level Progression Integration', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
    mockProfileCtx.activeProfile = null
    mockProfileCtx.isLoading = false
    mockProfileCtx.clearActiveProfile = vi.fn()
    mockProfileCtx.createAndActivate = vi.fn()
    mockProfileCtx.updateProfile = vi.fn()
    mockFirebase.user = { uid: 'test-uid' }
    mockFirebase.loading = false
    mockFirebase.error = null
  })

  // ── 1. Complete level-up flow ──────────────────────────────────────────

  describe('complete level-up flow (start -> game -> level-up -> continue -> game)', () => {
    it('navigates through the full level-up lifecycle', () => {
      setProfile(3)
      render(<App />)

      // Step 1: StartScreen visible at level 3
      expect(screen.getByTestId('start-screen')).toBeTruthy()
      expect(screen.getByTestId('start-screen').getAttribute('data-current-level')).toBe('3')

      // Step 2: Start the game
      fireEvent.click(screen.getByTestId('start-game'))
      expect(screen.getByTestId('game-screen')).toBeTruthy()
      expect(screen.queryByTestId('start-screen')).toBeNull()

      // Step 3: Trigger level-up from GameScreen
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      expect(screen.getByTestId('levelup-screen')).toBeTruthy()
      expect(screen.queryByTestId('game-screen')).toBeNull()

      // Step 4: Verify completedLevel is passed correctly
      expect(screen.getByTestId('levelup-screen').getAttribute('data-completed-level')).toBe('3')

      // Step 5: Click Continue -> profile updated + back to game
      fireEvent.click(screen.getByTestId('continue-level-up'))
      expect(mockProfileCtx.updateProfile).toHaveBeenCalledTimes(1)
      expect(mockProfileCtx.updateProfile).toHaveBeenCalledWith('profile-1', { currentLevel: 4 })
      expect(screen.getByTestId('game-screen')).toBeTruthy()
      expect(screen.queryByTestId('levelup-screen')).toBeNull()
    })

    it('updates profile with incremented currentLevel for each mid-range level', () => {
      const testCases = [
        { from: 1, to: 2 },
        { from: 6, to: 7 },
        { from: 12, to: 13 },
      ]

      testCases.forEach(({ from, to }) => {
        cleanup()
        vi.clearAllMocks()
        setProfile(from)

        render(<App />)
        fireEvent.click(screen.getByTestId('start-game'))
        fireEvent.click(screen.getByTestId('trigger-level-up'))
        fireEvent.click(screen.getByTestId('continue-level-up'))

        expect(mockProfileCtx.updateProfile).toHaveBeenCalledWith('profile-1', { currentLevel: to })
      })
    })
  })

  // ── 2. Max level (champion) flow ───────────────────────────────────────

  describe('max level flow (champion at level 13)', () => {
    it('shows champion celebration screen at max level', () => {
      setProfile(13)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))

      expect(screen.getByTestId('levelup-screen')).toBeTruthy()
      expect(screen.getByTestId('levelup-screen').getAttribute('data-completed-level')).toBe('13')
    })

    it('does NOT call updateProfile with level 14 when at max level', () => {
      setProfile(13)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      fireEvent.click(screen.getByTestId('continue-level-up'))

      // updateProfile should NOT be called at all (nextLevel=14 > MAX_LEVEL=13)
      expect(mockProfileCtx.updateProfile).not.toHaveBeenCalled()
    })

    it('returns to game screen after champion celebration', () => {
      setProfile(13)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      fireEvent.click(screen.getByTestId('continue-level-up'))

      expect(screen.getByTestId('game-screen')).toBeTruthy()
      expect(screen.queryByTestId('levelup-screen')).toBeNull()
    })

    it('stays at level 13 in GameScreen after champion continue', () => {
      setProfile(13)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      fireEvent.click(screen.getByTestId('continue-level-up'))

      // GameScreen should still receive currentLevel=13
      const gameScreen = screen.getByTestId('game-screen')
      expect(gameScreen.getAttribute('data-current-level')).toBe('13')
    })
  })

  // ── 3. Level map reflects progress ─────────────────────────────────────

  describe('level map reflects current progress on StartScreen', () => {
    it('passes currentLevel to StartScreen for LevelMap rendering', () => {
      setProfile(5)
      render(<App />)

      const startScreen = screen.getByTestId('start-screen')
      expect(startScreen.getAttribute('data-current-level')).toBe('5')
    })

    it('passes currentLevel=1 when profile has no currentLevel set', () => {
      mockProfileCtx.activeProfile = {
        id: 'profile-1',
        nickname: 'Dubi',
        firebaseUid: 'uid-1',
        // no currentLevel — should default to 1
      }
      render(<App />)

      const startScreen = screen.getByTestId('start-screen')
      expect(startScreen.getAttribute('data-current-level')).toBe('1')
    })

    it('passes currentLevel=13 for max-level profile', () => {
      setProfile(13)
      render(<App />)

      const startScreen = screen.getByTestId('start-screen')
      expect(startScreen.getAttribute('data-current-level')).toBe('13')
    })
  })

  // ── 4. Persistence — level-up saves to profile ─────────────────────────

  describe('persistence through profile update', () => {
    it('calls updateProfile exactly once per level-up continue', () => {
      setProfile(5)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      fireEvent.click(screen.getByTestId('continue-level-up'))

      expect(mockProfileCtx.updateProfile).toHaveBeenCalledTimes(1)
      expect(mockProfileCtx.updateProfile).toHaveBeenCalledWith('profile-1', { currentLevel: 6 })
    })

    it('does not call updateProfile when transitioning to levelup screen (only on continue)', () => {
      setProfile(3)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))

      // At this point we are on the levelup screen but have not clicked continue
      expect(mockProfileCtx.updateProfile).not.toHaveBeenCalled()
    })

    it('does not call updateProfile when exiting the game without level-up', () => {
      setProfile(3)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('exit-game'))

      expect(mockProfileCtx.updateProfile).not.toHaveBeenCalled()
    })

    it('does not call updateProfile when game ends normally (result screen)', () => {
      setProfile(3)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('end-game'))

      expect(screen.getByTestId('result-screen')).toBeTruthy()
      expect(mockProfileCtx.updateProfile).not.toHaveBeenCalled()
    })

    it('calls forceSave when exiting from start screen via switch profile', () => {
      setProfile(3)
      render(<App />)

      fireEvent.click(screen.getByTestId('switch-profile'))
      expect(mockForceSave).toHaveBeenCalledTimes(1)
    })
  })

  // ── 5. Reduced motion ─────────────────────────────────────────────────

  describe('reduced-motion (animation classes)', () => {
    // These tests verify that the real LevelUpScreen and LevelMap components
    // apply motion-reduce classes. Since we mock child components in this
    // integration test, we test the actual components directly here.

    it('LevelUpScreen hero emoji respects reduced motion', async () => {
      // Import the real LevelUpScreen for this specific check
      const { default: LevelUpScreen } = await import('../LevelUpScreen')
      render(<LevelUpScreen completedLevel={1} onContinue={vi.fn()} />)

      const hero = screen.getByTestId('hero-emoji')
      expect(hero.className).toContain('motion-reduce:animate-none')
    })

    it('LevelUpScreen confetti particles respect reduced motion', async () => {
      cleanup()
      const { default: LevelUpScreen } = await import('../LevelUpScreen')
      render(<LevelUpScreen completedLevel={1} onContinue={vi.fn()} />)

      const particles = screen.getAllByTestId('confetti-particle')
      particles.forEach((particle) => {
        expect(particle.className).toContain('motion-reduce:hidden')
      })
    })

    it('LevelMap current node pulse respects reduced motion', async () => {
      cleanup()
      // Mock scrollIntoView for happy-dom
      Element.prototype.scrollIntoView = vi.fn()
      const { default: LevelMap } = await import('../LevelMap')
      render(<LevelMap currentLevel={5} />)

      const currentNode = screen.getByTestId('level-node-5')
      const pulsingEl = currentNode.querySelector('.animate-pulse-gold')
      expect(pulsingEl.className).toContain('motion-reduce:animate-none')
    })
  })

  // ── 6. Screen state isolation ──────────────────────────────────────────

  describe('screen state isolation', () => {
    it('only one screen is visible at a time during level-up flow', () => {
      setProfile(5)
      render(<App />)

      // StartScreen only
      expect(screen.getByTestId('start-screen')).toBeTruthy()
      expect(screen.queryByTestId('game-screen')).toBeNull()
      expect(screen.queryByTestId('levelup-screen')).toBeNull()
      expect(screen.queryByTestId('result-screen')).toBeNull()

      // GameScreen only
      fireEvent.click(screen.getByTestId('start-game'))
      expect(screen.queryByTestId('start-screen')).toBeNull()
      expect(screen.getByTestId('game-screen')).toBeTruthy()
      expect(screen.queryByTestId('levelup-screen')).toBeNull()
      expect(screen.queryByTestId('result-screen')).toBeNull()

      // LevelUpScreen only
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      expect(screen.queryByTestId('start-screen')).toBeNull()
      expect(screen.queryByTestId('game-screen')).toBeNull()
      expect(screen.getByTestId('levelup-screen')).toBeTruthy()
      expect(screen.queryByTestId('result-screen')).toBeNull()

      // Back to GameScreen only
      fireEvent.click(screen.getByTestId('continue-level-up'))
      expect(screen.queryByTestId('start-screen')).toBeNull()
      expect(screen.getByTestId('game-screen')).toBeTruthy()
      expect(screen.queryByTestId('levelup-screen')).toBeNull()
      expect(screen.queryByTestId('result-screen')).toBeNull()
    })

    it('completedLevel state is cleared after continue', () => {
      setProfile(5)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))

      // completedLevel = 5
      expect(screen.getByTestId('levelup-screen').getAttribute('data-completed-level')).toBe('5')

      // After continue, levelup screen is gone (completedLevel cleared)
      fireEvent.click(screen.getByTestId('continue-level-up'))
      expect(screen.queryByTestId('levelup-screen')).toBeNull()
    })
  })

  // ── 7. Boundary level transitions ─────────────────────────────────────

  describe('boundary level transitions', () => {
    it('level 1 -> 2: first level-up ever', () => {
      setProfile(1)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      fireEvent.click(screen.getByTestId('continue-level-up'))

      expect(mockProfileCtx.updateProfile).toHaveBeenCalledWith('profile-1', { currentLevel: 2 })
    })

    it('level 12 -> 13: last normal level-up', () => {
      setProfile(12)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))

      // Should show normal celebration (not champion)
      expect(screen.getByTestId('levelup-screen').getAttribute('data-completed-level')).toBe('12')

      fireEvent.click(screen.getByTestId('continue-level-up'))
      expect(mockProfileCtx.updateProfile).toHaveBeenCalledWith('profile-1', { currentLevel: 13 })
    })

    it('level 13 (max): no profile update beyond max', () => {
      setProfile(13)
      render(<App />)

      fireEvent.click(screen.getByTestId('start-game'))
      fireEvent.click(screen.getByTestId('trigger-level-up'))
      fireEvent.click(screen.getByTestId('continue-level-up'))

      expect(mockProfileCtx.updateProfile).not.toHaveBeenCalled()
    })
  })
})
