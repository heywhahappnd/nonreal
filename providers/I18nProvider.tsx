'use client';
import { createContext, useContext, useMemo } from 'react';
import { createTranslator, getMessages, type Locale, type Translate } from '@/lib/i18n';
import { getCreators } from '@/data/creators';
import type { Creator } from '@/types/creator';

type I18n = { locale: Locale; t: Translate; creators: Creator[] };

const I18nContext = createContext<I18n | null>(null);

export default function I18nProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const value = useMemo<I18n>(() => {
    const messages = getMessages(locale);
    return { locale, t: createTranslator(messages), creators: getCreators(messages) };
  }, [locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** `const { t, creators, locale } = useTranslation()` */
export function useTranslation(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used inside <I18nProvider>');
  return ctx;
}
