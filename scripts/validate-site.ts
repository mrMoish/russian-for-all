import fs from 'fs';
import path from 'path';

function validateHreflangAndLinks() {
  const distDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.error('Error: dist directory does not exist. Run npm run build first.');
    process.exit(1);
  }

  const locales = ['en', 'zh', 'es', 'tr', 'ar', 'ro', 'he'];
  let checkedCount = 0;
  let errors = 0;

  for (const locale of locales) {
    const indexPath = path.join(distDir, locale, 'index.html');
    if (!fs.existsSync(indexPath)) {
      console.error(`Missing index.html for locale: ${locale}`);
      errors++;
      continue;
    }

    const html = fs.readFileSync(indexPath, 'utf-8');

    // Check canonical
    if (!html.includes('<link rel="canonical"')) {
      console.error(`Missing canonical link in ${locale}/index.html`);
      errors++;
    }

    // Check self-referencing hreflang
    if (!html.includes(`hreflang="${locale === 'zh' ? 'zh-Hans' : locale}"`)) {
      console.error(`Missing self-referencing hreflang in ${locale}/index.html`);
      errors++;
    }

    // Check x-default
    if (!html.includes('hreflang="x-default"')) {
      console.error(`Missing x-default hreflang in ${locale}/index.html`);
      errors++;
    }

    checkedCount++;
  }

  if (errors > 0) {
    console.error(`❌ Validation failed with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log(`✅ Automated validation passed! Verified ${checkedCount} locale landing pages.`);
  }
}

validateHreflangAndLinks();
