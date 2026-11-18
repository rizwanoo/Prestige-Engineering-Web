import React from 'react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { BorderlessCTA } from './BorderlessCTA';
import { BRAND_INFO } from '../data/brandData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#29333D] text-white border-t border-[#414A52]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-[#414A52]">
          {/* Column 1: Large Original Brand Identity */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link to="/" aria-label="Prestige Engineering Home" className="inline-block w-fit">
              <BrandMark variant="light" size="footer" />
            </Link>
            <p className="text-[#E0E4E8] text-base leading-relaxed max-w-md">
              Epoxy flooring brand serving enquiries in{' '}
              <span className="text-white font-semibold">{BRAND_INFO.location}</span>. Connect
              directly on Instagram to discuss residential, decorative, or commercial epoxy floor
              finishes.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <img
                src={BRAND_INFO.officialProfileAvatar}
                alt="Official Prestige Engineering Instagram profile icon"
                className="w-11 h-11 object-cover border border-[#526F8C]"
                referrerPolicy="no-referrer"
              />
              <div className="text-sm">
                <p className="font-semibold text-white">{BRAND_INFO.instagramHandle}</p>
                <p className="text-[#B9C0C8]">Official Instagram · Direct Message Enquiries</p>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B9C0C8]">
              Navigation
            </h2>
            <nav aria-label="Footer Navigation" className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-[#E0E4E8] hover:text-[#F28C28] transition-colors w-fit"
              >
                Home
              </Link>
              <Link
                to="/flooring-solutions"
                className="text-sm text-[#E0E4E8] hover:text-[#F28C28] transition-colors w-fit"
              >
                Flooring Solutions
              </Link>
              <Link
                to="/projects-about"
                className="text-sm text-[#E0E4E8] hover:text-[#F28C28] transition-colors w-fit"
              >
                Projects & Process
              </Link>
              <Link
                to="/projects-about#about"
                className="text-sm text-[#E0E4E8] hover:text-[#F28C28] transition-colors w-fit"
              >
                About Prestige Engineering
              </Link>
              <Link
                to="/contact"
                className="text-sm text-[#E0E4E8] hover:text-[#F28C28] transition-colors w-fit"
              >
                Contact & Estimate
              </Link>
            </nav>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-[#B9C0C8]">
              Project Enquiries
            </h2>
            <p className="text-sm text-[#E0E4E8] leading-relaxed">
              Location: {BRAND_INFO.location}
              <br />
              Primary Contact: {BRAND_INFO.primaryContactMethod}
            </p>
            <div className="pt-1">
              <BorderlessCTA
                label="Message Us on Instagram"
                href={BRAND_INFO.instagramUrl}
                external
                tone="orange"
              />
            </div>
            <div className="pt-1">
              <BorderlessCTA label="Request a Flooring Estimate" to="/contact" tone="light" />
            </div>
          </div>
        </div>

        {/* Bottom Quiet Attribution Row */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#B9C0C8]">
          <p>
            © {currentYear} {BRAND_INFO.name} · {BRAND_INFO.location} ·{' '}
            {BRAND_INFO.primaryCategory}
          </p>
          <p className="max-w-xl leading-relaxed">
            Surface finish images shown alongside official {BRAND_INFO.instagramHandle} branding
            are illustrative architectural references; visit Instagram to inspect official posts and
            request project-specific examples.
          </p>
        </div>
      </div>
    </footer>
  );
};
