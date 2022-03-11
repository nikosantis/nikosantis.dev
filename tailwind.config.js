const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ns-bg': {
          light: '#ffffff',
          dark: '#111111'
        },
        'ns-fg': {
          light: '#24292e',
          dark: '#ffffff'
        }
      },
      fontFamily: {
        ...fontFamily,
        sans: ['Roboto', ...fontFamily.sans]
      },
      minHeight: {
        intro: 'calc(100vh - 7px)',
        resume: 'calc(100vh - 84px)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
