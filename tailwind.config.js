/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "green-dark": "#20270C",
        "green-normal": "#718F2D",
        "green-semilight": "#AAD60B",
        "green-light": "#C7FF00",
        "grey-500": "#6D7079",
        "grey-200": "#B6B8BC",
        "grey-50": "#F3F3F3",
      },
      boxShadow: {
        "3xl": "0 15px 45px rgba(113, 143, 45, 0.15)",
        "4xl": "0 15px 45px rgba(170, 214, 11, 0.3)",
      },
      backgroundImage: {
        grid: "url('assets/images/gridBg.png')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
