import React, { useRef } from 'react';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { EditorialImage } from '../components/EditorialImage';
import { BRAND_INFO, SUPPORTING_PHOTOS } from '../data/brandData';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const HomePage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(pageRef);

  return (
    <div ref={pageRef}>
      {/* 1. CINEMATIC FULL-WIDTH HERO (Extends behind transparent navbar) */}
      <section className="relative min-h-[680px] h-[94vh] max-h-[940px] w-full overflow-hidden flex items-end bg-[#1D252D]">
        <div className="absolute inset-0 gsap-hero-parallax">
          <img
            src={SUPPORTING_PHOTOS.selfLevelingHero.src}
            alt={SUPPORTING_PHOTOS.selfLevelingHero.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>
        {/* Measured contrast scrim at bottom & top edge only — keeps floor sheen bright and visible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#161D24]/85 via-[#161D24]/30 to-[#161D24]/45"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-16 sm:pb-20 lg:pb-24 pt-36">
          <div className="max-w-3xl">
            <p className="gsap-hero-item text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#E0E4E8] mb-5">
              {BRAND_INFO.location} · {BRAND_INFO.primaryCategory}
            </p>
            <h1
              className="gsap-hero-item text-white font-extrabold tracking-[-0.025em] leading-[1.05]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.5rem)',
              }}
            >
              Epoxy Flooring.
              <br />A Finish That Stands Out.
            </h1>
            <p className="gsap-hero-item mt-6 text-base sm:text-lg text-[#F0F2F4] leading-relaxed max-w-2xl">
              Looking for epoxy flooring in Phoenix, Arizona? Explore clean, reflective resin
              surfaces and connect directly with Prestige Engineering on Instagram to discuss your
              space.
            </p>

            <div className="gsap-hero-item mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
              <BorderlessCTA
                label="Request a Flooring Estimate"
                to="/contact"
                tone="orange"
              />
              <BorderlessCTA
                label="Explore Flooring Solutions"
                to="/flooring-solutions"
                tone="light"
              />
            </div>
          </div>

          <p className="mt-10 text-[11px] uppercase tracking-[0.12em] text-[#B9C0C8]">
            {SUPPORTING_PHOTOS.selfLevelingHero.caption}
          </p>
        </div>
      </section>

      {/* 2. WARM INDUSTRIAL WHITE — OFFICIAL BRAND IDENTITY & PHOENIX FOCUS */}
      <section className="bg-[#F7F7F5] text-[#29333D] py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 gsap-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2457A6]">
                Official Brand Identity · {BRAND_INFO.instagramHandle}
              </p>
              <h2
                className="mt-4 font-bold tracking-[-0.02em] leading-[1.12] text-[#29333D]"
                style={{ fontSize: 'clamp(1.875rem, 3.2vw, 3rem)' }}
              >
                Dedicated to epoxy flooring in Phoenix, Arizona.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#414A52] leading-relaxed max-w-2xl">
                Prestige Engineering focuses directly on epoxy floor enquiries across Phoenix,
                Arizona. Built around direct project conversations rather than generic contractor
                catalogues, every enquiry begins with a straightforward conversation about your
                concrete floor, space, and desired finish.
              </p>

              {/* Unboxed architectural specification strip (zero cards, hairline dividers only) */}
              <div className="mt-10 pt-8 border-t border-[#B9C0C8] grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#526F8C]">
                    Location
                  </span>
                  <span className="mt-1.5 block text-base font-semibold text-[#29333D]">
                    {BRAND_INFO.location}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#526F8C]">
                    Specialization
                  </span>
                  <span className="mt-1.5 block text-base font-semibold text-[#29333D]">
                    {BRAND_INFO.primaryCategory}
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#526F8C]">
                    Direct Channel
                  </span>
                  <span className="mt-1.5 block text-base font-semibold text-[#29333D]">
                    {BRAND_INFO.instagramHandle}
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
                <BorderlessCTA
                  label="Message Us on Instagram"
                  href={BRAND_INFO.instagramUrl}
                  external
                  tone="cobalt"
                />
                <BorderlessCTA
                  label="About Prestige Engineering"
                  to="/projects-about#about"
                  tone="dark"
                />
              </div>
            </div>

            {/* Authentic Instagram Profile Identity & Bio Transcript */}
            <div className="lg:col-span-5 gsap-reveal lg:pl-8 lg:border-l border-[#B9C0C8]">
              <div className="flex items-center gap-5 pb-8 border-b border-[#B9C0C8]">
                <img
                  src={BRAND_INFO.officialProfileAvatar}
                  alt="Official @pres.tigeengineering Instagram profile avatar"
                  className="w-20 h-20 object-cover shrink-0 border border-[#B9C0C8]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#526F8C]">
                    Official Instagram Account
                  </p>
                  <p
                    className="mt-1 text-2xl font-bold text-[#29333D]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {BRAND_INFO.name}
                  </p>
                  <p className="text-sm font-medium text-[#2457A6]">
                    {BRAND_INFO.instagramHandle}
                  </p>
                </div>
              </div>

              <blockquote className="mt-8 m-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#526F8C] mb-3">
                  Verified Profile Bio
                </p>
                <div className="text-xl sm:text-2xl font-semibold text-[#29333D] leading-snug space-y-1">
                  {BRAND_INFO.instagramBioLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </blockquote>

              <div className="mt-8">
                <BorderlessCTA
                  label="Open Official Instagram Profile"
                  href={BRAND_INFO.instagramUrl}
                  external
                  tone="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ROYAL COBALT BLUE — SPLIT-SCREEN SURFACE ARCHITECTURAL SHOWCASE */}
      <section className="bg-[#2457A6] text-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 min-h-[380px] lg:min-h-[600px] gsap-media-reveal">
            <EditorialImage
              src={SUPPORTING_PHOTOS.glossyInterior.src}
              alt={SUPPORTING_PHOTOS.glossyInterior.alt}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 px-6 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-between gsap-reveal">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
                Surface Aesthetic · Illustrative Reference
              </p>
              <h2
                className="mt-5 font-bold tracking-[-0.02em] leading-[1.12] text-white"
                style={{ fontSize: 'clamp(1.875rem, 3.2vw, 3rem)' }}
              >
                Seamless clarity, reflective depth, and clean concrete transitions.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#E0E4E8] leading-relaxed max-w-xl">
                Epoxy flooring transforms bare concrete slabs into cohesive, light-reflecting
                surfaces. From clean residential interiors and garage bays to showroom floors,
                every installation starts with matching the right finish to how the space is used.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <BorderlessCTA
                label="Explore Flooring Solutions"
                to="/flooring-solutions"
                tone="orange"
              />
              <span className="text-xs text-[#E0E4E8]/80">
                {SUPPORTING_PHOTOS.glossyInterior.caption}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONCRETE GREY — OPEN PHOTOGRAPHIC FINISH SEQUENCE (ZERO CARDS) */}
      <section className="bg-[#E9EAEC] text-[#29333D] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#B9C0C8] gsap-reveal">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2457A6]">
                Surface Inspiration & Visual Study
              </p>
              <h2
                className="mt-3 font-bold tracking-[-0.02em] leading-[1.12] text-[#29333D]"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
              >
                Exploring finishes, textures, and floor preparation.
              </h2>
            </div>
            <p className="text-sm text-[#414A52] max-w-md leading-relaxed">
              The imagery below illustrates epoxy and polished concrete surface categories for
              visual reference. Visit{' '}
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2457A6] underline underline-offset-4 hover:text-[#F28C28]"
              >
                {BRAND_INFO.instagramHandle}
              </a>{' '}
              for official updates and direct project photos.
            </p>
          </div>

          {/* Open Asymmetric Editorial Photography Sequence */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start gsap-horizontal-drift">
            <div className="lg:col-span-5 gsap-media-reveal">
              <div className="aspect-[4/3] w-full">
                <EditorialImage
                  src={SUPPORTING_PHOTOS.flakeSurface.src}
                  alt={SUPPORTING_PHOTOS.flakeSurface.alt}
                  caption={SUPPORTING_PHOTOS.flakeSurface.caption}
                  className="w-full h-full"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#29333D]">
                Multi-Tone Decorative Flake Texture
              </h3>
              <p className="mt-2 text-sm text-[#414A52] leading-relaxed">
                Textured flake broadcasts add visual depth and speckled contrast across garages and
                utility spaces.
              </p>
            </div>

            <div className="lg:col-span-7 lg:mt-12 gsap-media-reveal">
              <div className="aspect-[16/10] w-full">
                <EditorialImage
                  src={SUPPORTING_PHOTOS.concreteGrinding.src}
                  alt={SUPPORTING_PHOTOS.concreteGrinding.alt}
                  caption={SUPPORTING_PHOTOS.concreteGrinding.caption}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#29333D]">
                    Concrete Preparation & Architectural Sheen
                  </h3>
                  <p className="mt-2 text-sm text-[#414A52] leading-relaxed max-w-xl">
                    Smooth epoxy adhesion depends on clean concrete preparation. Share photos of
                    your Phoenix slab via Instagram DM to discuss preparation needs.
                  </p>
                </div>
                <BorderlessCTA label="View Finish Gallery" to="/projects-about" tone="cobalt" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEEL BLUE — DIRECT PHOENIX ENQUIRY BAND */}
      <section className="bg-[#526F8C] text-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 gsap-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
                Phoenix, Arizona · Direct Project Enquiries
              </p>
              <h2
                className="mt-4 font-bold tracking-[-0.02em] leading-[1.1] text-white"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
              >
                Looking for epoxy flooring in Phoenix?
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#F0F2F4] leading-relaxed max-w-2xl">
                Send a direct message to {BRAND_INFO.instagramHandle} on Instagram with your
                Phoenix location, approximate square footage, and flooring goals—or prepare a
                structured project brief on our Contact page.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
                <BorderlessCTA
                  label="Message Us on Instagram"
                  href={BRAND_INFO.instagramUrl}
                  external
                  tone="orange"
                />
                <BorderlessCTA
                  label="Prepare Project Enquiry"
                  to="/contact"
                  tone="light"
                />
              </div>
            </div>

            <div className="lg:col-span-5 gsap-media-reveal">
              <div className="aspect-[4/3] w-full">
                <EditorialImage
                  src={SUPPORTING_PHOTOS.polishedConcrete.src}
                  alt={SUPPORTING_PHOTOS.polishedConcrete.alt}
                  caption={SUPPORTING_PHOTOS.polishedConcrete.caption}
                  captionTone="light"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
