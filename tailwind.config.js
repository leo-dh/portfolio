const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const createPlugin = (newUtilities, variants) => {
  return plugin(({ addUtilities }) => {
    addUtilities(newUtilities, variants);
  });
};

const aspectRatioUtilities = {
  ".aspect-ratio-1": {
    "aspect-ratio": "1/1",
  },
};

const hideScrollbarUtilities = {
  ".hide-scrollbar": {
    "scrollbar-width": "none",
    "-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
};

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
        futura: ["Futura Now Var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        shark: {
          50: "#aeb5c2",
          100: "#8b9587",
          200: "#606b80",
          300: "#464e5d",
          400: "#353B46",
          500: "#2A2E36",
          600: "#262931",
          700: "#202329",
          800: "#191c20",
          900: "#15171a",
        },
        "jungle-green": {
          50: "#f6fcfa",
          100: "#edf9f5",
          200: "#d1f0e6",
          300: "#b5e7d7",
          400: "#7ed5b9",
          500: "#46c39b",
          600: "#3fb08c",
          700: "#359274",
          800: "#2a755d",
          900: "#22604c",
        },
        bittersweet: {
          50: "#fff8f7",
          100: "#fef0ef",
          200: "#fddad7",
          300: "#fcc4bf",
          400: "#f9988e",
          500: "#F76C5E",
          600: "#de6155",
          700: "#b95147",
          800: "#944138",
          900: "#79352e",
        },
      },
      screens: {
        tablet: "600px",
        desktop: "1280px",
        widescreen: "1920px",
      },
      spacing: {
        18: "4.5rem",
        "desktop-nav": "360px",
      },
      strokeWidth: {
        3: "3",
        4: "4",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    createPlugin(aspectRatioUtilities, ["responsive"]),
    createPlugin(hideScrollbarUtilities, ["responsive"]),
    function ({ addBase }) {
      // Chrome not recognizing the different weights if fontWeight is not declared.
      [500, 600, 700, 800, 900].forEach((weight) => {
        addBase([
          {
            "@font-face": {
              fontFamily: "Futura Now Var",
              fontWeight: weight,
              src: 'url("/fonts/FuturaNowVar.woff2") format("woff2")',
            },
          },
        ]);
      });
    },
  ],
};
