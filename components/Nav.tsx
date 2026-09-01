"use client";

import React, { useState } from "react";
import { VineBorder, Spider } from "./Scenery";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mat-wood relative">
      <Spider className="top-full left-[8%]" />
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-pixel text-[13px] text-cream flex items-center gap-2">
          <span className="w-3 h-3 bg-gold border-2 border-wood-dark" />
          Pran
        </a>

        <div className="hidden lg:flex items-center gap-1 font-pixel text-[9px]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-parchment hover:text-gold hover:bg-black/15 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] bg-wood-dark border-2 border-cream/40"
        >
          <span
            className={`block w-5 h-[3px] bg-cream transition-transform duration-200 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-[3px] bg-cream transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-[3px] bg-cream transition-transform duration-200 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden mat-wood border-t-2 border-wood-dark">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col font-pixel text-[10px]">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-cream/15 last:border-none text-parchment hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <VineBorder />
    </nav>
  );
}
