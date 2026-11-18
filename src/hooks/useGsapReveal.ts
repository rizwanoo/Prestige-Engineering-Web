import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero entrance choreography (immediate, zero scroll delay)
      const heroItems = container.querySelectorAll('.gsap-hero-item');
      if (heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      // Subtle hero parallax
      const heroParallax = container.querySelector('.gsap-hero-parallax');
      if (heroParallax) {
        gsap.to(heroParallax, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroParallax,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Scroll-triggered editorial text & divider reveals
      const reveals = container.querySelectorAll('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });

      // Architectural image wipe/zoom reveals
      const mediaReveals = container.querySelectorAll('.gsap-media-reveal');
      mediaReveals.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.35, scale: 1.04 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // Subtle horizontal drift sequence for multi-photo gallery strips
      const driftTrack = container.querySelector('.gsap-horizontal-drift');
      if (driftTrack) {
        gsap.fromTo(
          driftTrack,
          { x: 0 },
          {
            x: -48,
            ease: 'none',
            scrollTrigger: {
              trigger: driftTrack,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
