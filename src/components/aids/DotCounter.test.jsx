/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import DotCounter from './DotCounter'

// ── Helpers ──────────────────────────────────────────────────────────────────

const defaultProps = {
  num1: 3,
  num2: 2,
  operator: '+',
}

function renderDotCounter(overrides = {}) {
  return render(<DotCounter {...defaultProps} {...overrides} />)
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('DotCounter', () => {
  afterEach(() => {
    cleanup()
  })

  // ── Addition ──────────────────────────────────────────────────────────

  describe('addition (+)', () => {
    it('renders the correct number of num1 dots', () => {
      renderDotCounter({ num1: 4, num2: 3, operator: '+' })
      // num1 group has 4 dots
      for (let i = 0; i < 4; i++) {
        expect(screen.getByTestId(`num1-dot-${i}`)).toBeTruthy()
      }
      expect(screen.queryByTestId('num1-dot-4')).toBeNull()
    })

    it('renders the correct number of num2 dots', () => {
      renderDotCounter({ num1: 2, num2: 5, operator: '+' })
      // num2 group has 5 dots
      for (let i = 0; i < 5; i++) {
        expect(screen.getByTestId(`num2-dot-${i}`)).toBeTruthy()
      }
      expect(screen.queryByTestId('num2-dot-5')).toBeNull()
    })

    it('renders num1 dots in sonic-blue', () => {
      renderDotCounter({ num1: 2, num2: 1, operator: '+' })
      const dot = screen.getByTestId('num1-dot-0')
      expect(dot.className).toContain('bg-sonic-blue')
    })

    it('renders num2 dots in sonic-gold', () => {
      renderDotCounter({ num1: 2, num2: 1, operator: '+' })
      const dot = screen.getByTestId('num2-dot-0')
      expect(dot.className).toContain('bg-sonic-gold')
    })

    it('no dots are faded in addition', () => {
      renderDotCounter({ num1: 3, num2: 2, operator: '+' })
      const dot1 = screen.getByTestId('num1-dot-0')
      const dot2 = screen.getByTestId('num2-dot-0')
      expect(dot1.className).not.toContain('opacity-50')
      expect(dot2.className).not.toContain('opacity-50')
    })

    it('shows + operator label', () => {
      renderDotCounter({ operator: '+' })
      const label = screen.getByTestId('operator-label')
      expect(label.textContent).toBe('+')
    })

    it('has correct aria-label for addition', () => {
      renderDotCounter({ num1: 3, num2: 2, operator: '+' })
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('aria-label')).toBe('3 blue dots plus 2 gold dots')
    })
  })

  // ── Subtraction ───────────────────────────────────────────────────────

  describe('subtraction (-)', () => {
    it('renders solid dots equal to num1 - num2', () => {
      renderDotCounter({ num1: 5, num2: 2, operator: '-' })
      // Solid dots: 5 - 2 = 3
      for (let i = 0; i < 3; i++) {
        expect(screen.getByTestId(`solid-dot-${i}`)).toBeTruthy()
      }
      expect(screen.queryByTestId('solid-dot-3')).toBeNull()
    })

    it('renders faded dots equal to num2', () => {
      renderDotCounter({ num1: 5, num2: 2, operator: '-' })
      // Faded dots: 2
      for (let i = 0; i < 2; i++) {
        expect(screen.getByTestId(`faded-dot-${i}`)).toBeTruthy()
      }
      expect(screen.queryByTestId('faded-dot-2')).toBeNull()
    })

    it('faded dots have opacity-50', () => {
      renderDotCounter({ num1: 4, num2: 2, operator: '-' })
      const fadedDot = screen.getByTestId('faded-dot-0')
      expect(fadedDot.className).toContain('opacity-50')
    })

    it('solid dots do not have opacity-50', () => {
      renderDotCounter({ num1: 4, num2: 2, operator: '-' })
      const solidDot = screen.getByTestId('solid-dot-0')
      expect(solidDot.className).not.toContain('opacity-50')
    })

    it('shows - operator label', () => {
      renderDotCounter({ num1: 5, num2: 2, operator: '-' })
      const label = screen.getByTestId('operator-label')
      expect(label.textContent).toBe('-')
    })

    it('has correct aria-label for subtraction', () => {
      renderDotCounter({ num1: 7, num2: 3, operator: '-' })
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('aria-label')).toBe('7 blue dots minus 3 faded dots')
    })
  })

  // ── Staggered Animation ───────────────────────────────────────────────

  describe('staggered animation', () => {
    it('dots have staggered animation delay (60ms per dot)', () => {
      renderDotCounter({ num1: 3, num2: 2, operator: '+' })
      // num1 dots: index 0, 1, 2 → delays 0, 60, 120
      expect(screen.getByTestId('num1-dot-0').style.animationDelay).toBe('0ms')
      expect(screen.getByTestId('num1-dot-1').style.animationDelay).toBe('60ms')
      expect(screen.getByTestId('num1-dot-2').style.animationDelay).toBe('120ms')
    })

    it('num2 dots continue the stagger from num1', () => {
      renderDotCounter({ num1: 3, num2: 2, operator: '+' })
      // num2 starts at index 3 → delays 180, 240
      expect(screen.getByTestId('num2-dot-0').style.animationDelay).toBe('180ms')
      expect(screen.getByTestId('num2-dot-1').style.animationDelay).toBe('240ms')
    })

    it('dots have animate-aid-enter class', () => {
      renderDotCounter({ num1: 1, num2: 1, operator: '+' })
      const dot = screen.getByTestId('num1-dot-0')
      expect(dot.className).toContain('animate-aid-enter')
    })

    it('dots have motion-reduce:animate-none class', () => {
      renderDotCounter({ num1: 1, num2: 1, operator: '+' })
      const dot = screen.getByTestId('num1-dot-0')
      expect(dot.className).toContain('motion-reduce:animate-none')
    })
  })

  // ── Accessibility & Structure ─────────────────────────────────────────

  describe('accessibility and structure', () => {
    it('has role="img" on the container', () => {
      renderDotCounter()
      const counter = screen.getByTestId('dot-counter')
      expect(counter.getAttribute('role')).toBe('img')
    })

    it('dots are aria-hidden', () => {
      renderDotCounter({ num1: 1, num2: 1, operator: '+' })
      const dot = screen.getByTestId('num1-dot-0')
      expect(dot.getAttribute('aria-hidden')).toBe('true')
    })

    it('operator label is aria-hidden', () => {
      renderDotCounter()
      const label = screen.getByTestId('operator-label')
      expect(label.getAttribute('aria-hidden')).toBe('true')
    })

    it('has data-testid="dot-counter" on root', () => {
      renderDotCounter()
      expect(screen.getByTestId('dot-counter')).toBeTruthy()
    })

    it('renders dot group containers', () => {
      renderDotCounter({ num1: 2, num2: 3, operator: '+' })
      expect(screen.getByTestId('num1-group')).toBeTruthy()
      expect(screen.getByTestId('num2-group')).toBeTruthy()
    })
  })

  // ── Edge Cases ────────────────────────────────────────────────────────

  describe('edge cases', () => {
    it('handles num1 = 1 and num2 = 1 addition', () => {
      renderDotCounter({ num1: 1, num2: 1, operator: '+' })
      expect(screen.getByTestId('num1-dot-0')).toBeTruthy()
      expect(screen.queryByTestId('num1-dot-1')).toBeNull()
      expect(screen.getByTestId('num2-dot-0')).toBeTruthy()
      expect(screen.queryByTestId('num2-dot-1')).toBeNull()
    })

    it('handles larger numbers for subtraction', () => {
      renderDotCounter({ num1: 10, num2: 4, operator: '-' })
      // Solid: 6, Faded: 4
      expect(screen.getByTestId('solid-dot-5')).toBeTruthy()
      expect(screen.queryByTestId('solid-dot-6')).toBeNull()
      expect(screen.getByTestId('faded-dot-3')).toBeTruthy()
      expect(screen.queryByTestId('faded-dot-4')).toBeNull()
    })
  })
})
