import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Ewaa-inspired warm color scheme
        primary: {
          50: '#e8f7ee',
          100: '#d1efdd',
          200: '#a3dfbb',
          300: '#75cf99',
          400: '#47bf77',
          500: '#19AB5D', // Ewaa Green - vibrant
          600: '#148c4c',
          700: '#106d3b',
          800: '#0b4e2a',
          900: '#072f19',
          950: '#03170c',
        },
        gold: {
          50: '#fefdfb',
          100: '#fdf9ed',
          200: '#faf0d1',
          300: '#f5e0a3',
          400: '#e6c55a',
          500: '#C4A84B', // Gold accent
          600: '#a38a3d',
          700: '#826d30',
          800: '#615023',
          900: '#403316',
          950: '#201a0b',
        },
        cream: {
          50: '#FFFEF5', // Ewaa warm background
          100: '#F7EFE4', // Ewaa footer beige
          200: '#f0e6d6',
          300: '#e8dcc7',
          400: '#d9c9ad',
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
          900: '#1a1a2e', // Softer dark
          950: '#0f0f1a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#FFFEF5', // Warm cream background (Ewaa style)
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
