/**
 * Test utility: renderWithProviders
 *
 * Wraps a component in ALL application providers (I18nextProvider + ProfileContext)
 * with a fresh i18n instance per test to avoid cross-test pollution.
 *
 * For most unit tests, the global setupTests.js i18n mock is sufficient.
 * Use this helper for integration-level tests that need real translations,
 * language switching, or profile context.
 *
 * @example
 * import { renderWithProviders } from '../test-utils'
 * const { getByText, i18n } = renderWithProviders(<MyComponent />, {
 *   language: 'he',
 *   profile: { id: 'p1', nickname: 'Hero', currentLevel: 1, language: 'he' },
 * })
 */

import { render } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import he from '../i18n/locales/he.json'
import en from '../i18n/locales/en.json'
import ProfileContext from '../context/profileContext'

/**
 * Creates a fresh i18n instance for testing.
 * Each call returns an isolated instance so tests cannot pollute each other.
 *
 * @param {string} lng - Initial language ('he' or 'en')
 * @returns {import('i18next').i18n} Initialized i18n instance
 */
export function createTestI18nInstance(lng = 'en') {
  const instance = i18n.createInstance()
  instance.use(initReactI18next).init({
    resources: {
      he: { translation: he },
      en: { translation: en },
    },
    lng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
  return instance
}

/**
 * Default stub for ProfileContext value.
 * All actions are no-op vi.fn() stubs unless overridden.
 */
function buildProfileContextValue(profile = null) {
  // Dynamic import not possible here; callers can pass vi.fn() directly.
  const noop = () => {}
  return {
    profiles: profile ? [profile] : [],
    activeProfile: profile,
    isLoading: false,
    error: null,
    maxProfiles: 4,
    selectProfile: noop,
    clearActiveProfile: noop,
    refreshProfiles: noop,
    addProfile: noop,
    createAndActivate: noop,
    updateProfile: noop,
    deleteProfile: noop,
  }
}

/**
 * Render a component wrapped in all application providers.
 *
 * Provider nesting order (outermost first):
 *   I18nextProvider -> ProfileContext.Provider -> component
 *
 * @param {import('react').ReactElement} ui - Component to render
 * @param {Object} [options]
 * @param {string} [options.language='en'] - Language for the i18n instance
 * @param {Object|null} [options.profile=null] - Active profile mock
 * @param {Object} [options.profileContext] - Full ProfileContext value override
 * @param {import('@testing-library/react').RenderOptions} [options.renderOptions] - RTL options
 * @returns {{ i18n: import('i18next').i18n } & import('@testing-library/react').RenderResult}
 */
export function renderWithProviders(
  ui,
  { language = 'en', profile = null, profileContext, ...renderOptions } = {},
) {
  const i18nInstance = createTestI18nInstance(language)
  const profileValue = profileContext || buildProfileContextValue(profile)

  function Wrapper({ children }) {
    return (
      <I18nextProvider i18n={i18nInstance}>
        <ProfileContext.Provider value={profileValue}>
          {children}
        </ProfileContext.Provider>
      </I18nextProvider>
    )
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    i18n: i18nInstance,
  }
}
