import animationDelay from 'tailwindcss-animation-delay';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem',
      }
    },
  },
  plugins: [
      animationDelay,
  ],
}

