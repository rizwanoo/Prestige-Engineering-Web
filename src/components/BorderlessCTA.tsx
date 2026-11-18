import React from 'react';
import { Link } from 'react-router-dom';

interface BorderlessCTAProps {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  tone?: 'dark' | 'light' | 'cobalt' | 'orange';
  className?: string;
}

export const BorderlessCTA: React.FC<BorderlessCTAProps> = ({
  label,
  to,
  href,
  external = false,
  onClick,
  type = 'button',
  tone = 'dark',
  className = '',
}) => {
  const toneClass =
    tone === 'light'
      ? 'text-white hover:text-[#F28C28]'
      : tone === 'cobalt'
      ? 'text-[#2457A6] hover:text-[#F28C28]'
      : tone === 'orange'
      ? 'text-[#F28C28] hover:text-white'
      : 'text-[#29333D] hover:text-[#2457A6]';

  const content = (
    <>
      <span>{label}</span>
      <span className="cta-arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`cta-borderless ${toneClass} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={`cta-borderless ${toneClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`cta-borderless ${toneClass} ${className}`}>
      {content}
    </button>
  );
};
