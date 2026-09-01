"use client";

import React, { useEffect, useRef } from "react";

export default function AudioController() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.load();

    // Broad set of real user-gesture events, covering iOS Safari, Android
    // Chrome/WebView, and desktop browsers. Redundant events are harmless —
    // play() on an already-playing element is a no-op.
    const GESTURE_EVENTS = [
      "pointerdown",
      "pointerup",
      "touchstart",
      "touchend",
      "mousedown",
      "click",
      "keydown",
    ] as const;

    let stopped = false;

    const removeGestureListeners = () => {
      GESTURE_EVENTS.forEach((ev) => window.removeEventListener(ev, attemptPlay));
    };

    // IMPORTANT: only stop trying once playback is *actually* confirmed —
    // not merely after the first attempt. A single play() call can fail
    // for reasons unrelated to the gesture-lock (media still loading, a
    // transient rejection, etc.), and previously we stopped listening right
    // after that first attempt regardless of outcome — leaving the visitor
    // stuck with permanent silence for the rest of their session. Now we
    // keep retrying on every subsequent gesture until it truly starts.
    const onPlaying = () => {
      stopped = true;
      removeGestureListeners();
      window.dispatchEvent(new Event("pran-audio-playing"));
    };
    audio.addEventListener("playing", onPlaying);

    const attemptPlay = () => {
      if (stopped) return;
      audio.play().catch(() => {
        // Still blocked — leave listeners attached, the next gesture retries.
      });
    };

    // Try immediately on mount too (harmless if blocked).
    attemptPlay();
    GESTURE_EVENTS.forEach((ev) => window.addEventListener(ev, attemptPlay, { passive: true }));

    return () => {
      stopped = true;
      audio.removeEventListener("playing", onPlaying);
      removeGestureListeners();
    };
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto" aria-hidden="true">
      <source src="/audio/bgm.mp3" type="audio/mpeg" />
      <source src="/audio/bgm.m4a" type="audio/mp4" />
    </audio>
  );
}
