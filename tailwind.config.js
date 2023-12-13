/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./src/**/*.js",
    "./src/**/*.mjs",
    "./src/js/**/*.mjs",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "home-bg": "url('../../img/brush-bg.webp')",
        // "sell-bg": "url('../../img/blue-bg.webp')",

        "home-bg": "url('../img/brush-bg.webp')",
        "sell-bg": "url('../img/blue-bg.webp')",
      },
      fontFamily: {
        sans: ['"Noto Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
