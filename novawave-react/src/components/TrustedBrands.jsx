import React, { useRef, useEffect, useState, useCallback } from 'react';

// Exact sequence requested:
// React → Next.js → Microsoft → AWS → GitHub → Figma → Node.js → Google Cloud

const BRANDS = [
  {
    id: 'react',
    name: 'React',
    render: () => (
      <svg viewBox="0 0 148 48" height="28" width="86" aria-label="React">
        <g transform="translate(4, 0)">
          <ellipse cx="20" cy="24" rx="19" ry="7.2" fill="none" stroke="#61DAFB" strokeWidth="2.2" />
          <ellipse cx="20" cy="24" rx="19" ry="7.2" fill="none" stroke="#61DAFB" strokeWidth="2.2" transform="rotate(60 20 24)" />
          <ellipse cx="20" cy="24" rx="19" ry="7.2" fill="none" stroke="#61DAFB" strokeWidth="2.2" transform="rotate(120 20 24)" />
          <circle cx="20" cy="24" r="3.4" fill="#61DAFB" />
        </g>
        <text
          x="52"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontSize="25"
          fontWeight="700"
          fill="#23272F"
          letterSpacing="-0.03em"
        >
          React
        </text>
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    render: () => (
      <svg viewBox="0 0 148 48" height="28" width="86" aria-label="Next.js">
        <defs>
          <linearGradient id="nextjs-diag-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform="translate(4, 4)">
          <circle cx="20" cy="20" r="19" fill="#000000" />
          <path d="M14.5 13h3.2v14h-3.2z" fill="#ffffff" />
          <path d="M26.3 13h3.2v14h-3.2z" fill="#ffffff" />
          <path d="M15.5 13h3.6l10.4 14h-3.6z" fill="url(#nextjs-diag-grad)" />
        </g>
        <text
          x="54"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="#000000"
          letterSpacing="-0.04em"
        >
          Next.js
        </text>
      </svg>
    ),
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    render: () => (
      <svg viewBox="0 0 162 48" height="28" width="95" aria-label="Microsoft">
        <g transform="translate(4, 11)">
          <rect x="0" y="0" width="12" height="12" fill="#F25022" />
          <rect x="14.5" y="0" width="12" height="12" fill="#7FBA00" />
          <rect x="0" y="14.5" width="12" height="12" fill="#00A4EF" />
          <rect x="14.5" y="14.5" width="12" height="12" fill="#FFB900" />
        </g>
        <text
          x="40"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontSize="23"
          fontWeight="600"
          fill="#5E5E5E"
          letterSpacing="-0.02em"
        >
          Microsoft
        </text>
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS',
    render: () => (
      <svg viewBox="0 0 105 48" height="28" width="61" aria-label="AWS">
        <g transform="translate(2, 6)">
          <g fill="#232F3E">
            <path d="M19.5 21.8h-4.2l-.8 2.8h-3.8l5-15.6h4.2l5.1 15.6h-4.4l-1.1-2.8zm-3.4-3.2h2.6l-1.3-4.8-1.3 4.8z" />
            <path d="M42.5 9h3.8l-4.2 15.6h-3.8l-3.2-10.4-3.2 10.4h-3.8L24.3 9h3.8l2.7 10.5 3.1-10.5h3.6l3.1 10.5 1.9-10.5z" />
            <path d="M57.2 17.2c-1.5-.7-2.6-1.3-2.6-2.2 0-.9.8-1.5 2.2-1.5 1.5 0 2.8.6 3.8 1.4l2.2-2.6c-1.5-1.4-3.6-2.1-6-2.1-3.7 0-6.1 2.2-6.1 5.1 0 2.8 1.9 4 4.3 4.8 1.8.7 2.9 1.4 2.9 2.4 0 1.1-1.1 1.7-2.6 1.7-1.9 0-3.7-.7-5-1.8l-2.2 2.7c1.8 1.7 4.4 2.5 7.2 2.5 4.1 0 6.6-2.1 6.6-5.2 0-2.9-1.9-4.3-4.7-5.2z" />
          </g>
          <path
            d="M10.8 28.5c14.2 6.8 33.5 6.8 47.4.2.7-.3 1.3.4.9 1-15.2 7.6-36.2 7.5-49.2-.3-.6-.5 0-1.2.9-.9z"
            fill="#FF9900"
          />
          <path
            d="M57.5 26.8c.9-.7 3.9-.3 5.3 1 .2.2 0 .6-.3.7-1.6 1.2-4.6 2.4-6.3 1.4-.3-.2 0-.6.2-.7.4-.4.7-1.7 1.1-2.4z"
            fill="#FF9900"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    render: () => (
      <svg viewBox="0 0 148 48" height="28" width="86" aria-label="GitHub">
        <g transform="translate(4, 7)">
          <path
            d="M17 0C7.6 0 0 7.6 0 17c0 7.5 4.9 13.9 11.6 16.1.9.2 1.2-.4 1.2-.8v-3.1c-4.7 1-5.7-2-5.7-2-.8-2-1.9-2.5-1.9-2.5-1.5-1 .1-1 .1-1 1.7.1 2.6 1.7 2.6 1.7 1.5 2.6 4 1.8 4.9 1.4.2-1.1.6-1.8 1.1-2.3-3.8-.4-7.8-1.9-7.8-8.4 0-1.9.7-3.4 1.7-4.6-.2-.4-.7-2.2.2-4.5 0 0 1.4-.4 4.7 1.7 1.4-.4 2.8-.6 4.3-.6s2.9.2 4.3.6c3.3-2.2 4.7-1.7 4.7-1.7.9 2.3.4 4.1.2 4.5 1.1 1.2 1.7 2.7 1.7 4.6 0 6.5-4 8-7.8 8.4.6.5 1.2 1.6 1.2 3.1v4.6c0 .5.3 1 .1.2 1.2-.8 6.7-2.3 11.6-8.6 11.6-16.1C34 7.6 26.4 0 17 0z"
            fill="#24292F"
          />
        </g>
        <text
          x="48"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
          fontSize="25"
          fontWeight="700"
          fill="#24292F"
          letterSpacing="-0.02em"
        >
          GitHub
        </text>
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    render: () => (
      <svg viewBox="0 0 136 48" height="28" width="79" aria-label="Figma">
        <g transform="translate(4, 7)">
          <path d="M5.7 34.2a5.7 5.7 0 0 0 5.7-5.7v-5.7H5.7a5.7 5.7 0 1 0 0 11.4z" fill="#0ACF83" />
          <path d="M0 17.1a5.7 5.7 0 0 0 5.7 5.7h5.7V11.4H5.7A5.7 5.7 0 0 0 0 17.1z" fill="#A259FF" />
          <path d="M0 5.7a5.7 5.7 0 0 0 5.7 5.7h5.7V0H5.7A5.7 5.7 0 0 0 0 5.7z" fill="#F24E1E" />
          <path d="M11.4 0h5.7a5.7 5.7 0 1 1 0 11.4h-5.7V0z" fill="#FF7262" />
          <circle cx="17.1" cy="17.1" r="5.7" fill="#1ABCFE" />
        </g>
        <text
          x="38"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
          fontSize="25"
          fontWeight="700"
          fill="#1E1E1E"
          letterSpacing="-0.02em"
        >
          Figma
        </text>
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    render: () => (
      <svg viewBox="0 0 152 48" height="28" width="89" aria-label="Node.js">
        <g transform="translate(4, 8)">
          <path d="M16 0L31.5 9v18L16 36 .5 27V9L16 0z" fill="#5FA04E" />
          <path d="M16 1.8l13.9 8v16.4L16 34.2 2.1 26.2V9.8L16 1.8z" fill="#539E43" />
          <path d="M16 1.8v16.2l14 8V9.8L16 1.8z" fill="#43853D" opacity="0.4" />
          <path
            d="M12.5 12h3.2v9.5c0 2-.8 3-2.5 3s-2.5-1-2.5-2.5h2.2c0 .6.1 1 .5 1 .3 0 .6-.2.6-.7V12zm6.2 6.5c0-1.8 1.4-2.8 3.5-2.8 2 0 3.4 1 3.4 2.8v.5h-2.2v-.4c0-.7-.4-1.1-1.2-1.1-.8 0-1.2.4-1.2 1.1 0 1.8 4.6 1.2 4.6 4.3 0 1.9-1.4 2.9-3.5 2.9-2.2 0-3.6-1.1-3.6-2.9v-.6h2.2v.5c0 .8.5 1.2 1.4 1.2.9 0 1.3-.4 1.3-1.1 0-2-4.7-1.3-4.7-4.4z"
            fill="#FFFFFF"
          />
        </g>
        <text
          x="45"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="24"
          fontWeight="700"
          fill="#333333"
          letterSpacing="-0.03em"
        >
          Node.js
        </text>
      </svg>
    ),
  },
  {
    id: 'googlecloud',
    name: 'Google Cloud',
    render: () => (
      <svg viewBox="0 0 198 48" height="28" width="116" aria-label="Google Cloud">
        <g transform="translate(4, 9)">
          <path
            d="M19.5 7.8c-3.1 0-5.8 1.8-7.1 4.5C11.5 12.1 10.5 12 9.5 12 5.4 12 2 15.4 2 19.5S5.4 27 9.5 27h18.2c4 0 7.3-3.3 7.3-7.3 0-3.8-3-6.9-6.8-7.3-1.4-2.7-4.3-4.6-7.7-4.6z"
            fill="#4285F4"
          />
          <path
            d="M19.5 7.8c2.2 0 4.2.9 5.6 2.3l-2.4 2.4c-.8-.8-2-1.3-3.2-1.3-2.4 0-4.4 1.7-4.9 3.9l-3.3-1.9c1.6-3.2 4.8-5.4 8.2-5.4z"
            fill="#EA4335"
          />
          <path
            d="M9.5 12c1.2 0 2.3.3 3.3.9l-1.7 3c-.5-.3-1-.4-1.6-.4-2.2 0-4.1 1.6-4.4 3.7l-3.4-.8C2.6 15 5.7 12 9.5 12z"
            fill="#FBBC05"
          />
          <path
            d="M9.5 27c-2.4 0-4.5-1.2-5.7-3.1l3.2-1.5c.6.9 1.5 1.4 2.5 1.4h9.5v3.2H9.5z"
            fill="#34A853"
          />
        </g>
        <text
          x="48"
          y="32"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Google Sans', Roboto, sans-serif"
          fontSize="22"
          fontWeight="600"
          fill="#5F6368"
          letterSpacing="-0.02em"
        >
          Google Cloud
        </text>
      </svg>
    ),
  },
];

// Repeat 4 times to ensure seamless infinite coverage across all screen resolutions
const REPEATED_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function TrustedBrands() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);

  // Animation & Drag state held in refs for 60fps/120fps hardware-accelerated performance
  const offsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Measure single sequence width (distance between 1st item of set 1 and 1st item of set 2)
  const measure = useCallback(() => {
    if (itemRefs.current[0] && itemRefs.current[BRANDS.length]) {
      const start = itemRefs.current[0].offsetLeft;
      const nextSetStart = itemRefs.current[BRANDS.length].offsetLeft;
      const width = nextSetStart - start;
      if (width > 0) {
        singleSetWidthRef.current = width;
      }
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    const timeout = setTimeout(measure, 150);

    let animationFrameId;

    const animate = (time) => {
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Speed 100 px/sec to the left when not actively dragging
      if (!isDraggingRef.current) {
        offsetRef.current += 100 * delta;
      }

      // Smooth wrap modulo arithmetic:
      const singleWidth = singleSetWidthRef.current;
      if (singleWidth > 0) {
        offsetRef.current = ((offsetRef.current % singleWidth) + singleWidth) % singleWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    lastTimeRef.current = performance.now();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [measure]);

  // Pointer drag events for smooth draggable interaction
  const handlePointerDown = (e) => {
    // Only drag with primary mouse button or touch
    if (e.button !== undefined && e.button !== 0) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    setIsGrabbing(true);

    try {
      if (containerRef.current) {
        containerRef.current.setPointerCapture(e.pointerId);
      }
    } catch {
      // Ignored if pointer capture is not supported
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    offsetRef.current = startOffsetRef.current - deltaX;

    const singleWidth = singleSetWidthRef.current;
    if (singleWidth > 0) {
      offsetRef.current = ((offsetRef.current % singleWidth) + singleWidth) % singleWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsGrabbing(false);

    try {
      if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
        containerRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignored if pointer capture is not supported
    }
  };

  return (
    <section className="sec brands" aria-label="Trusted by innovative brands">
      <small>Trusted by innovative brands</small>
      <div
        className={`logoloop-container ${isGrabbing ? 'grabbing' : ''}`}
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="logoloop-track" ref={trackRef}>
          {REPEATED_BRANDS.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              ref={(el) => (itemRefs.current[index] = el)}
              className="logoloop-item"
              title={brand.name}
            >
              {brand.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
