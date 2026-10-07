import en from '@/locales/en.json';

/**
 * Translations live in /locales/<locale>.json.
 * To add a language: add the JSON file, register it in `catalog` and `locales` below.
 */
export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export type Messages = typeof en;

const catalog: Record<Locale, Messages> = { en };

export const getMessages = (locale: Locale = defaultLocale): Messages => catalog[locale];

// Dot-separated keys of every string leaf, e.g. "hero.titleStart". Arrays are skipped.
type Paths<T> = {
  [K in keyof T & string]: T[K] extends string ? K : T[K] extends readonly unknown[] ? never : `${K}.${Paths<T[K]>}`;
}[keyof T & string];
export type MessageKey = Paths<Messages>;

export type Translate = (key: MessageKey, vars?: Record<string, string | number>) => string;

/** Plain (non-React) translator, so server code such as metadata can use it too. */
export function createTranslator(messages: Messages): Translate {
  return (key, vars) => {
    const value = key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], messages);
    if (typeof value !== 'string') return key;
    return vars ? value.replace(/\{(\w+)\}/g, (match, name) => String(vars[name] ?? match)) : value;
  };
}
