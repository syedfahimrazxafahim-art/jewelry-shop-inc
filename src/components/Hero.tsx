import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onExploreClick: () => void;
  onCustomClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCustomClick }) => {
  const [heroImgError, setHeroImgError] = useState(false);
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden bg-[#080808]"
    >
      {/* Background Jewelry Image Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {!heroImgError ? (
          <img
            src={BUSINESS_INFO.heroAsset}
            alt="Diarays Inc Luxury Fine Jewelry Collection"
            onError={() => setHeroImgError(true)}
            onLoad={() => setHeroImgLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              heroImgLoaded ? 'opacity-75 sm:opacity-80' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Subtle luxury dark gradient overlay for optimal jewelry visibility and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/85 via-[#080808]/65 to-[#080808]" />
      </div>

      {/* Hero Content - Carefully positioned with generous negative space and clear top header clearance */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Heading */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] font-normal text-white uppercase leading-[1.08] mb-4">
          JEWELRY FOR <br className="hidden sm:inline" />
          <span className="italic font-light text-[#D4AF37]">EVERY MOMENT</span>
        </h1>

        {/* Thin Gold Divider */}
        <div className="flex items-center justify-center gap-4 my-4" aria-hidden="true">
          <span className="h-[1px] w-12 sm:w-20 bg-[#D4AF37]" />
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#080808]" />
          <span className="h-[1px] w-12 sm:w-20 bg-[#D4AF37]" />
        </div>

        {/* Supporting Text */}
        <p className="font-sans-luxury text-base sm:text-lg md:text-xl text-[#C8C8C8] max-w-2xl mx-auto font-light leading-relaxed tracking-wide mb-7">
          Discover timeless jewelry and elegant designs crafted to make every moment unforgettable.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#D4AF37] hover:bg-[#F1D77A] text-[#080808] font-sans-luxury text-xs tracking-[0.24em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] rounded-xs flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            <span>EXPLORE JEWELRY</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={onCustomClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-[#171717] text-white hover:text-[#D4AF37] border border-[#D4AF37]/50 hover:border-[#D4AF37] font-sans-luxury text-xs tracking-[0.24em] uppercase font-medium transition-all duration-300 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            CUSTOM DESIGNS
          </button>
        </div>
      </div>
    </section>
  );
};
