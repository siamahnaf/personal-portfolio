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
        main: "#fb0846",
        dark: "#040836"
      },
      fontSize: {
        md: "15px"
      }
    }
  },
  plugins: [require("daisyui")],
}
