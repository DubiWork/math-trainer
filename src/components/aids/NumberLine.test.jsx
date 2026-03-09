/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import NumberLine from './NumberLine'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const defaultProps = {
  num1: 7,
  num2: 3,
  operator: '+',
}

function renderNumberLine(overrides = {}) {
  return render(<NumberLine {...defaultProps} {...overrides} />)
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('NumberLine', () => {
  afterEach(() => {
    cleanup()
  })

  // ── Rendering ─────────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders the SVG container', () => {
      renderNumberLine()
      const svg = screen.getByTestId('number-line')
      expect(svg).toBeTruthy()
      expect(svg.tagName.toLowerCase()).toBe('svg')
    })

    it('renders the base line', () => {
      renderNumberLine()
      const base = screen.getByTestId('number-line-base')
      expect(base).toBeTruthy()
      expect(base.tagName.toLowerCase()).toBe('line')
    })

    it('renders tick marks from 0 to maxValue', () => {
      renderNumberLine({ num1: 5, num2: 3, operator: '+' })
      // maxValue = max(5, 5+3, 8, 20) = 20, so ticks 0..20
      expect(screen.getByTestId('tick-0')).toBeTruthy()
      expect(screen.getByTestId('tick-5')).toBeTruthy()
      expect(screen.getByTestId('tick-10')).toBeTruthy()
      expect(screen.getByTestId('tick-15')).toBeTruthy()
      expect(screen.getByTestId('tick-20')).toBeTruthy()
    })

    it('renders major tick labels at multiples of 5', () => {
      renderNumberLine({ num1: 5, num2: 3, operator: '+' })
      expect(screen.getByTestId('tick-label-0')).toBeTruthy()
      expect(screen.getByTestId('tick-label-5')).toBeTruthy()
      expect(screen.getByTestId('tick-label-10')).toBeTruthy()
      expect(screen.getByTestId('tick-label-15')).toBeTruthy()
      expect(screen.getByTestId('tick-label-20')).toBeTruthy()
    })

    it('does not render labels for non-major ticks', () => {
      renderNumberLine({ num1: 5, num2: 3, operator: '+' })
      expect(screen.queryByTestId('tick-label-1')).toBeNull()
      expect(screen.queryByTestId('tick-label-3')).toBeNull()
      expect(screen.queryByTestId('tick-label-7')).toBeNull()
    })

    it('renders the start dot', () => {
      renderNumberLine()
      const dot = screen.getByTestId('start-dot')
      expect(dot).toBeTruthy()
      expect(dot.tagName.toLowerCase()).toBe('circle')
      expect(dot.getAttribute('fill')).toBe('#0066cc')
    })

    it('renders the answer marker as "?"', () => {
      renderNumberLine()
      const marker = screen.getByTestId('answer-marker')
      expect(marker).toBeTruthy()
      expect(marker.textContent).toBe('?')
      expect(marker.getAttribute('fill')).toBe('#ffd700')
    })
  })

  // ── Addition ──────────────────────────────────────────────────────────

  describe('addition (+)', () => {
    it('renders num2 jump arcs for addition', () => {
      renderNumberLine({ num1: 3, num2: 4, operator: '+' })
      expect(screen.getByTestId('arc-0')).toBeTruthy()
      expect(screen.getByTestId('arc-1')).toBeTruthy()
      expect(screen.getByTestId('arc-2')).toBeTruthy()
      expect(screen.getByTestId('arc-3')).toBeTruthy()
      expect(screen.queryByTestId('arc-4')).toBeNull()
    })

    it('arcs have staggered animation delay', () => {
      renderNumberLine({ num1: 2, num2: 3, operator: '+' })
      const arc0 = screen.getByTestId('arc-0')
      const arc1 = screen.getByTestId('arc-1')
      const arc2 = screen.getByTestId('arc-2')
      expect(arc0.style.animationDelay).toBe('0ms')
      expect(arc1.style.animationDelay).toBe('100ms')
      expect(arc2.style.animationDelay).toBe('200ms')
    })

    it('arcs use stroke-dasharray for animation', () => {
      renderNumberLine({ num1: 5, num2: 2, operator: '+' })
      const arc = screen.getByTestId('arc-0')
      expect(arc.getAttribute('stroke-dasharray')).toBeTruthy()
      expect(arc.getAttribute('stroke-dashoffset')).toBeTruthy()
    })

    it('arcs have the arc-draw animation class', () => {
      renderNumberLine({ num1: 5, num2: 2, operator: '+' })
      const arc = screen.getByTestId('arc-0')
      expect(arc.classList.contains('animate-arc-draw')).toBe(true)
    })

    it('does not display the actual answer number', () => {
      renderNumberLine({ num1: 7, num2: 5, operator: '+' })
      // The answer is 12. Ensure "12" does not appear as a standalone marker.
      const marker = screen.getByTestId('answer-marker')
      expect(marker.textContent).toBe('?')
      // 12 does appear as a tick label at position 12, but not in the marker.
    })
  })

  // ── Subtraction ───────────────────────────────────────────────────────

  describe('subtraction (-)', () => {
    it('renders num2 jump arcs for subtraction', () => {
      renderNumberLine({ num1: 10, num2: 3, operator: '-' })
      expect(screen.getByTestId('arc-0')).toBeTruthy()
      expect(screen.getByTestId('arc-1')).toBeTruthy()
      expect(screen.getByTestId('arc-2')).toBeTruthy()
      expect(screen.queryByTestId('arc-3')).toBeNull()
    })

    it('sets the aria-label with "minus"', () => {
      renderNumberLine({ num1: 15, num2: 6, operator: '-' })
      const svg = screen.getByTestId('number-line')
      expect(svg.getAttribute('aria-label')).toBe(
        'Number line showing 15 minus 6, answer hidden',
      )
    })

    it('renders the answer marker for subtraction', () => {
      renderNumberLine({ num1: 12, num2: 5, operator: '-' })
      const marker = screen.getByTestId('answer-marker')
      expect(marker.textContent).toBe('?')
    })
  })

  // ── Scale / Max Value ─────────────────────────────────────────────────

  describe('scale', () => {
    it('scales up when num1 + num2 exceeds 20', () => {
      renderNumberLine({ num1: 15, num2: 10, operator: '+' })
      // maxValue = max(15, 25, 25, 20) = 25
      expect(screen.getByTestId('tick-25')).toBeTruthy()
      expect(screen.getByTestId('tick-label-25')).toBeTruthy()
    })

    it('always shows at least 0..20 range', () => {
      renderNumberLine({ num1: 2, num2: 1, operator: '+' })
      // maxValue = max(2, 3, 3, 20) = 20
      expect(screen.getByTestId('tick-0')).toBeTruthy()
      expect(screen.getByTestId('tick-20')).toBeTruthy()
    })
  })

  // ── Accessibility ─────────────────────────────────────────────────────

  describe('accessibility', () => {
    it('has role="img" on the SVG', () => {
      renderNumberLine()
      const svg = screen.getByTestId('number-line')
      expect(svg.getAttribute('role')).toBe('img')
    })

    it('has a descriptive aria-label for addition', () => {
      renderNumberLine({ num1: 12, num2: 5, operator: '+' })
      const svg = screen.getByTestId('number-line')
      expect(svg.getAttribute('aria-label')).toBe(
        'Number line showing 12 plus 5, answer hidden',
      )
    })

    it('has a descriptive aria-label for subtraction', () => {
      renderNumberLine({ num1: 18, num2: 4, operator: '-' })
      const svg = screen.getByTestId('number-line')
      expect(svg.getAttribute('aria-label')).toBe(
        'Number line showing 18 minus 4, answer hidden',
      )
    })

    it('arcs have motion-reduce classes to disable animation', () => {
      renderNumberLine({ num1: 3, num2: 2, operator: '+' })
      const arc = screen.getByTestId('arc-0')
      expect(arc.classList.contains('motion-reduce:animate-none')).toBe(true)
    })
  })

  // ── Edge cases ────────────────────────────────────────────────────────

  describe('edge cases', () => {
    it('handles num2 = 0 (no arcs)', () => {
      renderNumberLine({ num1: 5, num2: 0, operator: '+' })
      expect(screen.queryByTestId('arc-0')).toBeNull()
    })

    it('handles num1 = 0 for addition', () => {
      renderNumberLine({ num1: 0, num2: 4, operator: '+' })
      expect(screen.getByTestId('start-dot')).toBeTruthy()
      expect(screen.getByTestId('arc-0')).toBeTruthy()
      expect(screen.getByTestId('arc-3')).toBeTruthy()
      expect(screen.queryByTestId('arc-4')).toBeNull()
    })

    it('handles single-step operation (num2 = 1)', () => {
      renderNumberLine({ num1: 10, num2: 1, operator: '+' })
      expect(screen.getByTestId('arc-0')).toBeTruthy()
      expect(screen.queryByTestId('arc-1')).toBeNull()
    })

    it('handles large numbers that exceed 20', () => {
      renderNumberLine({ num1: 18, num2: 7, operator: '+' })
      // maxValue = max(18, 25, 25, 20) = 25
      expect(screen.getByTestId('tick-25')).toBeTruthy()
    })
  })

  // ── Styling ───────────────────────────────────────────────────────────

  describe('styling', () => {
    it('base line uses correct stroke colour', () => {
      renderNumberLine()
      const base = screen.getByTestId('number-line-base')
      expect(base.getAttribute('stroke')).toBe('#666666')
      expect(base.getAttribute('stroke-width')).toBe('2')
    })

    it('arcs use sonic.blue stroke with no fill', () => {
      renderNumberLine({ num1: 5, num2: 2, operator: '+' })
      const arc = screen.getByTestId('arc-0')
      expect(arc.getAttribute('stroke')).toBe('#0066cc')
      expect(arc.getAttribute('fill')).toBe('none')
      expect(arc.getAttribute('stroke-width')).toBe('2')
    })

    it('start dot uses sonic.blue fill', () => {
      renderNumberLine()
      const dot = screen.getByTestId('start-dot')
      expect(dot.getAttribute('fill')).toBe('#0066cc')
    })

    it('answer marker uses sonic.gold fill', () => {
      renderNumberLine()
      const marker = screen.getByTestId('answer-marker')
      expect(marker.getAttribute('fill')).toBe('#ffd700')
    })

    it('SVG has responsive width and max height', () => {
      renderNumberLine()
      const svg = screen.getByTestId('number-line')
      expect(svg.classList.contains('w-full')).toBe(true)
      expect(svg.classList.contains('max-h-[120px]')).toBe(true)
    })
  })
})
