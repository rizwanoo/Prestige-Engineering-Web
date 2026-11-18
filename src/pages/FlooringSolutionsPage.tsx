import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { EditorialImage } from '../components/EditorialImage';
import {
  BRAND_INFO,
  FLOORING_ENQUIRY_SCOPES,
  SUPPORTING_PHOTOS,
} from '../data/brandData';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const FlooringSolutionsPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  useGsapReveal(pageRef);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.replace('#', ''));
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, [location.hash]);

  return (
    <div ref={pageRef}>
      {/* Full-Width Architectural Page Header (Extends behind transparent navbar) */}
      <section className="relative min-h-[540px] h-[66vh] max-h-[700px] w-full overflow-hidden flex items-end bg-[#1D252D]">
        <div className="absolute inset-0 gsap-hero-parallax">
          <img
            src={SUPPORTING_PHOTOS.terrazzoHall.src}
            alt={SUPPORTING_PHOTOS.terrazzoHall.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#161D24]/88 via-[#161D24]/45 to-[#161D24]/55"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 lg:pb-20 pt-36">
          <p className="gsap-hero-item text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
            {BRAND_INFO.name} · {BRAND_INFO.location}
          </p>
          <h1
            className="gsap-hero-item mt-4 text-white font-extrabold tracking-[-0.025em] leading-[1.06] max-w-4xl"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4rem)' }}
          >
            Epoxy Flooring Solutions &amp; Project Enquiries
          </h1>
          <p className="gsap-hero-item mt-5 text-base sm:text-lg text-[#F0F2F4] leading-relaxed max-w-2xl">
            Prestige Engineering handles epoxy flooring enquiries in Phoenix, Arizona. Explore the
            project categories below to frame your enquiry before messaging{' '}
            {BRAND_INFO.instagramHandle} directly for project-specific details.
          </p>
        </div>
      </section>

      {/* Transparent Scope Clarification Strip */}
      <section className="bg-[#FFFFFF] text-[#29333D] py-12 border-b border-[#E0E4E8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2457A6]">
              Verified Service Scope Note
            </p>
            <p className="mt-2 text-sm sm:text-base text-[#414A52] leading-relaxed">
              Prestige Engineering’s official Instagram confirms epoxy flooring services in Phoenix,
              Arizona and invites direct message enquiries. Exact coating systems, color samples,
              installation timelines, and estimates are confirmed individually via DM rather than
              published as fixed price sheets.
            </p>
          </div>
          <BorderlessCTA
            label="DM @pres.tigeengineering"
            href={BRAND_INFO.instagramUrl}
            external
            tone="cobalt"
          />
        </div>
      </section>

      {/* Full-Width Alternating Editorial Sections (Zero Cards, Zero Grids) */}
      {FLOORING_ENQUIRY_SCOPES.map((scope, index) => {
        const isDark = scope.bgVariant === 'royal-blue' || scope.bgVariant === 'steel-blue';
        const bgClass =
          scope.bgVariant === 'warm-white'
            ? 'bg-[#F7F7F5] text-[#29333D]'
            : scope.bgVariant === 'concrete'
            ? 'bg-[#E9EAEC] text-[#29333D]'
            : scope.bgVariant === 'royal-blue'
            ? 'bg-[#2457A6] text-white'
            : 'bg-[#526F8C] text-white';

        const isReversed = index % 2 === 1;

        return (
          <section id={scope.slug} key={scope.id} className={`${bgClass} py-20 lg:py-28`}>
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Editorial Copy Column */}
                <div
                  className={`lg:col-span-6 gsap-reveal ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`text-sm font-bold tracking-[0.14em] ${
                        isDark ? 'text-[#F28C28]' : 'text-[#2457A6]'
                      }`}
                    >
                      {scope.number}.
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                        isDark ? 'text-[#E0E4E8]' : 'text-[#526F8C]'
                      }`}
                    >
                      {scope.enquiryFocus}
                    </span>
                  </div>

                  <h2
                    className={`mt-4 font-bold tracking-[-0.02em] leading-[1.12] ${
                      isDark ? 'text-white' : 'text-[#29333D]'
                    }`}
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
                  >
                    {scope.title}
                  </h2>

                  <p
                    className={`mt-6 text-base sm:text-lg leading-relaxed ${
                      isDark ? 'text-[#F0F2F4]' : 'text-[#414A52]'
                    }`}
                  >
                    {scope.summary}
                  </p>

                  {/* Clean hairline list of common discussion topics */}
                  <ul
                    className={`mt-8 border-t ${
                      isDark ? 'border-white/25' : 'border-[#B9C0C8]'
                    }`}
                  >
                    {scope.applications.map((item) => (
                      <li
                        key={item}
                        className={`py-3.5 border-b text-sm sm:text-base font-medium ${
                          isDark
                            ? 'border-white/25 text-white'
                            : 'border-[#B9C0C8] text-[#29333D]'
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mt-5 text-xs leading-relaxed ${
                      isDark ? 'text-[#E0E4E8]/85' : 'text-[#526F8C]'
                    }`}
                  >
                    {scope.verificationNote}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
                    <BorderlessCTA
                      label="Discuss Your Flooring Project"
                      to={`/contact?topic=${encodeURIComponent(scope.title)}`}
                      tone={isDark ? 'orange' : 'cobalt'}
                    />
                    <BorderlessCTA
                      label="Message on Instagram"
                      href={BRAND_INFO.instagramUrl}
                      external
                      tone={isDark ? 'light' : 'dark'}
                    />
                  </div>
                </div>

                {/* Large Borderless Editorial Photo Column */}
                <div
                  className={`lg:col-span-6 gsap-media-reveal ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="aspect-[4/3] w-full">
                    <EditorialImage
                      src={scope.photo.src}
                      alt={scope.photo.alt}
                      caption={scope.photo.caption}
                      captionTone={isDark ? 'light' : 'dark'}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
