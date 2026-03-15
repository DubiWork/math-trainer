/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import LearningAid from './LearningAid'

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Grade 1, +/- only — shows DotCounter */
const grade1AddSubConfig = {
  grade: 1,
  operationType: 'integer-arithmetic',
  operators: ['+', '-'],
}

/** Grade 1, + only — shows DotCounter */
const grade1AddConfig = {
  grade: 1,
  operationType: 'integer-arithmetic',
  operators: ['+'],
}

/** Grade 1, - only — shows DotCounter */
const grade1SubConfig = {
  grade: 1,
  operationType: 'integer-arithmetic',
  operators: ['-'],
}

/** Grade 1, +/-/* — NOT pure add/sub → shows StrategyHint */
const grade1MixedWithMulConfig = {
  grade: 1,
  operationType: 'integer-arithmetic',
  operators: ['+', '-', '*'],
}

/** Grade 2, +/- — shows StrategyHint (grade > 1) */
const grade2AddSubConfig = {
  grade: 2,
  operationType: 'integer-arithmetic',
  operators: ['+', '-'],
}

/** Grade 3, any operators — shows StrategyHint */
const grade3AllOpsConfig = {
  grade: 3,
  operationType: 'integer-arithmetic',
  operators: ['+', '-', '*', '/'],
}

// Grade 2, multiply only
const grade2MulConfig = {
  grade: 2,
  operationType: 'integer-arithmetic',
  operators: ['*'],
}

// Grade 2, all four operations (+, -, *, /)
const grade2MixedConfig = {
  grade: 2,
  operationType: 'integer-arithmetic',
  operators: ['+', '-', '*', '/'],
}

const defaultProps = {
  isStruggling: true,
  levelConfig: grade1AddSubConfig,
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

    it('renders the container when struggling with a grade 1 add/sub level', () => {
      renderAid({ isStruggling: true, levelConfig: grade1AddSubConfig })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
    })

    it('renders StrategyHint for grade 2 +/- level when struggling', () => {
      renderAid({
        isStruggling: true,
        levelConfig: grade2AddSubConfig,
        num1: 30,
        num2: 20,
        operator: '+',
      })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 2 * level when struggling', () => {
      renderAid({
        isStruggling: true,
        levelConfig: grade2MulConfig,
        num1: 15,
        num2: 7,
        operator: '*',
      })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 3 level when struggling', () => {
      renderAid({
        isStruggling: true,
        levelConfig: grade3AllOpsConfig,
        num1: 8,
        num2: 5,
        operator: '+',
      })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })
  })

  // ── Grade-Based Aid Routing ────────────────────────────────────────────

  describe('grade-based aid routing', () => {
    it('grade 1 + operators ["+"] → dot-counter', () => {
      renderAid({ levelConfig: grade1AddConfig, operator: '+', num1: 3, num2: 2 })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })

    it('grade 1 + operators ["-"] → dot-counter', () => {
      renderAid({ levelConfig: grade1SubConfig, operator: '-', num1: 5, num2: 2 })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })

    it('grade 1 + operators ["+", "-"] → dot-counter', () => {
      renderAid({ levelConfig: grade1AddSubConfig, operator: '+', num1: 4, num2: 3 })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })

    it('grade 1 + operators ["+", "-", "*"] → strategy-hint (not pure add/sub)', () => {
      renderAid({ levelConfig: grade1MixedWithMulConfig, operator: '+', num1: 4, num2: 3 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('grade 2 + operators ["+", "-"] → strategy-hint (grade > 1)', () => {
      renderAid({ levelConfig: grade2AddSubConfig, operator: '+', num1: 12, num2: 8 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('grade 3 + any operators → strategy-hint', () => {
      renderAid({ levelConfig: grade3AllOpsConfig, operator: '+', num1: 20, num2: 15 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })
  })

  // ── Aid Selection (via levelConfig) ───────────────────────────────────

  describe('aid selection', () => {
    it('renders DotCounter for grade 1 add-only level', () => {
      renderAid({ levelConfig: grade1AddConfig, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })

    it('renders DotCounter for grade 1 subtract-only level', () => {
      renderAid({ levelConfig: grade1SubConfig, operator: '-', num1: 5, num2: 2 })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('renders DotCounter for grade 1 mixed +/- level', () => {
      renderAid({ levelConfig: grade1AddSubConfig, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('renders StrategyHint for grade 1 level with * operator in config', () => {
      renderAid({ levelConfig: grade1MixedWithMulConfig, operator: '+', num1: 8, num2: 5 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('renders StrategyHint for grade 2 +/- level', () => {
      renderAid({ levelConfig: grade2AddSubConfig, operator: '-', num1: 15, num2: 7 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 2 mixed operations level', () => {
      renderAid({ levelConfig: grade2MixedConfig, operator: '+', num1: 8, num2: 5 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 3 level', () => {
      renderAid({ levelConfig: grade3AllOpsConfig, operator: '+', num1: 8, num2: 5 })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    // ── Boundary tests ────────────────────────────────────────────────

    it('boundary: grade 1 pure +/- → DotCounter; grade 1 with * → StrategyHint', () => {
      // Grade 1 pure +/- -> DotCounter
      renderAid({ levelConfig: grade1AddSubConfig, num1: 3, num2: 2, operator: '+' })
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
      cleanup()

      // Grade 1 with * in operators -> StrategyHint
      renderAid({ levelConfig: grade1MixedWithMulConfig, num1: 8, num2: 5, operator: '+' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('renders StrategyHint for grade 2 +/- (level 13 equivalent)', () => {
      renderAid({
        levelConfig: { grade: 2, operationType: 'integer-arithmetic', operators: ['+', '-'] },
        num1: 8,
        num2: 5,
        operator: '+',
      })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 2 * level', () => {
      renderAid({ levelConfig: grade2MulConfig, num1: 15, num2: 7, operator: '*' })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 3 / level', () => {
      renderAid({
        levelConfig: { grade: 3, operationType: 'integer-arithmetic', operators: ['/'] },
        num1: 15,
        num2: 7,
        operator: '-',
      })
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })
  })

  // ── Backward Compatibility: level number fallback ──────────────────────

  describe('backward compatibility (currentLevel fallback)', () => {
    it('resolves grade 1 +/- from currentLevel=2 when no levelConfig passed', () => {
      render(
        <LearningAid
          isStruggling={true}
          currentLevel={2}
          num1={3}
          num2={2}
          operator="+"
        />,
      )
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('resolves grade 2 from currentLevel=9 when no levelConfig passed', () => {
      render(
        <LearningAid
          isStruggling={true}
          currentLevel={9}
          num1={15}
          num2={7}
          operator="-"
        />,
      )
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('levelConfig prop takes priority over currentLevel', () => {
      // Pass grade 2 config but currentLevel=1 (which would be grade 1)
      render(
        <LearningAid
          isStruggling={true}
          levelConfig={grade2AddSubConfig}
          currentLevel={1}
          num1={3}
          num2={2}
          operator="+"
        />,
      )
      // Should use levelConfig (grade 2) → StrategyHint, not currentLevel (grade 1) → DotCounter
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
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

    it('dismiss works with StrategyHint (grade 2+ level)', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 8, num2: 5, operator: '+' })
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
          levelConfig={grade2AddSubConfig}
          currentLevel={9}
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
          levelConfig={grade2AddSubConfig}
          currentLevel={9}
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
    it('has max-h-[50vh] class for both DotCounter and StrategyHint', () => {
      renderAid({ levelConfig: grade1AddSubConfig })
      const dotContainer = screen.getByTestId('learning-aid-container')
      expect(dotContainer.className).toContain('max-h-[50vh]')
      cleanup()

      renderAid({ levelConfig: grade2AddSubConfig, num1: 8, num2: 5, operator: '+' })
      const strategyContainer = screen.getByTestId('learning-aid-container')
      expect(strategyContainer.className).toContain('max-h-[50vh]')
    })

    it('has flex flex-col layout on the container', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      expect(container.className).toContain('flex')
      expect(container.className).toContain('flex-col')
    })

    it('button is outside the scrollable area (not nested inside overflow container)', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      const button = screen.getByTestId('dismiss-aid-button')
      // Button should be a direct child of the container, not inside the scrollable div
      expect(button.parentElement).toBe(container)
    })

    it('scrollable content area has overflow-y-auto and min-h-0', () => {
      renderAid()
      const container = screen.getByTestId('learning-aid-container')
      // First child div is the scrollable area
      const scrollArea = container.querySelector(':scope > div')
      expect(scrollArea.className).toContain('overflow-y-auto')
      expect(scrollArea.className).toContain('min-h-0')
      expect(scrollArea.className).toContain('flex-1')
    })

    it('dismiss button has shrink-0 class', () => {
      renderAid()
      const button = screen.getByTestId('dismiss-aid-button')
      expect(button.className).toContain('shrink-0')
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
      renderAid({ levelConfig: grade1AddConfig, num1: 4, num2: 3, operator: '+' })
      // DotCounter for addition: num1 blue dots + num2 gold dots
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('aria-label')).toBe('4 blue dots plus 3 gold dots')
    })

    it('passes operator to DotCounter for subtraction', () => {
      renderAid({ levelConfig: grade1SubConfig, num1: 7, num2: 3, operator: '-' })
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('aria-label')).toBe('7 blue dots minus 3 faded dots')
    })

    it('passes num1, num2, and operator to StrategyHint', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 8, num2: 5, operator: '+' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint.getAttribute('aria-label')).toBe('Strategy hint for 8 + 5')
    })

    it('passes subtraction props to StrategyHint', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 15, num2: 7, operator: '-' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint.getAttribute('aria-label')).toBe('Strategy hint for 15 - 7')
    })
  })

  // ── StrategyHint Integration ───────────────────────────────────────────

  describe('StrategyHint integration', () => {
    it('strategies render for grade 2+ problems', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 8, num2: 5, operator: '+' })
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
      renderAid({ levelConfig: grade2AddSubConfig, num1: 8, num2: 3, operator: '+' })
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

    it('renders strategy name and steps for a grade 2 addition problem with tens', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 30, num2: 20, operator: '+' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint).toBeTruthy()
      // Should have at least one strategy name and steps
      const ol = hint.querySelector('ol')
      expect(ol).toBeTruthy()
    })

    it('renders strategy content for a grade 2 subtraction problem', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 45, num2: 8, operator: '-' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint).toBeTruthy()
      const ol = hint.querySelector('ol')
      expect(ol).toBeTruthy()
      expect(ol.querySelectorAll('li').length).toBeGreaterThan(0)
    })
  })

  // ── Multiplication / Division Support ─────────────────────────────────

  describe('multiplication and division', () => {
    it('renders StrategyHint for grade 2 multiplication level', () => {
      renderAid({ levelConfig: grade2MulConfig, num1: 3, num2: 4, operator: '*' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 2 mixed operations level (* operator)', () => {
      renderAid({ levelConfig: grade2MixedConfig, num1: 5, num2: 2, operator: '*' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 2 / operator', () => {
      renderAid({ levelConfig: grade2MixedConfig, num1: 12, num2: 3, operator: '/' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('renders StrategyHint for grade 3 / operator', () => {
      renderAid({
        levelConfig: { grade: 3, operationType: 'integer-arithmetic', operators: ['/'] },
        num1: 20,
        num2: 5,
        operator: '/',
      })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })

    it('falls through to StrategyHint for grade 1 when config includes * operator', () => {
      renderAid({ levelConfig: grade1MixedWithMulConfig, num1: 2, num2: 3, operator: '*' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('falls through to StrategyHint for grade 2 even with +/- operators', () => {
      renderAid({ levelConfig: grade2AddSubConfig, num1: 6, num2: 2, operator: '-' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
      expect(screen.queryByTestId('dot-counter')).toBeNull()
    })

    it('dismiss works with multiplication StrategyHint', () => {
      renderAid({ levelConfig: grade2MulConfig, num1: 3, num2: 4, operator: '*' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()

      fireEvent.click(screen.getByTestId('dismiss-aid-button'))

      expect(screen.queryByTestId('learning-aid-container')).toBeNull()
    })

    it('dismiss works with division StrategyHint', () => {
      renderAid({ levelConfig: grade2MixedConfig, num1: 12, num2: 3, operator: '/' })
      expect(screen.getByTestId('learning-aid-container')).toBeTruthy()

      fireEvent.click(screen.getByTestId('dismiss-aid-button'))

      expect(screen.queryByTestId('learning-aid-container')).toBeNull()
    })

    it('passes multiplication props to StrategyHint aria-label', () => {
      renderAid({ levelConfig: grade2MulConfig, num1: 3, num2: 4, operator: '*' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint.getAttribute('aria-label')).toBe('Strategy hint for 3 * 4')
    })

    it('passes division props to StrategyHint aria-label', () => {
      renderAid({ levelConfig: grade2MixedConfig, num1: 12, num2: 3, operator: '/' })
      const hint = screen.getByTestId('strategy-hint')
      expect(hint.getAttribute('aria-label')).toBe('Strategy hint for 12 / 3')
    })
  })
})
