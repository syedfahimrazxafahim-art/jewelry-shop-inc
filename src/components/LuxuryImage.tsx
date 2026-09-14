import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  containerClassName?: string;
  isLogo?: boolean;
  category?: string;
  title?: string;
  onImageClick?: () => void;
}

export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'portrait',
  containerClassName = '',
  isLogo = false,
  category,
  title,
  onImageClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLogo) {
    return (
      <div className={`relative flex items-center justify-center ${containerClassName}`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoaded(true)}
            className={`w-auto object-contain transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className || 'h-16 sm:h-20'}`}
          />
        ) : null}

        {/* Elegant typography fallback if image asset is not yet placed in /assets/ */}
        {hasError && (
          <div className="text-center select-none py-1">
            <span className="font-serif-luxury tracking-[0.28em] text-xl sm:text-2xl font-medium text-black uppercase block">
              DIARAYS INC
            </span>
            <span className="font-sans-luxury tracking-[0.35em] text-[9px] text-neutral-500 uppercase block mt-0.5">
              FINE JEWELRY &bull; LOS ANGELES
            </span>
          </div>
        )}
      </div>
    );
  }

  // Calculate ratio container
  const ratioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
  }[aspectRatio];

  return (
    <div
      onClick={onImageClick}
      className={`group relative overflow-hidden bg-neutral-100 flex items-center justify-center border border-neutral-200 transition-all duration-300 ${ratioClasses} ${containerClassName}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      ) : null}

      {/* Fallback frame if asset fails to load */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400">
          <Sparkles className="w-6 h-6 stroke-[1.5]" />
        </div>
      )}

      {/* Clean monochrome hover border highlight */}
      <div className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-black/30 transition-colors duration-300" />
    </div>
  );
};
