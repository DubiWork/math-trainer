/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import StartScreen from './StartScreen'

// ── Helpers ──────────────────────────────────────────────────────────────────

function renderStartScreen(overrides = {}) {
  const defaults = {
    onStart: vi.fn(),
    progress: null,
    currentLevel: 1,
  }
  return render(<StartScreen {...defaults} {...overrides} />)
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('StartScreen — LevelMap integration', () => {
  beforeEach(() => {
    // Mock scrollIntoView since happy-dom does not implement it
    Element.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('renders the LevelMap component', () => {
    renderStartScreen({ currentLevel: 1 })
    expect(screen.getByTestId('level-map')).toBeTruthy()
  })

  it('passes currentLevel to LevelMap', () => {
    renderStartScreen({ currentLevel: 5 })
    // Level 5 should be current
    const node5 = screen.getByTestId('level-node-5')
    expect(node5.getAttribute('aria-label')).toBe('Level 5: Cross the 10 - current')
  })

  it('renders 13 level nodes inside LevelMap', () => {
    renderStartScreen({ currentLevel: 1 })
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(13)
  })

  it('defaults currentLevel to 1 when not provided', () => {
    render(<StartScreen onStart={vi.fn()} />)
    const node1 = screen.getByTestId('level-node-1')
    expect(node1.getAttribute('aria-label')).toBe('Level 1: First Steps - current')
  })
})
