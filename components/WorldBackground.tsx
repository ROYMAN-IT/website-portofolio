"use client";

import React, { useEffect, useRef } from "react";

// Seven sky phases, one per section, each a top/bottom colour pair.
// Interpolated smoothly between phases as the visitor scrolls.
const SKY_PHASES: { top: [number, number, number]; bottom: [number, number, number] }[] = [
  { top: [255, 217, 179], bottom: [255, 180, 163] }, // Hero — dawn
  { top: [190, 231, 250], bottom: [234, 246, 255] }, // About — morning
  { top: [127, 203, 234], bottom: [205, 239, 251] }, // Skills — midday
  { top: [255, 217, 138], bottom: [255, 239, 194] }, // Projects — afternoon
  { top: [106, 76, 147], bottom: [255, 154, 92] }, // Education — sunset
  { top: [46, 42, 107], bottom: [124, 92, 166] }, // Experience — dusk
  { top: [11, 17, 48], bottom: [27, 37, 80] }, // Contact — night
];

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

const CLOUD_LAYOUT = [
  { top: "8%", left: "12%", w: 42, dur: "46s" },
  { top: "16%", left: "62%", w: 30, dur: "38s" },
  { top: "5%", left: "82%", w: 24, dur: "52s" },
  { top: "22%", left: "38%", w: 20, dur: "34s" },
];

const FIREFLIES = [
  { top: "72%", left: "18%", delay: "0s" },
  { top: "80%", left: "38%", delay: "1.4s" },
  { top: "68%", left: "58%", delay: "0.7s" },
  { top: "85%", left: "78%", delay: "2.1s" },
  { top: "75%", left: "90%", delay: "0.3s" },
];

const BIRDS = [
  { top: "14%", left: "20%", scale: 1, dur: "50s", delay: "0s" },
  { top: "9%", left: "55%", scale: 0.8, dur: "42s", delay: "6s" },
  { top: "20%", left: "75%", scale: 0.9, dur: "58s", delay: "3s" },
];

function Bird({ scale = 1 }: { scale?: number }) {
  return (
    <svg viewBox="0 0 12 6" width={12 * scale} height={6 * scale} className="pixel-crisp">
      <path d="M0 2 L3 0 L6 2 L9 0 L12 2 L6 4 Z" fill="#3B2A1E" opacity="0.55" />
    </svg>
  );
}

export default function WorldBackground() {
  const skyRef = useRef<HTMLDivElement>(null);
  const farRef = useRef<HTMLDivElement>(null);
  const nearRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const celestialRef = useRef<HTMLDivElement>(null);
  const sunCoreRef = useRef<HTMLDivElement>(null);
  const moonCoreRef = useRef<HTMLDivElement>(null);
  const birdsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;

      const segments = SKY_PHASES.length - 1;
      const pos = progress * segments;
      const idx = Math.min(Math.floor(pos), segments - 1);
      const t = pos - idx;
      const a = SKY_PHASES[idx];
      const b = SKY_PHASES[idx + 1];

      const top = a.top.map((c, i) => lerp(c, b.top[i], t));
      const bottom = a.bottom.map((c, i) => lerp(c, b.bottom[i], t));

      if (skyRef.current) {
        skyRef.current.style.background = `linear-gradient(180deg, rgb(${top.join(",")}) 0%, rgb(${bottom.join(",")}) 100%)`;
      }
      if (starsRef.current) {
        // Stars fade in starting at the sunset phase (index 4 of 7)
        const starT = Math.min(Math.max((progress - 0.55) / 0.4, 0), 1);
        starsRef.current.style.opacity = String(starT);
      }

      // Sun arcs up through the day phases, then hands off to the moon for
      // the dusk/night phases. One continuous "journey across the sky".
      const sunVisible = progress < 0.72;
      const moonVisible = progress > 0.6;
      const arcT = Math.min(Math.max(progress / 0.72, 0), 1);
      const arcX = 8 + arcT * 84; // percent across
      const arcY = 62 - Math.sin(arcT * Math.PI) * 48; // percent down (lower = closer to horizon)

      if (celestialRef.current) {
        celestialRef.current.style.left = `${arcX}%`;
        celestialRef.current.style.top = `${arcY}%`;
      }
      if (sunCoreRef.current) {
        sunCoreRef.current.style.opacity = sunVisible ? String(1 - Math.max((progress - 0.58) / 0.14, 0)) : "0";
        const sunColors: [number, number, number][] = [
          [255, 170, 110],
          [255, 221, 130],
          [255, 244, 190],
          [255, 205, 120],
          [255, 130, 90],
        ];
        const cIdx = Math.min(Math.floor(arcT * (sunColors.length - 1)), sunColors.length - 2);
        const cT = arcT * (sunColors.length - 1) - cIdx;
        const col = sunColors[cIdx].map((c, i) => lerp(c, sunColors[cIdx + 1][i], cT));
        sunCoreRef.current.style.background = `rgb(${col.join(",")})`;
        sunCoreRef.current.style.boxShadow = `0 0 26px 8px rgba(${col.join(",")},0.55)`;
      }
      if (moonCoreRef.current) {
        moonCoreRef.current.style.opacity = moonVisible ? String(Math.min(Math.max((progress - 0.62) / 0.18, 0), 1)) : "0";
      }
      if (birdsRef.current) {
        birdsRef.current.style.opacity = String(Math.max(1 - progress / 0.55, 0));
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={skyRef}
        className="world-sky"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, rgb(255,217,179) 0%, rgb(255,180,163) 100%)" }}
      />

      <div ref={starsRef} className="world-stars" aria-hidden="true" style={{ opacity: 0 }} />

      {/* Sun/moon — one object that arcs across the sky as you scroll */}
      <div
        ref={celestialRef}
        className="fixed z-[-3] pointer-events-none"
        aria-hidden="true"
        style={{ left: "8%", top: "62%", transition: "left 0.2s linear, top 0.2s linear" }}
      >
        <div className="relative w-9 h-9 sm:w-12 sm:h-12">
          <div
            ref={sunCoreRef}
            className="pixel-crisp absolute inset-0 rounded-full"
            style={{ background: "rgb(255,170,110)", transition: "opacity 0.6s ease, background 0.6s ease" }}
          />
          <div
            ref={moonCoreRef}
            className="pixel-crisp absolute inset-0 rounded-full bg-[#EAEFFB]"
            style={{ opacity: 0, boxShadow: "0 0 20px 6px rgba(234,239,251,0.5)", transition: "opacity 0.6s ease" }}
          >
            <div className="absolute top-1.5 left-2 w-1.5 h-1.5 rounded-full bg-black/10" />
            <div className="absolute bottom-2 right-1.5 w-1 h-1 rounded-full bg-black/10" />
          </div>
        </div>
      </div>

      {/* Birds — visible during the day phases, fade out toward evening */}
      <div ref={birdsRef} className="fixed inset-0 z-[-2] pointer-events-none" aria-hidden="true">
        {BIRDS.map((b, i) => (
          <div
            key={i}
            className="absolute animate-drift"
            style={{ top: b.top, left: b.left, animationDuration: b.dur, animationDelay: b.delay }}
          >
            <Bird scale={b.scale} />
          </div>
        ))}
      </div>

      {/* Far mountain range */}
      <div ref={farRef} className="world-mountains" aria-hidden="true" style={{ zIndex: -2 }}>
        <svg
          className="pixel-crisp w-full h-[22vh] min-h-[140px]"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <polygon
            points="0,100 0,60 40,30 80,55 120,20 170,50 210,25 260,58 300,35 340,60 400,40 400,100"
            fill="#9AA6C9"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* Near mountain range */}
      <div ref={nearRef} className="world-mountains" aria-hidden="true" style={{ zIndex: -2 }}>
        <svg
          className="pixel-crisp w-full h-[16vh] min-h-[100px]"
          viewBox="0 0 400 70"
          preserveAspectRatio="none"
          fill="none"
        >
          <polygon
            points="0,70 0,45 30,20 70,42 110,15 150,38 190,18 230,44 280,22 320,46 360,25 400,42 400,70"
            fill="#6E7BA6"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Drifting pixel clouds */}
      <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden" aria-hidden="true">
        {CLOUD_LAYOUT.map((c, i) => (
          <div
            key={i}
            className="pixel-cloud pixel-crisp"
            style={{
              top: c.top,
              left: c.left,
              width: c.w,
              height: Math.round(c.w * 0.4),
              animationDuration: c.dur,
            }}
          />
        ))}
      </div>

      {/* Fireflies (subtle at all times, most visible once the sky darkens) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none" aria-hidden="true">
        {FIREFLIES.map((f, i) => (
          <span
            key={i}
            className="firefly"
            style={{ top: f.top, left: f.left, animationDelay: f.delay }}
          />
        ))}
      </div>
    </>
  );
}
