/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        ivory:      '#FAF8F3',
        'ivory-d':  '#F2EFE8',
        'ivory-dd': '#E8E3D8',
        ink:        '#0C0C0B',
        'ink-80':   '#2E2E2D',
        'ink-50':   '#6B6B68',
        'ink-20':   '#BEBEBA',
        rule:       '#E2DDD4',
        gold:       '#B8954A',
        'gold-lt':  '#D4B06A',
        'gold-bg':  '#FBF6EC',
        forest:     '#1E3426',
        'forest-lt':'#2A4A35',
        'forest-bg':'#EEF3EF',
        sage:       '#8FA68C',
        blush:      '#E8D5C4',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4.2rem, 9.8vw, 10rem)', { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.4rem, 4vw, 3.6rem)',  { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 3.2vw, 2.8rem)',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.6rem, 2.4vw, 2rem)',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        container: '1320px',
      },
      animation: {
        'spin-slow':   'spin 20s linear infinite',
        'spin-fast':   'spin 5s linear infinite',
        'tick-move':   'tickMove 34s linear infinite',
        'scan-line':   'scanLine 2.5s 2.2s ease-in-out infinite',
        'fade-up':     'fadeUp 0.7s ease forwards',
        'line-reveal': 'lineReveal 0.95s ease forwards',
        'float-in':    'floatIn 0.9s ease both',
      },
      keyframes: {
        tickMove:   { from: { transform: 'translateX(0)' },   to: { transform: 'translateX(-50%)' } },
        scanLine:   { '0%': { left: '-100%' }, '60%': { left: '100%' }, '100%': { left: '100%' } },
        fadeUp:     { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        lineReveal: { from: { transform: 'translateY(110%)' }, to: { transform: 'translateY(0)' } },
        floatIn:    { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1' } },
      },
      boxShadow: {
        'float':      '0 18px 48px rgba(12,12,11,.10), 0 4px 12px rgba(12,12,11,.06)',
        'float-lg':   '0 32px 64px rgba(12,12,11,.16)',
        'card':       '0 8px 32px rgba(12,12,11,.06)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
