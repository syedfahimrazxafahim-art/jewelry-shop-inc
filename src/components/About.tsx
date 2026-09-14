import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { LuxuryImage } from './LuxuryImage';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-[#111111] text-white border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Editorial Image Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <LuxuryImage
                src={BUSINESS_INFO.aboutAsset}
                alt={`${BUSINESS_INFO.name} Fine Jewelry`}
                aspectRatio="portrait"
                containerClassName="relative z-10 shadow-2xl border border-[#D4AF37]/30 bg-[#171717]"
              />
            </div>
          </div>

          {/* Editorial Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-white uppercase leading-tight mb-4">
              A Dedicated Approach <br />
              <span className="italic font-light text-[#D4AF37]">To Fine Jewelry</span>
            </h2>

            <p className="font-sans-luxury text-base sm:text-lg text-[#C8C8C8] font-light leading-relaxed mb-6">
              Based in Los Angeles, California, {BUSINESS_INFO.name} offers fine jewelry, personalized service, and custom designs.
            </p>

            {onLearnMore && (
              <div>
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 text-xs font-sans-luxury tracking-[0.25em] uppercase text-[#D4AF37] hover:text-[#F1D77A] transition-colors group"
                >
                  <span>Explore Our Collections</span>
                  <span className="w-6 h-[1px] bg-[#D4AF37] group-hover:bg-[#F1D77A] transition-all group-hover:w-10" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
