/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import LevelMap from './LevelMap'

// ── Helpers ──────────────────────────────────────────────────────────────────

function renderLevelMap(overrides = {}) {
  const defaults = { currentLevel: 1 }
  return render(<LevelMap {...defaults} {...overrides} />)
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('LevelMap', () => {
  beforeEach(() => {
    // Mock scrollIntoView since happy-dom does not implement it
    Element.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  // ── Renders all 20 level nodes ──────────────────────────────────────

  it('renders 20 level nodes', () => {
    renderLevelMap({ currentLevel: 1 })
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(20)
  })

  // ── Level names displayed ───────────────────────────────────────────

  it('displays level names below each node', () => {
    renderLevelMap({ currentLevel: 1 })
    expect(screen.getByText('Add within 5')).toBeTruthy()
    expect(screen.getByText('Subtract within 5')).toBeTruthy()
    expect(screen.getByText('Mixed All Ops (to 1000)')).toBeTruthy()
  })

  // ── Completed levels (< currentLevel) ───────────────────────────────

  describe('completed levels (< currentLevel)', () => {
    it('shows green star for completed levels', () => {
      renderLevelMap({ currentLevel: 4 })
      // Levels 1, 2, 3 are completed
      const node1 = screen.getByTestId('level-node-1')
      const node2 = screen.getByTestId('level-node-2')
      const node3 = screen.getByTestId('level-node-3')
      expect(node1.querySelector('[data-testid="star-icon"]')).toBeTruthy()
      expect(node2.querySelector('[data-testid="star-icon"]')).toBeTruthy()
      expect(node3.querySelector('[data-testid="star-icon"]')).toBeTruthy()
    })

    it('completed levels have green text styling', () => {
      renderLevelMap({ currentLevel: 3 })
      const node1 = screen.getByTestId('level-node-1')
      expect(node1.querySelector('.text-green-500')).toBeTruthy()
    })
  })

  // ── Current level (=== currentLevel) ────────────────────────────────

  describe('current level (=== currentLevel)', () => {
    it('shows gold styling for the current level', () => {
      renderLevelMap({ currentLevel: 5 })
      const currentNode = screen.getByTestId('level-node-5')
      expect(currentNode.querySelector('.text-yellow-500')).toBeTruthy()
    })

    it('current level has pulse animation class', () => {
      renderLevelMap({ currentLevel: 5 })
      const currentNode = screen.getByTestId('level-node-5')
      expect(currentNode.querySelector('.animate-pulse-gold')).toBeTruthy()
    })

    it('pulse animation respects prefers-reduced-motion', () => {
      renderLevelMap({ currentLevel: 5 })
      const currentNode = screen.getByTestId('level-node-5')
      const pulsingEl = currentNode.querySelector('.animate-pulse-gold')
      expect(pulsingEl.className).toContain('motion-reduce:animate-none')
    })
  })

  // ── Locked levels (> currentLevel) ──────────────────────────────────

  describe('locked levels (> currentLevel)', () => {
    it('shows grey/faded styling for locked levels', () => {
      renderLevelMap({ currentLevel: 1 })
      const lockedNode = screen.getByTestId('level-node-2')
      expect(lockedNode.querySelector('.text-gray-400')).toBeTruthy()
    })

    it('locked levels have reduced opacity', () => {
      renderLevelMap({ currentLevel: 1 })
      const lockedNode = screen.getByTestId('level-node-2')
      expect(lockedNode.querySelector('.opacity-50')).toBeTruthy()
    })

    it('locked levels show lock icon', () => {
      renderLevelMap({ currentLevel: 1 })
      const lockedNode = screen.getByTestId('level-node-2')
      expect(lockedNode.querySelector('[data-testid="lock-icon"]')).toBeTruthy()
    })
  })

  // ── Accessibility ───────────────────────────────────────────────────

  describe('accessibility', () => {
    it('container has role="list"', () => {
      renderLevelMap({ currentLevel: 1 })
      const list = screen.getByRole('list')
      expect(list).toBeTruthy()
    })

    it('each node has role="listitem"', () => {
      renderLevelMap({ currentLevel: 1 })
      const items = screen.getAllByRole('listitem')
      expect(items).toHaveLength(20)
    })

    it('completed level has correct aria-label', () => {
      renderLevelMap({ currentLevel: 3 })
      const node1 = screen.getByTestId('level-node-1')
      expect(node1.getAttribute('aria-label')).toBe('Level 1: Add within 5 - completed')
    })

    it('current level has correct aria-label', () => {
      renderLevelMap({ currentLevel: 3 })
      const node3 = screen.getByTestId('level-node-3')
      expect(node3.getAttribute('aria-label')).toBe('Level 3: Add to 10 - current')
    })

    it('locked level has correct aria-label', () => {
      renderLevelMap({ currentLevel: 3 })
      const node4 = screen.getByTestId('level-node-4')
      expect(node4.getAttribute('aria-label')).toBe('Level 4: Mixed +/- to 10 - locked')
    })
  })

  // ── Auto-scroll ─────────────────────────────────────────────────────

  describe('auto-scroll', () => {
    it('scrolls the current level node into view on mount', () => {
      renderLevelMap({ currentLevel: 7 })
      const currentNode = screen.getByTestId('level-node-7')
      expect(currentNode.scrollIntoView).toHaveBeenCalledWith(
        expect.objectContaining({ inline: 'center' })
      )
    })
  })

  // ── Boundary conditions ─────────────────────────────────────────────

  describe('boundary conditions', () => {
    it('currentLevel=1 — no completed levels, first is current, rest locked', () => {
      renderLevelMap({ currentLevel: 1 })
      // Level 1 is current (gold)
      const node1 = screen.getByTestId('level-node-1')
      expect(node1.getAttribute('aria-label')).toBe('Level 1: Add within 5 - current')
      // Level 2 is locked
      const node2 = screen.getByTestId('level-node-2')
      expect(node2.getAttribute('aria-label')).toBe('Level 2: Subtract within 5 - locked')
    })

    it('currentLevel=20 — 19 completed, last is current, none locked', () => {
      renderLevelMap({ currentLevel: 20 })
      // Level 19 is completed
      const node19 = screen.getByTestId('level-node-19')
      expect(node19.getAttribute('aria-label')).toBe('Level 19: Division Mastery - completed')
      // Level 20 is current
      const node20 = screen.getByTestId('level-node-20')
      expect(node20.getAttribute('aria-label')).toBe('Level 20: Mixed All Ops (to 1000) - current')
      // No locked levels - all 20 are either completed or current
      const items = screen.getAllByRole('listitem')
      const lockedItems = items.filter(
        item => item.getAttribute('aria-label')?.includes('locked')
      )
      expect(lockedItems).toHaveLength(0)
    })
  })

  // ── Responsive container ────────────────────────────────────────────

  describe('responsive container', () => {
    it('has horizontal scroll container class', () => {
      renderLevelMap({ currentLevel: 1 })
      const list = screen.getByRole('list')
      expect(list.className).toContain('overflow-x-auto')
    })

    it('has snap scrolling class', () => {
      renderLevelMap({ currentLevel: 1 })
      const list = screen.getByRole('list')
      expect(list.className).toContain('snap-x')
    })
  })

  // ── Connecting lines ────────────────────────────────────────────────

  describe('connecting lines', () => {
    it('renders connecting lines between nodes', () => {
      renderLevelMap({ currentLevel: 1 })
      const lines = screen.getByTestId('level-map').querySelectorAll('[data-testid^="connector-"]')
      // 19 connectors between 20 nodes
      expect(lines).toHaveLength(19)
    })
  })

  // ── Default prop ────────────────────────────────────────────────────

  describe('default prop behavior', () => {
    it('renders without currentLevel prop (defaults handled gracefully)', () => {
      render(<LevelMap />)
      const items = screen.getAllByRole('listitem')
      expect(items).toHaveLength(20)
    })
  })
})
