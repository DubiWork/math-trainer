/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
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

describe('StartScreen — My Progress button', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('renders the My Progress button when activeProfile is provided', () => {
    renderStartScreen({
      activeProfile: { theme: 'sonic' },
      onViewProgress: vi.fn(),
    })
    expect(screen.getByTestId('my-progress-button')).toBeTruthy()
    expect(screen.getByText('My Progress')).toBeTruthy()
  })

  it('does not render the My Progress button when activeProfile is null', () => {
    renderStartScreen({
      activeProfile: null,
      onViewProgress: vi.fn(),
    })
    expect(screen.queryByTestId('my-progress-button')).toBeNull()
  })

  it('does not render the My Progress button when activeProfile is not provided', () => {
    renderStartScreen()
    expect(screen.queryByTestId('my-progress-button')).toBeNull()
  })

  it('calls onViewProgress when the My Progress button is clicked', () => {
    const onViewProgress = vi.fn()
    renderStartScreen({
      activeProfile: { theme: 'sonic' },
      onViewProgress,
    })
    fireEvent.click(screen.getByTestId('my-progress-button'))
    expect(onViewProgress).toHaveBeenCalledTimes(1)
  })

  it('has correct aria-label for accessibility', () => {
    renderStartScreen({
      activeProfile: { theme: 'sonic' },
      onViewProgress: vi.fn(),
    })
    const button = screen.getByTestId('my-progress-button')
    expect(button.getAttribute('aria-label')).toBe('View my progress')
  })

  it('renders Start Game button alongside My Progress button', () => {
    renderStartScreen({
      activeProfile: { theme: 'sonic' },
      onViewProgress: vi.fn(),
    })
    expect(screen.getByText('Start Game!')).toBeTruthy()
    expect(screen.getByText('My Progress')).toBeTruthy()
  })
})
