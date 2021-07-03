const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
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
      screen: {
        tablet: "600px",
        desktop: "1280px",
        widescreen: "1920px",
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
  plugins: [require("@tailwindcss/aspect-ratio")],
};
