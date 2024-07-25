/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      keyframes: {
        pingpong: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(50%)' }
        },
        spacing: {
          '0%': { 'letter-spacing': '0' },
          '100%': { 'letter-spacing': '5rem' }
        }
      },
      animation: {
        pingpong: 'pingpong 1s ease-in-out infinite alternate',
        spacing: 'spacing 1s ease-in-out forwards'
      }
    }
  },
  plugins: []
}
