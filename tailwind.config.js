/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colortext1: '#F2E0C9',
        colortext2: '#A69B8D',
        colortext3: '#D9C2AD',
        colortext4: '#595047',
        colorbg: '#0D0D0D',
      }
    },
  },
  plugins: [],
}

