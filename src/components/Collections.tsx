import React from 'react';
import { JewelryCategory } from '../types';
import { JEWELRY_CATEGORIES, GALLERY_ITEMS } from '../data/businessData';
import { LuxuryImage } from './LuxuryImage';
import { ArrowUpRight } from 'lucide-react';

interface CollectionsProps {
  onSelectCategory: (category: JewelryCategory) => void;
  onOpenLightbox: (index: number) => void;
}

export const Collections: React.FC<CollectionsProps> = ({
  onSelectCategory,
  onOpenLightbox,
}) => {
  // Select one representative item from GALLERY_ITEMS for each of the 5 categories
  const categoryHighlights = JEWELRY_CATEGORIES.map((cat) => {
    const item = GALLERY_ITEMS.find((g) => g.category === cat) || GALLERY_ITEMS[0];
    const itemIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    return {
      category: cat,
      item,
      itemIndex,
    };
  });

  return (
    <section id="collections" className="py-12 lg:py-16 bg-[#080808] text-white border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide uppercase text-white">
            Jewelry &amp; Collections
          </h2>
          <div className="flex items-center justify-center gap-3 my-3" aria-hidden="true">
            <span className="h-[1px] w-10 bg-[#D4AF37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#080808]" />
            <span className="h-[1px] w-10 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Editorial Collections Layout - 5 Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {categoryHighlights.map(({ category, item, itemIndex }) => (
            <div
              key={category}
              className="group flex flex-col bg-[#171717] border border-[#D4AF37]/25 transition-all duration-300 hover:border-[#D4AF37]/70 hover:-translate-y-1 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
            >
              <div className="relative overflow-hidden cursor-pointer" onClick={() => onOpenLightbox(itemIndex)}>
                <LuxuryImage
                  src={item.imageSrc}
                  alt={item.title}
                  aspectRatio="portrait"
                  containerClassName="border-0 bg-[#111111]"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md text-[#080808]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between border-t border-[#D4AF37]/20">
                <div>
                  <h3 className="font-serif-luxury text-xl text-white uppercase tracking-wider">
                    {category}
                  </h3>
                </div>

                <div className="pt-3 mt-2 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category)}
                    className="font-sans-luxury text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#F1D77A] font-medium transition-colors focus:outline-none"
                  >
                    View in Gallery &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
