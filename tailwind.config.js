/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        ink2: '#0F1830',
        panel: '#121B33',
        line: '#24314F',
        paper: '#EDEFF2',
        muted: '#8FA0BC',
        copper: '#E8934A',
        cyan: '#5FD4C8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
