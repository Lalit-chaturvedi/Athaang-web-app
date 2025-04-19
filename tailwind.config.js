/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f5',
          100: '#e9efe9',
          200: '#d5e0d5',
          300: '#b3c7b3',
          400: '#8aa58a',
          500: '#698669',
          600: '#516851',
          700: '#425442',
          800: '#384438',
          900: '#303a30',
          950: '#1a201a',
        },
        secondary: {
          50: '#f8f7f4',
          100: '#f0efe8',
          200: '#e2dfd1',
          300: '#d2ccb6',
          400: '#bfb795',
          500: '#ada27c',
          600: '#9c8d68',
          700: '#877757',
          800: '#70624a',
          900: '#5d523f',
          950: '#302a20',
        },
        accent: {
          50: '#f9f6f3',
          100: '#f3ede5',
          200: '#e6d9ca',
          300: '#d6c0a6',
          400: '#c1a17c',
          500: '#b48b60',
          600: '#a67a50',
          700: '#8a6343',
          800: '#71513a',
          900: '#5d4331',
          950: '#302219',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};