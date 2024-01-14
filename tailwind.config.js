const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"], 
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
}