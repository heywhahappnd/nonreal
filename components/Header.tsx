'use client';
import { TELEGRAM_URL } from '@/lib/creators';
import { TelegramIcon } from './Icons';
import { useTranslation } from './I18nProvider';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label={t('a11y.backToTop')} className="font-display text-2xl font-semibold tracking-tight">
          non<span className="italic text-[#C74B2E]">real</span>
        </a>
        <nav aria-label={t('a11y.primaryNav')} className="flex items-center gap-5 text-sm font-semibold">
          <a href="#creators" className="hidden min-h-11 items-center hover:underline sm:flex">{t('header.creators')}</a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-paper transition hover:bg-[#2b2620]"
          >
            <TelegramIcon className="h-4 w-4" /> {t('header.join')}
            <span className="sr-only"> {t('header.joinLong')} {t('common.opensInNewTab')}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
