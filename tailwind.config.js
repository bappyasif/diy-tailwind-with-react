/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  // purge: [],
  // darkMode: false,
  // it will look for any parent elements for a dark class and when its present its children will get dark variant
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        // "primary": "#ff4800",
        "primary": "#202225",
        "secondary": "#5865f2",
        "custom-clr": colors.trueGray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        "blue": {
          450: "#5f99f7"
        }
      }
    },
  },
  plugins: [],
}
