/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxl: { min: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      slg: { max: "991px" },
      md: { max: "768px" },
      sm: { max: "540px" },
      xsm: { max: "377px" },
    },
    extend: {
      backgroundImage: {
        heroBg: "url('Images/Heros-bg.webp')",
        heromobileBg: "url('Images/mobile.png')",
      },
      fontFamily: {
        popins: "['Poppins', sans-serif]",
        neuro: "Neuropolitical-Regular",
      },
    },
  },
  plugins: [],
};
