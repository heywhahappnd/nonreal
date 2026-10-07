export const TELEGRAM_URL = 'https://t.me/nonreal_studio';

export type Post = {
  kind: 'quote' | 'stat' | 'note';
  title: string;
  body: string;
  meta: string;
};

export type Creator = {
  id: string;
  name: string;
  handle: string;
  category: string;
  tagline: string;
  bio: string;
  portrait: string;
  alt: string;
  location: string;
  stats: { followers: string; posts: string; engagement: string };
  tags: string[];
  /** Brand colours for the card, tiles and profile accents */
  theme: { bg: string; fg: string; accent: string; accentFg: string };
  ask: { q: string; a: string };
  posts: Post[];
};

export const creators: Creator[] = [
  {
    id: 'kai',
    name: 'Kai Arden',
    handle: 'kai.arden',
    category: 'Tech & AI',
    tagline: 'Tomorrow, decoded.',
    bio: 'Ex-lab nerd turned explainer. Kai breaks down the week in AI into five minutes you can actually use, with no hype and no jargon.',
    portrait: '/creators/kai.svg',
    alt: 'Illustrated portrait of Kai Arden, a man with round glasses and a navy hoodie on a lime and midnight background',
    location: 'Tallinn',
    stats: { followers: '482K', posts: '1.2K', engagement: '8.4%' },
    tags: ['AI tools', 'Gadgets', 'Future of work'],
    theme: { bg: '#0F1B2D', fg: '#F4EFE7', accent: '#C8F25C', accentFg: '#0F1B2D' },
    ask: { q: 'Is my job safe?', a: 'Your tasks change, your job adapts. Learn the tool before it learns you.' },
    posts: [
      { kind: 'quote', title: 'The 5-minute stack', body: 'Three AI tools I keep on my dock. Everything else is noise.', meta: '12.4K saves' },
      { kind: 'stat', title: '9 of 10', body: 'workflows I tested this month got faster. One got slower, and I explain why.', meta: 'Weekly teardown' },
      { kind: 'note', title: 'Hot take', body: 'Prompting is not a skill. Knowing what you want is.', meta: '3.1K replies' },
    ],
  },
  {
    id: 'mara',
    name: 'Mara Solé',
    handle: 'mara.sole',
    category: 'Travel & Adventure',
    tagline: 'One carry-on. Zero itinerary.',
    bio: 'Mara chases golden hour from Lisbon to Luang Prabang. Slow routes, local tables, and the trails the guidebooks skip.',
    portrait: '/creators/mara.svg',
    alt: 'Illustrated portrait of Mara Solé, a woman with long dark hair and backpack straps against a terracotta sunset',
    location: 'Lisbon',
    stats: { followers: '731K', posts: '2.8K', engagement: '6.9%' },
    tags: ['Slow travel', 'Street food', 'Hiking'],
    theme: { bg: '#D9784A', fg: '#1F1410', accent: '#F6D9B0', accentFg: '#1F1410' },
    ask: { q: 'Where to this month?', a: 'Azores in October. Empty trails, hot springs and fish grilled at the harbour.' },
    posts: [
      { kind: 'quote', title: 'Fado at midnight', body: 'The best table in Alfama has no sign. Ask for Dona Rosa.', meta: '24K saves' },
      { kind: 'stat', title: '€38 a day', body: 'Madeira on a budget, including the cable car and the cake.', meta: 'Route guide' },
      { kind: 'note', title: 'Packing rule', body: 'If it does not fit under the seat, it does not come.', meta: '5.6K replies' },
    ],
  },
  {
    id: 'dante',
    name: 'Dante Voss',
    handle: 'dante.voss',
    category: 'Fashion & Culture',
    tagline: 'Dress like you mean it.',
    bio: 'Milan-by-way-of-Lagos stylist who reads the street before the runway. Dante builds outfits from thrift racks, tailors and strong opinions.',
    portrait: '/creators/dante.svg',
    alt: 'Illustrated portrait of Dante Voss, a man in dark sunglasses and a cream jacket framed by a crimson arch on a plum background',
    location: 'Milan',
    stats: { followers: '615K', posts: '1.9K', engagement: '9.2%' },
    tags: ['Street style', 'Vintage', 'Tailoring'],
    theme: { bg: '#3A1F3D', fg: '#F4EFE7', accent: '#E7C873', accentFg: '#2A1530' },
    ask: { q: 'One piece to buy?', a: 'A well-cut overcoat. Everything else is a supporting actor.' },
    posts: [
      { kind: 'quote', title: 'The €20 blazer', body: 'Thrifted, taken in 2cm, and now it looks like a custom suit.', meta: '18K saves' },
      { kind: 'stat', title: '3 colours', body: 'is the whole wardrobe rule. Cream, ink and one loud thing.', meta: 'Style note' },
      { kind: 'note', title: 'Overheard in Brera', body: 'Quiet luxury is just good tailoring with a bad marketing budget.', meta: '7.3K replies' },
    ],
  },
  {
    id: 'iris',
    name: 'Iris Calder',
    handle: 'iris.calder',
    category: 'Wellness & Lifestyle',
    tagline: 'Slower mornings, stronger days.',
    bio: 'Iris designs small daily rituals: breath, light, movement and food that loves you back. Calm that fits into a busy week.',
    portrait: '/creators/iris.svg',
    alt: 'Illustrated portrait of Iris Calder, a woman with a blonde bun and linen top against soft sage green',
    location: 'Copenhagen',
    stats: { followers: '398K', posts: '980', engagement: '7.7%' },
    tags: ['Rituals', 'Mobility', 'Plant-based'],
    theme: { bg: '#A9B99A', fg: '#1F2A1A', accent: '#F1EADB', accentFg: '#1F2A1A' },
    ask: { q: "I can't switch off.", a: 'Try 4-6 breathing for two minutes. Longer exhales tell your body it is safe.' },
    posts: [
      { kind: 'quote', title: 'The 10-minute reset', body: 'Window open, shoes off, one slow stretch. That is the whole routine.', meta: '15K saves' },
      { kind: 'stat', title: '21 days', body: 'of a screen-free first hour. My sleep score changed, and so did my coffee.', meta: 'Ritual log' },
      { kind: 'note', title: 'Sunday pot', body: 'Lentils, lemon and whatever is wilting. Feeds me until Thursday.', meta: '4.8K replies' },
    ],
  },
];
