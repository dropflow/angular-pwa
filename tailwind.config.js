/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      fontSize: {
        '2xs': '0.5rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

