import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { BorderlessCTA } from './BorderlessCTA';
import { BRAND_INFO, FLOORING_ENQUIRY_SCOPES } from '../data/brandData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);
  const dropdownWrapperRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Transparent over hero on pages with full-bleed dark-scrimmed hero headers; transitions to light bar on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname, location.hash]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openDropdown = () => {
    if (dropdownTimerRef.current) {
      window.clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const closeDropdownDelayed = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setSolutionsOpen(false);
    }, 160);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === '/projects-about') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/projects-about#about');
  };

  const isHome = location.pathname === '/';
  const isSolutions = location.pathname === '/flooring-solutions';
  const isProjects = location.pathname === '/projects-about' && location.hash !== '#about';
  const isAbout = location.pathname === '/projects-about' && location.hash === '#about';
  const isContact = location.pathname === '/contact';

  const useLightText = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7F7F5]/95 backdrop-blur-md border-b border-[#E0E4E8] py-3.5'
            : 'bg-gradient-to-b from-[#1A2128]/55 via-[#1A2128]/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Lockup */}
          <Link
            to="/"
            aria-label="Prestige Engineering Home"
            className="focus-visible:outline-2 focus-visible:outline-[#F28C28] focus-visible:outline-offset-4 shrink-0"
          >
            <BrandMark variant={useLightText ? 'light' : 'dark'} size="nav" />
          </Link>

          {/* Zone 2: Horizontal Editorial Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            <Link
              to="/"
              data-active={isHome}
              className={`nav-link-editorial ${
                useLightText
                  ? 'text-white hover:text-[#E0E4E8]'
                  : 'text-[#29333D] hover:text-[#2457A6]'
              }`}
            >
              Home
            </Link>

            {/* Dropdown wrapper with seamless hover bridge */}
            <div
              ref={dropdownWrapperRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdownDelayed}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/flooring-solutions"
                  data-active={isSolutions}
                  className={`nav-link-editorial ${
                    useLightText
                      ? 'text-white hover:text-[#E0E4E8]'
                      : 'text-[#29333D] hover:text-[#2457A6]'
                  }`}
                >
                  Flooring Solutions
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Flooring Solutions submenu"
                  aria-expanded={solutionsOpen}
                  onClick={() => setSolutionsOpen((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setSolutionsOpen(true);
                    }
                  }}
                  className={`p-1.5 bg-transparent border-0 cursor-pointer transition-transform duration-200 ${
                    useLightText ? 'text-white' : 'text-[#29333D]'
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      solutionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Seamless hover bridge + borderless architectural menu */}
              {solutionsOpen && (
                <div
                  role="menu"
                  aria-label="Flooring Solutions Submenu"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdownDelayed}
                  className="absolute left-0 top-full pt-3 min-w-[320px] z-50"
                >
                  <div className="bg-[#F7F7F5] border-t-2 border-[#2457A6] shadow-xl py-4 px-6 flex flex-col gap-1">
                    {FLOORING_ENQUIRY_SCOPES.map((scope) => (
                      <Link
                        key={scope.id}
                        role="menuitem"
                        to={`/flooring-solutions#${scope.slug}`}
                        onClick={() => setSolutionsOpen(false)}
                        className="group py-2.5 border-b border-[#E0E4E8] last:border-b-0 flex items-baseline justify-between gap-4 text-left transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#29333D] group-hover:text-[#2457A6]">
                          {scope.number}. {scope.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className="text-xs text-[#F28C28] opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          →
                        </span>
                      </Link>
                    ))}
                    <div className="pt-3 mt-1">
                      <Link
                        role="menuitem"
                        to="/flooring-solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="text-xs font-bold uppercase tracking-[0.08em] text-[#2457A6] hover:text-[#F28C28] transition-colors"
                      >
                        View All Flooring Enquiries →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects-about"
              data-active={isProjects}
              className={`nav-link-editorial ${
                useLightText
                  ? 'text-white hover:text-[#E0E4E8]'
                  : 'text-[#29333D] hover:text-[#2457A6]'
              }`}
            >
              Projects
            </Link>

            <a
              href="/projects-about#about"
              onClick={handleAboutClick}
              data-active={isAbout}
              className={`nav-link-editorial ${
                useLightText
                  ? 'text-white hover:text-[#E0E4E8]'
                  : 'text-[#29333D] hover:text-[#2457A6]'
              }`}
            >
              About Us
            </a>

            <Link
              to="/contact"
              data-active={isContact}
              className={`nav-link-editorial ${
                useLightText
                  ? 'text-white hover:text-[#E0E4E8]'
                  : 'text-[#29333D] hover:text-[#2457A6]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Zone 3: Single Primary Borderless CTA + Mobile Menu Trigger */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden lg:block">
              <BorderlessCTA
                label="Request Estimate"
                to="/contact"
                tone={useLightText ? 'light' : 'cobalt'}
              />
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`lg:hidden p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-transparent border-0 cursor-pointer ${
                useLightText ? 'text-white' : 'text-[#29333D]'
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Architectural Full-Height Mobile Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-[#F7F7F5] text-[#29333D] flex flex-col justify-between px-6 py-6 overflow-y-auto lg:hidden"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E0E4E8]">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <BrandMark variant="dark" size="nav" />
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-transparent border-0 text-[#29333D] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav aria-label="Mobile Primary Navigation" className="mt-8 flex flex-col">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-4 border-b border-[#E0E4E8] text-2xl font-bold text-[#29333D] hover:text-[#2457A6]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Home
              </Link>
              <Link
                to="/flooring-solutions"
                onClick={() => setMobileOpen(false)}
                className="py-4 border-b border-[#E0E4E8] text-2xl font-bold text-[#29333D] hover:text-[#2457A6]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Flooring Solutions
              </Link>
              <Link
                to="/projects-about"
                onClick={() => setMobileOpen(false)}
                className="py-4 border-b border-[#E0E4E8] text-2xl font-bold text-[#29333D] hover:text-[#2457A6]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Projects
              </Link>
              <a
                href="/projects-about#about"
                onClick={handleAboutClick}
                className="py-4 border-b border-[#E0E4E8] text-2xl font-bold text-[#29333D] hover:text-[#2457A6]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                About Us
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-4 border-b border-[#E0E4E8] text-2xl font-bold text-[#29333D] hover:text-[#2457A6]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="pt-8 pb-4 flex flex-col gap-4 border-t border-[#E0E4E8]">
            <p className="text-sm text-[#414A52]">
              {BRAND_INFO.location} · {BRAND_INFO.primaryCategory}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <BorderlessCTA
                label="Request Estimate"
                to="/contact"
                onClick={() => setMobileOpen(false)}
                tone="cobalt"
              />
              <BorderlessCTA
                label="Message on Instagram"
                href={BRAND_INFO.instagramUrl}
                external
                tone="dark"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
