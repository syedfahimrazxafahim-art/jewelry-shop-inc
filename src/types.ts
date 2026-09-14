export type JewelryCategory = 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings' | 'Custom Jewelry';

export interface GalleryItem {
  id: number;
  title: string;
  category: JewelryCategory;
  description: string;
  imageSrc: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
}

export interface ReviewItem {
  id: number;
  author: string;
  location: string;
  quote: string;
  category: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  iconName: 'sparkles' | 'gem' | 'compass' | 'user-check';
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
