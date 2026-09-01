import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B1E14",
        "ink-soft": "#5A4632",
        parchment: "#F3E7C9",
        "parchment-dark": "#E4D3A7",
        wood: "#8B5A2B",
        "wood-dark": "#5E3A1C",
        "wood-light": "#B07C43",
        stone: "#8A8F98",
        "stone-dark": "#5C6068",
        cream: "#FBF3E1",
        coral: "#FF6B6B",
        "coral-dark": "#D14E4E",
        mint: "#5EEAD4",
        "mint-dark": "#2FBFA8",
        gold: "#FFC85C",
        "gold-dark": "#E0A030",
        leaf: "#6ABE72",
        "leaf-dark": "#3E8952",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        popIn: {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.94)" },
          "60%": { opacity: "1", transform: "translateY(-3px) scale(1.02)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.1)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-24deg)" },
          "50%": { transform: "rotate(6deg)" },
          "75%": { transform: "rotate(-16deg)" },
        },
        antennaGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(60px)" },
        },
        twinklePixel: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        firefly: {
          "0%, 100%": { transform: "translate(0, 0)", opacity: "0.4" },
          "25%": { transform: "translate(10px, -14px)", opacity: "1" },
          "50%": { transform: "translate(-6px, -22px)", opacity: "0.6" },
          "75%": { transform: "translate(-14px, -8px)", opacity: "1" },
        },
        sparklePop: {
          "0%": { opacity: "0", transform: "scale(0.4) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.1) rotate(90deg)" },
          "100%": { opacity: "0", transform: "scale(0.6) rotate(180deg)" },
        },
      },
      animation: {
        popIn: "popIn 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2) both",
        bob: "bob 3s ease-in-out infinite",
        blink: "blink 4.5s ease-in-out infinite",
        wave: "wave 0.7s ease-in-out 2",
        antennaGlow: "antennaGlow 2s ease-in-out infinite",
        sway: "sway 4s ease-in-out infinite",
        drift: "drift 40s linear infinite alternate",
        twinklePixel: "twinklePixel 2.4s ease-in-out infinite",
        firefly: "firefly 6s ease-in-out infinite",
        sparklePop: "sparklePop 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
