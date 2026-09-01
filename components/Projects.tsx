import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import QuestTag from "./QuestTag";

interface Project {
  id: string;
  title: string;
  status: string;
  image: string;
  description: string;
  tech: string[];
  /** photo = full-bleed cover crop is fine; screenshot = show the whole
   *  image untouched inside a frame so no UI gets cropped. */
  kind: "photo" | "screenshot";
  /** Marks a project that isn't finished yet — shows a dark overlay and a
   *  "PROCESS" badge in the top-right corner of its frame. */
  inProgress?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "sonar",
    title: "SONAR — Sensor Monitoring System",
    status: "Web & Desktop App",
    image: "/images/project-sonar.jpeg",
    description:
      "Sistem monitoring sensor ultrasonik menggunakan Arduino Uno yang terhubung ke backend dan website untuk menampilkan data kapasitas ruangan secara real-time, lengkap dengan aplikasi desktop pendampingnya.",
    tech: ["C++", "Next.js", "Node.js", "MySQL"],
    kind: "photo",
  },
  {
    id: "gitarku",
    title: "GitarKu — Guitar Shop E-commerce",
    status: "Full-stack Web App",
    image: "/images/project-gitarku.png",
    description:
      "Website e-commerce yang dinamis dan elegan untuk toko gitar, dibangun dengan alur kerja CRUD agar pemilik toko lebih mudah mengelola produk dan berinteraksi dengan pelanggan maupun pengunjung.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    kind: "screenshot",
  },
  {
    id: "qa-testing",
    title: "QA / Software Testing",
    status: "Quality Assurance",
    image: "/images/project-qa.png",
    description:
      "Pengalaman sebagai QA/tester: menyusun test case dan test scenario, mencatat bug report yang rapi, serta menjalankan functional testing, API testing, hingga SQL testing untuk memastikan aplikasi berjalan sesuai ekspektasi.",
    tech: [
      "Test Case",
      "Test Scenario",
      "Bug Report",
      "Functional Testing",
      "API Testing",
      "SQL Testing",
    ],
    kind: "screenshot",
  },
  {
    id: "dodge-the-creeps",
    title: "Dodge the Creeps",
    status: "Godot Game",
    image: "/images/project-dodge-creeps.png",
    description:
      "Game 2D sederhana yang dibangun dengan Godot Engine — pemain menghindari musuh yang terus berdatangan sambil skor bertambah seiring waktu bertahan. Masih dalam tahap pengembangan.",
    tech: ["GDScript"],
    kind: "screenshot",
    inProgress: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <RevealOnScroll>
          <div className="mb-4">
            <QuestTag index="04" label="Projects" />
          </div>
          <h2 className="font-pixel text-[18px] md:text-[22px] text-ink mb-3">
            Quest Log
          </h2>
          <p className="text-ink-soft text-[14.5px] max-w-xl mb-10 bg-cream/60 inline-block px-3 py-1.5">
            Beberapa hal yang pernah saya bangun — dari sistem sensor
            berbasis Arduino sampai website toko gitar, pengujian perangkat
            lunak, dan game 2D.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <RevealOnScroll key={project.id} delayMs={i * 100} className="h-full">
              <article className="h-full flex flex-col mat-parchment overflow-hidden">
                {project.kind === "photo" ? (
                  <div className="relative w-full aspect-[16/11] overflow-hidden border-b-4 border-wood-dark shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 font-pixel text-[7.5px] px-2 py-1.5 bg-ink text-cream">
                      {project.status}
                    </span>
                  </div>
                ) : (
                  <div className="relative shrink-0 border-b-4 border-wood-dark bg-stone">
                    <div className="flex items-center gap-1.5 px-3 py-2">
                      <span className="w-2 h-2 bg-cream/50" />
                      <span className="w-2 h-2 bg-cream/50" />
                      <span className="w-2 h-2 bg-cream/50" />
                      <span className="ml-auto font-pixel text-[7.5px] px-2 py-1 bg-ink text-cream">
                        {project.status}
                      </span>
                    </div>
                    <div className="relative w-full aspect-[16/10] p-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-contain border-2 border-ink/20"
                      />
                    </div>

                    {project.inProgress && (
                      <>
                        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
                        <span className="absolute top-2 right-2 font-pixel text-[7.5px] px-2.5 py-1.5 bg-coral text-cream border-2 border-ink flex items-center gap-1.5">
                          <i className="ti ti-hammer text-[10px]" />
                          PROCESS
                        </span>
                      </>
                    )}
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-pixel text-[11px] text-ink mb-3 leading-relaxed">
                    {project.title}
                  </h3>
                  <p className="text-ink-soft text-[13.5px] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10.5px] font-semibold px-2 py-1 bg-wood-light/25 text-wood-dark border border-wood"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
