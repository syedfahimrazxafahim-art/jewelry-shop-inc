import React from 'react';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION_ITEMS } from '../data/businessData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-white border-t border-[#D4AF37]/25 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Centered Logo with larger internal icon & Diarays Inc text */}
          <div className="mb-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('#home');
              }}
              className="group inline-block focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              aria-label={`${BUSINESS_INFO.name} Home`}
            >
              <Logo
                size="md"
                variant="badge"
                showName={true}
                nameColor="gold"
              />
            </a>
          </div>

          {/* Minimal Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-5">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                }}
                className="font-sans-luxury text-xs tracking-[0.22em] uppercase text-[#C8C8C8] hover:text-[#D4AF37] transition-colors focus:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-sans-luxury text-[#C8C8C8] mb-5">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#D4AF37]/40" aria-hidden="true" />

            <a
              href={BUSINESS_INFO.emailHref}
              className="inline-flex items-center gap-2 hover:text-[#D4AF37] transition-colors focus:outline-none"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>

            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#D4AF37]/40" aria-hidden="true" />

            <span className="text-[#C8C8C8]/80">{BUSINESS_INFO.location}</span>
          </div>

          {/* Social Media Icons (strictly in footer) */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BUSINESS_INFO.name} on Instagram`}
              className="w-9 h-9 rounded-full border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] hover:text-[#080808] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BUSINESS_INFO.name} on Facebook`}
              className="w-9 h-9 rounded-full border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] hover:text-[#080808] hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Thin gold divider */}
          <div className="w-20 h-[1px] bg-[#D4AF37]/25 mb-5" aria-hidden="true" />

          {/* Copyright */}
          <p className="font-sans-luxury text-[11px] tracking-widest text-[#C8C8C8]/60 uppercase">
            &copy; {currentYear} {BUSINESS_INFO.name}. All Rights Reserved. &bull; {BUSINESS_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
};
