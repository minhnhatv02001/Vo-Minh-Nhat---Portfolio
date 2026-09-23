/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#050A06',
          900: '#09110B',
          850: '#0E1A11',
          800: '#142518',
          750: '#1A3020',
          700: '#223D2A',
          600: '#2F543A',
          500: '#42704E',
        },
        gold: {
          300: '#FDE68A',
          400: '#F5D365',
          500: '#E5C05B',
          600: '#C9A33E',
        },
        moss: {
          300: '#A3BD8B',
          400: '#84A36B',
          500: '#67864F',
          600: '#4E683A',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(229, 192, 91, 0.3)',
        'glow-forest': '0 0 50px -10px rgba(47, 84, 58, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
