import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BorderlessCTA } from '../components/BorderlessCTA';
import { EditorialImage } from '../components/EditorialImage';
import { BRAND_INFO, SUPPORTING_PHOTOS } from '../data/brandData';
import { useGsapReveal } from '../hooks/useGsapReveal';

export const ProjectsAboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  useGsapReveal(pageRef);

  useEffect(() => {
    if (location.hash === '#about') {
      const el = document.getElementById('about');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80);
      }
    }
  }, [location.hash]);

  return (
    <div ref={pageRef}>
      {/* 1. Full-Bleed Architectural Header */}
      <section className="relative min-h-[540px] h-[66vh] max-h-[700px] w-full overflow-hidden flex items-end bg-[#1D252D]">
        <div className="absolute inset-0 gsap-hero-parallax">
          <img
            src={SUPPORTING_PHOTOS.densifierCoat.src}
            alt={SUPPORTING_PHOTOS.densifierCoat.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#161D24]/88 via-[#161D24]/42 to-[#161D24]/55"
        />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pb-14 lg:pb-20 pt-36">
          <p className="gsap-hero-item text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
            {BRAND_INFO.name} · Portfolio Transparency &amp; Material Study
          </p>
          <h1
            className="gsap-hero-item mt-4 text-white font-extrabold tracking-[-0.025em] leading-[1.06] max-w-4xl"
            style={{ fontSize: 'clamp(2.25rem, 4.6vw, 4rem)' }}
          >
            Projects, Surface References &amp; About Prestige Engineering
          </h1>
          <p className="gsap-hero-item mt-5 text-base sm:text-lg text-[#F0F2F4] leading-relaxed max-w-2xl">
            An honest look at Prestige Engineering’s verified Instagram identity, illustrative
            epoxy surface photography, and Phoenix, Arizona focus.
          </p>
        </div>
      </section>

      {/* 2. OFFICIAL INSTAGRAM PORTFOLIO & VERIFIED BRAND ASSETS */}
      <section className="bg-[#F7F7F5] text-[#29333D] py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 gsap-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2457A6]">
                Official Brand Showcase · {BRAND_INFO.instagramHandle}
              </p>
              <h2
                className="mt-4 font-bold tracking-[-0.02em] leading-[1.12] text-[#29333D]"
                style={{ fontSize: 'clamp(1.875rem, 3.2vw, 3rem)' }}
              >
                Live project updates reside on Prestige Engineering’s Instagram.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-[#414A52] leading-relaxed max-w-2xl">
                Prestige Engineering maintains an emerging social portfolio on Instagram (
                {BRAND_INFO.instagramHandle}). Because Instagram restricts unauthenticated external
                browsing of post and reel media, official installation photos are best viewed
                directly on Instagram rather than duplicated or replaced with fabricated project
                claims.
              </p>
              <p className="mt-4 text-base text-[#414A52] leading-relaxed max-w-2xl">
                We never present third-party or illustrative stock photography as completed Prestige
                Engineering customer work. Message the team directly on Instagram to request
                relevant finish examples for your Phoenix project.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
                <BorderlessCTA
                  label="View Posts on Instagram"
                  href={BRAND_INFO.instagramUrl}
                  external
                  tone="cobalt"
                />
                <BorderlessCTA label="Request Project Examples" to="/contact" tone="dark" />
              </div>
            </div>

            {/* Official Branding Artifacts Display (Zero boxed cards — open architectural layout) */}
            <div className="lg:col-span-5 gsap-reveal lg:pl-10 lg:border-l border-[#B9C0C8]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#526F8C] mb-6">
                Verified Official Brand Marks
              </p>
              <div className="flex items-center gap-8 pb-8 border-b border-[#B9C0C8]">
                <img
                  src={BRAND_INFO.officialProfileAvatar}
                  alt="Official Prestige Engineering Instagram Avatar"
                  className="w-24 h-24 object-cover border border-[#B9C0C8]"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={BRAND_INFO.monogramSvg}
                  alt="Prestige Engineering Vector PE Monogram"
                  className="h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 space-y-2 text-sm text-[#414A52]">
                <p>
                  <strong className="text-[#29333D]">Profile Handle:</strong>{' '}
                  {BRAND_INFO.instagramHandle}
                </p>
                <p>
                  <strong className="text-[#29333D]">Category:</strong>{' '}
                  {BRAND_INFO.primaryCategory}
                </p>
                <p>
                  <strong className="text-[#29333D]">Location:</strong> {BRAND_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ILLUSTRATIVE EPOXY FLOORING VISUAL STUDY (Clearly Distinguished) */}
      <section className="bg-[#E9EAEC] text-[#29333D] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl pb-12 border-b border-[#B9C0C8] gsap-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2457A6]">
              Illustrative Visual References (Not Company Project Claims)
            </p>
            <h2
              className="mt-3 font-bold tracking-[-0.02em] leading-[1.12] text-[#29333D]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
            >
              Finish textures, reflectivity, and surface preparation visualised.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#414A52] leading-relaxed">
              The open gallery below provides architectural material inspiration across glossy resin,
              flake broadcast, and prepared concrete surfaces so you can articulate the look you
              want when messaging Prestige Engineering.
            </p>
          </div>

          {/* Open Asymmetric Editorial Photography Sequence */}
          <div className="mt-14 space-y-16 lg:space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center gsap-horizontal-drift">
              <div className="lg:col-span-7 gsap-media-reveal">
                <div className="aspect-[16/10] w-full">
                  <EditorialImage
                    src={SUPPORTING_PHOTOS.selfLevelingHero.src}
                    alt={SUPPORTING_PHOTOS.selfLevelingHero.alt}
                    caption={SUPPORTING_PHOTOS.selfLevelingHero.caption}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 gsap-reveal">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#526F8C]">
                  Reference 01 · Seamless Resin
                </span>
                <h3 className="mt-3 text-2xl font-bold text-[#29333D]">
                  Reflective Self-Leveling Sheen
                </h3>
                <p className="mt-3 text-base text-[#414A52] leading-relaxed">
                  Demonstrates how continuous resin coatings eliminate grout lines and brighten
                  interior architecture through smooth specular reflection.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 lg:order-1 order-2 gsap-reveal">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#526F8C]">
                  Reference 02 · Decorative Texture
                </span>
                <h3 className="mt-3 text-2xl font-bold text-[#29333D]">
                  Multi-Tone Flake Broadcast Detail
                </h3>
                <p className="mt-3 text-base text-[#414A52] leading-relaxed">
                  Macro view of multi-chip decorative flake texture frequently referenced for garages,
                  workshops, and utility concrete floors.
                </p>
              </div>
              <div className="lg:col-span-7 lg:order-2 order-1 gsap-media-reveal">
                <div className="aspect-[16/10] w-full">
                  <EditorialImage
                    src={SUPPORTING_PHOTOS.flakeSurface.src}
                    alt={SUPPORTING_PHOTOS.flakeSurface.alt}
                    caption={SUPPORTING_PHOTOS.flakeSurface.caption}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 gsap-media-reveal">
                <div className="aspect-[16/10] w-full">
                  <EditorialImage
                    src={SUPPORTING_PHOTOS.commercialCoat.src}
                    alt={SUPPORTING_PHOTOS.commercialCoat.alt}
                    caption={SUPPORTING_PHOTOS.commercialCoat.caption}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 gsap-reveal">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#526F8C]">
                  Reference 03 · Commercial Bays
                </span>
                <h3 className="mt-3 text-2xl font-bold text-[#29333D]">
                  Protective Concrete Bay Coating
                </h3>
                <p className="mt-3 text-base text-[#414A52] leading-relaxed">
                  Shows multi-zone concrete coating application across architectural curbs and
                  industrial floor bays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GENERAL EDUCATIONAL PROCESS CONTEXT (Explicitly Non-Proprietary) */}
      <section className="bg-[#2457A6] text-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl gsap-reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0E4E8]">
              General Industry Context · Not a Proprietary Method Claim
            </p>
            <h2
              className="mt-4 font-bold tracking-[-0.02em] leading-[1.12] text-white"
              style={{ fontSize: 'clamp(1.875rem, 3.2vw, 3rem)' }}
            >
              How an epoxy flooring conversation typically unfolds.
            </h2>
            <p className="mt-5 text-base text-[#E0E4E8] leading-relaxed">
              Because Prestige Engineering confirms site-specific preparation and installation steps
              directly with each client, the stages below outline general industry considerations
              to help you prepare your enquiry.
            </p>
          </div>

          <div className="mt-14 border-t border-white/25 gsap-reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 border-b border-white/25">
              <div>
                <span className="text-sm font-bold tracking-[0.12em] text-[#F28C28]">01.</span>
                <h3 className="mt-3 text-xl font-bold text-white">Space &amp; Slab Review</h3>
                <p className="mt-3 text-sm sm:text-base text-[#E0E4E8] leading-relaxed">
                  Sharing your Phoenix location, approximate square footage, and current concrete
                  photos via Instagram DM gives an immediate starting point.
                </p>
              </div>
              <div>
                <span className="text-sm font-bold tracking-[0.12em] text-[#F28C28]">02.</span>
                <h3 className="mt-3 text-xl font-bold text-white">Finish Preference</h3>
                <p className="mt-3 text-sm sm:text-base text-[#E0E4E8] leading-relaxed">
                  Discuss whether you are looking for a clean solid gloss, decorative flake
                  texture, or commercial floor tone tailored to daily foot or vehicle use.
                </p>
              </div>
              <div>
                <span className="text-sm font-bold tracking-[0.12em] text-[#F28C28]">03.</span>
                <h3 className="mt-3 text-xl font-bold text-white">Direct Estimate Discussion</h3>
                <p className="mt-3 text-sm sm:text-base text-[#E0E4E8] leading-relaxed">
                  Prestige Engineering follows up directly on Instagram to confirm exact scope,
                  scheduling, and next steps for your floor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT PRESTIGE ENGINEERING (#about anchor) */}
      <section id="about" className="bg-[#FFFFFF] text-[#29333D] py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 gsap-reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2457A6]">
                About Prestige Engineering
              </p>
              <h2
                className="mt-4 font-bold tracking-[-0.02em] leading-[1.12] text-[#29333D]"
                style={{ fontSize: 'clamp(1.875rem, 3.2vw, 3rem)' }}
              >
                Focused on epoxy flooring in Phoenix, Arizona.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#414A52] leading-relaxed gsap-reveal">
              <p>
                <strong className="text-[#29333D]">Prestige Engineering</strong> operates under{' '}
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#2457A6] underline underline-offset-4 hover:text-[#F28C28]"
                >
                  {BRAND_INFO.instagramHandle}
                </a>{' '}
                in {BRAND_INFO.location}, specializing exclusively in epoxy flooring enquiries and
                surface finishes.
              </p>
              <p>
                Rather than presenting inflated claims or generic contractor copy, this website
                reflects only Prestige Engineering’s authentic brand identity: a direct, personal
                enquiry model centered on epoxy flooring in the Phoenix area.
              </p>

              <div className="pt-6 border-t border-[#E0E4E8] flex flex-wrap items-center gap-x-10 gap-y-4">
                <BorderlessCTA
                  label="Message Us on Instagram"
                  href={BRAND_INFO.instagramUrl}
                  external
                  tone="cobalt"
                />
                <BorderlessCTA label="Go to Contact Page" to="/contact" tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
