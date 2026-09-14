import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { LuxuryImage } from './LuxuryImage';

interface CustomDesignsProps {
  onCustomInquiryClick: () => void;
}

export const CustomDesigns: React.FC<CustomDesignsProps> = ({ onCustomInquiryClick }) => {
  return (
    <section
      id="custom-designs"
      className="py-12 lg:py-16 bg-[#111111] text-white relative overflow-hidden"
    >
      {/* Subtle gold border accents */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-[#D4AF37]/25"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/25"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-white uppercase leading-[1.15] mb-4">
              CREATE SOMETHING <br />
              <span className="text-[#D4AF37] italic font-light">UNIQUELY YOURS</span>
            </h2>

            {/* Thin gold line */}
            <div className="w-16 h-[1.5px] bg-[#D4AF37] mb-4" aria-hidden="true" />

            <p className="font-sans-luxury text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed mb-6 max-w-xl">
              Custom jewelry designed around your vision and personal style.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onCustomInquiryClick}
                className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#F1D77A] text-[#080808] font-sans-luxury text-xs tracking-[0.24em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] rounded-xs flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <span>CREATE YOUR CUSTOM PIECE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="text-xs font-sans-luxury tracking-widest text-[#C8C8C8] uppercase">
                {BUSINESS_INFO.location}
              </span>
            </div>
          </div>

          {/* Image Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <LuxuryImage
                src={BUSINESS_INFO.customAsset}
                alt={`${BUSINESS_INFO.name} Custom Jewelry Design`}
                aspectRatio="portrait"
                containerClassName="relative z-10 shadow-2xl border border-[#D4AF37]/30 bg-[#171717]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
