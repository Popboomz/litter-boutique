export type Product = {
  slug: string;
  code: string;
  name: string;
  subtitle: string;
  price: number;
  weight: string;
  accent: string;
  accentSoft: string;
  heroImage: string;
  gallery: string[];
  ingredients: string[];
  summary: string;
  description: string;
  badges: string[];
  features: { title: string; text: string }[];
  howTo: { step: string; text: string }[];
  faqs: { q: string; a: string }[];
  review: { name: string; text: string }[];
};

export const products: Product[] = [
  {
    slug: 'tofu-s02',
    code: 'Σ-02',
    name: 'Tofu',
    subtitle: '100% tofu cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#b98a36',
    accentSoft: '#efe2c4',
    heroImage: '/images/product-tofu.jpg',
    gallery: ['/images/product-tofu.jpg', '/images/home-reference.jpg'],
    ingredients: ['Soy fiber', 'Pea starch', 'Plant binders'],
    summary: 'Low dust, flushable, and soft under paw for clean daily scooping.',
    description:
      'Crafted from food-grade tofu fiber, Σ-02 is the gentle everyday formula for homes that want clean tracking control without sacrificing comfort.',
    badges: ['Flushable', 'Low dust', 'Soft paws'],
    features: [
      { title: 'Fast clumping', text: 'Tight clumps for easier cleanup every morning.' },
      { title: 'Low tracking', text: 'Short pellets reduce mess around the litter box.' },
      { title: 'Gentle under paw', text: 'Soft texture suitable for kittens and sensitive cats.' },
      { title: 'Natural odor control', text: 'Plant fibers help lock in smells without heavy fragrance.' },
    ],
    howTo: [
      { step: 'Fill', text: 'Pour 5 to 7 cm into a clean litter box.' },
      { step: 'Scoop', text: 'Remove clumps daily and top up as needed.' },
      { step: 'Refresh', text: 'Replace fully every 3 to 4 weeks.' },
      { step: 'Dispose', text: 'Flush small clumps or bin according to local guidance.' },
    ],
    faqs: [
      { q: 'Is it safe for kittens?', a: 'Yes, the formula is soft and low dust, suitable for younger cats with normal litter habits.' },
      { q: 'Can I flush it?', a: 'Small clumps can be flushed where local plumbing guidance allows.' },
      { q: 'Does it smell strongly?', a: 'No, odor control comes from the fibers rather than strong perfume.' },
    ],
    review: {
      name: 'Emily R.',
      text: 'The easiest transition we have made. My cat took to it right away and cleanup feels much lighter.',
    },
  },
  {
    slug: 'cassava-s03',
    code: 'Σ-03',
    name: 'Cassava',
    subtitle: '100% cassava cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#88a84a',
    accentSoft: '#e5efcf',
    heroImage: '/images/product-cassava.jpg',
    gallery: ['/images/product-cassava.jpg', '/images/home-reference.jpg'],
    ingredients: ['Cassava root', 'Plant starch'],
    summary: 'Fast clumping and strong odor control in a light plant-based format.',
    description:
      'Σ-03 combines the dry, clean feel of cassava root with quick moisture capture, making it ideal for busy homes that need reliable odor control.',
    badges: ['Plant based', 'Strong odor lock', 'Quick scoop'],
    features: [
      { title: 'Rapid absorbency', text: 'Locks moisture quickly to keep the tray dry.' },
      { title: 'Stronger odor control', text: 'Designed for multi-cat freshness without harsh scent.' },
      { title: 'Low dust', text: 'Cleaner pours and calmer cleanup.' },
      { title: 'Lightweight', text: 'Easy to lift, pour, and store.' },
    ],
    howTo: [
      { step: 'Pour', text: 'Fill the tray with a 5 to 7 cm layer.' },
      { step: 'Scoop', text: 'Remove clumps once or twice daily.' },
      { step: 'Top up', text: 'Add a small amount after scooping to maintain depth.' },
      { step: 'Reset', text: 'Fully refresh each month for best odor performance.' },
    ],
    faqs: [
      { q: 'Is cassava safe?', a: 'Yes, it is a plant-based litter designed for routine home use.' },
      { q: 'How is odor control?', a: 'It is one of the stronger natural formulas in the range.' },
      { q: 'Does it track badly?', a: 'Tracking is moderate to low when paired with a litter mat.' },
    ],
    review: {
      name: 'Michael T.',
      text: 'This one balances low dust and serious odor control better than anything else we have tried.',
    },
  },
  {
    slug: 'bentonite-s04',
    code: 'Σ-04',
    name: 'Bentonite',
    subtitle: '100% bentonite cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#db6f97',
    accentSoft: '#f8d6e2',
    heroImage: '/images/product-bentonite.jpg',
    gallery: ['/images/product-bentonite.jpg', '/images/home-reference.jpg'],
    ingredients: ['Premium bentonite clay'],
    summary: 'Traditional mineral performance with dense clumps and dependable daily control.',
    description:
      'Σ-04 is for households that want immediate clumping strength and a familiar texture, while still keeping the page and brand language elevated.',
    badges: ['Dense clumps', 'Reliable', 'Odor lock'],
    features: [
      { title: 'Instant clumps', text: 'Quickly forms firm clumps for fast removal.' },
      { title: 'Odor blocking', text: 'Clay structure helps trap daily smells effectively.' },
      { title: 'Easy scooping', text: 'Clean separation lowers waste.' },
      { title: 'Stable performance', text: 'Consistent routine for cats that prefer classic litter feel.' },
    ],
    howTo: [
      { step: 'Fill', text: 'Start with 6 cm depth in a dry tray.' },
      { step: 'Scoop', text: 'Remove clumps and solids every day.' },
      { step: 'Level', text: 'Shake flat and add more litter when needed.' },
      { step: 'Replace', text: 'Change fully every 3 to 4 weeks.' },
    ],
    faqs: [
      { q: 'Is it low dust?', a: 'It is designed to be cleaner pouring than many classic clay litters, though not as low dust as tofu.' },
      { q: 'Who is it for?', a: 'Best for cat parents who want strong clumps and a familiar mineral feel.' },
      { q: 'Can I flush it?', a: 'No, dispose of clay litter in household waste.' },
    ],
    review: {
      name: 'Jessica L.',
      text: 'Best bentonite we have bought. Tight clumps, easier cleanup, and the house smells fresher.',
    },
  },
  {
    slug: 'mix-s05',
    code: 'Σ-05',
    name: 'Mix',
    subtitle: 'balanced blend cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#6ea9b1',
    accentSoft: '#d8eef1',
    heroImage: '/images/product-mix.jpg',
    gallery: ['/images/product-mix.jpg', '/images/home-reference.jpg'],
    ingredients: ['Plant fibers', 'Mineral granules', 'Natural deodorizers'],
    summary: 'A balanced formula that blends comfort, clumping strength, and odor control.',
    description:
      'Σ-05 combines plant softness with mineral performance for homes that want one formula to do everything well.',
    badges: ['Balanced blend', 'Everyday comfort', 'Fresh home'],
    features: [
      { title: 'Hybrid formula', text: 'Combines plant and mineral benefits in one scoop.' },
      { title: 'Comfortable texture', text: 'Designed for cats that dislike overly sharp granules.' },
      { title: 'Balanced control', text: 'Stable clumping and odor management day to day.' },
      { title: 'Versatile', text: 'Great first recommendation for most homes.' },
    ],
    howTo: [
      { step: 'Fill', text: 'Use a 5 to 7 cm base layer.' },
      { step: 'Scoop', text: 'Remove waste daily.' },
      { step: 'Top up', text: 'Add small amounts weekly to keep the tray consistent.' },
      { step: 'Refresh', text: 'Replace fully once performance begins to taper.' },
    ],
    faqs: [
      { q: 'What makes it mixed?', a: 'It blends plant fibers with mineral support for a more balanced feel and performance profile.' },
      { q: 'Is it good for multiple cats?', a: 'Yes, it is a strong default choice for shared litter setups.' },
      { q: 'How does it compare to tofu?', a: 'It is less flush-focused and more performance-balanced overall.' },
    ],
    review: {
      name: 'Daniel W.',
      text: 'If you want one formula that just works, this is it. Good paws feel, good odor control, no drama.',
    },
  },
];

export const site = {
  brand: 'Sigmö',
  tag: 'Naturally better for cats and home.',
  intro:
    'A premium litter system designed to look calm in your space and perform hard in the tray.',
};
