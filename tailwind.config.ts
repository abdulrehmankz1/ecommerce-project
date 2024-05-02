import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: 'rgba(30, 40, 50, 1)',
        secondary: 'rgba(0, 0, 0, 0.1)',
        light: 'rgba(0, 0, 0, 0.5)',
        customColor: 'rgba(255, 111, 97, 1)',
      },
      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
