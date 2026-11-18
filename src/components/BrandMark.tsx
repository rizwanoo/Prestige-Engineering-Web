import React from 'react';
import { BRAND_INFO } from '../data/brandData';

interface BrandMarkProps {
  variant?: 'light' | 'dark';
  size?: 'nav' | 'footer';
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  variant = 'dark',
  size = 'nav',
}) => {
  const isLight = variant === 'light';
  const isFooter = size === 'footer';

  return (
    <span className="inline-flex items-center gap-3.5 whitespace-nowrap shrink-0 select-none">
      <img
        src={BRAND_INFO.monogramSvg}
        alt="Prestige Engineering PE Monogram"
        className={
          isFooter
            ? 'h-12 w-16 object-contain shrink-0'
            : 'h-10 w-13 object-contain shrink-0'
        }
        referrerPolicy="no-referrer"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-[0.04em] uppercase ${
            isFooter ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
          } ${isLight ? 'text-white' : 'text-[#29333D]'}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Prestige Engineering
        </span>
      </span>
    </span>
  );
};
