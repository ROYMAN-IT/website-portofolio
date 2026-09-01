import RevealOnScroll from "./RevealOnScroll";
import QuestTag from "./QuestTag";
import { WindLeaves } from "./Scenery";

interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    icon: "ti-code",
    items: [
      "React",
      "Next.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "C++",
      "Python",
      "Dart",
      "PHP",
      "REST API",
    ],
  },
  {
    title: "Databases",
    icon: "ti-database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Game / Misc",
    icon: "ti-device-gamepad-2",
    items: ["Godot Engine"],
  },
];

const TOOLS = [
  { name: "GitHub", icon: "ti-brand-github" },
  { name: "Git", icon: "ti-git-branch" },
  { name: "VS Code", icon: "ti-code" },
  { name: "Postman", icon: "ti-api" },
  { name: "Arduino Uno", icon: "ti-cpu" },
  { name: "Godot Engine", icon: "ti-device-gamepad-2" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <WindLeaves />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <RevealOnScroll>
          <div className="mb-4">
            <QuestTag index="03" label="Skills" />
          </div>
          <h2 className="font-pixel text-[18px] md:text-[22px] text-ink mb-3">
            Skill Tree
          </h2>
          <p className="text-ink-soft text-[14.5px] max-w-xl mb-10 bg-cream/60 inline-block px-3 py-1.5">
            Kumpulan bahasa, framework, dan tools yang saya pakai
            sehari-hari untuk membangun web, mobile, hingga sistem robotika.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <RevealOnScroll key={group.title} delayMs={gi * 100} className="h-full">
              <div className="h-full mat-parchment p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 bg-wood-dark border-2 border-ink flex items-center justify-center shrink-0">
                    <i className={`ti ${group.icon} text-cream text-[15px]`} />
                  </div>
                  <div className="font-pixel text-[9px] text-ink leading-relaxed">
                    {group.title}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11.5px] font-medium px-2.5 py-1.5 bg-cream border-2 border-wood text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayMs={200}>
          <div className="mt-5 mat-stone p-5">
            <div className="font-pixel text-[9px] text-cream mb-4">TOOLS</div>
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 px-3.5 py-2.5 bg-white/10 border-2 border-white/25 text-cream"
                >
                  <i className={`ti ${tool.icon} text-gold text-base`} />
                  <span className="text-[12.5px] font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
