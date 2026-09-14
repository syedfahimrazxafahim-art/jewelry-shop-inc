import React from 'react';
import { Sparkles, Gem, Compass, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, BUSINESS_INFO } from '../data/businessData';

const iconMap = {
  sparkles: Sparkles,
  gem: Gem,
  compass: Compass,
  'user-check': UserCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#080808] text-white border-t border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide uppercase text-white">
            Why Choose {BUSINESS_INFO.name}
          </h2>
          <div className="flex items-center justify-center gap-3 my-3" aria-hidden="true">
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#080808]" />
            <span className="h-[1px] w-8 bg-[#D4AF37]" />
          </div>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="group relative p-5 sm:p-6 bg-[#171717] border border-[#D4AF37]/25 transition-all duration-300 hover:border-[#D4AF37]/70 hover:-translate-y-1 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Gold luxury line icon */}
                <div className="w-11 h-11 rounded-full border border-[#D4AF37]/40 group-hover:border-[#D4AF37] flex items-center justify-center mb-4 transition-colors duration-300 bg-[#111111] shadow-xs">
                  <Icon className="w-5 h-5 text-[#D4AF37] stroke-[1.5] transition-colors duration-300" />
                </div>

                <h3 className="font-serif-luxury text-xl tracking-wide uppercase text-white mb-2 font-medium">
                  {item.title}
                </h3>

                <p className="font-sans-luxury text-sm text-[#C8C8C8] font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Gold bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
