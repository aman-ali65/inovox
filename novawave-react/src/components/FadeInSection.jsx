import { useEffect, useRef, useState } from 'react';

/**
 * FadeInSection
 * Smooth scroll-reveal wrapper component with IntersectionObserver.
 * Fades in with subtle 12-14px upward motion when entering viewport.
 * Reveals only once and respects prefers-reduced-motion.
 */
export default function FadeInSection({ children, className = '', delay = 0, ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Respect reduced-motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    // If already in viewport on mount, reveal immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -36px 0px',
        threshold: 0.05,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-revealed' : ''} ${className}`}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
