import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';
import LocalStorageBackend from 'i18next-localstorage-backend';

const Languages = ['en', 'sp', 'ru'];

export default i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      backends: [LocalStorageBackend],
    },
  });
