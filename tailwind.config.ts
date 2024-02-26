import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        // clipboard
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        // shortly
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%) ",
        // fylo
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        // bookmark
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue2: "hsl(229, 8%, 60%)",
        veryDarkBlue2: "hsl(229, 31%, 21%)",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      letterSpacing: {
        doubleWide: ".2em",
        tripleWide: ".3em",
      },
      backgroundImage: (theme) => ({
        // fylo
        "logo-dark-mode": "url('/../../../../fylo/logo-dark-mode.svg')",
        "logo-light-mode": "url('/../../../../fylo/logo-light-mode.svg')",
        "curvy-dark-mode": "url('/../../../../fylo/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('/../../../../fylo/bg-curvy-light-mode.svg')",
        // bookmark
        dots: "url('/../../../../bookmark/bg-dots.svg')",
      }),
    },
  },
  // fylo
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
