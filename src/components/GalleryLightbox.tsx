import React, { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelectIndex(prevIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onSelectIndex(nextIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  // Handle keyboard navigation & escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Jewelry Image Lightbox: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808]/98 backdrop-blur-md text-white transition-opacity duration-300"
    >
      {/* Lightbox Header with count and close */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/25">
        <div className="flex items-center gap-3">
          <span className="font-sans-luxury text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
            Piece {currentIndex + 1} of {items.length}
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#D4AF37]" />
          <span className="hidden sm:inline-block font-sans-luxury text-xs tracking-[0.2em] text-[#C8C8C8] uppercase">
            {currentItem.category}
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close image lightbox"
          className="p-2.5 rounded-full text-white/80 hover:text-[#D4AF37] hover:bg-[#171717] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Main image viewer with full preserve aspect ratio and contain */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="View previous jewelry image"
          className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-[#171717]/90 border border-[#D4AF37]/35 text-white hover:bg-[#D4AF37] hover:text-[#080808] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Display Container with complete image visibility */}
        <div className="relative max-w-4xl max-h-[78vh] w-full flex flex-col items-center justify-center">
          <div className="relative max-h-[72vh] flex items-center justify-center border border-[#D4AF37]/30 bg-[#080808] p-2 shadow-2xl">
            <img
              src={currentItem.imageSrc}
              alt={currentItem.title}
              className="max-h-[70vh] max-w-full w-auto h-auto object-contain transition-transform duration-300"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="View next jewelry image"
          className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-[#171717]/90 border border-[#D4AF37]/35 text-white hover:bg-[#D4AF37] hover:text-[#080808] hover:border-[#D4AF37] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Caption & Thumbnails strip */}
      <div className="relative z-10 px-6 py-4 bg-[#111111] border-t border-[#D4AF37]/25 text-center">
        <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal tracking-wide">
          {currentItem.title}
        </h4>

        {/* Quick Dot / Thumbnail indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3 overflow-x-auto py-1">
          {items.map((it, idx) => (
            <button
              key={it.id}
              type="button"
              onClick={() => onSelectIndex(idx)}
              aria-label={`Go to piece ${idx + 1}: ${it.title}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-6 bg-[#D4AF37]'
                  : 'w-2 bg-neutral-700 hover:bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
