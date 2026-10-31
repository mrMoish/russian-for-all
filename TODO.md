# TODO & Action Items for Owner (Vasily Moish)

This document tracks all action items, placeholders, and decisions requiring confirmation by Vasily Moish.

---

## 1. Contact & Messaging Channels
- [ ] **WhatsApp Vanity Link vs. Numeric Fallback:**
  - In `src/config/contacts.ts`, test whether the vanity link (`https://wa.me/mrmoish`) or the direct numeric link (`https://wa.me/5491121798231`) routes more reliably to your WhatsApp client.
- [ ] **QR Code Verification:**
  - Verify that scanning `public/qr-telegram.svg` and `public/qr-whatsapp.svg` on mobile phones correctly initiates direct chat threads with your accounts.

---

## 2. Pricing & Service Schema
- [ ] **Service Rates & Packages:**
  - When you are ready to publish specific lesson pricing (e.g., rate per 45 or 60-minute session or multi-session packages), update `src/components/StructuredData.astro` to include `offers` in the `Service` JSON-LD schema.
  - Per quality guidelines, pricing schema is omitted until exact numbers are confirmed.

---

## 3. Native Speaker Proofreading
All copy was crafted directly in the target languages without machine-literal phrasing, but native review is recommended prior to running paid campaigns:
- [ ] `src/i18n/translations/en.ts` (English)
- [ ] `src/i18n/translations/zh.ts` (Chinese Simplified)
- [ ] `src/i18n/translations/es.ts` (Spanish)
- [ ] `src/i18n/translations/tr.ts` (Turkish)
- [ ] `src/i18n/translations/ar.ts` (Arabic)
- [ ] `src/i18n/translations/ro.ts` (Romanian)
- [ ] `src/i18n/translations/he.ts` (Hebrew)

---

## 4. Off-Site GEO & Entity Sync
- [ ] Follow the checklist in `docs/geo-checklist.md` to synchronize Instagram, Telegram, and developer bio descriptions with the exact entity phrasing on `mrmoish.com`.
