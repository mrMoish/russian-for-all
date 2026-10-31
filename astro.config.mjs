import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mrmoish.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'es', 'tr', 'ar', 'ro', 'he'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-Hans',
          es: 'es',
          tr: 'tr',
          ar: 'ar',
          ro: 'ro',
          he: 'he'
        }
      }
    })
  ]
});
