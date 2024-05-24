/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(101,63,254,1) 51%, rgba(39,196,255,1) 100%)",
      },
    },
    colors: {
      grayBG: "#19182f",
      bluelight: "#27c4ff",
      greenwater: "#27c3ff",
      violet: "#653ffe",
      green: "#25b461",
      redlight: "#eb4747",
      whiteText: "#e4eeff",
      blackText: "#1b1b35",
      lime: "#F3BA2F",
    },
  },
  plugins: [],
};
