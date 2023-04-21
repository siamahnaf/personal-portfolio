/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxs: "0px", // Double Extra Small Devices
        xs: "360px", // Extra Small Devices
        sm: "480px", // Small Devices
        msm: "576px", // Medium Small Medium Devices
        lsm: "640px", // Large Small Medium Devices
        smd: "768px", // Small Medium Devices
        md: "992px", // Medium Devices
        lg: "1200px", // Large Devices
        xl: "1370px", // Extra Large Devices
      },
      fontFamily: {
        "sans": ['var(--font-quicksand)'],
        "mono": ['var(--font-rubik)']
      },
      colors: {
        main: "#ff9800",
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
