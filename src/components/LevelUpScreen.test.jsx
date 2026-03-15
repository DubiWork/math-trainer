/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

// Mock levels config — 20 levels matching the real schema
vi.mock('../config/levels', () => ({
  LEVELS: [
    { id: 1, name: 'Add within 5', nameHe: 'חיבור עד 5' },
    { id: 2, name: 'Subtract within 5', nameHe: 'חיסור עד 5' },
    { id: 3, name: 'Add to 10', nameHe: 'חיבור עד 10' },
    { id: 4, name: 'Mixed +/- to 10', nameHe: 'חיבור וחיסור עד 10' },
    { id: 5, name: 'Bridge the 10 (Add)', nameHe: 'חציית ה-10 (חיבור)' },
    { id: 6, name: 'Bridge the 10 (Sub)', nameHe: 'חציית ה-10 (חיסור)' },
    { id: 7, name: 'Mixed +/- to 20', nameHe: 'חיבור וחיסור עד 20' },
    { id: 8, name: 'Tens Structure', nameHe: 'מבנה העשרות' },
    { id: 9, name: 'Automaticity +/- to 20', nameHe: 'אוטומטיות עד 20' },
    { id: 10, name: 'Multiply ×2,×5,×10', nameHe: 'כפל ב-2, 5, 10' },
    { id: 11, name: 'Times Tables ×3,×4', nameHe: 'לוח הכפל ×3, ×4' },
    { id: 12, name: 'Easy Division', nameHe: 'חילוק קל' },
    { id: 13, name: '3-Digit Add/Sub', nameHe: 'חיבור וחיסור תלת-ספרתי' },
    { id: 14, name: 'Mixed Operations to 100', nameHe: 'פעולות מעורבות עד 100' },
    { id: 15, name: 'Times Tables ×6,×7', nameHe: 'לוח הכפל ×6, ×7' },
    { id: 16, name: 'Times Tables ×8,×9', nameHe: 'לוח הכפל ×8, ×9' },
    { id: 17, name: '4-Digit Add/Sub', nameHe: 'חיבור וחיסור ארבע-ספרתי' },
    { id: 18, name: 'Mixed All Ops (to 100)', nameHe: 'כל הפעולות עד 100' },
    { id: 19, name: 'Division Mastery', nameHe: 'שליטה בחילוק' },
    { id: 20, name: 'Mixed All Ops (to 1000)', nameHe: 'כל הפעולות עד 1000' },
  ],
  MAX_LEVEL: 20,
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
      expect(screen.getAllByText(/Add to 10/).length).toBeGreaterThanOrEqual(1)
    })

    it('displays the next level name for mid-range levels', () => {
      render(<LevelUpScreen completedLevel={5} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Bridge the 10 \(Sub\)/).length).toBeGreaterThanOrEqual(1)
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

  describe('max level (level 20)', () => {
    it('does not show "Next" level name when completed level is 20', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      expect(screen.queryByText(/Next:/)).toBeNull()
    })

    it('shows a different CTA for max level (no level number 21)', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const button = screen.getByRole('button')
      expect(button.textContent).not.toContain('Level 21')
    })

    it('CTA button still calls onContinue for max level', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      fireEvent.click(screen.getByRole('button'))
      expect(mockOnContinue).toHaveBeenCalledTimes(1)
    })
  })

  // ── Champion variant (level 20 completion) ───────────────────────

  describe('champion variant', () => {
    it('shows "Math Champion!" heading instead of "Level Complete!"', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Math Champion!')
      expect(screen.queryByText('Level Complete!')).toBeNull()
    })

    it('shows trophy emoji instead of rocket', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const hero = screen.getByTestId('hero-emoji')
      expect(hero.textContent).toBe('\uD83C\uDFC6')
      expect(hero.textContent).not.toBe('\uD83D\uDE80')
    })

    it('shows "You mastered all 20 levels!" message', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      expect(screen.getByText('You mastered all 20 levels!')).toBeTruthy()
    })

    it('shows "Play Again at Level 20!" button', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const button = screen.getByRole('button')
      expect(button.textContent).toBe('Play Again at Level 20!')
    })

    it('button has correct aria-label for champion', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const button = screen.getByRole('button')
      expect(button.getAttribute('aria-label')).toBe('Play Again at Level 20')
    })

    it('screen-reader announcement mentions mastering all levels', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const status = screen.getByRole('status')
      expect(status.textContent).toContain('mastered all 20 levels')
    })

    it('confetti still renders in champion mode', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const particles = screen.getAllByTestId('confetti-particle')
      expect(particles.length).toBeGreaterThanOrEqual(8)
    })

    it('hero emoji still has bounce animation in champion mode', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      const hero = screen.getByTestId('hero-emoji')
      expect(hero.className).toContain('animate-bounce-hero')
    })

    it('does not show the completed level config name as sub-message', () => {
      render(<LevelUpScreen completedLevel={20} onContinue={mockOnContinue} />)
      // The sub-message should be "You mastered all 20 levels!" not the level name
      const paragraphs = screen.getAllByText(/mastered all 20/)
      expect(paragraphs.length).toBeGreaterThanOrEqual(1)
    })
  })

  // ── Boundary: level 19 to 20 (normal level-up) ───────────────────

  describe('boundary: level 19 (normal level-up to 20)', () => {
    it('shows "Level Complete!" heading for level 19', () => {
      render(<LevelUpScreen completedLevel={19} onContinue={mockOnContinue} />)
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Level Complete!')
    })

    it('shows rocket emoji for level 19', () => {
      render(<LevelUpScreen completedLevel={19} onContinue={mockOnContinue} />)
      const hero = screen.getByTestId('hero-emoji')
      expect(hero.textContent).toBe('\uD83D\uDE80')
    })

    it('shows "Continue to Level 20!" button for level 19', () => {
      render(<LevelUpScreen completedLevel={19} onContinue={mockOnContinue} />)
      const button = screen.getByRole('button', { name: /Continue to Level 20/i })
      expect(button.textContent).toBe('Continue to Level 20!')
    })

    it('shows Next: Mixed All Ops (to 1000) for level 19', () => {
      render(<LevelUpScreen completedLevel={19} onContinue={mockOnContinue} />)
      expect(screen.getByText(/Next: Mixed All Ops \(to 1000\)/)).toBeTruthy()
    })
  })

  // ── Various completed levels ───────────────────────────────────────

  describe('various completed levels', () => {
    it('renders correctly for level 1', () => {
      render(<LevelUpScreen completedLevel={1} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Add within 5/).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(/Subtract within 5/).length).toBeGreaterThanOrEqual(1)
    })

    it('renders correctly for level 7', () => {
      render(<LevelUpScreen completedLevel={7} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Mixed \+\/- to 20/).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(/Tens Structure/).length).toBeGreaterThanOrEqual(1)
    })

    it('renders correctly for level 12', () => {
      render(<LevelUpScreen completedLevel={12} onContinue={mockOnContinue} />)
      expect(screen.getAllByText(/Easy Division/).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(/3-Digit Add\/Sub/).length).toBeGreaterThanOrEqual(1)
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
