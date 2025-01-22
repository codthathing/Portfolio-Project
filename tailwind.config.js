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
          semidark: "#1C1C1C",
          textdark: "#858585",
          borderdark: "#242424",
          bgdark: "#27272C",
        },
        primary: "#1D4ED8",
      },
      borderWidth: {
        "[0.5px]": "0.5px",
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
        "[60%]": "60%",
        "[77.5%]": "77.5%",
      },
      fontSize: {
        "[8px]": "8px",
      },
      translate: {
        "[1.5px]": "1.5px",
      },
    },
  },
  plugins: [],
};