module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '650': '#0029FF'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
