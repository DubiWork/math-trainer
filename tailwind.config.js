/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sonic: {
          blue: '#0066cc',
          gold: '#ffd700',
          red: '#ff0000',
        }
      },
      fontFamily: {
        game: ['Comic Sans MS', 'cursive', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
