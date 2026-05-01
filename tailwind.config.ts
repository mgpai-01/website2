import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace"],
      },
      colors: {
        moss: {
          50: "#f3f6f0",
          100: "#e3ebdc",
          200: "#c7d7bb",
          300: "#a3bd92",
          400: "#7c9e6a",
          500: "#5e814b",
          600: "#476638",
          700: "#39512e",
          800: "#2f4127",
          900: "#283622",
          950: "#131b10",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        diffusion:
          "0 1px 0 0 rgba(24,24,27,0.04), 0 12px 40px -12px rgba(24,24,27,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
