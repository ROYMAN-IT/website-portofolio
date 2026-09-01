import RevealOnScroll from "./RevealOnScroll";
import QuestTag from "./QuestTag";
import { RiceField, Farmer } from "./Scenery";

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 pb-32 md:pb-40 overflow-hidden">
      <RiceField />
      <Farmer className="absolute bottom-10 sm:bottom-14 right-[10%] sm:right-[14%]" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <RevealOnScroll>
          <div className="mb-4">
            <QuestTag index="05" label="Education" />
          </div>
          <h2 className="font-pixel text-[18px] md:text-[22px] text-ink mb-3">
            Achievement Unlocked
          </h2>
          <p className="text-ink-soft text-[14.5px] max-w-xl mb-10 bg-cream/60 inline-block px-3 py-1.5">
            Pelatihan formal di luar sekolah yang pernah saya ikuti untuk
            memperdalam pemahaman soal AI dan data.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="mat-parchment p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-16 h-16 shrink-0 bg-gold border-2 border-ink flex items-center justify-center">
              <i className="ti ti-trophy-filled text-wood-dark text-2xl" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <h3 className="font-pixel text-[11px] text-ink leading-relaxed">
                  Dicoding — Generative AI
                </h3>
                <span className="font-pixel text-[7.5px] px-2 py-1 bg-mint text-mint-dark border border-mint-dark">
                  Maret 2026
                </span>
              </div>
              <p className="text-ink-soft text-[13.5px] leading-relaxed">
                Mengikuti pelatihan bertema Generative AI di Dicoding,
                mempelajari berbagai hal seputar pengolahan data dan cara
                kerja machine learning sebagai fondasi untuk mendalami dunia
                AI lebih jauh.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
