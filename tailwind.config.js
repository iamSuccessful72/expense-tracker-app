/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          DEFAULT: '#0F7FFF',
          50: '#C7E1FF',
          100: '#B2D6FF',
          200: '#89C0FF',
          300: '#61ABFF',
          400: '#3895FF',
          500: '#0F7FFF',
          600: '#0064D6',
          700: '#004A9E',
          800: '#002F66',
          900: '#00152E',
          950: '#000812'
        },
        'cod-gray': {
          DEFAULT: '#0F0F0F',
          50: '#6B6B6B',
          100: '#616161',
          200: '#4C4C4C',
          300: '#383838',
          400: '#232323',
          500: '#0F0F0F',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'zircon': {
          DEFAULT: '#F6F8FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F6F8FF',
          600: '#BECCFF',
          700: '#86A1FF',
          800: '#4E75FF',
          900: '#1649FF',
          950: '#0037F9'
        },
      },
      fontFamily: {
        "Lato": "'Lato', sans-serif",
        "Montserrat": "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [],
}

