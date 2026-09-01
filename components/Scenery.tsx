export function Cat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={`pixel-crisp ${className}`} width="48" height="32">
      <ellipse cx="10" cy="12" rx="7" ry="4" fill="#3B2A1E" />
      <circle cx="17" cy="7" r="4" fill="#3B2A1E" />
      <polygon points="14,4 15.5,1 17,4" fill="#3B2A1E" />
      <polygon points="18,4 19.5,1 21,4" fill="#3B2A1E" />
      <circle cx="18.3" cy="6.7" r="0.6" fill="#FFC85C" />
      <path
        d="M3 12 Q -2 8 1 3"
        stroke="#3B2A1E"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        className="animate-sway"
        style={{ transformOrigin: "3px 12px" }}
      />
    </svg>
  );
}

export function Spider({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute ${className} animate-sway`} style={{ transformOrigin: "top center" }}>
      <div className="w-px h-10 bg-ink/40 mx-auto" />
      <svg viewBox="0 0 14 10" width="14" height="10" className="pixel-crisp -mt-0.5">
        <line x1="7" y1="5" x2="1" y2="1" stroke="#2B1E14" strokeWidth="0.8" />
        <line x1="7" y1="5" x2="1" y2="5" stroke="#2B1E14" strokeWidth="0.8" />
        <line x1="7" y1="5" x2="1" y2="9" stroke="#2B1E14" strokeWidth="0.8" />
        <line x1="7" y1="5" x2="13" y2="1" stroke="#2B1E14" strokeWidth="0.8" />
        <line x1="7" y1="5" x2="13" y2="5" stroke="#2B1E14" strokeWidth="0.8" />
        <line x1="7" y1="5" x2="13" y2="9" stroke="#2B1E14" strokeWidth="0.8" />
        <circle cx="7" cy="5" r="2.4" fill="#2B1E14" />
      </svg>
    </div>
  );
}

export function ElectricPole({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 60" className={`pixel-crisp ${className}`} width="40" height="60">
      <rect x="18" y="6" width="4" height="52" fill="#4A3A2C" />
      <rect x="6" y="12" width="28" height="3" fill="#4A3A2C" />
      <path d="M0 16 Q 20 26 40 16" stroke="#2B1E14" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M0 20 Q 20 30 40 20" stroke="#2B1E14" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

export function Farmer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 28" className={`pixel-crisp ${className}`} width="32" height="56">
      <polygon points="8,0 15,7 1,7" fill="#E4D3A7" />
      <rect x="3" y="7" width="10" height="2" fill="#5E3A1C" />
      <rect x="5" y="9" width="6" height="8" fill="#6ABE72" />
      <rect x="3.5" y="9" width="2" height="7" fill="#F3E7C9" />
      <rect x="10.5" y="9" width="2" height="7" fill="#F3E7C9" />
      <circle cx="8" cy="6" r="2.2" fill="#F3C7A0" />
      <rect x="4.5" y="17" width="3" height="8" fill="#3E8952" />
      <rect x="8.5" y="17" width="3" height="8" fill="#3E8952" />
    </svg>
  );
}

export function RiceField({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute left-0 right-0 bottom-0 h-12 sm:h-16 ${className}`} aria-hidden="true">
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(180deg, #6ABE72 0%, #3E8952 100%)",
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 8px)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-2 bg-leaf/60" />
    </div>
  );
}

export function VillageHouse({ className = "", warm = false }: { className?: string; warm?: boolean }) {
  return (
    <svg viewBox="0 0 30 24" className={`pixel-crisp ${className}`} width="60" height="48">
      <polygon points="15,0 30,10 0,10" fill="#5E3A1C" />
      <rect x="3" y="10" width="24" height="14" fill="#B07C43" />
      <rect x="12" y="16" width="6" height="8" fill="#3B2A1E" />
      <rect x="4" y="13" width="5" height="5" fill={warm ? "#FFC85C" : "#2B1E14"} opacity={warm ? 1 : 0.6} />
      <rect x="21" y="13" width="5" height="5" fill={warm ? "#FFC85C" : "#2B1E14"} opacity={warm ? 1 : 0.6} />
    </svg>
  );
}

export function BeachTent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 28" className={`pixel-crisp ${className}`} width="80" height="56">
      <polygon points="20,2 36,26 4,26" fill="#D14E4E" />
      <polygon points="20,2 28,26 20,26" fill="#FF6B6B" />
      <rect x="18" y="24" width="4" height="4" fill="#2B1E14" />
      <rect x="19" y="0" width="1.5" height="4" fill="#5E3A1C" />
      <polygon points="20.5,0 24,1.5 20.5,3" fill="#F3E7C9" />
    </svg>
  );
}

export function Beach({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute left-0 right-0 bottom-0 h-10 sm:h-14 ${className}`} aria-hidden="true">
      <div className="w-full h-full bg-[#EFD9A8]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-[#6BB6C9]/70" />
    </div>
  );
}

const LEAF_COUNT = 26;

export function VineBorder() {
  return (
    <div className="absolute left-0 right-0 bottom-0 h-3 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="flex items-end h-full">
        {Array.from({ length: LEAF_COUNT }).map((_, i) => (
          <span
            key={i}
            className="inline-block bg-leaf-dark animate-sway shrink-0"
            style={{
              width: 10,
              height: 10,
              marginLeft: i === 0 ? 0 : -3,
              borderRadius: i % 2 === 0 ? "0 100% 0 100%" : "100% 0 100% 0",
              transformOrigin: "bottom center",
              animationDelay: `${(i % 5) * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const WIND_LEAVES = [
  { top: "10%", size: 6, dur: "9s", delay: "0s" },
  { top: "35%", size: 5, dur: "11s", delay: "2s" },
  { top: "60%", size: 7, dur: "8s", delay: "4s" },
  { top: "80%", size: 5, dur: "10s", delay: "1s" },
];

export function WindLeaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {WIND_LEAVES.map((l, i) => (
        <span
          key={i}
          className="absolute bg-leaf animate-drift"
          style={{
            top: l.top,
            left: "-5%",
            width: l.size,
            height: l.size,
            borderRadius: "0 100% 0 100%",
            opacity: 0.55,
            animationDuration: l.dur,
            animationDelay: l.delay,
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
}
