/**
 * Global i18n test setup for Vitest
 *
 * Since no components have been migrated to use useTranslation() yet
 * (that happens in issues #89-#91), this setup file only needs to
 * ensure that i18next is available if any test indirectly triggers
 * an import. It initializes a minimal i18n instance with English
 * translations so existing tests continue to pass unchanged.
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Only initialize once
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: {} },
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
