const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        'ns-bg': {
          light: '#ffffff',
          dark: '#0d1117'
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
        intro: 'calc(100vh - 7px)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
