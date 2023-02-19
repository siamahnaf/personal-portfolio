/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "sans": ['var(--font-rubik)']
      },
      fontSize: {
        md: "15px"
      }
    }
  },
  plugins: [require("daisyui")],
}
