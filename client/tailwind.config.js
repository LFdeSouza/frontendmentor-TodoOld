module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brightBlue: "var(--color-base-brightBlue)",
        checkBackgroundLeft: "#999999",
        checkBackgroundRight: "#919191",
        //light theme
        veryLightGray: "var(--color-veryLightGray)",
        veryLightGrayishBlue: "var(--color-veryLightGrayishBlue)",
        lightGrayishBlue: "var(--color-lightGrayishBlue)",
        darkGrayishBlue: "var(--color-darkGrayishBlue)",
        veryDarkGrayishBlue: "var(--color-veryDarkGrayishBlue)",
        veryDarkDesaturatedBlue: "var(--color-veryDarkDesaturatedBlue)",
      },
    },
  },
  plugins: [],
};
