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
      },
      animation: {
        'feedback-correct': 'pop-in 0.3s ease-out forwards',
        'feedback-wrong': 'slide-in 0.3s ease-out forwards',
        'bounce-custom': 'bounce-scale 0.5s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-scale': 'pulse-scale 1s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-out forwards',
        'dot-fill': 'dot-fill 0.25s ease-out forwards',
        'aid-enter': 'aid-enter 350ms ease-out forwards',
        'arc-draw': 'arc-draw 600ms ease-in-out forwards',
      },
      keyframes: {
        'pop-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-6px)' },
          '80%': { transform: 'translateX(6px)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'sparkle': {
          '0%': { transform: 'translateY(0) scale(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
        },
        'dot-fill': {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        'aid-enter': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'arc-draw': {
          '0%': { strokeDashoffset: '100%' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
