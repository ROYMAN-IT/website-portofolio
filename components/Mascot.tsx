"use client";

import React, { useEffect, useRef, useState } from "react";

const SPEECH_LINES = [
  "Yo! Selamat datang!",
  "Ini kisah tentang dia...",
  "Lihat jurus-jurusnya!",
  "Karya kerennya di sini!",
  "Terus belajar, gak berhenti!",
  "Perjalanannya seru banget!",
  "Yuk, ngobrol bareng dia!",
];

export default function Mascot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<SVGGElement>(null);
  const rightPupilRef = useRef<SVGGElement>(null);
  // Speech text starts empty so the server-rendered markup and the first
  // client paint match exactly (no hydration mismatch); useEffect fills it
  // in immediately after mount.
  const [speech, setSpeech] = useState("");

  useEffect(() => {
    setSpeech(SPEECH_LINES[0]);

    let ticking = false;
    const updateEyes = (clientX: number, clientY: number) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.35;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.max(Math.hypot(dx, dy), 1);
      const clamp = 0.6;
      const ox = (dx / dist) * clamp;
      const oy = (dy / dist) * clamp;
      const t = `translate(${ox.toFixed(2)},${oy.toFixed(2)})`;
      leftPupilRef.current?.setAttribute("transform", t);
      rightPupilRef.current?.setAttribute("transform", t);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        const { clientX, clientY } = e;
        requestAnimationFrame(() => {
          updateEyes(clientX, clientY);
          ticking = false;
        });
        ticking = true;
      }
    };

    let scrollTicking = false;
    const updateSpeech = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      const idx = Math.min(Math.floor(progress * SPEECH_LINES.length), SPEECH_LINES.length - 1);
      setSpeech(SPEECH_LINES[idx]);
      scrollTicking = false;
    };
    const onScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateSpeech);
        scrollTicking = true;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-none select-none"
    >
      {speech && (
        <div className="speech-bubble transition-opacity duration-300 pointer-events-none !text-[8px] sm:!text-[9px] !max-w-[130px] sm:!max-w-[160px] !px-2.5 !py-2 sm:!px-3 sm:!py-2">
          {speech}
        </div>
      )}

      <div className="w-16 h-20 sm:w-20 sm:h-24 animate-bob drop-shadow-[3px_4px_0_rgba(0,0,0,0.25)]">
        <svg viewBox="0 0 16 20" className="pixel-crisp w-full h-full" shapeRendering="crispEdges">
          {/* antenna */}
          <rect x="7" y="1" width="2" height="2" fill="#5E3A1C" />
          <circle cx="8" cy="1" r="1.1" fill="#FF6B6B" className="animate-antennaGlow" />

          {/* head (outline + fill) */}
          <rect x="2" y="2" width="12" height="9" fill="#5E3A1C" />
          <rect x="3" y="3" width="10" height="8" fill="#5EEAD4" />

          {/* eyes */}
          <rect x="5" y="6" width="2" height="2" fill="#FFF8EA" className="origin-center animate-blink" />
          <rect x="9" y="6" width="2" height="2" fill="#FFF8EA" className="origin-center animate-blink" />
          <g ref={leftPupilRef}>
            <rect x="5.5" y="6.5" width="1" height="1" fill="#103B34" />
          </g>
          <g ref={rightPupilRef}>
            <rect x="9.5" y="6.5" width="1" height="1" fill="#103B34" />
          </g>

          {/* blush */}
          <rect x="4" y="8" width="1" height="1" fill="#FF9E9E" opacity="0.8" />
          <rect x="11" y="8" width="1" height="1" fill="#FF9E9E" opacity="0.8" />

          {/* mouth */}
          <rect x="7" y="9" width="2" height="1" fill="#103B34" />

          {/* body (outline + fill) */}
          <rect x="3" y="11" width="10" height="8" fill="#5E3A1C" />
          <rect x="4" y="12" width="8" height="6" fill="#FFF8EA" />

          {/* chest screen */}
          <rect x="6" y="13" width="4" height="3" fill="#FF6B6B" />
          <rect x="7.5" y="14" width="1" height="1" fill="#FFF8EA" />

          {/* left arm (static) */}
          <rect x="1" y="12" width="2" height="3" fill="#5E3A1C" />
          <rect x="1.4" y="12.4" width="1.2" height="2.2" fill="#5EEAD4" />

          {/* right arm (waves on load) */}
          <g className="animate-wave" style={{ transformOrigin: "13px 12px" }}>
            <rect x="13" y="10" width="2" height="3" fill="#5E3A1C" />
            <rect x="13.4" y="10.4" width="1.2" height="2.2" fill="#5EEAD4" />
          </g>

          {/* floating shadow */}
          <ellipse cx="8" cy="19.3" rx="4.5" ry="0.6" fill="#000000" opacity="0.18" />
        </svg>
      </div>
    </div>
  );
}
