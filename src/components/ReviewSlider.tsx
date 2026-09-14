import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Quote } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/businessData';

export const ReviewSlider: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive items count calculation
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3); // Desktop: 3 visible
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2); // Tablet: 2 visible
      } else {
        setVisibleCount(1); // Mobile: 1 visible
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Check document visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const totalReviews = SAMPLE_REVIEWS.length;
  const maxStartIndex = Math.max(0, totalReviews - visibleCount);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  }, [maxStartIndex]);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  }, [maxStartIndex]);

  // Gentle autoplay with pause conditions
  useEffect(() => {
    if (!isPlaying || isHovered || isTabHidden || prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isTabHidden, prefersReducedMotion, handleNext]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Get currently visible reviews
  const visibleReviews = SAMPLE_REVIEWS.slice(startIndex, startIndex + visibleCount);

  return (
    <section
      id="reviews"
      aria-label="Client Testimonials Slider"
      className="py-12 lg:py-16 bg-[#080808] text-white border-t border-[#D4AF37]/25"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide uppercase text-white">
            Words on Elegance
          </h2>
          <div className="flex items-center justify-center gap-3 my-3" aria-hidden="true">
            <span className="h-[1px] w-10 bg-[#D4AF37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#080808]" />
            <span className="h-[1px] w-10 bg-[#D4AF37]" />
          </div>
          <p className="text-xs font-sans-luxury text-[#C8C8C8] tracking-wider uppercase">
            Sample testimonials for preview
          </p>
        </div>

        {/* Slider Track Container with touch events */}
        <div
          className="relative px-2 sm:px-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 sm:p-6 bg-[#171717] border border-[#D4AF37]/25 flex flex-col justify-between transition-all duration-300 hover:border-[#D4AF37]/70 hover:-translate-y-1 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] relative"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-7 h-7 text-[#D4AF37]/40 stroke-[1.25]" />
                    <span className="text-[10px] font-sans-luxury tracking-[0.2em] text-[#D4AF37] uppercase font-medium">
                      {rev.category}
                    </span>
                  </div>
                  <p className="font-serif-luxury text-lg text-white italic leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between">
                  <div>
                    <span className="font-sans-luxury text-xs tracking-wider text-white font-semibold block uppercase">
                      {rev.author}
                    </span>
                    <span className="font-sans-luxury text-[11px] text-[#C8C8C8] font-light block">
                      {rev.location}
                    </span>
                  </div>
                  <span className="text-[9px] font-sans-luxury tracking-widest text-[#C8C8C8] uppercase border border-[#D4AF37]/30 px-2 py-0.5">
                    Sample
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls Bar: Prev, Next, Play/Pause, and Pagination dots */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-[#D4AF37]/25">
            {/* Play/Pause Control */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? 'Pause review autoplay' : 'Start review autoplay'}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/35 bg-[#171717] hover:border-[#D4AF37] text-xs font-sans-luxury text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                {isPlaying && !prefersReducedMotion ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="tracking-wider uppercase text-[10px]">Autoplay Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="tracking-wider uppercase text-[10px]">Autoplay Paused</span>
                  </>
                )}
              </button>

              {prefersReducedMotion && (
                <span className="text-[11px] text-neutral-500 font-sans-luxury">
                  (Motion reduced)
                </span>
              )}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setStartIndex(idx)}
                  aria-label={`Go to review page ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    startIndex === idx
                      ? 'w-6 bg-[#D4AF37]'
                      : 'w-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="View previous testimonials"
                className="w-10 h-10 border border-[#D4AF37]/35 bg-[#171717] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-white hover:text-[#080808] flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="View next testimonials"
                className="w-10 h-10 border border-[#D4AF37]/35 bg-[#171717] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-white hover:text-[#080808] flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
