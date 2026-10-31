export type Locale = 'en' | 'zh' | 'es' | 'tr' | 'ar' | 'ro' | 'he';

export interface LanguageInfo {
  code: Locale;
  hreflang: string;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  script: string;
  flag: string;
  regionalHint: string;
}

export const LANGUAGES: Record<Locale, LanguageInfo> = {
  en: {
    code: 'en',
    hreflang: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    script: 'Latin',
    flag: '🇬🇧',
    regionalHint: 'Worldwide'
  },
  zh: {
    code: 'zh',
    hreflang: 'zh-Hans',
    name: 'Chinese Simplified',
    nativeName: '中文',
    dir: 'ltr',
    script: 'Simplified Chinese',
    flag: '🇨🇳',
    regionalHint: 'Mainland China, Taiwan, Singapore'
  },
  es: {
    code: 'es',
    hreflang: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    script: 'Latin',
    flag: '🇪🇸',
    regionalHint: 'Spain & Latin America'
  },
  tr: {
    code: 'tr',
    hreflang: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    dir: 'ltr',
    script: 'Latin',
    flag: '🇹🇷',
    regionalHint: 'Turkey & Northern Cyprus'
  },
  ar: {
    code: 'ar',
    hreflang: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    script: 'Arabic',
    flag: '🇦🇪',
    regionalHint: 'Middle East & North Africa'
  },
  ro: {
    code: 'ro',
    hreflang: 'ro',
    name: 'Romanian',
    nativeName: 'Română',
    dir: 'ltr',
    script: 'Latin',
    flag: '🇷🇴',
    regionalHint: 'Romania & Moldova'
  },
  he: {
    code: 'he',
    hreflang: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    dir: 'rtl',
    script: 'Hebrew',
    flag: '🇮🇱',
    regionalHint: 'Israel'
  }
};

export const DEFAULT_LOCALE: Locale = 'en';
