# Deployment Guide

The website is configured for zero-configuration static hosting and can be deployed in minutes to either **Cloudflare Pages** (default) or **Vercel**.

---

## 1. Cloudflare Pages (Recommended Default)

Cloudflare Pages offers fast worldwide CDN edges, zero egress fees, and static asset caching.

### Option A: Via Cloudflare Dashboard
1. Connect your GitHub repository to Cloudflare Pages.
2. Select **Framework preset**: `Astro`.
3. Set **Build command**: `npm run build`.
4. Set **Build output directory**: `dist`.
5. Click **Save and Deploy**.

### Option B: Via Wrangler CLI
A `wrangler.toml` file is included in the project root:
```bash
npx wrangler pages deploy dist --project-name=mr-moish-russian
```

---

## 2. Vercel

A pre-configured `vercel.json` is provided in the root directory.

### Steps:
1. Import the repository into the Vercel dashboard.
2. Framework Preset will automatically detect **Astro**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 3. Custom Domain Configuration
- Ensure your DNS `CNAME` or `A` records point to your Cloudflare or Vercel deployment.
- Verify `site: 'https://mrmoish.com'` in `astro.config.mjs` matches your final production URL.
