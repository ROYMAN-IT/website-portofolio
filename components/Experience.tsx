import RevealOnScroll from "./RevealOnScroll";
import QuestTag from "./QuestTag";
import { VillageHouse, ElectricPole } from "./Scenery";

const TIMELINE = [
  {
    year: "2026",
    title: "Web Development",
    icon: "ti-world",
    description:
      "Membangun aplikasi maupun website menggunakan Next.js, Node.js, dan PHP, termasuk menerapkan Progressive Web App (PWA) agar pengalaman penggunanya terasa seperti aplikasi native.",
  },
  {
    year: "2026",
    title: "Database & SQL",
    icon: "ti-database",
    description:
      "Mempelajari SQL, PostgreSQL, perancangan database (database design), hingga analisis data (data analysis) untuk mendukung sistem yang saya bangun.",
  },
  {
    year: "2026",
    title: "IoT & Robotika",
    icon: "ti-cpu",
    description:
      "Mengembangkan sistem monitoring menggunakan Arduino Uno dan sensor, termasuk membuat sistem parkir otomatis berbasis sensor jarak.",
  },
  {
    year: "2026",
    title: "AI & Machine Learning",
    icon: "ti-brain",
    description:
      "Mendalami dasar-dasar kecerdasan buatan dan machine learning — mulai dari cara kerja model, pengolahan data, hingga eksperimen kecil-kecilan menerapkan konsep AI ke dalam proyek pribadi.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 pb-28 md:pb-32 overflow-hidden">
      <div className="hidden md:flex absolute bottom-2 right-[4%] items-end gap-1 opacity-70" aria-hidden="true">
        <VillageHouse warm />
        <ElectricPole className="mb-1" />
        <VillageHouse />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <RevealOnScroll>
          <div className="mb-4">
            <QuestTag index="06" label="Experience" />
          </div>
          <h2 className="font-pixel text-[18px] md:text-[22px] text-ink mb-3">
            Journey Map
          </h2>
          <p className="text-ink-soft text-[14.5px] max-w-xl mb-10 bg-cream/60 inline-block px-3 py-1.5">
            Hal-hal yang sedang saya jalani dan pelajari sepanjang tahun ini.
          </p>
        </RevealOnScroll>

        <div className="relative">
          <div
            className="absolute left-[27px] top-2 bottom-2 w-1 bg-wood hidden sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, #8B5A2B 0, #8B5A2B 8px, #5E3A1C 8px, #5E3A1C 12px)",
            }}
          />

          <div className="space-y-5">
            {TIMELINE.map((item, i) => (
              <RevealOnScroll key={item.title} delayMs={i * 120}>
                <div className="relative flex gap-5">
                  <div className="hidden sm:flex w-14 h-14 shrink-0 bg-leaf border-2 border-ink items-center justify-center z-10">
                    <i className={`ti ${item.icon} text-cream text-xl`} />
                  </div>

                  <div className="flex-1 mat-parchment p-5">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="font-pixel text-[7.5px] px-2 py-1 bg-wood-dark text-cream">
                        {item.year}
                      </span>
                      <h3 className="font-pixel text-[10.5px] text-ink leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-ink-soft text-[13.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
