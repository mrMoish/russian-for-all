import fs from 'fs';
import path from 'path';

// Define expected languages
const LOCALES = ['en', 'zh', 'es', 'tr', 'ar', 'ro', 'he'];

// Import translations dynamically
async function checkTranslations() {
  const translationsDir = path.join(process.cwd(), 'src/i18n/translations');

  if (!fs.existsSync(translationsDir)) {
    console.error(`Error: Translations directory not found at ${translationsDir}`);
    process.exit(1);
  }

  const localeFiles = LOCALES.map(loc => ({
    locale: loc,
    file: path.join(translationsDir, `${loc}.ts`)
  }));

  for (const { locale, file } of localeFiles) {
    if (!fs.existsSync(file)) {
      console.error(`Error: Missing translation file for locale '${locale}': ${file}`);
      process.exit(1);
    }
  }

  // Load English as reference
  const enModule = await import(`file://${path.join(translationsDir, 'en.ts')}`);
  const enKeys = getKeys(enModule.default || enModule.translations);

  let hasErrors = false;

  for (const { locale, file } of localeFiles) {
    if (locale === 'en') continue;
    const locModule = await import(`file://${file}`);
    const locKeys = getKeys(locModule.default || locModule.translations);

    const missingKeys = enKeys.filter(k => !locKeys.includes(k));
    if (missingKeys.length > 0) {
      console.error(`\n❌ [${locale}] Missing ${missingKeys.length} translation key(s):`);
      missingKeys.forEach(k => console.error(`  - ${k}`));
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error('\ni18n verification failed!');
    process.exit(1);
  } else {
    console.log(`\n✅ i18n verification passed! All ${LOCALES.length} locales have complete translation keys.`);
  }
}

function getKeys(obj: Record<string, any>, prefix = ''): string[] {
  let keys: string[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getKeys(obj[key], prefix ? `${prefix}.${key}` : key));
    } else {
      keys.push(prefix ? `${prefix}.${key}` : key);
    }
  }
  return keys;
}

checkTranslations().catch(err => {
  console.error(err);
  process.exit(1);
});
