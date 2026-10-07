import type { Messages } from '@/lib/i18n';

export type Post = {
  kind: 'quote' | 'stat' | 'note';
  title: string;
  body: string;
  meta: string;
};

export type CreatorId = keyof Messages['creators'];

export type Creator = {
  id: CreatorId;
  name: string;
  handle: string;
  portrait: string;
  stats: { followers: string; posts: string; engagement: string };
  /** Brand colours for the card, tiles and profile accents */
  theme: { bg: string; fg: string; accent: string; accentFg: string };
  // Translated copy (from locales/<locale>.json)
  category: string;
  tagline: string;
  bio: string;
  alt: string;
  location: string;
  tags: string[];
  ask: { q: string; a: string };
  posts: Post[];
};
