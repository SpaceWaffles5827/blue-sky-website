import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b1a2b",
          700: "#1f3144",
          500: "#4b5f75",
        },
        surface: {
          DEFAULT: "#f6f9ff",
          alt: "#eef3fb",
          bright: "#ffffff",
        },
        accent: {
          DEFAULT: "#2a6cf7",
          strong: "#1d4fbf",
          soft: "rgba(42, 108, 247, 0.16)",
        },
        gold: "#8fc4ff",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "shooting-star": {
          "0%": { transform: "translateX(-30%) translateY(20%)", opacity: "0" },
          "15%": { opacity: "0.9" },
          "40%": { transform: "translateX(110%) translateY(-40%)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        "shooting-star-slow": {
          "0%": { transform: "translateX(-40%) translateY(30%)", opacity: "0" },
          "20%": { opacity: "0.8" },
          "55%": { transform: "translateX(120%) translateY(-50%)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "starfield": {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "320px 260px, -180px 220px" },
        },
        "starfield-slow": {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "-220px 280px, 140px -200px" },
        },
      },
      animation: {
        "shooting-star": "shooting-star 6s ease-in-out infinite",
        "shooting-star-slow": "shooting-star-slow 9s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        starfield: "starfield 18s linear infinite",
        "starfield-slow": "starfield-slow 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
