/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], // Add more paths if needed
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: colors.black,
        secondary: colors.gray[500], // or any other shade like gray[700]
      },
    },
  },
  plugins: [],
};