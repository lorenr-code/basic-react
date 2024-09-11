/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0062ac",
        success: "rgb(76, 174, 76)",
        cinza: "rgb(153, 153, 153)",
        rprod: "#f33a12",
        hom: "#f1e30a",
        dev: "#71ed0a",
      },
    },
    fontFamily: {
      primary: "Fascinate Inline",
    },
  },
  plugins: [],
};
