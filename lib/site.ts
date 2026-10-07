import { creators } from './creators';

export const SITE_NAME = 'Nonreal';
export const SITE_DESCRIPTION =
  'Meet Kai, Mara, Dante and Iris: four virtual AI creators sharing tech, travel, fashion and wellness. Explore their profiles and follow them on Telegram.';

/** Production URL on Vercel, or NEXT_PUBLIC_SITE_URL, or local dev. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, description: SITE_DESCRIPTION, inLanguage: 'en' },
    {
      '@type': 'ItemList',
      name: 'Nonreal virtual creators',
      itemListElement: creators.map((c, i) => ({
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
