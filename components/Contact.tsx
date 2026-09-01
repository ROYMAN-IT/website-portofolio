import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import QuestTag from "./QuestTag";
import { Beach, BeachTent, Spider } from "./Scenery";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 pb-36 md:pb-44 overflow-hidden">
      <Spider className="top-0 right-[10%]" />
      <BeachTent className="hidden md:block absolute bottom-10 left-[6%] opacity-90" />
      <Beach />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <RevealOnScroll>
          <div className="mat-parchment px-6 py-12 md:px-16 md:py-16 text-center">
            <div className="mb-5 flex justify-center">
              <QuestTag index="07" label="Contact" />
            </div>
            <h2 className="font-pixel text-[18px] md:text-[24px] text-ink mb-4 leading-relaxed">
              Mari Terhubung
            </h2>
            <p className="text-ink-soft max-w-md mx-auto mb-9 text-[14.5px] leading-relaxed">
              Terbuka untuk kolaborasi seputar web, mobile, maupun robotika.
              Hubungi saya lewat salah satu kanal di bawah ini.
            </p>

            <div className="flex items-center justify-center gap-5">
              {/* TODO: ganti dengan tautan Instagram asli */}
              <a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                className="relative w-16 h-16 border-[3px] border-ink bg-cream p-2 shadow-[4px_4px_0_#5E3A1C] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Image src="/images/instagram-logo.png" alt="Instagram" fill sizes="64px" className="object-contain p-1" />
              </a>
              {/* TODO: ganti dengan tautan GitHub asli */}
              <a
                href="#"
                aria-label="GitHub"
                title="GitHub"
                className="relative w-16 h-16 border-[3px] border-ink bg-cream p-2 shadow-[4px_4px_0_#5E3A1C] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <Image src="/images/github-logo.png" alt="GitHub" fill sizes="64px" className="object-contain p-1" />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-pixel text-[8px] text-cream/80">
          <span>© 2026 PRANAYA WIDI RAMADHAN</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-mint animate-antennaGlow" />
            AVAILABLE FOR QUESTS
          </span>
        </div>
      </div>
    </section>
  );
}
