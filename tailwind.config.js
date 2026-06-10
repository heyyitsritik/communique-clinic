/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#1B4D3E',
          800: '#1e5c4a',
          700: '#246b57',
          600: '#2a7a63',
          100: '#e8f4f0',
          50:  '#f2faf7',
        },
        gold: {
          600: '#B8892A',
          500: '#c99830',
          400: '#d9a83a',
          100: '#fdf3dc',
          50:  '#fffbf0',
        },
        cream: {
          DEFAULT: '#FAF6F0',
          dark: '#F0EAE0',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
