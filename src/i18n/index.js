import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import de from './de.json';

const resources = {
  en: { translation: en },
  de: { translation: de },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  interpolation: { escapeValue: false }, // React already escapes by default
});

export default i18n;
