import { useEffect, useState, useRef } from 'react';

/**
 * Animated number counter component (CountUp effect)
 * Automatically triggers an ease-out count-up animation when scrolled into view.
 */
function parseValue(val) {
  const match = String(val).match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { isNum: false, prefix: '', targetNum: 0, suffix: '', hasDecimals: false, decimalPlaces: 0, initial: String(val) };
  const prefix = match[1] || '';
  const targetNum = parseFloat(match[2]);
  const suffix = match[3] || '';
  const hasDecimals = match[2].includes('.');
  const decimalPlaces = hasDecimals ? (match[2].split('.')[1] || '').length : 0;
  const initial = `${prefix}${hasDecimals ? (0).toFixed(decimalPlaces) : '0'}${suffix}`;
  return { isNum: true, prefix, targetNum, suffix, hasDecimals, decimalPlaces, initial };
}

export default function CountUp({ value, duration = 1800, className = '' }) {
  const [displayValue, setDisplayValue] = useState(() => parseValue(value).initial);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const parsed = parseValue(value);
    if (!parsed.isNum) return;

    const element = elementRef.current;
    if (!element) return;

    let animId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          observer.disconnect();

          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic: smooth deceleration into target number
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = parsed.targetNum * easeOut;

            const formatted = parsed.hasDecimals
              ? currentVal.toFixed(parsed.decimalPlaces)
              : Math.floor(currentVal);

            setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);

            if (progress < 1) {
              animId = requestAnimationFrame(animate);
            } else {
              setDisplayValue(value); // guarantee exact final value
            }
          };

          animId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [value, duration]);

  return (
    <b ref={elementRef} className={className} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {displayValue}
    </b>
  );
}
