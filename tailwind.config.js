
import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./index.html", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
],
}

