/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'BackGroundApp': 'rgb(248, 234, 221)',
        'AppOrange': 'rgb(234, 118, 93)',
        'AlmostBlack': 'rgb(4, 4, 2)',
        'GraficsBlue': 'rgb(117, 181, 191)',
        'LineGray': 'rgb(218, 217, 215)',
        
      }
    },
  },
  plugins: [],
}

