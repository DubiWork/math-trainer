/**
 * Global i18n test setup for Vitest
 *
 * Loads the full English translation file so that t() calls in
 * components return real English strings during tests. This keeps
 * test assertions readable and verifies the translation keys are
 * wired correctly.
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/locales/en.json'

// Only initialize once
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
}
