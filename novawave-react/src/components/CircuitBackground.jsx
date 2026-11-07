import { useEffect, useRef } from 'react';

/**
 * CircuitBackground
 * Renders a subtle, high-performance Digital Circuit Board effect across the website.
 * Inspired by PCB trace routing with 45-degree bends, circular solder pads/nodes,
 * and occasional gentle signal pulses traveling along traces.
 *
 * Excludes navbar area, respects prefers-reduced-motion, and maintains high readability.
 */
export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let traces = [];
    let pulses = [];
    let lastTime = performance.now();

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette: Clear light-blue and medium-blue tones (#60A5FA, #93C5FD, #3B82F6, #2563EB)
    // Noticeable, crisp lines and nodes while keeping clean white background
    const colors = [
      { stroke: 'rgba(96, 165, 250, 0.46)', node: 'rgba(59, 130, 246, 0.78)', glow: 'rgba(96, 165, 250, 0.72)' }, // Clear light-blue & medium-blue
      { stroke: 'rgba(147, 197, 253, 0.52)', node: 'rgba(96, 165, 250, 0.75)', glow: 'rgba(147, 197, 253, 0.70)' }, // Bright light blue
      { stroke: 'rgba(59, 130, 246, 0.42)', node: 'rgba(37, 99, 235, 0.80)', glow: 'rgba(59, 130, 246, 0.74)' }, // Medium blue
      { stroke: 'rgba(125, 185, 252, 0.48)', node: 'rgba(59, 130, 246, 0.76)', glow: 'rgba(96, 165, 250, 0.70)' }, // Clear sky medium-blue
      { stroke: 'rgba(96, 165, 250, 0.44)', node: 'rgba(96, 165, 250, 0.74)', glow: 'rgba(59, 130, 246, 0.68)' }, // Medium light blue
    ];

    /**
     * Generate PCB circuit traces
     */
    function initTraces() {
      traces = [];
      pulses = [];

      const isMobile = width < 768;
      // Start below navbar (navbar is ~68px on desktop, ~64px on mobile)
      const topOffset = 80;
      const usableHeight = Math.max(height - topOffset - 40, 200);

      // Number of trace tracks based on viewport size (sparse & balanced)
      const numLanes = isMobile ? 10 : 18;
      const laneHeight = usableHeight / numLanes;

      for (let i = 0; i < numLanes; i++) {
        // Skip some lanes for balanced, organic layout
        if (Math.random() < 0.12) continue;

        const baseColor = colors[i % colors.length];
        const yBase = topOffset + i * laneHeight + (Math.random() * 0.4 - 0.2) * laneHeight;

        // Choose direction: mostly left-to-right (as in reference image), occasional right-to-left
        const fromLeft = Math.random() < 0.78;
        const startX = fromLeft
          ? Math.random() < 0.4 ? -20 : Math.random() * (width * 0.25)
          : width + 20;

        // Bus grouping: occasionally generate 2 parallel traces (like real PCB buses)
        const isBus = !isMobile && Math.random() < 0.35;
        const busCount = isBus ? 2 : 1;
        const busOffset = 14;

        for (let b = 0; b < busCount; b++) {
          const currentY = yBase + b * busOffset;
          const points = [{ x: startX, y: currentY }];

          // Step 1: horizontal lead-in
          const dir = fromLeft ? 1 : -1;
          const leadInLen = 80 + Math.random() * (width * 0.22);
          let currentX = startX + dir * leadInLen;
          points.push({ x: currentX, y: currentY });

          // Step 2: 45-degree diagonal bend (up or down)
          const bendDir = (i % 2 === 0 ? 1 : -1);
          const bendSize = 24 + Math.floor(Math.random() * 3) * 16;
          currentX += dir * bendSize;
          const bentY = currentY + bendDir * bendSize;
          points.push({ x: currentX, y: bentY });

          // Step 3: second horizontal segment
          const midLen = 90 + Math.random() * (width * 0.25);
          currentX += dir * midLen;
          points.push({ x: currentX, y: bentY });

          // Optional Step 4 & 5: second 45-degree bend
          let finalY = bentY;
          if (Math.random() < 0.45) {
            const bendDir2 = Math.random() < 0.5 ? -bendDir : bendDir;
            const bendSize2 = 20 + Math.floor(Math.random() * 2) * 14;
            currentX += dir * bendSize2;
            finalY = bentY + bendDir2 * bendSize2;
            points.push({ x: currentX, y: finalY });

            const trailLen = 60 + Math.random() * (width * 0.18);
            currentX += dir * trailLen;
            points.push({ x: currentX, y: finalY });
          }

          // Termination node configuration
          const hasEndNode = Math.random() < 0.90;
          const nodeRadius = 3.8 + Math.random() * 2.0;
          const hasOuterRing = Math.random() < 0.42;

          // Compute total path length for pulse interpolation
          let totalLength = 0;
          const segments = [];
          for (let p = 0; p < points.length - 1; p++) {
            const p1 = points[p];
            const p2 = points[p + 1];
            const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            segments.push({
              start: p1,
              end: p2,
              length: dist,
              startDist: totalLength,
            });
            totalLength += dist;
          }

          const traceObj = {
            points,
            segments,
            totalLength,
            color: baseColor,
            hasEndNode,
            nodeRadius,
            hasOuterRing,
            lineWidth: 1.35 + (b === 0 && Math.random() < 0.28 ? 0.3 : 0),
          };

          traces.push(traceObj);

          // Add traveling pulse if animations are enabled
          if (!prefersReducedMotion && Math.random() < 0.72) {
            pulses.push({
              trace: traceObj,
              progress: Math.random(), // 0 to 1
              speed: 0.045 + Math.random() * 0.055, // gentle speed
              active: true,
              pulseDelay: Math.random() * 4, // delay before restart
              delayTimer: 0,
              radius: 2.7 + Math.random() * 0.9,
            });
          }
        }
      }
    }

    /**
     * Resize canvas with High-DPI support
     */
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initTraces();
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    /**
     * Interpolate (x, y) along pre-computed trace segments
     */
    function getPointAtProgress(trace, progress) {
      const targetDist = progress * trace.totalLength;
      for (let s = 0; s < trace.segments.length; s++) {
        const seg = trace.segments[s];
        if (targetDist <= seg.startDist + seg.length || s === trace.segments.length - 1) {
          const segProgress = (targetDist - seg.startDist) / (seg.length || 1);
          return {
            x: seg.start.x + (seg.end.x - seg.start.x) * segProgress,
            y: seg.start.y + (seg.end.y - seg.start.y) * segProgress,
          };
        }
      }
      const lastPoint = trace.points[trace.points.length - 1];
      return { x: lastPoint.x, y: lastPoint.y };
    }

    /**
     * Main Render Loop
     */
    function render(currentTime) {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Clear viewport
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Static Circuit Board Traces
      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        if (trace.points.length < 2) continue;

        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let p = 1; p < trace.points.length; p++) {
          ctx.lineTo(trace.points[p].x, trace.points[p].y);
        }
        ctx.strokeStyle = trace.color.stroke;
        ctx.lineWidth = trace.lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Optional terminal circular connection node (pad)
        if (trace.hasEndNode) {
          const endPt = trace.points[trace.points.length - 1];

          // Filled node dot
          ctx.beginPath();
          ctx.arc(endPt.x, endPt.y, trace.nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = trace.color.node;
          ctx.fill();

          // Outer concentric ring on select nodes (PCB via style)
          if (trace.hasOuterRing) {
            ctx.beginPath();
            ctx.arc(endPt.x, endPt.y, trace.nodeRadius + 2.8, 0, Math.PI * 2);
            ctx.strokeStyle = trace.color.stroke;
            ctx.lineWidth = 1.15;
            ctx.stroke();
          }
        }
      }

      // 2. Animate occasional moving signal dots (pulses)
      if (!prefersReducedMotion) {
        for (let p = 0; p < pulses.length; p++) {
          const pulse = pulses[p];

          if (!pulse.active) {
            pulse.delayTimer += delta;
            if (pulse.delayTimer >= pulse.pulseDelay) {
              pulse.active = true;
              pulse.progress = 0;
              pulse.delayTimer = 0;
              pulse.pulseDelay = 1.5 + Math.random() * 3.5;
            }
            continue;
          }

          pulse.progress += pulse.speed * delta;
          if (pulse.progress >= 1) {
            pulse.active = false;
            pulse.progress = 1;
            continue;
          }

          const pt = getPointAtProgress(pulse.trace, pulse.progress);

          // Subtle glowing signal dot
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulse.radius, 0, Math.PI * 2);
          ctx.fillStyle = pulse.trace.color.glow;
          ctx.fill();

          // Core bright center
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pulse.radius * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    // Start loop
    animationFrameId = requestAnimationFrame(render);

    // Pause rendering when tab is not visible to preserve battery & CPU
    function handleVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="circuit-bg-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="circuit-bg-canvas" />
    </div>
  );
}
