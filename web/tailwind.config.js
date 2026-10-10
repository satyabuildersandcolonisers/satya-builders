/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#b48a58',
          'gold-light': '#dfc5a4',
          'gold-dark': '#8c6738',
          cyan: '#0891b2',
          dark: '#14120e',
          surface: '#ffffff',
          card: '#ffffff',
          border: '#eadfd0',
          bg: '#faf7f2',
          ivory: '#fdfbf7',
          champagne: '#f5efe4'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
