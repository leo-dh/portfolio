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
const myColors = {
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
  malibu: {
    50: "#f8fcff",
    100: "#f1f9ff",
    200: "#dbf1ff",
    300: "#c6e8ff",
    400: "#9bd6ff",
    500: "#70c5ff",
    600: "#65b1e6",
    700: "#5494bf",
    800: "#437699",
    900: "#37617d",
  },
  tradewind: {
    50: "#f5fbfb",
    100: "#ebf7f6",
    200: "#ceebea",
    300: "#b0dfdd",
    400: "#75c7c3",
    500: "#3aafa9",
    600: "#349e98",
    700: "#2c837f",
    800: "#236965",
    900: "#1c5653",
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
        ...myColors,
        primary: myColors.tradewind,
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
