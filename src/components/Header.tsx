import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { NAVIGATION_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  activeSection: string;
  onNavigate: (href: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.85)] border-b border-[#D4AF37]/30'
            : 'bg-[#080808] border-b border-[#D4AF37]/25'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Header Layout */}
          <div className="flex md:hidden items-center justify-between py-2">
            {/* Left placeholder to preserve exact horizontal centering */}
            <div className="w-10" aria-hidden="true" />

            {/* Centered Logo with larger internal icon & 'Diarays Inc' underneath */}
            <div className="flex-1 flex justify-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#home');
                }}
                className="group focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                aria-label={`${BUSINESS_INFO.name} Home`}
              >
                <Logo
                  size="sm"
                  variant="badge"
                  showName={true}
                  nameColor="gold"
                />
              </a>
            </div>

            {/* Mobile Menu Toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Desktop & Tablet Header Layout */}
          <div
            className={`hidden md:flex flex-col items-center justify-center transition-all duration-300 ${
              isScrolled ? 'pt-2 pb-1.5' : 'pt-3 pb-2'
            }`}
          >
            {/* Centered Logo at the top with larger internal icon & 'Diarays Inc' underneath */}
            <div className={`flex justify-center transition-all duration-300 ${isScrolled ? 'mb-1' : 'mb-2'}`}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('#home');
                }}
                className="group focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                aria-label={`${BUSINESS_INFO.name} Home`}
              >
                <Logo
                  size={isScrolled ? 'sm' : 'md'}
                  variant="badge"
                  showName={true}
                  nameColor="gold"
                />
              </a>
            </div>

            {/* Refined Navigation centered directly below logo */}
            <nav
              aria-label="Primary navigation"
              className="flex items-center justify-center space-x-10 lg:space-x-14 border-t border-[#D4AF37]/25 pt-1.5 w-full max-w-xl"
            >
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    className={`relative py-1 font-sans-luxury text-[13px] tracking-[0.24em] uppercase transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] ${
                      isActive
                        ? 'text-[#D4AF37] font-semibold'
                        : 'text-white hover:text-[#D4AF37]'
                    }`}
                  >
                    {item.label}
                    {/* Subtle gold underline indicator on active */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Fullscreen 100dvh Mobile Menu overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />
    </>
  );
};
