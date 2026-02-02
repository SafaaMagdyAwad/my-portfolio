module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 50%, rgba(75, 43, 238, 0.15) 0%, rgba(19, 16, 34, 0) 70%)',
      },
      // 1. Define the keyframes
      keyframes: {
        'electric-spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
      // 2. Define the animation name
      animation: {
        'electric': 'electric-spin 3s linear infinite',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(31, 25, 51, 0.6)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      })
    },
  ]
}