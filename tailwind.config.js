/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      },
      screens: {
        xsm: '428px'
      },
      maxWidth: {
        '2/3': '70%',
        '4/5': '80%'
      }
    },
  },
  plugins: [],
}
