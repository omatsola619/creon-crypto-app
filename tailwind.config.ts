import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../assets/image/hero.png')",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        monument: ["var(--font-monument)"],
      },
    },
  },
  plugins: [],
};
export default config;
