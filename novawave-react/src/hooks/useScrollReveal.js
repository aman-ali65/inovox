import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal
 * Attaches a lightweight IntersectionObserver across all cards, headings,
 * sections, and interactive blocks. Applies subtle fade-in and 12-14px upward
 * movement with minimal stagger (60ms), revealing elements only once.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Respect user reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    // Target elements to reveal on scroll
    const selectors = [
      'section.sec:not(.hero)',
      '.fade-in-section',
      '.svc',
      '.pc',
      '.step',
      '.proc > div',
      '.st',
      '.val',
      '.team-profile-card',
      '.founder-spotlight',
      '.company-val-card',
      '.company-expertise-card',
      '.company-approach-card',
      '.blog-clean-card',
      '.blog-featured-card',
      '.portfolio-card-v2',
      '.ci-list > div',
      '.feat3 > div',
      '.acc > div',
      '.rowhead',
      '.company-section-header',
      '.pl2',
      '.band',
      '.quote',
      '.faq',
      '.trow > div',
      '.techs > div',
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -36px 0px',
        threshold: 0.06,
      }
    );

    elements.forEach((el) => {
      // Avoid re-attaching if already revealed
      if (el.classList.contains('is-revealed')) return;

      el.classList.add('scroll-reveal-item');

      // Minimal parent-based stagger (max 240ms)
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children);
        const index = siblings.indexOf(el);
        if (index > 0) {
          const delay = Math.min((index % 4) * 60, 240);
          el.style.setProperty('--reveal-delay', `${delay}ms`);
        }
      }

      // If already in viewport on load, reveal immediately without delay
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
}
