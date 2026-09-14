import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { NAVIGATION_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus the close button when opened for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      ref={menuContainerRef}
      className="fixed inset-0 z-50 flex flex-col bg-[#080808] text-white transition-opacity duration-300 min-h-[100dvh]"
    >
      {/* Top bar with centered logo and close button */}
      <div className="relative flex items-center justify-between px-6 py-2 border-b border-[#D4AF37]/25">
        <div className="w-11" aria-hidden="true" />
        
        {/* Centered logo with larger internal icon & Diarays Inc underneath */}
        <div className="flex-1 flex justify-center">
          <Logo
            size="sm"
            variant="badge"
            showName={true}
            nameColor="gold"
          />
        </div>

        {/* Close button with large touch target */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="w-11 h-11 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Navigation items */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-6 space-y-6">
        <nav aria-label="Mobile primary navigation" className="w-full text-center space-y-6">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <div key={item.label} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                    onClose();
                  }}
                  className={`block py-3 font-serif-luxury text-2xl tracking-[0.2em] uppercase transition-colors duration-300 focus:outline-none ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-neutral-300 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                </a>
              </div>
            );
          })}
        </nav>

        {/* Subtle gold decorative divider */}
        <div className="w-16 h-[1px] bg-[#D4AF37]/40 my-6" aria-hidden="true" />

        <p className="font-sans-luxury text-xs tracking-[0.25em] text-[#C8C8C8] uppercase">
          {BUSINESS_INFO.location}
        </p>
      </div>
    </div>
  );
};
