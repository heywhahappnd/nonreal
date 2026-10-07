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

- `lib/creators.ts` holds all creator content and theme colours. Add an object here to add a creator.
- `components/` holds Header, Hero, Showcase (state), CreatorCard, CreatorProfile (sheet/modal), TelegramCTA, Footer.
- `public/creators/` holds the portraits.

## Configure

- Telegram link: `TELEGRAM_URL` in `lib/creators.ts` (currently a placeholder handle).
- Portraits: the current files are art-directed vector illustrations. To use photographic AI portraits, drop 4:5 images (about 1200×1500 `.jpg` or `.webp`) into `public/creators/` and update `portrait` in the data. Non-SVG files go through `next/image` optimisation automatically.

## Deploy

Import the repo in Vercel (zero config).

## Accessibility

The profile is `role="dialog"` with `aria-modal`. It has a focus trap, Escape to close, focus return to the card, body scroll lock, drag-to-dismiss on mobile and `prefers-reduced-motion` support.
