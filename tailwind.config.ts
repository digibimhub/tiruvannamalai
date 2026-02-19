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
        saffron: {
          50:  '#fff7ed',
          100: '#ffedd5',
          500: '#FF6B00',
          600: '#ea5b00',
          700: '#c44b00',
        },
        gold: {
          300: '#f5d97a',
          400: '#e8c547',
          500: '#D4AF37',
          600: '#b8942a',
        },
        maroon: {
          700: '#5a1212',
          800: '#4A0E0E',
          900: '#3a0a0a',
        },
        temple: {
          dark: '#1a0505',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(212, 175, 55, 0.4)' },
          '50%':       { boxShadow: '0 0 24px rgba(212, 175, 55, 0.9)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
