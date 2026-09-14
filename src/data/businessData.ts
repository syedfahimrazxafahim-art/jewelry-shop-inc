import { GalleryItem, ReviewItem, FeatureItem, JewelryCategory } from '../types';

export const BUSINESS_INFO = {
  name: 'Diarays Inc',
  type: 'Jewelry Business',
  tagline: 'Luxury Jewelry & Custom Designs',
  location: 'Los Angeles, California',
  phoneDisplay: '1 212-884-1499',
  phoneHref: 'tel:12128841499',
  email: 'diarays2022@gmail.com',
  emailHref: 'mailto:diarays2022@gmail.com',
  facebookUrl: 'https://www.facebook.com/diaraysinc',
  facebookHandle: 'Diarays Inc',
  instagramUrl: 'https://www.instagram.com/diaraysinc',
  instagramHandle: '@diaraysinc',
  logoAsset: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420886/666851959_122102886776845869_3400694744329416583_n.jpg',
  heroAsset: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/60ebaa88-9b87-450a-9842-8fae65f08c3b.png',
  aboutAsset: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/675263704_122107604690845869_3575890730588894781_n.jpg',
  customAsset: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/702746558_122113519634845869_3185626904645243228_n.jpg',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

export const JEWELRY_CATEGORIES: JewelryCategory[] = [
  'Rings',
  'Necklaces',
  'Bracelets',
  'Earrings',
  'Custom Jewelry',
];

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: 1,
    title: 'FINE CRAFTSMANSHIP',
    description: 'Attention to detail in every piece.',
    iconName: 'sparkles',
  },
  {
    id: 2,
    title: 'TIMELESS ELEGANCE',
    description: 'Styles designed to remain beautiful beyond trends.',
    iconName: 'gem',
  },
  {
    id: 3,
    title: 'CUSTOM DESIGNS',
    description: 'Personalized jewelry created around your vision.',
    iconName: 'compass',
  },
  {
    id: 4,
    title: 'PERSONAL SERVICE',
    description: 'A refined and personal jewelry experience.',
    iconName: 'user-check',
  },
];

// Curated website images for Diarays Inc fine jewelry gallery
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Fine Diamond Ring',
    category: 'Rings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420886/701561296_122113520114845869_4521330543175789991_n.jpg',
    aspectRatio: 'square',
    featured: true,
  },
  {
    id: 2,
    title: 'Fine Diamond Necklace',
    category: 'Necklaces',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/700171098_122112813290845869_3786430542550210694_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 3,
    title: 'Fine Jewelry Bracelet',
    category: 'Bracelets',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/697026696_122112291566845869_422072165518278024_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 4,
    title: 'Fine Diamond Earrings',
    category: 'Earrings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/702326059_122113520132845869_7385134416311689542_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 5,
    title: 'Custom Jewelry Creation',
    category: 'Custom Jewelry',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/702746558_122113519634845869_3185626904645243228_n.jpg',
    aspectRatio: 'portrait',
    featured: true,
  },
  {
    id: 6,
    title: 'Fine Jewelry Showcase',
    category: 'Rings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420887/1e639e1b-f4c6-4b89-8ad8-b273f2e3d910.png',
    aspectRatio: 'landscape',
  },
  {
    id: 7,
    title: 'Luxury Fine Necklace',
    category: 'Necklaces',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/686196650_122110197650845869_5703498753000993395_n.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 8,
    title: 'Luxury Fine Bracelet',
    category: 'Bracelets',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/690870612_122111226710845869_1482952837424093117_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 9,
    title: 'Fine Luxury Earrings',
    category: 'Earrings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/684961185_122109787208845869_7194615610202535987_n.jpg',
    aspectRatio: 'portrait',
    featured: true,
  },
  {
    id: 10,
    title: 'Custom Fine Jewelry',
    category: 'Custom Jewelry',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/675263704_122107604690845869_3575890730588894781_n.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 11,
    title: 'Fine Diamond Solitaire',
    category: 'Rings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/690870743_122110920182845869_8185930273582957633_n.jpg',
    aspectRatio: 'portrait',
  },
  {
    id: 12,
    title: 'Fine Pendant Necklace',
    category: 'Necklaces',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/705394965_122114844536845869_8599037378573147818_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 13,
    title: 'Fine Link Bracelet',
    category: 'Bracelets',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420888/691000524_122111226704845869_4047530141553467612_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 14,
    title: 'Fine Drop Earrings',
    category: 'Earrings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420889/706256920_122114193572845869_7488011039761743790_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 15,
    title: 'Bespoke Jewelry Design',
    category: 'Custom Jewelry',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420889/706505285_122114193434845869_5453789256825679345_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 16,
    title: 'Fine Gold Ring',
    category: 'Rings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420889/706318933_122115091538845869_3560600604357075403_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 17,
    title: 'Fine Gold Necklace',
    category: 'Necklaces',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420889/694281579_122111392148845869_6541127775679202176_n.jpg',
    aspectRatio: 'square',
    featured: true,
  },
  {
    id: 18,
    title: 'Fine Artisan Bracelet',
    category: 'Bracelets',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420889/Screenshot_2026-09-14_134012.png',
    aspectRatio: 'square',
  },
  {
    id: 19,
    title: 'Fine Classic Earrings',
    category: 'Earrings',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420889/711752617_122115228230845869_3598399071218938785_n.jpg',
    aspectRatio: 'square',
  },
  {
    id: 20,
    title: 'Custom Bespoke Creation',
    category: 'Custom Jewelry',
    description: 'Fine jewelry creation by Diarays Inc.',
    imageSrc: 'https://res.cloudinary.com/fzobzdco/image/upload/v1789420890/Screenshot_2026-09-14_134521.png',
    aspectRatio: 'square',
  },
];

// Sample / Development testimonials (explicitly noted as sample content)
export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: 'Client Demonstration',
    location: 'Beverly Hills, CA',
    quote:
      'The personalized custom consultation brought my dream ring into reality. The craftsmanship and attentiveness were second to none.',
    category: 'Custom Rings',
  },
  {
    id: 2,
    author: 'Client Demonstration',
    location: 'Los Angeles, CA',
    quote:
      'Every piece from Diarays reflects true timeless elegance. The attention to detail and understated luxury are immediately noticeable.',
    category: 'Diamond Bracelets',
  },
  {
    id: 3,
    author: 'Client Demonstration',
    location: 'Santa Monica, CA',
    quote:
      'The personal service made selecting our anniversary piece an unforgettable experience. Truly refined and thoughtful guidance.',
    category: 'Fine Necklaces',
  },
  {
    id: 4,
    author: 'Client Demonstration',
    location: 'Pasadena, CA',
    quote:
      'From the initial design sketch to the finished jewelry piece, Diarays delivered unmatched precision and poise.',
    category: 'Custom Jewelry',
  },
  {
    id: 5,
    author: 'Client Demonstration',
    location: 'Malibu, CA',
    quote:
      'A wonderful boutique jewelry experience in Los Angeles. The earrings have an exquisite balance and brilliant sparkle.',
    category: 'Diamond Earrings',
  },
];
