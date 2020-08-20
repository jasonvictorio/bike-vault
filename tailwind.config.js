module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
}
