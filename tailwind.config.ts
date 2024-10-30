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
        background: "#F5F4F0",
        border: "#D9D9D9",
        textPrimary: "#1B1B1B",
        textSecondary: "#333333",
        textTertiary: "#696969",
        textHeading: "#E1624F",
        accentBlue: "#0C51A7",
        accentOrange: "#E95E10",
        accentPink: "#E5245E",
        accentPurple: "#591B98"
      },
    },
  },
  plugins: [],
};
export default config;
