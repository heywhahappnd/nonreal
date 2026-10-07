import { getCreators } from './creators';
import { createTranslator, type Messages } from './i18n';

export const SITE_NAME = 'Nonreal';

/** Production URL on Vercel, or NEXT_PUBLIC_SITE_URL, or local dev. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

export function buildJsonLd(messages: Messages, locale: string) {
  const t = createTranslator(messages);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, description: t('meta.description'), inLanguage: locale },
      {
        '@type': 'ItemList',
        name: t('meta.listName'),
        itemListElement: getCreators(messages).map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Person',
            name: c.name,
            alternateName: `@${c.handle}`,
            description: `${c.category}. ${c.bio}`,
            image: `${SITE_URL}${c.portrait}`,
          },
        })),
      },
    ],
  };
}
