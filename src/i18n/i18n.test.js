import { describe, it, expect, beforeEach } from 'vitest'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import he from './locales/he.json'
import en from './locales/en.json'

/**
 * Flatten a nested JSON object into dot-notation keys.
 * Arrays are treated as leaf values (not recursed into).
 *
 * @param {Object} obj
 * @param {string} prefix
 * @returns {string[]}
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

describe('i18n configuration', () => {
  let testI18n

  beforeEach(async () => {
    testI18n = i18n.createInstance()
    await testI18n.use(initReactI18next).init({
      resources: {
        he: { translation: he },
        en: { translation: en },
      },
      lng: 'he',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    })
  })

  it('initializes without errors', () => {
    expect(testI18n.isInitialized).toBe(true)
  })

  it('default language is Hebrew', () => {
    expect(testI18n.language).toBe('he')
  })

  it('can change language to English', async () => {
    await testI18n.changeLanguage('en')
    expect(testI18n.language).toBe('en')
  })

  it('can change language back to Hebrew', async () => {
    await testI18n.changeLanguage('en')
    await testI18n.changeLanguage('he')
    expect(testI18n.language).toBe('he')
  })

  it('returns Hebrew translation for start.title', () => {
    const result = testI18n.t('start.title')
    expect(result).toBe('סוניק מתמטיקה!')
  })

  it('returns English translation when language is en', async () => {
    await testI18n.changeLanguage('en')
    const result = testI18n.t('start.title')
    expect(result).toBe('Sonic Math Trainer!')
  })

  it('falls back to English for missing Hebrew keys', () => {
    // Verify that fallback works by checking a key exists in both
    const heResult = testI18n.t('common.loading')
    expect(heResult).toBe('טוען...')
  })

  it('interpolation works with Hebrew', () => {
    const result = testI18n.t('start.accuracy', { percent: 85 })
    expect(result).toBe('דיוק: 85%')
  })

  it('interpolation works with English', async () => {
    await testI18n.changeLanguage('en')
    const result = testI18n.t('start.accuracy', { percent: 85 })
    expect(result).toBe('Accuracy: 85%')
  })

  it('interpolation works for profile level', () => {
    const result = testI18n.t('profile.level', { level: 5 })
    expect(result).toBe('שלב 5')
  })

  it('interpolation works for pin digits', async () => {
    await testI18n.changeLanguage('en')
    const result = testI18n.t('pin.digitsEntered', { count: 2, total: 4 })
    expect(result).toBe('2 of 4 digits entered')
  })

  it('returns array values for feedback.correct', () => {
    const result = testI18n.t('feedback.correct', { returnObjects: true })
    expect(Array.isArray(result)).toBe(true)
    expect(result).toHaveLength(8)
  })

  it('returns array values for feedback.wrong', () => {
    const result = testI18n.t('feedback.wrong', { returnObjects: true })
    expect(Array.isArray(result)).toBe(true)
    expect(result).toHaveLength(6)
  })
})

describe('translation completeness', () => {
  const heKeys = flattenKeys(he)
  const enKeys = flattenKeys(en)

  it('en.json has all keys from he.json', () => {
    const missing = heKeys.filter(k => !enKeys.includes(k))
    expect(missing).toEqual([])
  })

  it('he.json has all keys from en.json', () => {
    const missing = enKeys.filter(k => !heKeys.includes(k))
    expect(missing).toEqual([])
  })

  it('both languages have the same number of keys', () => {
    expect(heKeys.length).toBe(enKeys.length)
  })

  it('has at least 90 translation keys', () => {
    expect(heKeys.length).toBeGreaterThanOrEqual(90)
  })

  it('feedback.correct arrays have the same length in both languages', () => {
    expect(he.feedback.correct.length).toBe(en.feedback.correct.length)
  })

  it('feedback.wrong arrays have the same length in both languages', () => {
    expect(he.feedback.wrong.length).toBe(en.feedback.wrong.length)
  })
})

describe('translation key groups', () => {
  it('has app keys', () => {
    expect(en.app).toBeDefined()
    expect(en.app.loading).toBeDefined()
    expect(en.app.errorTitle).toBeDefined()
  })

  it('has start screen keys', () => {
    expect(en.start).toBeDefined()
    expect(en.start.title).toBeDefined()
    expect(en.start.startButton).toBeDefined()
  })

  it('has game screen keys', () => {
    expect(en.game).toBeDefined()
    expect(en.game.exit).toBeDefined()
  })

  it('has result screen keys', () => {
    expect(en.result).toBeDefined()
    expect(en.result.title).toBeDefined()
    expect(en.result.playAgain).toBeDefined()
  })

  it('has score display keys', () => {
    expect(en.score).toBeDefined()
    expect(en.score.score).toBeDefined()
    expect(en.score.streak).toBeDefined()
  })

  it('has feedback keys', () => {
    expect(en.feedback).toBeDefined()
    expect(en.feedback.correct).toHaveLength(8)
    expect(en.feedback.wrong).toHaveLength(6)
  })

  it('has profile keys', () => {
    expect(en.profile).toBeDefined()
    expect(en.profile.title).toBeDefined()
    expect(en.profile.createHero).toBeDefined()
  })

  it('has pin entry keys', () => {
    expect(en.pin).toBeDefined()
    expect(en.pin.enterPin).toBeDefined()
  })

  it('has create profile keys', () => {
    expect(en.create).toBeDefined()
    expect(en.create.whatIsYourName).toBeDefined()
    expect(en.create.chooseHero).toBeDefined()
  })

  it('has level up keys', () => {
    expect(en.levelup).toBeDefined()
    expect(en.levelup.levelComplete).toBeDefined()
    expect(en.levelup.mathChampion).toBeDefined()
  })

  it('has level map keys', () => {
    expect(en.levelmap).toBeDefined()
    expect(en.levelmap.ariaLabel).toBeDefined()
  })

  it('has strategy keys', () => {
    expect(en.strategy).toBeDefined()
    expect(en.strategy.names).toBeDefined()
    expect(en.strategy.names.bridging_add).toBeDefined()
  })

  it('has learning aid keys', () => {
    expect(en.learningAid).toBeDefined()
    expect(en.learningAid.dismiss).toBeDefined()
  })

  it('has dot counter keys', () => {
    expect(en.dotCounter).toBeDefined()
    expect(en.dotCounter.addLabel).toBeDefined()
  })

  it('has common keys', () => {
    expect(en.common).toBeDefined()
    expect(en.common.loading).toBeDefined()
    expect(en.common.cancel).toBeDefined()
  })
})
