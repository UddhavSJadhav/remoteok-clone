import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "2lg": "1100px",
        "1.5lg": "1425px",
      },
      fontFamily: {
        pacifico: "var(--font-pacifico)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/valley-bg.jpg')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "color-primary": "#072078",
        "color-primary-hover": "#03175d",
        "color-secondary": "#030f3a",
        "color-secondary-hover": "#020a28",
        "color-accent": "#1847f2",
        "color-accent-hover": "#1741db",
        "color-bg": "#222222",
        "color-bg-hover": "#333333",
      },
      minHeight: {
        "with-nav": "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
export default config;
