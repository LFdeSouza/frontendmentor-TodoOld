module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { josefin: "josefin sans, sans-serif" },
      colors: {
        brightBlue: "var(--color-base-brightBlue)",
        checkBackgroundLeft: "#999999",
        checkBackgroundRight: "#919191",
        veryLightGray: "var(--color-veryLightGray)",
        veryLightGrayishBlue: "var(--color-veryLightGrayishBlue)",
        lightGrayishBlue: "var(--color-lightGrayishBlue)",
        darkGrayishBlue: "var(--color-darkGrayishBlue)",
        veryDarkGrayishBlue: "var(--color-veryDarkGrayishBlue)",
        veryDarkDesaturatedBlue: "var(--color-veryDarkDesaturatedBlue)",
      },
      backgroundImage: {
        "mobile-light": "url('./assets/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('./assets/images/bg-mobile-dark.jpg')",
        "desktop-light": "url('./assets/images/bg-desktop-light.jpg')",
        "desktop-dark": "url('./assets/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
