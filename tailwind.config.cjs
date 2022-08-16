/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#D21F13",
        secondary: "#F15A24",
      },
      fontFamily: {
        title: "Jost",
        main: "Ubuntu",
      },
    },
  },
  plugins: [],
};
