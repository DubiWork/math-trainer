/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

// Mock levels config
vi.mock('../config/levels', () => ({
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
}))

// Import after mocks
const { default: LevelUpScreen } = await import('./LevelUpScreen')

describe('LevelUpScreen', () => {
  const mockOnContinue = vi.fn()

  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  // ── Rendering ──────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders the "Level Complete!" heading', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
      expect(screen.getByText('Level Complete!')).toBeTruthy()
    })

    it('displays the completed level name', () => {
      render(<LevelUpScreen completedLevel={3} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Minus Magic/).length).toBeGreaterThanOrEqual(1)
    })

    it('displays the next level name for mid-range levels', () => {
      render(<LevelUpScreen completedLevel={5} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Subtract 20/).length).toBeGreaterThanOrEqual(1)
    })

    it('renders hero emoji with bounce animation', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const hero = screen.getByTestId('hero-emoji')
      expect(hero).toBeTruthy()
      expect(hero.className).toContain('animate-bounce-hero')
    })

    it('renders confetti particles', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const particles = screen.getAllByTestId('confetti-particle')
      expect(particles.length).toBeGreaterThanOrEqual(8)
    })

    it('renders audio placeholder for future audio hook', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      expect(screen.getByTestId('audio-placeholder')).toBeTruthy()
    })
  })

  // ── Continue button ────────────────────────────────────────────────

  describe('continue button', () => {
    it('renders the continue button with next level number', () => {
      render(<LevelUpScreen completedLevel={4} onContinue={mockOnContinue} />)
      expect(screen.getByRole('button', { name: /Continue to Level 5/i })).toBeTruthy()
    })

    it('calls onContinue when continue button is clicked', () => {
      render(<LevelUpScreen completedLevel={2} onContinue={mockOnContinue} />)
      fireEvent.click(screen.getByRole('button', { name: /Continue to Level 3/i }))
      expect(mockOnContinue).toHaveBeenCalledTimes(1)
    })

    it('has min touch target of 44px', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const button = screen.getByRole('button', { name: /Continue/i })
      expect(button.className).toContain('min-h-[44px]')
    })
  })

  // ── Max level guard ────────────────────────────────────────────────

  describe('max level (level 13)', () => {
    it('does not show "Next" level name when completed level is 13', () => {
      render(<LevelUpScreen completedLevel={13} onContinue={mockOnContinue} />)
      expect(screen.queryByText(/Next:/)).toBeNull()
    })

    it('shows completed level 13 name (Math Champion)', () => {
      render(<LevelUpScreen completedLevel={13} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Math Champion/).length).toBeGreaterThanOrEqual(1)
    })

    it('shows a different CTA for max level (no level number)', () => {
      render(<LevelUpScreen completedLevel={13} onContinue={mockOnContinue} />)
      const button = screen.getByRole('button')
      expect(button.textContent).not.toContain('Level 14')
    })

    it('CTA button still calls onContinue for max level', () => {
      render(<LevelUpScreen completedLevel={13} onContinue={mockOnContinue} />)
      fireEvent.click(screen.getByRole('button'))
      expect(mockOnContinue).toHaveBeenCalledTimes(1)
    })
  })

  // ── Various completed levels ───────────────────────────────────────

  describe('various completed levels', () => {
    it('renders correctly for level 1', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/First Steps/).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(/Addition Hero/).length).toBeGreaterThanOrEqual(1)
    })

    it('renders correctly for level 7', () => {
      render(<LevelUpScreen completedLevel={7} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Mixed 20/).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(/Tens Master/).length).toBeGreaterThanOrEqual(1)
    })

    it('renders correctly for level 12', () => {
      render(<LevelUpScreen completedLevel={12} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Division Quest/).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(/Math Champion/).length).toBeGreaterThanOrEqual(1)
    })
  })

  // ── Accessibility ──────────────────────────────────────────────────

  describe('accessibility', () => {
    it('has aria-live="polite" on announcement region', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const region = screen.getByRole('status')
      expect(region.getAttribute('aria-live')).toBe('polite')
    })

    it('has role="status" on announcement region', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      expect(screen.getByRole('status')).toBeTruthy()
    })

    it('uses proper heading hierarchy (h1 for main heading)', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toBe('Level Complete!')
    })
  })

  // ── Reduced motion ─────────────────────────────────────────────────

  describe('reduced motion', () => {
    it('hero emoji has motion-reduce class to disable animation', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const hero = screen.getByTestId('hero-emoji')
      expect(hero.className).toContain('motion-reduce:animate-none')
    })

    it('confetti particles have motion-reduce class', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      const particles = screen.getAllByTestId('confetti-particle')
      particles.forEach((particle) => {
        expect(particle.className).toContain('motion-reduce:hidden')
      })
    })
  })
})
