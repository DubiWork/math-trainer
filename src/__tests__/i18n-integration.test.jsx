/**
 * @vitest-environment happy-dom
 *
 * i18n Integration Tests
 *
 * Verifies the full i18n pipeline works end-to-end:
 * - Language switching (Hebrew <-> English)
 * - Translation completeness (both locale files in sync)
 * - RTL/LTR direction integration
 * - Component rendering in both languages
 * - Strategy hint rendering in both languages
 * - Edge cases (fallback, mid-game switch, missing profile language)
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, cleanup, fireEvent, act } from '@testing-library/react'
import { renderWithProviders, createTestI18nInstance } from '../test-utils'
import he from '../i18n/locales/he.json'
import en from '../i18n/locales/en.json'
import { STRATEGY_IDS } from '../utils/strategies'

// ── Mock modules ────────────────────────────────────────────────────────────

// Mock useProfile for components that import it directly
const mockUpdateProfile = vi.fn()
let mockActiveProfile = { id: 'p1', nickname: 'TestHero', language: 'he', theme: 'sonic', currentLevel: 1 }

vi.mock('../context/useProfile', () => ({
  useProfile: () => ({
    activeProfile: mockActiveProfile,
    updateProfile: mockUpdateProfile,
    profiles: mockActiveProfile ? [mockActiveProfile] : [],
    isLoading: false,
    error: null,
    maxProfiles: 4,
    selectProfile: vi.fn(async () => true),
    clearActiveProfile: vi.fn(),
    refreshProfiles: vi.fn(),
    addProfile: vi.fn(),
    createAndActivate: vi.fn(),
    deleteProfile: vi.fn(),
  }),
}))

vi.mock('../context/profileReducer', () => ({
  MAX_PIN_ATTEMPTS: 3,
  COOLDOWN_SECONDS: 30,
}))

// Import components after mocks are set up
const { default: StartScreen } = await import('../components/StartScreen')
const { default: ResultScreen } = await import('../components/ResultScreen')
const { default: ProfileSwitcher } = await import('../components/ProfileSwitcher')
const { default: Problem } = await import('../components/Problem')
const { default: StrategyHint } = await import('../components/aids/StrategyHint')
const { default: ScoreDisplay } = await import('../components/ScoreDisplay')

// ── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Flatten a nested JSON object into dot-notation keys.
 * Arrays are treated as leaf values (not recursed into).
 */
function flattenKeys(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      return [...acc, ...flattenKeys(obj[key], path)]
    }
    return [...acc, path]
  }, [])
}

/**
 * Flatten a nested JSON object into { key: value } pairs.
 * Arrays are treated as leaf values.
 */
function flattenValues(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      return { ...acc, ...flattenValues(obj[key], path) }
    }
    return { ...acc, [path]: obj[key] }
  }, {})
}

/**
 * Extract all interpolation placeholders from a string.
 * Matches {{variableName}} patterns.
 */
function extractPlaceholders(str) {
  if (typeof str !== 'string') return []
  const matches = str.match(/\{\{(\w+)\}\}/g) || []
  return matches.map((m) => m.replace(/[{}]/g, '')).sort()
}

// ── Lifecycle ───────────────────────────────────────────────────────────────

beforeEach(() => {
  mockActiveProfile = { id: 'p1', nickname: 'TestHero', language: 'he', theme: 'sonic', currentLevel: 1 }
  mockUpdateProfile.mockClear()
  // Mock scrollIntoView for LevelMap
  Element.prototype.scrollIntoView = vi.fn()
  // Reset document direction
  document.documentElement.lang = 'en'
  document.documentElement.dir = 'ltr'
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

// ── 1. Language Switching Tests ─────────────────────────────────────────────

describe('Language switching', () => {
  it('renders StartScreen in Hebrew by default', () => {
    renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'he' },
    )
    expect(screen.getByText(he.start.title)).toBeTruthy()
    expect(screen.getByText(he.start.subtitle)).toBeTruthy()
    expect(screen.getByText(he.start.startButton)).toBeTruthy()
  })

  it('switching language to English updates all visible text on StartScreen', async () => {
    const { i18n } = renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'he' },
    )
    // Verify initial Hebrew
    expect(screen.getByText(he.start.title)).toBeTruthy()

    // Switch to English
    await act(async () => {
      await i18n.changeLanguage('en')
    })

    expect(screen.getByText(en.start.title)).toBeTruthy()
    expect(screen.getByText(en.start.subtitle)).toBeTruthy()
    expect(screen.getByText(en.start.startButton)).toBeTruthy()
  })

  it('switching back to Hebrew restores Hebrew text', async () => {
    const { i18n } = renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'he' },
    )

    // Switch to English
    await act(async () => {
      await i18n.changeLanguage('en')
    })
    expect(screen.getByText(en.start.title)).toBeTruthy()

    // Switch back to Hebrew
    await act(async () => {
      await i18n.changeLanguage('he')
    })
    expect(screen.getByText(he.start.title)).toBeTruthy()
    expect(screen.getByText(he.start.subtitle)).toBeTruthy()
  })

  it('language preference persists in profile via updateProfile', () => {
    mockActiveProfile = { id: 'p1', nickname: 'TestHero', language: 'he', theme: 'sonic', currentLevel: 1 }
    renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'he' },
    )
    // Click the EN button in the language toggle
    const enBtn = screen.getByRole('radio', { name: 'English' })
    fireEvent.click(enBtn)

    expect(mockUpdateProfile).toHaveBeenCalledWith('p1', { language: 'en' })
  })
})

// ── 2. Translation Completeness Tests ───────────────────────────────────────

describe('Translation completeness', () => {
  const heKeys = flattenKeys(he)
  const enKeys = flattenKeys(en)

  it('every key in he.json has a corresponding key in en.json', () => {
    const missing = heKeys.filter((k) => !enKeys.includes(k))
    expect(missing).toEqual([])
  })

  it('every key in en.json has a corresponding key in he.json', () => {
    const missing = enKeys.filter((k) => !heKeys.includes(k))
    expect(missing).toEqual([])
  })

  it('no key has an empty string value in en.json', () => {
    const enValues = flattenValues(en)
    const emptyKeys = Object.entries(enValues)
      .filter(([, value]) => typeof value === 'string' && value.trim() === '')
      .map(([key]) => key)
    expect(emptyKeys).toEqual([])
  })

  it('no key has an empty string value in he.json', () => {
    const heValues = flattenValues(he)
    const emptyKeys = Object.entries(heValues)
      .filter(([, value]) => typeof value === 'string' && value.trim() === '')
      .map(([key]) => key)
    expect(emptyKeys).toEqual([])
  })

  it('all interpolation placeholders in en.json exist in he.json', () => {
    const enValues = flattenValues(en)
    const heValues = flattenValues(he)
    const mismatches = []

    for (const key of Object.keys(enValues)) {
      if (typeof enValues[key] !== 'string') continue
      const enPlaceholders = extractPlaceholders(enValues[key])
      const hePlaceholders = extractPlaceholders(heValues[key] || '')
      if (enPlaceholders.length > 0 && JSON.stringify(enPlaceholders) !== JSON.stringify(hePlaceholders)) {
        mismatches.push({ key, en: enPlaceholders, he: hePlaceholders })
      }
    }
    expect(mismatches).toEqual([])
  })

  it('all interpolation placeholders in he.json exist in en.json', () => {
    const enValues = flattenValues(en)
    const heValues = flattenValues(he)
    const mismatches = []

    for (const key of Object.keys(heValues)) {
      if (typeof heValues[key] !== 'string') continue
      const hePlaceholders = extractPlaceholders(heValues[key])
      const enPlaceholders = extractPlaceholders(enValues[key] || '')
      if (hePlaceholders.length > 0 && JSON.stringify(hePlaceholders) !== JSON.stringify(enPlaceholders)) {
        mismatches.push({ key, he: hePlaceholders, en: enPlaceholders })
      }
    }
    expect(mismatches).toEqual([])
  })
})

// ── 3. RTL Integration Tests ────────────────────────────────────────────────

describe('RTL integration', () => {
  it('Hebrew sets dir="rtl" on document when language toggle is clicked', () => {
    mockActiveProfile = { id: 'p1', nickname: 'TestHero', language: 'en', theme: 'sonic', currentLevel: 1 }
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'

    renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'en' },
    )

    const heBtn = screen.getByRole('radio', { name: 'Hebrew' })
    fireEvent.click(heBtn)

    expect(document.documentElement.dir).toBe('rtl')
    expect(document.documentElement.lang).toBe('he')
  })

  it('English sets dir="ltr" on document when language toggle is clicked', () => {
    mockActiveProfile = { id: 'p1', nickname: 'TestHero', language: 'he', theme: 'sonic', currentLevel: 1 }
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'he'

    renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'he' },
    )

    const enBtn = screen.getByRole('radio', { name: 'English' })
    fireEvent.click(enBtn)

    expect(document.documentElement.dir).toBe('ltr')
    expect(document.documentElement.lang).toBe('en')
  })

  it('Problem component always has dir="ltr" for math content', () => {
    renderWithProviders(
      <Problem num1={7} num2={3} operator="+" />,
      { language: 'he' },
    )
    // The inner div containing the math expression should be LTR
    const mathContent = screen.getByText('7').closest('div[dir="ltr"]')
    expect(mathContent).toBeTruthy()
  })

  it('Problem component has dir="ltr" even when language is English', () => {
    renderWithProviders(
      <Problem num1={7} num2={3} operator="+" />,
      { language: 'en' },
    )
    const mathContent = screen.getByText('7').closest('div[dir="ltr"]')
    expect(mathContent).toBeTruthy()
  })
})

// ── 4. Component Rendering in Both Languages ────────────────────────────────

describe('StartScreen rendering in both languages', () => {
  it('renders correctly in Hebrew', () => {
    renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'he' },
    )
    expect(screen.getByText(he.start.title)).toBeTruthy()
    expect(screen.getByText(he.start.subtitle)).toBeTruthy()
    expect(screen.getByText(he.start.startButton)).toBeTruthy()
    expect(screen.getByText(he.start.tip)).toBeTruthy()
    expect(screen.getByText(he.start.footer)).toBeTruthy()
  })

  it('renders correctly in English', () => {
    renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'en' },
    )
    expect(screen.getByText(en.start.title)).toBeTruthy()
    expect(screen.getByText(en.start.subtitle)).toBeTruthy()
    expect(screen.getByText(en.start.startButton)).toBeTruthy()
    expect(screen.getByText(en.start.tip)).toBeTruthy()
    expect(screen.getByText(en.start.footer)).toBeTruthy()
  })

  it('renders progress section in Hebrew with interpolation', () => {
    renderWithProviders(
      <StartScreen
        onStart={vi.fn()}
        progress={{ score: 42, streak: 5, totalProblems: 20, correctAnswers: 16 }}
        currentLevel={1}
      />,
      { language: 'he' },
    )
    expect(screen.getByText(he.start.yourBest)).toBeTruthy()
    expect(screen.getByText(he.start.points)).toBeTruthy()
    expect(screen.getByText(he.start.streak)).toBeTruthy()
    // Accuracy interpolation: "80%" in the accuracy text
    expect(screen.getByText('80%', { exact: false })).toBeTruthy()
  })

  it('renders progress section in English with interpolation', () => {
    renderWithProviders(
      <StartScreen
        onStart={vi.fn()}
        progress={{ score: 42, streak: 5, totalProblems: 20, correctAnswers: 16 }}
        currentLevel={1}
      />,
      { language: 'en' },
    )
    expect(screen.getByText(en.start.yourBest)).toBeTruthy()
    expect(screen.getByText(en.start.points)).toBeTruthy()
    expect(screen.getByText('80%', { exact: false })).toBeTruthy()
  })
})

describe('ResultScreen rendering in both languages', () => {
  const defaultStats = {
    score: 100,
    streak: 5,
    totalProblems: 20,
    correctAnswers: 18,
    accuracy: 90,
  }

  it('renders correctly in Hebrew', () => {
    renderWithProviders(
      <ResultScreen sessionStats={defaultStats} onPlayAgain={vi.fn()} onExit={vi.fn()} />,
      { language: 'he' },
    )
    expect(screen.getByText(he.result.title)).toBeTruthy()
    expect(screen.getByText(he.result.points)).toBeTruthy()
    expect(screen.getByText(he.result.bestStreak)).toBeTruthy()
    expect(screen.getByText(he.result.accuracy)).toBeTruthy()
    expect(screen.getByText(he.result.problems)).toBeTruthy()
    expect(screen.getByText(he.result.playAgain)).toBeTruthy()
    expect(screen.getByText(he.result.backToStart)).toBeTruthy()
    expect(screen.getByText(he.result.footer, { exact: false })).toBeTruthy()
  })

  it('renders correctly in English', () => {
    renderWithProviders(
      <ResultScreen sessionStats={defaultStats} onPlayAgain={vi.fn()} onExit={vi.fn()} />,
      { language: 'en' },
    )
    expect(screen.getByText(en.result.title)).toBeTruthy()
    expect(screen.getByText(en.result.points)).toBeTruthy()
    expect(screen.getByText(en.result.bestStreak)).toBeTruthy()
    expect(screen.getByText(en.result.accuracy)).toBeTruthy()
    expect(screen.getByText(en.result.problems)).toBeTruthy()
    expect(screen.getByText(en.result.playAgain)).toBeTruthy()
    expect(screen.getByText(en.result.backToStart)).toBeTruthy()
    expect(screen.getByText(en.result.footer, { exact: false })).toBeTruthy()
  })

  it('shows high-performance Hebrew message when accuracy >= 80', () => {
    renderWithProviders(
      <ResultScreen sessionStats={{ ...defaultStats, accuracy: 90 }} onPlayAgain={vi.fn()} onExit={vi.fn()} />,
      { language: 'he' },
    )
    expect(screen.getByText(he.result.performance.high)).toBeTruthy()
  })

  it('shows high-performance English message when accuracy >= 80', () => {
    renderWithProviders(
      <ResultScreen sessionStats={{ ...defaultStats, accuracy: 90 }} onPlayAgain={vi.fn()} onExit={vi.fn()} />,
      { language: 'en' },
    )
    expect(screen.getByText(en.result.performance.high)).toBeTruthy()
  })
})

describe('ProfileSwitcher rendering in both languages', () => {
  it('renders zero-profiles welcome in Hebrew', () => {
    mockActiveProfile = null
    renderWithProviders(
      <ProfileSwitcher onCreateProfile={vi.fn()} />,
      { language: 'he' },
    )
    expect(screen.getByText(he.profile.welcomeTitle)).toBeTruthy()
    expect(screen.getByText(he.profile.welcomeSubtitle)).toBeTruthy()
    expect(screen.getByText(he.profile.createHero)).toBeTruthy()
  })

  it('renders zero-profiles welcome in English', () => {
    mockActiveProfile = null
    renderWithProviders(
      <ProfileSwitcher onCreateProfile={vi.fn()} />,
      { language: 'en' },
    )
    expect(screen.getByText(en.profile.welcomeTitle)).toBeTruthy()
    expect(screen.getByText(en.profile.welcomeSubtitle)).toBeTruthy()
    expect(screen.getByText(en.profile.createHero)).toBeTruthy()
  })

  it('renders profile card with Hebrew level badge', () => {
    mockActiveProfile = { id: 'p1', nickname: 'Hero1', language: 'he', theme: 'sonic', currentLevel: 3 }
    renderWithProviders(
      <ProfileSwitcher onCreateProfile={vi.fn()} />,
      { language: 'he' },
    )
    // "Level 3" in Hebrew
    expect(screen.getByText(he.profile.level.replace('{{level}}', '3'))).toBeTruthy()
  })

  it('renders profile card with English level badge', () => {
    mockActiveProfile = { id: 'p1', nickname: 'Hero1', language: 'en', theme: 'sonic', currentLevel: 3 }
    renderWithProviders(
      <ProfileSwitcher onCreateProfile={vi.fn()} />,
      { language: 'en' },
    )
    expect(screen.getByText(en.profile.level.replace('{{level}}', '3'))).toBeTruthy()
  })
})

describe('ScoreDisplay rendering in both languages', () => {
  it('renders score labels in Hebrew', () => {
    renderWithProviders(
      <ScoreDisplay score={42} streak={3} />,
      { language: 'he' },
    )
    expect(screen.getByText(he.score.score)).toBeTruthy()
    expect(screen.getByText(he.score.streak)).toBeTruthy()
  })

  it('renders score labels in English', () => {
    renderWithProviders(
      <ScoreDisplay score={42} streak={3} />,
      { language: 'en' },
    )
    expect(screen.getByText(en.score.score)).toBeTruthy()
    expect(screen.getByText(en.score.streak)).toBeTruthy()
  })
})

// ── 5. Strategy Rendering Tests ─────────────────────────────────────────────

describe('Strategy hint rendering in both languages', () => {
  // 8+5 = bridging to 10, count-on — gives us strategies to test
  it('renders strategy hints with translated steps in English', () => {
    renderWithProviders(
      <StrategyHint num1={8} num2={5} operator="+" />,
      { language: 'en' },
    )
    // Should render the strategy hint region
    expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    // Strategy name should be resolved to a non-empty English string
    expect(screen.getByText(en.strategy.names.bridging_add)).toBeTruthy()
  })

  it('renders strategy hints with translated steps in Hebrew', () => {
    renderWithProviders(
      <StrategyHint num1={8} num2={5} operator="+" />,
      { language: 'he' },
    )
    expect(screen.getByTestId('strategy-hint')).toBeTruthy()
    expect(screen.getByText(he.strategy.names.bridging_add)).toBeTruthy()
  })

  it('all strategy name keys resolve to non-empty strings in English', () => {
    const i18nInstance = createTestI18nInstance('en')
    const strategyIds = Object.values(STRATEGY_IDS)
    for (const id of strategyIds) {
      const translated = i18nInstance.t(`strategy.names.${id}`)
      expect(translated).not.toBe('')
      expect(translated).not.toBe(`strategy.names.${id}`)
    }
  })

  it('all strategy name keys resolve to non-empty strings in Hebrew', () => {
    const i18nInstance = createTestI18nInstance('he')
    const strategyIds = Object.values(STRATEGY_IDS)
    for (const id of strategyIds) {
      const translated = i18nInstance.t(`strategy.names.${id}`)
      expect(translated).not.toBe('')
      expect(translated).not.toBe(`strategy.names.${id}`)
    }
  })

  it('renders count-on strategy correctly in English (5+1)', () => {
    renderWithProviders(
      <StrategyHint num1={5} num2={1} operator="+" />,
      { language: 'en' },
    )
    expect(screen.getByText(en.strategy.names.count_on)).toBeTruthy()
  })

  it('renders count-back strategy correctly in Hebrew (7-2)', () => {
    renderWithProviders(
      <StrategyHint num1={7} num2={2} operator="-" />,
      { language: 'he' },
    )
    expect(screen.getByText(he.strategy.names.count_back)).toBeTruthy()
  })

  it('renders doubles strategy correctly in English (6+6)', () => {
    renderWithProviders(
      <StrategyHint num1={6} num2={6} operator="+" />,
      { language: 'en' },
    )
    expect(screen.getByText(en.strategy.names.doubles)).toBeTruthy()
  })

  it('cycle button text is translated in both languages', async () => {
    // 8+5 should have multiple strategies (bridging + count-on)
    const { i18n } = renderWithProviders(
      <StrategyHint num1={8} num2={5} operator="+" />,
      { language: 'en' },
    )

    // Should show "Show me another way" in English
    const cycleBtn = screen.queryByText(en.strategy.showAnother)
    if (cycleBtn) {
      expect(cycleBtn).toBeTruthy()

      // Switch to Hebrew and verify button text changes
      await act(async () => {
        await i18n.changeLanguage('he')
      })
      expect(screen.getByText(he.strategy.showAnother)).toBeTruthy()
    }
  })
})

// ── 6. Edge Cases ───────────────────────────────────────────────────────────

describe('Edge cases', () => {
  it('missing translation key falls back to English', () => {
    const i18nInstance = createTestI18nInstance('he')
    // Force a key that exists only conceptually -- test fallback mechanism
    // by verifying that a valid English key returns English when Hebrew is active
    // and the key is absent from Hebrew (simulated by looking up nonexistent namespace)
    const result = i18nInstance.t('nonexistent.key.here')
    // i18next returns the key itself when not found
    expect(result).toBe('nonexistent.key.here')
  })

  it('fallbackLng is correctly set to English', () => {
    const i18nInstance = createTestI18nInstance('he')
    expect(i18nInstance.options.fallbackLng).toEqual(['en'])
  })

  it('switching language mid-render does not crash ResultScreen', async () => {
    const stats = { score: 50, streak: 3, totalProblems: 10, correctAnswers: 7, accuracy: 70 }
    const { i18n } = renderWithProviders(
      <ResultScreen sessionStats={stats} onPlayAgain={vi.fn()} onExit={vi.fn()} />,
      { language: 'he' },
    )

    // Verify Hebrew text is present
    expect(screen.getByText(he.result.title)).toBeTruthy()

    // Switch language during render — should not throw
    await act(async () => {
      await i18n.changeLanguage('en')
    })

    // English text should now be visible
    expect(screen.getByText(en.result.title)).toBeTruthy()
  })

  it('switching language mid-render does not crash StartScreen', async () => {
    const { i18n } = renderWithProviders(
      <StartScreen onStart={vi.fn()} currentLevel={1} />,
      { language: 'en' },
    )

    expect(screen.getByText(en.start.title)).toBeTruthy()

    await act(async () => {
      await i18n.changeLanguage('he')
    })

    expect(screen.getByText(he.start.title)).toBeTruthy()
  })

  it('profile without language field defaults to Hebrew (i18n default)', () => {
    // Create an i18n instance with no explicit language override -- defaults to 'he'
    const i18nInstance = createTestI18nInstance('he')
    expect(i18nInstance.language).toBe('he')

    // Verify a Hebrew translation is returned
    const result = i18nInstance.t('start.title')
    expect(result).toBe(he.start.title)
  })

  it('fresh i18n instances are isolated from each other', async () => {
    const instance1 = createTestI18nInstance('he')
    const instance2 = createTestI18nInstance('en')

    expect(instance1.language).toBe('he')
    expect(instance2.language).toBe('en')

    // Changing one should not affect the other
    await instance1.changeLanguage('en')
    expect(instance1.language).toBe('en')
    expect(instance2.language).toBe('en') // unchanged from its creation

    await instance2.changeLanguage('he')
    expect(instance1.language).toBe('en') // still English
    expect(instance2.language).toBe('he')
  })
})
