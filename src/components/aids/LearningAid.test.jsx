/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import LearningAid from './LearningAid'

// ── Helpers ──────────────────────────────────────────────────────────────────

const defaultProps = {
  isStruggling: true,
  currentLevel: 2,
  num1: 3,
  num2: 2,
  operator: '+',
}

function renderAid(overrides = {}) {
  return render(<LearningAid {...defaultProps} {...overrides} />)
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('LearningAid', () => {
  afterEach(() => {
    cleanup()
  })

  // ── Visibility ────────────────────────────────────────────────────────

  describe('visibility', () => {
    it('renders nothing when not struggling', () => {
      renderAid({ isStruggling: false })
      expect(screen.queryByTestId('learning-aid-container')).toBeNull()
    })

    it('renders the container when struggling at a supported level', () => {
      renderAid({ isStruggling: true, currentLevel: 2 })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
    })

    it('renders StrategyHint for levels 8+ when struggling', () => {
      renderAid({ isStruggling: true, currentLevel: 8, num1: 30, num2: 20, operator: '+' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for level 9 when struggling', () => {
      renderAid({ isStruggling: true, currentLevel: 9, num1: 15, num2: 7, operator: '-' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for level 13 when struggling', () => {
      renderAid({ isStruggling: true, currentLevel: 13, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })
  })

  // ── Aid Selection ─────────────────────────────────────────────────────

  describe('aid selection', () => {
    it('renders DotCounter for level 1', () => {
      renderAid({ currentLevel: 1, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })

    it('renders DotCounter for level 2', () => {
      renderAid({ currentLevel: 2, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('renders DotCounter for level 3', () => {
      renderAid({ currentLevel: 3, operator: '-', num1: 5, num2: 2 })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('renders DotCounter for level 4', () => {
      renderAid({ currentLevel: 4, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('renders StrategyHint for level 5', () => {
      renderAid({ currentLevel: 5, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('renders StrategyHint for level 6', () => {
      renderAid({ currentLevel: 6, num1: 15, num2: 7, operator: '-' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for level 7', () => {
      renderAid({ currentLevel: 7, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    // ── Boundary tests ────────────────────────────────────────────────

    it('boundary: level 4 renders DotCounter, level 5 renders StrategyHint', () => {
      // Level 4 -> DotCounter
      renderAid({ currentLevel: 4, num1: 3, num2: 2, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
      cleanup()

      // Level 5 -> StrategyHint
      renderAid({ currentLevel: 5, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('renders StrategyHint for level 8', () => {
      renderAid({ currentLevel: 8, num1: 30, num2: 20, operator: '+' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for level 9', () => {
      renderAid({ currentLevel: 9, num1: 15, num2: 7, operator: '-' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for level 13', () => {
      renderAid({ currentLevel: 13, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })
  })

  // ── Dismiss Behaviour ──────────────────────────────────────────────────

  describe('dismiss behaviour', () => {
    it('shows the "I got it!" button', () => {
      renderAid()
      const button = screen.getByTestId('dismiss-aid-button')
      expect(button).toBeTruthy()
      expect(button.textContent).toBe('I got it!')
    })

    it('hides the aid when "I got it!" is clicked', () => {
      renderAid()
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()

      fireEvent.click(screen.getByTestId('dismiss-aid-button'))

      expect(screen.queryByTestId('learning-aid-container')).toBeNull()
    })

    it('auto-resets dismissed state when key changes (remount)', () => {
      const { unmount } = render(<LearningAid {...defaultProps} key={1} />)

      // Dismiss the aid
      fireEvent.click(screen.getByTestId('dismiss-aid-button'))
      expect(screen.queryByTestId('learning-aid-container')).toBeNull()

      // Unmount and remount with a new key to simulate a new problem
      unmount()
      render(<LearningAid {...defaultProps} key={2} />)

      // Aid should reappear
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
    })

    it('stays dismissed within the same key (same mount)', () => {
      const { rerender } = render(<LearningAid {...defaultProps} key={1} />)

      fireEvent.click(screen.getByTestId('dismiss-aid-button'))
      expect(screen.queryByTestId('learning-aid-container')).toBeNull()

      // Rerender with same key — component stays mounted, dismissed persists
      rerender(<LearningAid {...defaultProps} key={1} />)
      expect(screen.queryByTestId('learning-aid-container')).toBeNull()
    })

    it('dismiss works with StrategyHint (level 5+)', () => {
      renderAid({ currentLevel: 5, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()

      fireEvent.click(screen.getByTestId('dismiss-aid-button'))

      expect(screen.queryByTestId('learning-aid-container')).toBeNull()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })

    it('auto-resets on new problem with StrategyHint (key change)', () => {
      const { unmount } = render(
        <LearningAid
          isStruggling={true}
          currentLevel={6}
          num1={15}
          num2={7}
          operator="-"
          key={1}
        />,
      )

      // Dismiss
      fireEvent.click(screen.getByTestId('dismiss-aid-button'))
      expect(screen.queryByTestId('learning-aid-container')).toBeNull()

      // Remount with new key (new problem)
      unmount()
      render(
        <LearningAid
          isStruggling={true}
          currentLevel={6}
          num1={13}
          num2={5}
          operator="-"
          key={2}
        />,
      )

      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })
  })

  // ── Container Styling ──────────────────────────────────────────────────

  describe('container styling', () => {
    it('has max-h-[120px] class for DotCounter', () => {
      renderAid({ currentLevel: 2 })
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('max-h-[120px]')
    })

    it('has max-h-[160px] class for StrategyHint', () => {
      renderAid({ currentLevel: 5, num1: 8, num2: 5, operator: '+' })
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('max-h-[160px]')
    })

    it('has overflow-hidden class', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('overflow-hidden')
    })

    it('has bg-black/20 backdrop-blur-sm class', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('bg-black/20')
      expect(container.className).toContain('backdrop-blur-sm')
    })

    it('has rounded-2xl class', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('rounded-2xl')
    })

    it('has animate-aid-enter class', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('animate-aid-enter')
    })

    it('has motion-reduce:animate-none class', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('motion-reduce:animate-none')
    })
  })

  // ── Accessibility ──────────────────────────────────────────────────────

  describe('accessibility', () => {
    it('dismiss button has aria-label', () => {
      renderAid()
      const button = screen.getByTestId('dismiss-aid-button')
      expect(button.getAttribute('aria-label')).toBe('Dismiss learning aid')
    })

    it('dismiss button has minimum 44px touch target', () => {
      renderAid()
      const button = screen.getByTestId('dismiss-aid-button')
      expect(button.className).toContain('min-h-[44px]')
    })

    it('dismiss button has type="button"', () => {
      renderAid()
      const button = screen.getByTestId('dismiss-aid-button')
      expect(button.getAttribute('type')).toBe('button')
    })

    it('dismiss button has focus ring styles', () => {
      renderAid()
      const button = screen.getByTestId('dismiss-aid-button')
      expect(button.className).toContain('focus:outline-none')
      expect(button.className).toContain('focus:ring-2')
    })
  })

  // ── Props Forwarding ───────────────────────────────────────────────────

  describe('props forwarding', () => {
    it('passes num1 and num2 to DotCounter for addition', () => {
      renderAid({ currentLevel: 1, num1: 4, num2: 3, operator: '+' })
      // DotCounter for addition: num1 blue dots + num2 gold dots
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('aria-label')).toBe('4 blue dots plus 3 gold dots')
    })

    it('passes operator to DotCounter for subtraction', () => {
      renderAid({ currentLevel: 3, num1: 7, num2: 3, operator: '-' })
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('aria-label')).toBe('7 blue dots minus 3 faded dots')
    })

    it('passes num1, num2, and operator to StrategyHint', () => {
      renderAid({ currentLevel: 5, num1: 8, num2: 5, operator: '+' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint.getAttribute('aria-label')).toBe('Strategy hint for 8 + 5')
    })

    it('passes subtraction props to StrategyHint', () => {
      renderAid({ currentLevel: 6, num1: 15, num2: 7, operator: '-' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint.getAttribute('aria-label')).toBe('Strategy hint for 15 - 7')
    })
  })

  // ── StrategyHint Integration ───────────────────────────────────────────

  describe('StrategyHint integration', () => {
    it('strategies render for level 5+ problems', () => {
      renderAid({ currentLevel: 5, num1: 8, num2: 5, operator: '+' })
      // StrategyHint should render with strategy content
      const hint = screen.getByTestId('strategy-hint')
      expect(hint).toBeTruthy()
      // Should have strategy steps (an ordered list with items)
      const ol = hint.querySelector('ol')
      expect(ol).toBeTruthy()
      const items = ol.querySelectorAll('li')
      expect(items.length).toBeGreaterThan(0)
    })

    it('"Show me another way" works in orchestrated context', () => {
      // 8+3 triggers bridging_add + count_on (2 strategies)
      renderAid({ currentLevel: 7, num1: 8, num2: 3, operator: '+' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint).toBeTruthy()

      const cycleButton = screen.getByRole('button', { name: /show me another way/i })
      expect(cycleButton).toBeTruthy()

      // Counter should show "Strategy 1 of N"
      expect(screen.getByText(/Strategy 1 of/)).toBeTruthy()

      // Click cycle button
      fireEvent.click(cycleButton)

      // Counter should update to "Strategy 2 of N"
      expect(screen.getByText(/Strategy 2 of/)).toBeTruthy()
    })

    it('renders strategy name and steps for a level 8 addition problem', () => {
      renderAid({ currentLevel: 8, num1: 30, num2: 20, operator: '+' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint).toBeTruthy()
      // Should have at least one strategy name and steps
      const ol = hint.querySelector('ol')
      expect(ol).toBeTruthy()
    })

    it('renders strategy content for a level 9 subtraction problem', () => {
      renderAid({ currentLevel: 9, num1: 45, num2: 8, operator: '-' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint).toBeTruthy()
      const ol = hint.querySelector('ol')
      expect(ol).toBeTruthy()
      expect(ol.querySelectorAll('li').length).toBeGreaterThan(0)
    })
  })
})
