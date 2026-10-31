import { DEFAULT_LOCALE, LANGUAGES, type Locale } from './languages';
import en from './translations/en';
import zh from './translations/zh';
import es from './translations/es';
import tr from './translations/tr';
import ar from './translations/ar';
import ro from './translations/ro';
import he from './translations/he';

const dictionaries: Record<Locale, typeof en> = {
  en,
  zh,
  es,
  tr,
  ar,
  ro,
  he
};

export function getTranslation(locale: string | undefined): typeof en {
  const lang = (locale && locale in dictionaries ? locale : DEFAULT_LOCALE) as Locale;
  return dictionaries[lang];
}

export function getLanguageInfo(locale: string | undefined) {
  const lang = (locale && locale in LANGUAGES ? locale : DEFAULT_LOCALE) as Locale;
  return LANGUAGES[lang];
}
