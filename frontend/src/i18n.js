import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/eng.json'; // Import directly
import ar from './locales/ar.json'; // Import directly

i18n
  .use(LanguageDetector) // Auto-detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Optional, can be turned off in production
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
    react: {
      useSuspense: false, // Disable suspense if not needed
    },
  });

export default i18n;
