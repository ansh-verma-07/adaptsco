import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        adapts: {
          lime: "var(--accent)",
          ink: "var(--ink)",
          panel: "var(--panel)",
          muted: "var(--muted)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 32px color-mix(in srgb, var(--accent) 34%, transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
