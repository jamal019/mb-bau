import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      }
    },
    extend: {
      colors: {
        brand: {
          50: '#F7EED3',
          100: '#BACFED',
          200: '#ECD87F',
          500: '#244A86',
          600: '#232D44',
          700: '#232D44'
        },
        accent: '#ECD87F',
        ink: '#232D44',
        mist: '#BACFED',
        cream: '#F7EED3',
        gold: '#ECD87F',
        dusk: '#244A86',
        indigo: '#232D44'
      },
      boxShadow: {
        soft: '0 18px 48px rgba(35, 45, 68, 0.14)'
      },
      maxWidth: {
        reading: '72ch'
      }
    }
  },
  plugins: []
};

export default config;
