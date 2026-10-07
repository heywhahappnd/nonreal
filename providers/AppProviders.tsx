'use client';
import I18nProvider from '@/providers/I18nProvider';
import MotionProvider from '@/providers/MotionProvider';
import type { Locale } from '@/lib/i18n';

/** Single place where app-wide context providers are composed. */
export default function AppProviders({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <MotionProvider>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </MotionProvider>
  );
}
