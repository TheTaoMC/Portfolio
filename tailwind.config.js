/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /*   colortext1: '#F2E0C9',
          colortext2: '#A69B8D',
          colortext3: '#D9C2AD',
          colortext4: '#595047',
          colorbg: '#0D0D0D', */
        colortext1: '#FF5335',
        colortext2: '#DFE0D4',
        colortext4: '#595047',
        colortext3: '#3E92A3',
        colorbg: '#000',
      }
    },
  },
  plugins: [],
}

