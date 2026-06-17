/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        brand: '#2C6D72',
        charcoal: {
          50: '#f5f5f4',
          100: '#e8e7e5',
          200: '#d1cecc',
          300: '#b0aba7',
          400: '#8a847f',
          500: '#6e6864',
          600: '#5c5652',
          700: '#4c4845',
          800: '#3a3836',
          900: '#1e1c1b',
          950: '#0f0e0d',
        },
        cream: {
          50: '#fdfcf8',
          100: '#f9f6ee',
          200: '#f2edd9',
          300: '#e8dfc0',
          400: '#d9cc9d',
          500: '#c8b87a',
        },
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
    },
  },
  plugins: [],
}
