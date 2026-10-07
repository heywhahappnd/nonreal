import type { Messages } from '@/lib/i18n';
import type { Creator, Post } from '@/types/creator';

/** Language-neutral data. All user-facing text lives in locales/*.json under creators.<id>. */
type CreatorBase = Pick<Creator, 'id' | 'name' | 'handle' | 'portrait' | 'stats' | 'theme'> & {
  postKinds: Post['kind'][];
};

const creatorBases: CreatorBase[] = [
  {
    id: 'kai',
    name: 'Kai Arden',
    handle: 'kai.arden',
    portrait: '/creators/kai.jpg',
    stats: { followers: '482K', posts: '1.2K', engagement: '8.4%' },
    theme: { bg: '#0F1B2D', fg: '#F4EFE7', accent: '#C8F25C', accentFg: '#0F1B2D' },
    postKinds: ['quote', 'stat', 'note'],
  },
  {
    id: 'mara',
    name: 'Mara Solé',
    handle: 'mara.sole',
    portrait: '/creators/mara.jpg',
    stats: { followers: '731K', posts: '2.8K', engagement: '6.9%' },
    theme: { bg: '#D9784A', fg: '#1F1410', accent: '#F6D9B0', accentFg: '#1F1410' },
    postKinds: ['quote', 'stat', 'note'],
  },
  {
    id: 'dante',
    name: 'Dante Voss',
    handle: 'dante.voss',
    portrait: '/creators/dante.jpg',
    stats: { followers: '615K', posts: '1.9K', engagement: '9.2%' },
    theme: { bg: '#3A1F3D', fg: '#F4EFE7', accent: '#E7C873', accentFg: '#2A1530' },
    postKinds: ['quote', 'stat', 'note'],
  },
  {
    id: 'iris',
    name: 'Iris Calder',
    handle: 'iris.calder',
    portrait: '/creators/iris.jpg',
    stats: { followers: '398K', posts: '980', engagement: '7.7%' },
    theme: { bg: '#A9B99A', fg: '#1F2A1A', accent: '#F1EADB', accentFg: '#1F2A1A' },
    postKinds: ['quote', 'stat', 'note'],
  },
];

/** Merges the language-neutral data with a locale's copy. */
export function getCreators(messages: Messages): Creator[] {
  return creatorBases.map(({ postKinds, ...base }) => {
    const copy = messages.creators[base.id];
    return {
      ...base,
      ...copy,
      tags: [...copy.tags],
      posts: copy.posts.map((post, i) => ({ ...post, kind: postKinds[i] })),
    };
  });
}
