import React, { useState } from 'react';
import { JewelryCategory } from '../types';
import { GALLERY_ITEMS, JEWELRY_CATEGORIES } from '../data/businessData';
import { LuxuryImage } from './LuxuryImage';
import { GalleryLightbox } from './GalleryLightbox';
import { Maximize2 } from 'lucide-react';

interface GalleryProps {
  selectedCategory?: JewelryCategory | 'All';
  onCategoryChange?: (category: JewelryCategory | 'All') => void;
  lightboxIndex?: number | null;
  onSetLightboxIndex?: (idx: number | null) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  selectedCategory: controlledCategory,
  onCategoryChange,
  lightboxIndex: controlledLightboxIndex,
  onSetLightboxIndex,
}) => {
  const [internalCategory, setInternalCategory] = useState<JewelryCategory | 'All'>('All');
  const [internalLightboxIndex, setInternalLightboxIndex] = useState<number | null>(null);

  const activeCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;
  const setCategory = onCategoryChange || setInternalCategory;

  const currentLightboxIndex =
    controlledLightboxIndex !== undefined ? controlledLightboxIndex : internalLightboxIndex;
  const setLightboxIndex = onSetLightboxIndex || setInternalLightboxIndex;

  // Filter items if a category is selected, or display all items
  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (itemId: number) => {
    // Find index in master GALLERY_ITEMS array
    const masterIndex = GALLERY_ITEMS.findIndex((it) => it.id === itemId);
    if (masterIndex !== -1) {
      setLightboxIndex(masterIndex);
    }
  };

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-[#111111] text-white border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide uppercase text-white">
            The Fine Jewelry Gallery
          </h2>

          <div className="flex items-center justify-center gap-3 my-3" aria-hidden="true">
            <span className="h-[1px] w-12 bg-[#D4AF37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#111111]" />
            <span className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            type="button"
            onClick={() => setCategory('All')}
            className={`px-4 py-1.5 text-xs font-sans-luxury tracking-[0.2em] uppercase transition-all duration-300 rounded-xs border ${
              activeCategory === 'All'
                ? 'bg-[#D4AF37] text-[#080808] border-[#D4AF37] font-semibold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                : 'bg-[#171717] text-[#C8C8C8] border-[#D4AF37]/25 hover:border-[#D4AF37] hover:text-white'
            }`}
          >
            All Pieces
          </button>
          {JEWELRY_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 text-xs font-sans-luxury tracking-[0.2em] uppercase transition-all duration-300 rounded-xs border ${
                  isSelected
                    ? 'bg-[#D4AF37] text-[#080808] border-[#D4AF37] font-semibold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                    : 'bg-[#171717] text-[#C8C8C8] border-[#D4AF37]/25 hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean, Uniform Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#171717] border border-[#D4AF37]/25 transition-all duration-300 hover:border-[#D4AF37]/70 hover:-translate-y-1 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] group"
            >
              {/* Image Container */}
              <div
                className="relative cursor-pointer overflow-hidden bg-[#080808]"
                onClick={() => handleOpenLightbox(item.id)}
              >
                <div className="transition-transform duration-500 group-hover:scale-105">
                  <LuxuryImage
                    src={item.imageSrc}
                    alt={item.title}
                    aspectRatio="square"
                    containerClassName="border-0"
                  />
                </div>

                {/* Hover Overlay with Enlarge Button */}
                <div className="absolute inset-0 bg-[#080808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37] text-[#080808] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 stroke-[1.5]" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between border-t border-[#D4AF37]/20">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-sans-luxury font-medium block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-lg text-white tracking-wide font-normal leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-3 mt-2 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(item.id)}
                    className="text-[11px] font-sans-luxury tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#F1D77A] transition-colors flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Detail</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={currentLightboxIndex}
        isOpen={currentLightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
