/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.liquid",
    "./assets/*.liquid",
    "./config/*.liquid",
    "./layout/*.liquid",
    "./locales/*.liquid",
    "./sections/*/liquid",
    "./src/*.liquid",
    "./templates/*.liquid"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
