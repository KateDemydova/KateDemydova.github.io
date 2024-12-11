/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html" , "./src/**/*.{html,js}"],
  theme: {
       extend: {},
  },
  container: {
    center: true, // Центрирование контейнера
    padding: '1rem', // Внутренние отступы
    screens: {
      xsm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  plugins: [],
}