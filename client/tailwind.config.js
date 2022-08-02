const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    { pattern: /flex-*/, },
    { pattern: /gap-*/, },
    { pattern: /md:flex-*/ }
  ],
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
