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
        "gym-dark": "#0F0F10",
        "gym-card": "#1C1C1F",
        "gym-red": "#D62828",
        "gym-red-hover": "#9E1B1B",
        "gym-text": "#F5F5F5",
        "gym-text-secondary": "#8A8F98",
        "gym-detail": "#C7CCD1",
        "gym-accent": "#FF6B00",
      },
    },
  },
  plugins: [],
};

export default config;
