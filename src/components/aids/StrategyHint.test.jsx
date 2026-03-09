/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import StrategyHint from './StrategyHint'
import { getStrategies } from '../../utils/strategies'

// ── Helpers ──────────────────────────────────────────────────────────────────

const defaultProps = {
  num1: 8,
  num2: 5,
  operator: '+',
}

function renderStrategyHint(overrides = {}) {
  return render(<StrategyHint {...defaultProps} {...overrides} />)
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('StrategyHint', () => {
  afterEach(() => {
    cleanup()
  })

  // ── Rendering ─────────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders first strategy name on mount', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      expect(screen.getByText(strategies[0].name)).toBeTruthy()
    })

    it('renders numbered steps for the first strategy', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      const steps = strategies[0].steps
      for (const step of steps) {
        expect(screen.getByText(step)).toBeTruthy()
      }
    })

    it('renders steps as an ordered list', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const ol = screen.getByTestId('strategy-hint').querySelector('ol')
      expect(ol).toBeTruthy()
    })

    it('renders the correct number of step items', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      const ol = screen.getByTestId('strategy-hint').querySelector('ol')
      const items = ol.querySelectorAll('li')
      expect(items.length).toBe(strategies[0].steps.length)
    })

    it('renders step number badges starting at 1', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      for (let i = 0; i < strategies[0].steps.length; i++) {
        const badge = screen.getByTestId('strategy-hint')
          .querySelectorAll('ol li span[aria-hidden="true"]')[i]
        expect(badge.textContent).toBe(String(i + 1))
      }
    })

    it('shows strategy counter "Strategy 1 of N"', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      expect(
        screen.getByText(`Strategy 1 of ${strategies.length}`),
      ).toBeTruthy()
    })
  })

  // ── Cycling ───────────────────────────────────────────────────────────

  describe('cycling strategies', () => {
    it('cycles to next strategy on "Show me another way" click', () => {
      // 8+3 triggers bridging_add + count_on (2 strategies)
      renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const strategies = getStrategies(8, 3, '+')
      expect(strategies.length).toBeGreaterThan(1)

      const button = screen.getByRole('button', { name: /show me another way/i })
      fireEvent.click(button)

      expect(screen.getByText(strategies[1].name)).toBeTruthy()
      expect(
        screen.getByText(`Strategy 2 of ${strategies.length}`),
      ).toBeTruthy()
    })

    it('wraps around to first strategy after last', () => {
      // 8+3 triggers bridging_add + count_on (2 strategies)
      renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const strategies = getStrategies(8, 3, '+')
      const button = screen.getByRole('button', { name: /show me another way/i })

      // Click through all strategies
      for (let i = 0; i < strategies.length; i++) {
        fireEvent.click(button)
      }

      // Should be back to strategy 1
      expect(screen.getByText(strategies[0].name)).toBeTruthy()
      expect(
        screen.getByText(`Strategy 1 of ${strategies.length}`),
      ).toBeTruthy()
    })

    it('cycles 1 -> 2 -> 3 -> 1 for a 3-strategy problem', () => {
      // 2-3 triggers near_doubles + bridging_sub + count_back (3 strategies)
      renderStrategyHint({ num1: 2, num2: 3, operator: '-' })
      const strategies = getStrategies(2, 3, '-')
      expect(strategies.length).toBeGreaterThanOrEqual(3)

      const button = screen.getByRole('button', { name: /show me another way/i })

      // Start at strategy 1
      expect(screen.getByText(`Strategy 1 of ${strategies.length}`)).toBeTruthy()

      // Click to strategy 2
      fireEvent.click(button)
      expect(screen.getByText(`Strategy 2 of ${strategies.length}`)).toBeTruthy()

      // Click to strategy 3
      fireEvent.click(button)
      expect(screen.getByText(`Strategy 3 of ${strategies.length}`)).toBeTruthy()

      // Click wraps to strategy 1
      fireEvent.click(button)
      expect(screen.getByText(`Strategy 1 of ${strategies.length}`)).toBeTruthy()
    })

    it('hides "Show me another way" button when only 1 strategy', () => {
      // 9+5: bridging only (no doubles, no near-doubles, not count-on since min > 3)
      renderStrategyHint({ num1: 9, num2: 5, operator: '+' })
      const strategies = getStrategies(9, 5, '+')
      expect(strategies.length).toBe(1)

      expect(
        screen.queryByRole('button', { name: /show me another way/i }),
      ).toBeNull()
    })

    it('shows "Show me another way" button when multiple strategies', () => {
      // 8+3 triggers bridging_add + count_on (2 strategies)
      renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const strategies = getStrategies(8, 3, '+')
      expect(strategies.length).toBeGreaterThan(1)

      expect(
        screen.getByRole('button', { name: /show me another way/i }),
      ).toBeTruthy()
    })
  })

  // ── Props Change Reset ────────────────────────────────────────────────

  describe('props change reset', () => {
    it('resets currentIndex to 0 when num1 changes', () => {
      // 8+3 has 2 strategies: bridging_add + count_on
      const { rerender } = renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const strategies8 = getStrategies(8, 3, '+')
      expect(strategies8.length).toBeGreaterThan(1)

      // Cycle to strategy 2
      const button = screen.getByRole('button', { name: /show me another way/i })
      fireEvent.click(button)
      expect(screen.getByText(`Strategy 2 of ${strategies8.length}`)).toBeTruthy()

      // Change num1 — should reset to strategy 1
      rerender(<StrategyHint num1={7} num2={3} operator="+" />)
      const strategies7 = getStrategies(7, 3, '+')
      expect(
        screen.getByText(`Strategy 1 of ${strategies7.length}`),
      ).toBeTruthy()
    })

    it('resets currentIndex to 0 when num2 changes', () => {
      // 9+2 has 2 strategies: bridging_add + count_on
      const { rerender } = renderStrategyHint({ num1: 9, num2: 2, operator: '+' })
      const strategies92 = getStrategies(9, 2, '+')
      expect(strategies92.length).toBeGreaterThan(1)

      const button = screen.getByRole('button', { name: /show me another way/i })
      fireEvent.click(button)

      rerender(<StrategyHint num1={9} num2={5} operator="+" />)
      const strategies95 = getStrategies(9, 5, '+')
      expect(
        screen.getByText(`Strategy 1 of ${strategies95.length}`),
      ).toBeTruthy()
    })

    it('resets currentIndex to 0 when operator changes', () => {
      // 8+3 has 2 strategies
      const { rerender } = renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const strategiesAdd = getStrategies(8, 3, '+')
      expect(strategiesAdd.length).toBeGreaterThan(1)

      const button = screen.getByRole('button', { name: /show me another way/i })
      fireEvent.click(button)

      rerender(<StrategyHint num1={8} num2={3} operator="-" />)
      const strategiesSub = getStrategies(8, 3, '-')
      expect(
        screen.getByText(`Strategy 1 of ${strategiesSub.length}`),
      ).toBeTruthy()
    })
  })

  // ── Empty Strategies (null return) ────────────────────────────────────

  describe('empty strategies', () => {
    it('returns null for multiplication operator', () => {
      const { container } = render(
        <StrategyHint num1={6} num2={3} operator="*" />,
      )
      expect(container.innerHTML).toBe('')
    })

    it('returns null for division operator', () => {
      const { container } = render(
        <StrategyHint num1={6} num2={3} operator="/" />,
      )
      expect(container.innerHTML).toBe('')
    })

    it('does not render strategy-hint testid for unsupported operators', () => {
      render(<StrategyHint num1={6} num2={3} operator="*" />)
      expect(screen.queryByTestId('strategy-hint')).toBeNull()
    })
  })

  // ── Tailwind Classes / Styling ────────────────────────────────────────

  describe('styling', () => {
    it('strategy name has correct Tailwind classes', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      const nameEl = screen.getByText(strategies[0].name)
      expect(nameEl.className).toContain('text-sonic-gold')
      expect(nameEl.className).toContain('font-game')
      expect(nameEl.className).toContain('font-bold')
    })

    it('step badges have gold background class', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const badge = screen.getByTestId('strategy-hint')
        .querySelector('ol li span[aria-hidden="true"]')
      expect(badge.className).toContain('bg-sonic-gold/30')
      expect(badge.className).toContain('rounded-full')
      expect(badge.className).toContain('w-5')
      expect(badge.className).toContain('h-5')
    })

    it('step items have text-sm text-white classes', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const li = screen.getByTestId('strategy-hint').querySelector('ol li')
      expect(li.className).toContain('text-sm')
      expect(li.className).toContain('text-white')
    })

    it('container has max-h-[160px] class', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const root = screen.getByTestId('strategy-hint')
      expect(root.className).toContain('max-h-[160px]')
    })

    it('container uses text-start logical property', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const root = screen.getByTestId('strategy-hint')
      expect(root.className).toContain('text-start')
    })

    it('counter text has correct opacity and size classes', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      const counter = screen.getByText(`Strategy 1 of ${strategies.length}`)
      expect(counter.className).toContain('text-white/60')
      expect(counter.className).toContain('text-xs')
    })
  })

  // ── Step Animation ────────────────────────────────────────────────────

  describe('step animation', () => {
    it('step items have animate-step-fade class', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const items = screen.getByTestId('strategy-hint').querySelectorAll('ol li')
      for (const item of items) {
        expect(item.className).toContain('animate-step-fade')
      }
    })

    it('step stagger: animationDelay increments by 80ms per step', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const items = screen.getByTestId('strategy-hint').querySelectorAll('ol li')
      for (let i = 0; i < items.length; i++) {
        expect(items[i].style.animationDelay).toBe(`${i * 80}ms`)
      }
    })

    it('respects prefers-reduced-motion (motion-reduce:animate-none)', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const items = screen.getByTestId('strategy-hint').querySelectorAll('ol li')
      for (const item of items) {
        expect(item.className).toContain('motion-reduce:animate-none')
      }
    })
  })

  // ── Accessibility ─────────────────────────────────────────────────────

  describe('accessibility', () => {
    it('root has role="region"', () => {
      renderStrategyHint()
      const root = screen.getByTestId('strategy-hint')
      expect(root.getAttribute('role')).toBe('region')
    })

    it('root has descriptive aria-label', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const root = screen.getByTestId('strategy-hint')
      expect(root.getAttribute('aria-label')).toBe(
        'Strategy hint for 8 + 5',
      )
    })

    it('has aria-live="polite" on strategy content area', () => {
      renderStrategyHint()
      const root = screen.getByTestId('strategy-hint')
      const liveRegion = root.querySelector('[aria-live="polite"]')
      expect(liveRegion).toBeTruthy()
    })

    it('cycle button has descriptive aria-label', () => {
      // 8+3 has 2 strategies, so the cycle button is visible
      renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const button = screen.getByRole('button', { name: /show me another way/i })
      expect(button.getAttribute('aria-label')).toBe(
        'Show me another way to solve this problem',
      )
    })

    it('cycle button has min-h-[44px] touch target', () => {
      // 8+3 has 2 strategies, so the cycle button is visible
      renderStrategyHint({ num1: 8, num2: 3, operator: '+' })
      const button = screen.getByRole('button', { name: /show me another way/i })
      expect(button.className).toContain('min-h-[44px]')
    })

    it('step badges are aria-hidden', () => {
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const badges = screen.getByTestId('strategy-hint')
        .querySelectorAll('ol li span[aria-hidden="true"]')
      expect(badges.length).toBeGreaterThan(0)
    })

    it('has data-testid="strategy-hint" on root element', () => {
      renderStrategyHint()
      expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    })
  })

  // ── PropTypes ─────────────────────────────────────────────────────────

  describe('PropTypes', () => {
    it('warns on missing num1 prop', () => {
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
      render(<StrategyHint num2={5} operator="+" />)
      expect(spy).toHaveBeenCalled()
      const propTypeError = spy.mock.calls.find((call) =>
        call.some((arg) => typeof arg === 'string' && arg.includes('num1')),
      )
      expect(propTypeError).toBeTruthy()
      spy.mockRestore()
    })

    it('warns on missing num2 prop', () => {
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
      render(<StrategyHint num1={8} operator="+" />)
      expect(spy).toHaveBeenCalled()
      const propTypeError = spy.mock.calls.find((call) =>
        call.some((arg) => typeof arg === 'string' && arg.includes('num2')),
      )
      expect(propTypeError).toBeTruthy()
      spy.mockRestore()
    })

    it('warns on missing operator prop', () => {
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
      render(<StrategyHint num1={8} num2={5} />)
      expect(spy).toHaveBeenCalled()
      const propTypeError = spy.mock.calls.find((call) =>
        call.some(
          (arg) => typeof arg === 'string' && arg.includes('operator'),
        ),
      )
      expect(propTypeError).toBeTruthy()
      spy.mockRestore()
    })
  })

  // ── Step Constraints ──────────────────────────────────────────────────

  describe('step constraints', () => {
    it('each strategy renders at most 3 step items', () => {
      // Test with a problem that produces multiple strategies
      renderStrategyHint({ num1: 8, num2: 5, operator: '+' })
      const strategies = getStrategies(8, 5, '+')
      for (const strategy of strategies) {
        expect(strategy.steps.length).toBeLessThanOrEqual(3)
      }
      const items = screen.getByTestId('strategy-hint').querySelectorAll('ol li')
      expect(items.length).toBeLessThanOrEqual(3)
    })

    it('3-step maximum holds for subtraction strategies', () => {
      renderStrategyHint({ num1: 13, num2: 5, operator: '-' })
      const strategies = getStrategies(13, 5, '-')
      for (const strategy of strategies) {
        expect(strategy.steps.length).toBeLessThanOrEqual(3)
      }
      const items = screen.getByTestId('strategy-hint').querySelectorAll('ol li')
      expect(items.length).toBeLessThanOrEqual(3)
    })
  })

  // ── Subtraction Rendering ─────────────────────────────────────────────

  describe('subtraction', () => {
    it('renders strategies for subtraction problems', () => {
      renderStrategyHint({ num1: 15, num2: 7, operator: '-' })
      const strategies = getStrategies(15, 7, '-')
      expect(strategies.length).toBeGreaterThan(0)
      expect(screen.getByText(strategies[0].name)).toBeTruthy()
    })

    it('shows correct strategy counter for subtraction', () => {
      renderStrategyHint({ num1: 15, num2: 7, operator: '-' })
      const strategies = getStrategies(15, 7, '-')
      expect(
        screen.getByText(`Strategy 1 of ${strategies.length}`),
      ).toBeTruthy()
    })

    it('renders steps for subtraction strategy', () => {
      renderStrategyHint({ num1: 15, num2: 7, operator: '-' })
      const strategies = getStrategies(15, 7, '-')
      for (const step of strategies[0].steps) {
        expect(screen.getByText(step)).toBeTruthy()
      }
    })
  })
})
