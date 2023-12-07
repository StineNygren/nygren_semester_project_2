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
        "home-bg": "url('../../img/brush-bg.webp')",
        "sell-bg": "url('../../img/blue-bg.webp')",
        // "home-bg": "url('../img/brush-bg.png')",
        // "sell-bg": "url('../img/big-bg.png')",
        //"sell-bg": "url('./img/big-bg.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
