import { TELEGRAM_URL } from '@/lib/creators';
import { TelegramIcon } from './Icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="Nonreal, back to top" className="font-display text-2xl font-semibold tracking-tight">
          non<span className="italic text-[#C74B2E]">real</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm font-semibold">
          <a href="#creators" className="hidden min-h-11 items-center hover:underline sm:flex">Creators</a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-paper transition hover:bg-[#2b2620]"
          >
            <TelegramIcon className="h-4 w-4" /> Join<span className="sr-only"> our Telegram channel (opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
