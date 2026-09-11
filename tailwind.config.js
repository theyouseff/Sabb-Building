/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        "cream-2": "#EFE9DE",
        ink: "#171512",
        dark: "#0D0D0D",
        "dark-2": "#171717",
        paper: "#FFFFFF",
        accent: "#B8895A",
        "accent-dark": "#8F6A44",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
