/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import ProgressView from './ProgressView'

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeProgress(overrides = {}) {
  return {
    totalProblems: 50,
    correctAnswers: 42,
    streak: 7,
    score: 420,
    ...overrides,
  }
}

function renderProgressView(overrides = {}) {
  const defaults = {
    progress: makeProgress(),
    currentLevel: 1,
    onClose: vi.fn(),
    activeProfile: null,
  }
  const props = { ...defaults, ...overrides }
  return { ...render(<ProgressView {...props} />), props }
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('ProgressView', () => {
  beforeEach(() => {
    // Mock scrollIntoView since happy-dom does not implement it
    Element.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  // ── Basic rendering ─────────────────────────────────────────────────

  describe('basic rendering', () => {
    it('renders the progress view container', () => {
      renderProgressView()
      expect(screen.getByTestId('progress-view')).toBeTruthy()
    })

    it('renders the title "My Progress"', () => {
      renderProgressView()
      expect(screen.getByText('My Progress')).toBeTruthy()
    })

    it('renders the close button', () => {
      renderProgressView()
      expect(screen.getByTestId('close-button')).toBeTruthy()
    })

    it('renders the stats container when progress has data', () => {
      renderProgressView()
      expect(screen.getByTestId('stats-container')).toBeTruthy()
    })
  })

  // ── Accuracy display ────────────────────────────────────────────────

  describe('accuracy display', () => {
    it('shows correct accuracy fraction', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 42, totalProblems: 50 }) })
      expect(screen.getByText('42 out of 50 correct!')).toBeTruthy()
    })

    it('shows correct accuracy percentage', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 42, totalProblems: 50 }) })
      expect(screen.getByText('84% accuracy')).toBeTruthy()
    })

    it('shows 100% accuracy correctly', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 100, totalProblems: 100 }) })
      expect(screen.getByText('100 out of 100 correct!')).toBeTruthy()
      expect(screen.getByText('100% accuracy')).toBeTruthy()
    })

    it('shows 0% accuracy when all answers are wrong', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 0, totalProblems: 10 }) })
      expect(screen.getByText('0 out of 10 correct!')).toBeTruthy()
      expect(screen.getByText('0% accuracy')).toBeTruthy()
    })

    it('rounds accuracy percentage', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 1, totalProblems: 3 }) })
      // 1/3 = 33.33... => 33%
      expect(screen.getByText('33% accuracy')).toBeTruthy()
    })
  })

  // ── Stats cards ─────────────────────────────────────────────────────

  describe('stats cards', () => {
    it('shows total problems solved', () => {
      renderProgressView({ progress: makeProgress({ totalProblems: 75 }) })
      const card = screen.getByTestId('total-problems-card')
      expect(card.textContent).toContain('75')
    })

    it('shows best streak with fire emoji', () => {
      renderProgressView({ progress: makeProgress({ streak: 12 }) })
      const card = screen.getByTestId('streak-card')
      expect(card.textContent).toContain('12')
      // Fire emoji is present
      const fireEmoji = card.querySelector('[aria-label="fire"]')
      expect(fireEmoji).toBeTruthy()
    })

    it('shows current level name from getLevelConfig', () => {
      renderProgressView({ currentLevel: 5 })
      expect(screen.getByText('Level 5: Cross the 10')).toBeTruthy()
    })

    it('shows level 1 name correctly', () => {
      renderProgressView({ currentLevel: 1 })
      expect(screen.getByText('Level 1: First Steps')).toBeTruthy()
    })

    it('shows level 13 name correctly', () => {
      renderProgressView({ currentLevel: 13 })
      expect(screen.getByText('Level 13: Math Champion')).toBeTruthy()
    })
  })

  // ── Empty state ─────────────────────────────────────────────────────

  describe('empty state', () => {
    it('shows empty state when totalProblems is 0', () => {
      renderProgressView({ progress: makeProgress({ totalProblems: 0, correctAnswers: 0, streak: 0, score: 0 }) })
      expect(screen.getByTestId('empty-state')).toBeTruthy()
      expect(screen.getByText('Start playing to track your progress!')).toBeTruthy()
    })

    it('shows empty state subtitle', () => {
      renderProgressView({ progress: makeProgress({ totalProblems: 0, correctAnswers: 0, streak: 0, score: 0 }) })
      expect(screen.getByText('Your stats will appear here after your first game.')).toBeTruthy()
    })

    it('does not show stats container in empty state', () => {
      renderProgressView({ progress: makeProgress({ totalProblems: 0, correctAnswers: 0 }) })
      expect(screen.queryByTestId('stats-container')).toBeNull()
    })

    it('shows empty state when progress is null', () => {
      renderProgressView({ progress: null })
      expect(screen.getByTestId('empty-state')).toBeTruthy()
    })

    it('shows empty state when progress is undefined', () => {
      renderProgressView({ progress: undefined })
      expect(screen.getByTestId('empty-state')).toBeTruthy()
    })
  })

  // ── Performance messages ────────────────────────────────────────────

  describe('performance messages', () => {
    it('shows "on track" message for accuracy >= 80%', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 80, totalProblems: 100 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain("Amazing! You're on track!")
    })

    it('shows "on track" message for exactly 80% accuracy', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 80, totalProblems: 100 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain("Amazing! You're on track!")
    })

    it('shows "keep practicing" for accuracy 50-79%', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 60, totalProblems: 100 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain('Great effort! Keep practicing!')
    })

    it('shows "keep practicing" for exactly 50% accuracy', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 50, totalProblems: 100 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain('Great effort! Keep practicing!')
    })

    it('shows encouragement message for accuracy < 50%', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 30, totalProblems: 100 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain("You're learning! Every try makes you stronger!")
    })

    it('shows encouragement message for 0% accuracy', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 0, totalProblems: 10 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain("You're learning! Every try makes you stronger!")
    })

    it('shows "on track" message for 100% accuracy', () => {
      renderProgressView({ progress: makeProgress({ correctAnswers: 100, totalProblems: 100 }) })
      const msg = screen.getByTestId('performance-message')
      expect(msg.textContent).toContain("Amazing! You're on track!")
    })
  })

  // ── Close button ────────────────────────────────────────────────────

  describe('close button', () => {
    it('calls onClose when close button is clicked', () => {
      const onClose = vi.fn()
      renderProgressView({ onClose })
      fireEvent.click(screen.getByTestId('close-button'))
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('close button has accessible label', () => {
      renderProgressView()
      const btn = screen.getByTestId('close-button')
      expect(btn.getAttribute('aria-label')).toBe('Close')
    })
  })

  // ── LevelMap integration ────────────────────────────────────────────

  describe('LevelMap integration', () => {
    it('embeds LevelMap component', () => {
      renderProgressView({ currentLevel: 3 })
      expect(screen.getByTestId('level-map')).toBeTruthy()
    })

    it('passes correct currentLevel to LevelMap', () => {
      renderProgressView({ currentLevel: 7 })
      // Level 7 should be current
      const node7 = screen.getByTestId('level-node-7')
      expect(node7.getAttribute('aria-label')).toBe('Level 7: Mixed 20 - current')
    })

    it('LevelMap shows completed levels before currentLevel', () => {
      renderProgressView({ currentLevel: 5 })
      const node2 = screen.getByTestId('level-node-2')
      expect(node2.getAttribute('aria-label')).toContain('completed')
    })

    it('LevelMap shows locked levels after currentLevel', () => {
      renderProgressView({ currentLevel: 5 })
      const node8 = screen.getByTestId('level-node-8')
      expect(node8.getAttribute('aria-label')).toContain('locked')
    })

    it('does not render LevelMap in empty state', () => {
      renderProgressView({ progress: null })
      expect(screen.queryByTestId('level-map')).toBeNull()
    })
  })

  // ── Accessibility ───────────────────────────────────────────────────

  describe('accessibility', () => {
    it('stats container has role="status"', () => {
      renderProgressView()
      const container = screen.getByTestId('stats-container')
      expect(container.getAttribute('role')).toBe('status')
    })

    it('performance message does NOT have role="status" (kept only on stats container)', () => {
      renderProgressView()
      const msg = screen.getByTestId('performance-message')
      expect(msg.getAttribute('role')).toBeNull()
    })

    it('close button meets minimum touch target size (min-w and min-h classes)', () => {
      renderProgressView()
      const btn = screen.getByTestId('close-button')
      expect(btn.className).toContain('min-w-[44px]')
      expect(btn.className).toContain('min-h-[44px]')
    })

    it('close button has focus ring styles for keyboard navigation', () => {
      renderProgressView()
      const btn = screen.getByTestId('close-button')
      expect(btn.className).toContain('focus:outline-none')
      expect(btn.className).toContain('focus:ring-2')
    })

    it('decorative elements are hidden from assistive technology', () => {
      renderProgressView()
      const container = screen.getByTestId('progress-view')
      const decorative = container.querySelector('[aria-hidden="true"]')
      expect(decorative).toBeTruthy()
    })
  })

  // ── Edge cases ──────────────────────────────────────────────────────

  describe('edge cases', () => {
    it('handles very large numbers without overflow', () => {
      renderProgressView({ progress: makeProgress({ totalProblems: 999999, correctAnswers: 888888, streak: 9999, score: 999999 }) })
      // Accuracy fraction contains both large numbers
      expect(screen.getByText('888888 out of 999999 correct!')).toBeTruthy()
      // Streak card shows 9999
      const streakCard = screen.getByTestId('streak-card')
      expect(streakCard.textContent).toContain('9999')
    })

    it('handles out-of-range currentLevel gracefully (falls back to level 1)', () => {
      renderProgressView({ currentLevel: 99 })
      // safeLevelConfig clamps to level 1 for invalid levels
      expect(screen.getByText('Level 99: First Steps')).toBeTruthy()
    })

    it('handles currentLevel=0 gracefully (falls back to level 1)', () => {
      renderProgressView({ currentLevel: 0 })
      expect(screen.getByText('Level 0: First Steps')).toBeTruthy()
    })

    it('correctly handles progress with only totalProblems > 0 and correctAnswers = 0', () => {
      renderProgressView({ progress: makeProgress({ totalProblems: 5, correctAnswers: 0, streak: 0, score: 0 }) })
      // Should show stats (not empty) since totalProblems > 0
      expect(screen.getByTestId('stats-container')).toBeTruthy()
      expect(screen.getByText('0 out of 5 correct!')).toBeTruthy()
    })

    it('renders with default currentLevel when not provided', () => {
      // Provide progress data so stats render (not empty state)
      render(<ProgressView onClose={vi.fn()} progress={makeProgress()} />)
      // Default is level 1
      expect(screen.getByText('Level 1: First Steps')).toBeTruthy()
    })
  })

  // ── Sonic theming ───────────────────────────────────────────────────

  describe('theming', () => {
    it('uses Sonic-themed gradient background', () => {
      renderProgressView()
      const container = screen.getByTestId('progress-view')
      expect(container.className).toContain('from-sonic-blue')
      expect(container.className).toContain('to-blue-900')
    })

    it('title uses font-game class', () => {
      renderProgressView()
      const title = screen.getByText('My Progress')
      expect(title.className).toContain('font-game')
    })
  })
})
