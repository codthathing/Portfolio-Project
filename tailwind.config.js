/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        dark: {
          semi: "#171717"
        },
        grey: {
          light: "#B7B7B7",
          semilight: "#3C3D37",
          dark: "#2B2B2B",
        },
        primary: "#1D4ED8",
      },
      fontFamily: {
        Roboto: ['"Roboto"', 'sans-serif'],
        Yantramanav: ['"Yantramanav"', 'sans-serif'],
      },   
      backdropBlur: {
        xs: "2px",
      },
      width: {
        "[65%]": "65%",
      },
      fontSize: {
        "[8px]": "8px",
      },
    },
  },
  plugins: [],
};