export type Product = {
  slug: string;
  code: string;
  name: string;
  subtitle: string;
  price: number;
  weight: string;
  accent: string;
  accentSoft: string;
  ingredients: string[];
  summary: string;
  description: string;
  badges: string[];
  features: { title: string; text: string }[];
  howTo: { step: string; text: string }[];
  faqs: { q: string; a: string }[];
  review: { name: string; text: string }[];
  visual: {
    motif: string;
    grains: string;
    material: string;
  };
};

export const products: Product[] = [
  {
    slug: 'tofu-s02',
    code: 'Σ-02',
    name: 'Tofu',
    subtitle: '100% tofu cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#b8893a',
    accentSoft: '#efe0c0',
    ingredients: ['Soy fiber', 'Pea starch', 'Plant binders'],
    summary: 'Low dust, flushable, and soft under paw for calm daily cleanup.',
    description:
      'Σ-02 is the softest formula in the range, built for cats that need gentle texture and homes that want a low-mess, plant-first routine.',
    badges: ['Flushable', 'Low dust', 'Soft paws'],
    features: [
      { title: 'Soft texture', text: 'A paw-friendly pellet shape that feels easy for sensitive cats.' },
      { title: 'Fast clumping', text: 'Forms neat clumps for cleaner daily scooping.' },
      { title: 'Low tracking', text: 'Helps reduce scatter around the litter zone.' },
      { title: 'Plant based', text: 'Designed around renewable fibers and easier disposal habits.' },
    ],
    howTo: [
      { step: 'Fill', text: 'Pour 5 to 7 cm into a clean tray.' },
      { step: 'Scoop', text: 'Remove clumps daily for best freshness.' },
      { step: 'Top up', text: 'Add small amounts to keep the depth stable.' },
      { step: 'Refresh', text: 'Replace fully every few weeks or as needed.' },
    ],
    faqs: [
      { q: 'Can kittens use this?', a: 'Yes, it is a gentle option often preferred for younger or sensitive cats.' },
      { q: 'Can it be flushed?', a: 'Small clumps may be flushed where local guidance allows.' },
      { q: 'How does it smell?', a: 'The formula uses ingredient-led odor control rather than heavy perfume.' },
    ],
    review: {
      name: 'Emily R.',
      text: 'This was the easiest switch we have made. Clean floor, soft feel, and no drama from the cat.',
    },
    visual: { motif: 'Tofu cubes', grains: 'Slim oat-toned pellets', material: 'Warm grain blocks' },
  },
  {
    slug: 'cassava-s03',
    code: 'Σ-03',
    name: 'Cassava',
    subtitle: '100% cassava cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#88a64f',
    accentSoft: '#e3edcf',
    ingredients: ['Cassava root', 'Plant starch'],
    summary: 'Plant-based performance with stronger odor control and quick scoop response.',
    description:
      'Σ-03 is the sharper-performing natural formula, tuned for homes that want cleaner air, faster clumps, and a lighter carry weight.',
    badges: ['Plant based', 'Fast scoop', 'Odor lock'],
    features: [
      { title: 'Stronger odor control', text: 'A cleaner-feeling tray through the day.' },
      { title: 'Quick absorbency', text: 'Captures moisture fast and keeps the surface drier.' },
      { title: 'Low dust pour', text: 'Cleaner refill moments around the tray.' },
      { title: 'Lightweight bag', text: 'Easy to lift, pour, and store.' },
    ],
    howTo: [
      { step: 'Pour', text: 'Create a 5 to 7 cm base layer.' },
      { step: 'Scoop', text: 'Lift clumps once or twice daily.' },
      { step: 'Level', text: 'Shake flat and refill lightly.' },
      { step: 'Reset', text: 'Fully change once performance drops.' },
    ],
    faqs: [
      { q: 'What makes cassava different?', a: 'It delivers a lighter bag with stronger natural-style odor control.' },
      { q: 'Is it dusty?', a: 'It is designed for a low-dust pour compared with many conventional options.' },
      { q: 'Who is it for?', a: 'Great for homes that want a plant-based formula with more performance edge.' },
    ],
    review: {
      name: 'Michael T.',
      text: 'The best middle ground between natural materials and serious odor control.',
    },
    visual: { motif: 'Cassava root slices', grains: 'Dry pale pellets', material: 'Root cross-sections' },
  },
  {
    slug: 'bentonite-s04',
    code: 'Σ-04',
    name: 'Bentonite',
    subtitle: '100% bentonite cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#d86997',
    accentSoft: '#f6d7e4',
    ingredients: ['Premium bentonite clay'],
    summary: 'Dense mineral clumps, strong odor lock, and dependable daily performance.',
    description:
      'Σ-04 keeps the same premium visual language but serves the cat parent who wants classic mineral confidence and the tightest clump possible.',
    badges: ['Dense clumps', 'Reliable', 'Classic feel'],
    features: [
      { title: 'Instant clumping', text: 'Creates firm clumps quickly for easy removal.' },
      { title: 'Strong odor lock', text: 'Built for dependable day-to-day freshness.' },
      { title: 'Easy scooping', text: 'Dense clumps help reduce waste during cleanup.' },
      { title: 'Stable routine', text: 'Familiar feel for cats that prefer classic litter texture.' },
    ],
    howTo: [
      { step: 'Fill', text: 'Start with about 6 cm in a dry tray.' },
      { step: 'Scoop', text: 'Remove clumps and solids daily.' },
      { step: 'Top up', text: 'Refill after scooping to maintain depth.' },
      { step: 'Replace', text: 'Dispose in waste and fully reset regularly.' },
    ],
    faqs: [
      { q: 'Is it flushable?', a: 'No, mineral litter should be disposed of in household waste.' },
      { q: 'Why choose this one?', a: 'Pick it if clump strength matters most in your routine.' },
      { q: 'Is it low dust?', a: 'Cleaner than many traditional clay litters, though not as soft as tofu.' },
    ],
    review: {
      name: 'Jessica L.',
      text: 'Very solid performance, very little guesswork. It just does the job well every day.',
    },
    visual: { motif: 'Mineral stones', grains: 'Compact warm-grey pellets', material: 'Stacked clay rocks' },
  },
  {
    slug: 'mix-s05',
    code: 'Σ-05',
    name: 'Mix',
    subtitle: 'balanced blend cat litter',
    price: 22.9,
    weight: '2.5kg',
    accent: '#6ba9b4',
    accentSoft: '#d7eef1',
    ingredients: ['Plant fibers', 'Mineral granules', 'Natural deodorizers'],
    summary: 'A hybrid formula that balances comfort, cleanup speed, and odor control.',
    description:
      'Σ-05 is the all-rounder, designed for cat parents who want one polished formula that feels good under paw and stays easy to live with.',
    badges: ['Balanced blend', 'Everyday comfort', 'Fresh home'],
    features: [
      { title: 'Hybrid build', text: 'Mixes plant softness with mineral structure.' },
      { title: 'Comfort-first feel', text: 'Made for cats that dislike harsher textures.' },
      { title: 'Balanced control', text: 'Steady clumping and odor performance across the week.' },
      { title: 'Versatile choice', text: 'The safest recommendation for most homes.' },
    ],
    howTo: [
      { step: 'Fill', text: 'Use a consistent 5 to 7 cm layer.' },
      { step: 'Scoop', text: 'Remove waste daily to keep the tray dry.' },
      { step: 'Top up', text: 'Add lightly each week for stable depth.' },
      { step: 'Refresh', text: 'Replace once the formula loses its crisp feel.' },
    ],
    faqs: [
      { q: 'Why choose the mix?', a: 'It gives a more balanced texture and performance profile than a single-material formula.' },
      { q: 'Is it a good starter?', a: 'Yes, this is the easiest default recommendation for most homes.' },
      { q: 'How does it compare with tofu?', a: 'It is less flush-focused and more balanced across all performance categories.' },
    ],
    review: {
      name: 'Daniel W.',
      text: 'This is the one I would recommend first. Balanced, neat, and easy to maintain.',
    },
    visual: { motif: 'Mixed natural forms', grains: 'Even cream pellets', material: 'Soft stones and pods' },
  },
];

export const site = {
  brand: 'Sigmö',
  tag: 'Naturally better for cats and home.',
  intro:
    'A premium litter range shaped by quiet luxury, clean routines, and thoughtful material storytelling.',
};
