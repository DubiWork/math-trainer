/**
 * Test utility: renderWithI18n
 *
 * Wraps a component in an I18nextProvider with a fresh i18n instance
 * for integration-level tests that need real translations.
 *
 * For most unit tests, the global setupTests.js i18n mock is sufficient.
 * Use this helper when you need to test language switching or verify
 * translated output in a specific language.
 *
 * @example
 * import { renderWithI18n } from '../test-utils'
 * const { getByText } = renderWithI18n(<MyComponent />, { language: 'he' })
 */

import { render } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import he from '../i18n/locales/he.json'
import en from '../i18n/locales/en.json'

/**
 * Creates a fresh i18n instance for testing.
 *
 * @param {string} lng - Initial language ('he' or 'en')
 * @returns {import('i18next').i18n} Initialized i18n instance
 */
export function createTestI18n(lng = 'en') {
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
 * Render a component wrapped in I18nextProvider.
 *
 * @param {import('react').ReactElement} ui - Component to render
 * @param {Object} [options]
 * @param {string} [options.language='en'] - Language for the i18n instance
 * @param {import('@testing-library/react').RenderOptions} [options.renderOptions] - Additional render options
 * @returns {{ i18n: import('i18next').i18n } & import('@testing-library/react').RenderResult}
 */
export function renderWithI18n(ui, { language = 'en', ...renderOptions } = {}) {
  const i18nInstance = createTestI18n(language)

  function Wrapper({ children }) {
    return (
      <I18nextProvider i18n={i18nInstance}>
        {children}
      </I18nextProvider>
    )
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    i18n: i18nInstance,
  }
}
