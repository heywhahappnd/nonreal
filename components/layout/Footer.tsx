'use client';
import { useTranslation } from '@/providers/I18nProvider';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mx-auto max-w-6xl border-t border-line px-5 py-8 text-sm text-mute">
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <p>{t('footer.legal')}</p>
        <p>{t('footer.tagline')}</p>
      </div>
    </footer>
  );
}
