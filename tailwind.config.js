module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        waffle: '#fcc14c',
      },
      borderRadius: {
        snippet: '15px',
      },
      margin: {
        logo: '0 !important'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
