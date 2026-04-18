/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* BEC Visual Identity (Primary) */
        primary: {
          light: '#F2B654',
          DEFAULT: '#EEA225',
          dark: '#E49311',
          deep: '#666666',
        },
        /* Orange Color Scheme */
        orange: {
          light: '#FF7600',
          DEFAULT: '#FF5F2E',
          dark: '#FF842C',
          muted: '#FF6701',
        },
        bg: {
          DEFAULT: '#0B0B0D',
          surface: '#181619',
          elevated: '#181B22',
          card: '#272A31',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#D1D5DB',
          faint: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['"Anonymous Pro"', 'monospace'],
        heading: ['"Russo One"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      animation: {
        'glitch-1': 'glitch 3s linear infinite',
        'glitch-2': 'glitch 4s linear infinite reverse',
        'crt-flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        flicker: {
          '0%': { opacity: '0.9' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
