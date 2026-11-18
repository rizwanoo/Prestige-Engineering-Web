import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  captionTone?: 'dark' | 'light';
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  caption,
  captionTone = 'dark',
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`m-0 ${className}`}>
      <div className="editorial-media-frame relative w-full h-full bg-[#29333D]/10">
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading={loading}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={imgClassName}
          />
        ) : (
          <div className="w-full h-full min-h-[260px] flex flex-col justify-end p-8 bg-gradient-to-br from-[#2457A6] via-[#526F8C] to-[#29333D] text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B9C0C8]">
              Prestige Engineering · Phoenix, AZ
            </span>
            <p className="mt-2 text-base font-medium text-white/90 max-w-md">{alt}</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption
          className={`mt-3 text-xs tracking-wide ${
            captionTone === 'light' ? 'text-[#E0E4E8]/90' : 'text-[#414A52]'
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
