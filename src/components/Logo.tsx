import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/businessData';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'badge' | 'transparent';
  showName?: boolean;
  nameColor?: 'gold' | 'white';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'badge',
  showName = true,
  nameColor = 'gold',
  className = '',
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Dimension scaling for the logo badge and inner icon
  const sizeConfig = {
    sm: {
      frame: 'w-14 h-12 p-1',
      imgHeight: 'h-10 max-h-10',
      textSize: 'text-[12px] sm:text-[13px] tracking-[0.24em]',
      gap: 'mt-1.5',
    },
    md: {
      frame: 'w-20 h-16 sm:w-22 sm:h-18 p-1.5',
      imgHeight: 'h-13 sm:h-15 max-h-16',
      textSize: 'text-[13px] sm:text-[15px] tracking-[0.26em]',
      gap: 'mt-1.5',
    },
    lg: {
      frame: 'w-24 h-20 sm:w-28 sm:h-22 p-2',
      imgHeight: 'h-16 sm:h-18 max-h-20',
      textSize: 'text-[15px] sm:text-[17px] tracking-[0.28em]',
      gap: 'mt-2',
    },
  }[size];

  const nameColorClass = nameColor === 'gold' 
    ? 'text-[#D4AF37] hover:text-[#F1D77A]' 
    : 'text-white hover:text-[#D4AF37]';

  return (
    <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
      {/* 
        Logo Frame / Badge:
        Houses the original logo icon. The icon inside has been scaled up to fill the available space,
        eliminating excessive whitespace so all intricate details and lettering inside the icon are clearly visible,
        while maintaining balanced margins, zero distortion, and zero cropping.
      */}
      <div
        className={`relative flex items-center justify-center rounded-xs transition-all duration-300 ${
          variant === 'badge'
            ? 'bg-white border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] hover:shadow-[0_0_22px_rgba(212,175,55,0.4)]'
            : 'bg-transparent'
        } ${sizeConfig.frame}`}
      >
        {!imgError ? (
          <img
            src="/assets/logo_crisp.png"
            alt={`${BUSINESS_INFO.name} Logo Symbol`}
            onError={() => {
              // Fallback to primary CDN asset if local asset fails
              setImgError(true);
            }}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <img
            src={BUSINESS_INFO.logoAsset}
            alt={`${BUSINESS_INFO.name} Logo Symbol`}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* 
        Business Name:
        Placed directly underneath the logo, center-aligned, with exact capitalization "Diarays Inc",
        in luxury gold / white serif typography with balanced proportional spacing.
      */}
      {showName && (
        <span
          className={`font-serif-luxury font-normal uppercase transition-colors duration-300 select-none block leading-tight ${sizeConfig.textSize} ${nameColorClass} ${sizeConfig.gap}`}
        >
          Diarays Inc
        </span>
      )}
    </div>
  );
};
