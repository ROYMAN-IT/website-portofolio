import RevealOnScroll from "./RevealOnScroll";
import QuestTag from "./QuestTag";
import { Cat, WindLeaves } from "./Scenery";

const PROFILE_FIELDS = [
  { label: "Nama", value: "Pranaya Widi Ramadhan" },
  { label: "Panggilan", value: "Pran" },
  { label: "Sekolah", value: "SMK Wirawasta Cimahi" },
  { label: "Jurusan", value: "Rekayasa Perangkat Lunak (RPL)" },
  { label: "Kelas", value: "12 (XII)" },
  { label: "Fokus", value: "Web · Mobile · Robotics · AI · Game Dev" },
];

const EDU_HISTORY = [
  { level: "SD", name: "SD Negeri Rahayu 4" },
  { level: "SMP", name: "SMP Mathla'ul Anwar" },
  { level: "SMK", name: "SMK Wirawasta Cimahi — RPL" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <WindLeaves />
      <Cat className="hidden md:block absolute bottom-6 right-[8%] opacity-80" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <RevealOnScroll>
          <div className="mb-4">
            <QuestTag index="02" label="About" />
          </div>
          <h2 className="font-pixel text-[18px] md:text-[22px] text-ink mb-8">
            Tentang Saya
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <RevealOnScroll delayMs={80}>
            <div className="mat-parchment p-6 md:p-7 space-y-4 text-ink-soft text-[14.5px] md:text-[15.5px] leading-relaxed">
              <p>
                Saya <span className="text-ink font-semibold">Pranaya Widi Ramadhan</span>,
                biasa dipanggil <span className="text-coral-dark font-semibold">Pran</span>, siswa
                kelas 12 jurusan Rekayasa Perangkat Lunak di{" "}
                <span className="text-ink font-semibold">SMK Wirawasta Cimahi</span>. Perjalanan
                pendidikan saya dimulai dari SD Negeri Rahayu 4, dilanjutkan ke
                SMP Mathla&apos;ul Anwar, hingga sekarang menekuni dunia
                pengembangan perangkat lunak di bangku SMK.
              </p>
              <p>
                Saat ini saya sedang fokus mendalami lima bidang sekaligus:{" "}
                <span className="text-ink font-semibold">robotika</span>,{" "}
                <span className="text-ink font-semibold">pengembangan web</span>,{" "}
                <span className="text-ink font-semibold">pengembangan aplikasi mobile</span>,{" "}
                <span className="text-ink font-semibold">kecerdasan buatan (AI)</span>, dan{" "}
                <span className="text-ink font-semibold">pengembangan game</span> menggunakan
                Godot Engine. Kombinasi ini membuat saya terbiasa berpindah dari menulis kode
                antarmuka, merancang API, menyolder rangkaian sensor, hingga
                merancang mekanik game sederhana dalam satu waktu.
              </p>
              <p>
                Tujuan saya adalah membangun{" "}
                <span className="text-ink font-semibold">website dan aplikasi mobile yang dinamis, rapi, dan elegan</span>,
                memadukannya dengan{" "}
                <span className="text-ink font-semibold">robotika &amp; elektronika yang smart</span>{" "}
                untuk kebutuhan zaman sekarang, sekaligus terus mengembangkan
                pemahaman saya soal{" "}
                <span className="text-ink font-semibold">artificial intelligence dan machine learning</span>{" "}
                yang sedang berkembang pesat.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={160}>
            <div className="mat-stone p-5 md:p-6">
              <div className="font-pixel text-[10px] text-cream mb-4 pb-3 border-b-2 border-white/20">
                CHARACTER STATUS
              </div>
              <div className="space-y-3">
                {PROFILE_FIELDS.map((field) => (
                  <div key={field.label} className="flex items-baseline justify-between gap-3 text-[12.5px]">
                    <span className="font-pixel text-[8px] text-cream/70 shrink-0">
                      {field.label.toUpperCase()}
                    </span>
                    <span className="text-cream font-medium text-right">{field.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t-2 border-white/20">
                <div className="font-pixel text-[8px] text-cream/70 mb-3">
                  QUEST LOG · RIWAYAT PENDIDIKAN
                </div>
                <ul className="space-y-2">
                  {EDU_HISTORY.map((item) => (
                    <li key={item.level} className="flex items-center gap-2.5 text-[12.5px]">
                      <span className="font-pixel text-[7.5px] px-2 py-1 bg-gold text-ink-soft shrink-0">
                        {item.level}
                      </span>
                      <span className="text-cream">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
