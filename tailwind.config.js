module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *')
    }
  ]
}
