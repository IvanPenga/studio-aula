import en from '../../public/locales/en/translation.json';
import hr from '../../public/locales/hr/translation.json';

export type TranslationKey = keyof typeof en;

const translations = { en, hr };

type Language = keyof typeof translations;

const language: Language = import.meta.env.LANGUAGE || 'en';

if (!(language in translations)) {
  throw new Error(`Language ${language} does not exist`);
}

const localization = translations[language];
const defaultLocalization = translations['en'];

export function translate(key: TranslationKey) {
  return localization[key] || defaultLocalization[key];
}