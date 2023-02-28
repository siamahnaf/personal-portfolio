/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "sans": ['var(--font-quicksand)'],
        "mono": ['var(--font-rubik)']
      },
      colors: {
        main: "#FF7844",
        dark: "#1B1F3A"
      },
      fontSize: {
        md: "15px"
      }
    }
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
