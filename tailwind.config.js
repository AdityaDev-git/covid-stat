/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            "dark-purple":"rgba(19, 23, 54, 1)",
            "light-purple":"rgba(48, 54, 101, 1)",
            "neo-orange":"rgba(255, 81, 81, 1)"
        }
    },
  },
  plugins: [],
}