# Mr. Moish — Multilingual Landing Website

Production-ready, fast, multilingual, SEO + GEO-optimized static landing website for **Vasily Moish** ("Mr. Moish"), offering 1-on-1 Russian conversation practice online.

---

## 🌟 Key Features

1. **7 Full Native Languages**: English (`en`, default), Chinese Simplified (`zh-Hans`), Spanish (`es`), Turkish (`tr`), Arabic (`ar`, full RTL support), Romanian (`ro`), and Hebrew (`he`, full RTL support).
2. **SEO & Hreflang Architecture**: Fully reciprocal and self-referencing `hreflang` alternates on every page and in `sitemap-index.xml`. Canonical URLs and custom meta tags per language.
3. **Structured Data (Schema.org)**: Complete JSON-LD for `Person`/`Organization`, `WebSite`, `Service`, `FAQPage`, `Article`, and `BreadcrumbList`.
4. **Generative Engine Optimization (GEO)**:
   - Answer-first formatting across all guide hub articles and FAQs.
   - Dedicated `/llms.txt` and `/llms-full.txt` files for AI assistant indexation (ChatGPT, Claude, Perplexity, etc.).
   - Explicit AI bot crawler support in `/public/robots.txt`.
5. **Interactive & High-Value Content**:
   - Cyrillic Alphabet Cheat Sheet with phonetic pronunciation guides.
   - 10 essential everyday Russian phrases localized with transliteration.
   - "Facts at a Glance" entity block.
   - Dynamic time zone table computing local session windows relative to Buenos Aires (UTC-3).
   - Build-time generated SVG QR codes for Telegram and WhatsApp.
6. **Performance & Accessibility**:
   - 100% static output built with Astro + Tailwind CSS.
   - Minimal client JS, light/dark mode via `prefers-color-scheme`, accessible skip link, and WCAG AA contrast.

---

## 🚀 Quick Start & Scripts

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Static Production Build
```bash
npm run build
```

### Preview Static Build
```bash
npm run preview
```

### Run i18n Completeness Checks
Verifies that all 7 languages possess exact translation key parity:
```bash
npm run check:i18n
```

### Run Site & Hreflang Reciprocity Validation
```bash
npx tsx scripts/validate-site.ts
```

---

## 🌐 How to Add a New Language

1. Open `src/i18n/languages.ts` and add your locale code to `Locale` and `LANGUAGES`.
2. Create a new translation file under `src/i18n/translations/<locale>.ts`. Mark it with a `// TODO(owner): Native-speaker proofreading required` comment.
3. Import and add your dictionary into `src/i18n/utils.ts`.
4. Run `npm run check:i18n` to verify all required translation keys exist.

---

## 📝 How to Add a New Guide Article

1. Open `src/data/guides.ts`.
2. Locate the array corresponding to your target language under `GUIDE_ARTICLES`.
3. Add a new `GuideArticle` object with `slug`, `title`, `description`, `answerFirst`, `content`, `datePublished`, and `dateModified`.
4. The route `/[lang]/learn-russian/[slug]/` is automatically generated at build time.
