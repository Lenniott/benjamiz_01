const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light colors
        "primary-light": "#F8FAFC",
        "secondary-light": "#F8FAFC",
        "ternary-light": "#F1F5F9",

        // Dark colors
        "primary-dark": "#1E293B",
        "secondary-dark": "rgb(30 41 59)",
        "ternary-dark": "#0F172A",

        // Extended v3 color
        gray: colors.neutral,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
