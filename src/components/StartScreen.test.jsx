/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import StartScreen from './StartScreen'

// ── Mock useProfile ─────────────────────────────────────────────────────────

const mockUpdateProfile = vi.fn()
let mockActiveProfile = { id: 'p1', language: 'he' }

vi.mock('../context/useProfile', () => ({
  useProfile: () => ({
    activeProfile: mockActiveProfile,
    updateProfile: mockUpdateProfile,
    profiles: [],
    isLoading: false,
    error: null,
    maxProfiles: 4,
    selectProfile: vi.fn(),
    clearActiveProfile: vi.fn(),
    refreshProfiles: vi.fn(),
    addProfile: vi.fn(),
    createAndActivate: vi.fn(),
    deleteProfile: vi.fn(),
  }),
}))

// ── Helpers ──────────────────────────────────────────────────────────────────

function renderStartScreen(overrides = {}) {
  const defaults = {
    onStart: vi.fn(),
    progress: null,
    currentLevel: 1,
    activeProfile: mockActiveProfile,
  }
  return render(<StartScreen {...defaults} {...overrides} />)
}

// ── Tests ────────────────────────────────────────────────────────────────────

describe('StartScreen — LevelMap integration', () => {
  beforeEach(() => {
    mockActiveProfile = { id: 'p1', language: 'he' }
    mockUpdateProfile.mockClear()
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
    expect(node5.getAttribute('aria-label')).toBe('Level 5: Bridge the 10 (Add) - current')
  })

  it('renders 20 level nodes inside LevelMap', () => {
    renderStartScreen({ currentLevel: 1 })
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(20)
  })

  it('defaults currentLevel to 1 when not provided', () => {
    render(<StartScreen onStart={vi.fn()} />)
    const node1 = screen.getByTestId('level-node-1')
    expect(node1.getAttribute('aria-label')).toBe('Level 1: Add within 5 - current')
  })
})

describe('StartScreen — Language toggle', () => {
  beforeEach(() => {
    mockActiveProfile = { id: 'p1', language: 'he' }
    mockUpdateProfile.mockClear()
    Element.prototype.scrollIntoView = vi.fn()
    // Reset document direction
    document.documentElement.lang = 'he'
    document.documentElement.dir = 'rtl'
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('renders the language toggle with HE and EN buttons', () => {
    renderStartScreen()
    const toggle = screen.getByTestId('language-toggle')
    expect(toggle).toBeTruthy()
    expect(screen.getByText('HE')).toBeTruthy()
    expect(screen.getByText('EN')).toBeTruthy()
  })

  it('has radiogroup role with accessible label', () => {
    renderStartScreen()
    const toggle = screen.getByRole('radiogroup', { name: 'Language selection' })
    expect(toggle).toBeTruthy()
  })

  it('marks HE as checked when profile language is he', () => {
    mockActiveProfile = { id: 'p1', language: 'he' }
    renderStartScreen()
    const heBtn = screen.getByRole('radio', { name: 'Hebrew' })
    const enBtn = screen.getByRole('radio', { name: 'English' })
    expect(heBtn.getAttribute('aria-checked')).toBe('true')
    expect(enBtn.getAttribute('aria-checked')).toBe('false')
  })

  it('marks EN as checked when profile language is en', () => {
    mockActiveProfile = { id: 'p1', language: 'en' }
    renderStartScreen()
    const heBtn = screen.getByRole('radio', { name: 'Hebrew' })
    const enBtn = screen.getByRole('radio', { name: 'English' })
    expect(heBtn.getAttribute('aria-checked')).toBe('false')
    expect(enBtn.getAttribute('aria-checked')).toBe('true')
  })

  it('clicking EN calls updateProfile with language: en', () => {
    mockActiveProfile = { id: 'p1', language: 'he' }
    renderStartScreen()
    const enBtn = screen.getByRole('radio', { name: 'English' })
    fireEvent.click(enBtn)
    expect(mockUpdateProfile).toHaveBeenCalledWith('p1', { language: 'en' })
  })

  it('clicking EN sets document dir to ltr', () => {
    mockActiveProfile = { id: 'p1', language: 'he' }
    renderStartScreen()
    const enBtn = screen.getByRole('radio', { name: 'English' })
    fireEvent.click(enBtn)
    expect(document.documentElement.dir).toBe('ltr')
    expect(document.documentElement.lang).toBe('en')
  })

  it('clicking HE sets document dir to rtl', () => {
    mockActiveProfile = { id: 'p1', language: 'en' }
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
    renderStartScreen()
    const heBtn = screen.getByRole('radio', { name: 'Hebrew' })
    fireEvent.click(heBtn)
    expect(document.documentElement.dir).toBe('rtl')
    expect(document.documentElement.lang).toBe('he')
  })

  it('clicking the already-active language does nothing', () => {
    mockActiveProfile = { id: 'p1', language: 'he' }
    renderStartScreen()
    const heBtn = screen.getByRole('radio', { name: 'Hebrew' })
    fireEvent.click(heBtn)
    expect(mockUpdateProfile).not.toHaveBeenCalled()
  })

  it('works without an active profile (no updateProfile call)', () => {
    mockActiveProfile = null
    renderStartScreen()
    const enBtn = screen.getByRole('radio', { name: 'English' })
    fireEvent.click(enBtn)
    expect(mockUpdateProfile).not.toHaveBeenCalled()
    // Should still update document attributes
    expect(document.documentElement.dir).toBe('ltr')
    expect(document.documentElement.lang).toBe('en')
  })
})
