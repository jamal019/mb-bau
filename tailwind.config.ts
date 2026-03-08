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
          50: '#f4f7fa',
          100: '#e8eef4',
          500: '#1f4e79',
          600: '#173c5f',
          700: '#122f4b'
        },
        accent: '#d78628'
      },
      boxShadow: {
        soft: '0 12px 32px rgba(20, 40, 60, 0.08)'
      },
      maxWidth: {
        reading: '72ch'
      }
    }
  },
  plugins: []
};

export default config;
