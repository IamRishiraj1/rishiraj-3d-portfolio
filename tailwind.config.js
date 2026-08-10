/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#05050B',
          soft: '#0A0A16',
          deep: '#020204',
        },
        cyan: {
          neon: '#4CF3FF',
          soft: '#8FF7FF',
        },
        violet: {
          neon: '#B14CFF',
          soft: '#D6A3FF',
        },
        ink: {
          DEFAULT: '#F4F5FB',
          muted: '#9494AC',
          faint: '#5C5C74',
        },
        glass: 'rgba(255,255,255,0.045)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 50% 0%, rgba(177,76,255,0.16), transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'neon-cyan': '0 0 24px rgba(76,243,255,0.35)',
        'neon-violet': '0 0 24px rgba(177,76,255,0.35)',
        glass: '0 8px 40px rgba(0,0,0,0.55)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1.5s infinite',
        blink: 'blink 1.1s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
