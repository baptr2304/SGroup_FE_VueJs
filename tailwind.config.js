/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem'
    },
    backgroundColor:{
      bgDashBoard: '#f4f4f5'
    }
  },
  plugins: [],
}
}
