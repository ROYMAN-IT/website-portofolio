"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import QuestTag from "./QuestTag";
import { ElectricPole, WindLeaves } from "./Scenery";

const ROLES = [
  "web developer",
  "mobile developer",
  "robotics engineer",
  "AI enthusiast",
  "game developer",
];

const BADGES = [
  { label: "Web Dev", icon: "ti-code" },
  { label: "Mobile Dev", icon: "ti-device-mobile" },
  { label: "Robotics", icon: "ti-cpu" },
  { label: "AI", icon: "ti-brain" },
  { label: "Game Dev", icon: "ti-device-gamepad-2" },
];

export default function Hero() {
  // Typed-role effect. Starts empty on both server and client render
  // (no hydration mismatch), only animates client-side inside useEffect.
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        setTyped(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1500);
          return;
        }
        timeoutId = setTimeout(tick, 70);
      } else {
        charIndex--;
        setTyped(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 30);
      }
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Additive world scenery for this stage */}
      <WindLeaves />
      <ElectricPole className="hidden md:block absolute top-6 right-[6%] opacity-40" />
      <div
        className="absolute bottom-0 left-0 right-0 h-3 flex items-end gap-[2px] opacity-70 pointer-events-none"
        aria-hidden="true"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="w-1 bg-leaf-dark animate-sway shrink-0"
            style={{ height: 6 + (i % 4) * 2, animationDelay: `${(i % 6) * 0.2}s`, transformOrigin: "bottom" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-14 pb-24 md:pt-20 md:pb-32">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-10 items-center">
          {/* Left: intro */}
          <div className="min-w-0">
            <div className="mb-6">
              <QuestTag index="01" label="Home" />
            </div>

            <h1 className="font-pixel text-[22px] sm:text-[28px] md:text-[32px] leading-[1.6] text-ink drop-shadow-[2px_2px_0_rgba(255,255,255,0.5)]">
              Halo, saya
              <br />
              <span className="text-coral-dark">Pranaya Widi</span>
              <br />
              <span className="text-coral-dark">Ramadhan</span>
            </h1>

            <div className="mt-6 min-h-[2rem] font-pixel text-[11px] sm:text-[12px] text-mint-dark bg-ink/85 inline-block px-3 py-2 border-2 border-ink">
              &gt; {typed}
              <span className="inline-block w-[7px] h-[1em] bg-mint-dark align-middle ml-0.5 animate-blink" />
            </div>

            <p className="mt-6 text-ink-soft text-[15px] md:text-base leading-relaxed max-w-lg bg-cream/70 p-3 border-l-4 border-gold">
              Siswa SMK RPL yang membangun website dan aplikasi mobile yang
              rapi dan elegan, sambil merakit sistem robotika &amp; elektronika
              pintar. Selain itu saya juga senang membuat game sederhana, dan
              terus menjelajahi dunia AI &amp; machine learning yang
              berkembang cepat.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="pixel-btn">
                Lihat Project <i className="ti ti-sword" />
              </a>
              <a href="#contact" className="pixel-btn pixel-btn-alt">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: portrait in a decorated wooden sign frame */}
          <div className="w-full max-w-[280px] mx-auto md:mx-0 md:ml-auto">
            <div className="relative mat-parchment p-3">
              {/* corner ornaments so the frame reads less bare */}
              {["top-1 left-1", "top-1 right-1", "bottom-1 left-1", "bottom-1 right-1"].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-2.5 h-2.5 bg-gold border-2 border-wood-dark z-10`}
                />
              ))}
              <div className="relative w-full aspect-[3/4] border-4 border-wood-dark overflow-hidden shadow-[inset_0_0_0_2px_#F3E7C9]">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto Pranaya Widi Ramadhan"
                  fill
                  sizes="(min-width: 768px) 280px, 70vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 shadow-[inset_0_0_24px_rgba(43,30,20,0.25)]" />
              </div>
              <div className="mt-2 text-center font-pixel text-[9px] text-ink-soft">
                PRANAYA · LV.MAX ★
              </div>
            </div>

            {/* Role badges as small "ability cards" */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {BADGES.map((b) => (
                <div key={b.label} className="mat-stone px-3 py-2.5 flex items-center gap-2">
                  <i className={`ti ${b.icon} text-cream text-[15px] shrink-0`} />
                  <span className="font-pixel text-[8px] text-cream leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
