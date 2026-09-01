"use client";

import React, { useEffect, useState } from "react";

export default function SoundNotice() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onPlaying = () => setDismissed(true);
    window.addEventListener("pran-audio-playing", onPlaying);
    return () => window.removeEventListener("pran-audio-playing", onPlaying);
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] bg-gold border-b-[3px] border-ink">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2.5 text-center">
        <i className="ti ti-volume text-ink text-[15px] shrink-0" />
        <span className="font-pixel text-[8.5px] sm:text-[9px] text-ink leading-relaxed">
          Tap layar buat menghasilkan suara merdu. haha
        </span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Tutup notifikasi"
          className="ml-1 w-5 h-5 shrink-0 flex items-center justify-center bg-ink text-gold"
        >
          <i className="ti ti-x text-[11px]" />
        </button>
      </div>
    </div>
  );
}
