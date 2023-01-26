/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#F5385D',
      },
      fontWeight: {
        semimedium: 450,
      },
    },
  },
  plugins: [],
}
