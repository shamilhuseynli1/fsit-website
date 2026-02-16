import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Saudi Arabia inspired color scheme
        primary: {
          50: '#e6f5ec',
          100: '#ccebda',
          200: '#99d6b5',
          300: '#66c290',
          400: '#33ad6b',
          500: '#00843D', // Saudi Green - national color
          600: '#006d33',
          700: '#005728',
          800: '#00401e',
          900: '#002a14',
          950: '#00150a',
        },
        gold: {
          50: '#fdf9ed',
          100: '#faf0d1',
          200: '#f5e0a3',
          300: '#f0d075',
          400: '#e6c55a',
          500: '#C4A84B', // Gold accent - Vision 2030 prosperity
          600: '#a38a3d',
          700: '#826d30',
          800: '#615023',
          900: '#403316',
          950: '#201a0b',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#010d1c', // Main dark navy
          950: '#000509',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#F1F1F8', // Light background
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.15', fontWeight: '700' }],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        'pill': '100px',
      },
      transitionDuration: {
        '400': '400ms',
      },
      maxWidth: {
        'content': '820px',
        'section': '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
