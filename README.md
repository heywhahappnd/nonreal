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

```
app/                 Routes, metadata, sitemap, robots, social card
components/
  layout/            Header, Footer
  sections/          Hero, Showcase, TelegramCTA
  creator/           CreatorCard, CreatorProfile (sheet / modal)
  ui/                Shared primitives (icons)
providers/           AppProviders, I18nProvider (useTranslation), MotionProvider
hooks/               useModal (scroll lock, Escape, focus trap), useMediaQuery
data/                Language-neutral creator data (name, handle, portrait, colours, stats)
types/               Shared TypeScript types
lib/                 i18n core, site config, constants
locales/             en.json: every user-facing string, including creator copy
public/creators/     Portraits
```

To add a creator: add an entry in `data/creators.ts`, a matching `creators.<id>` block in `locales/en.json`, and a portrait in `public/creators/`.

## Configure

- Telegram link: `TELEGRAM_URL` in `lib/creators.ts`.
- Portraits: the current files are AI-generated portraits. To use photographic AI portraits, drop 4:5 images (about 1200×1500 `.jpg` or `.webp`) into `public/creators/` and update `portrait` in the data. Non-SVG files go through `next/image` optimisation automatically.

## Translations

Only English ships today. To add a language: copy `locales/en.json` to `locales/<code>.json`, translate it, then register it in `lib/i18n.ts` (`locales` and `catalog`). Components call `const { t, creators } = useTranslation()`; keys are type-checked against `en.json`.

## Deploy

Import the repo in Vercel (zero config).

## Accessibility

The profile is `role="dialog"` with `aria-modal`. It has a focus trap, Escape to close, focus return to the card, body scroll lock, drag-to-dismiss on mobile and `prefers-reduced-motion` support.
