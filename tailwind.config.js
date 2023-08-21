/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {      animation: {
      loading: 'loading 1.5s linear 1'
    },
    keyframes: {
      loading: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      }
    }},
  },
  plugins: [],
}
