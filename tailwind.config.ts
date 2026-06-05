import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        surface: "#111827",
        primary: "#007BFF",
        accent: "#00D9FF",
        purple: "#6C63FF",
        foreground: "#EAF2FF",
        muted: "#4B5563",
        border: "#1E2A3A",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(rgba(0,123,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,255,0.03) 1px, transparent 1px)",
        "glow-blue": "radial-gradient(ellipse at center, rgba(0,123,255,0.15) 0%, transparent 70%)",
        "glow-accent": "radial-gradient(ellipse at center, rgba(0,217,255,0.1) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        glow: {
          "from": { boxShadow: "0 0 10px rgba(0,123,255,0.3)" },
          "to": { boxShadow: "0 0 30px rgba(0,123,255,0.6), 0 0 60px rgba(0,217,255,0.2)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(0,123,255,0.3)",
        "glow-md": "0 0 20px rgba(0,123,255,0.4)",
        "glow-lg": "0 0 40px rgba(0,123,255,0.3), 0 0 80px rgba(0,217,255,0.1)",
        "glow-accent": "0 0 20px rgba(0,217,255,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
