# Nonreal

A one-page, mobile-first showcase of four virtual AI creators (Kai, Mara, Dante, Iris). Tapping a creator opens a profile (bottom sheet on mobile, modal on desktop) with stats, an "Ask" snippet, a mini feed and a Telegram CTA.

Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion. No backend.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `locales/en.json` holds every user-facing string, including each creator's bio, tags and posts.
- `lib/i18n.ts` holds the locale config and a typed `t()`; `components/I18nProvider.tsx` exposes `useTranslation()`.
- `lib/creators.ts` holds language-neutral creator data (name, handle, portrait, stats, colours). Add an object here and a matching `creators.<id>` block in the JSON to add a creator.
- `components/` holds Header, Hero, Showcase (state), CreatorCard, CreatorProfile (sheet/modal), TelegramCTA, Footer.
- `public/creators/` holds the portraits.

## Configure

- Telegram link: `TELEGRAM_URL` in `lib/creators.ts`.
- Portraits: the current files are AI-generated portraits. To use photographic AI portraits, drop 4:5 images (about 1200×1500 `.jpg` or `.webp`) into `public/creators/` and update `portrait` in the data. Non-SVG files go through `next/image` optimisation automatically.

## Translations

Only English ships today. To add a language: copy `locales/en.json` to `locales/<code>.json`, translate it, then register it in `lib/i18n.ts` (`locales` and `catalog`). Components call `const { t, creators } = useTranslation()`; keys are type-checked against `en.json`.

## Deploy

Import the repo in Vercel (zero config).

## Accessibility

The profile is `role="dialog"` with `aria-modal`. It has a focus trap, Escape to close, focus return to the card, body scroll lock, drag-to-dismiss on mobile and `prefers-reduced-motion` support.
