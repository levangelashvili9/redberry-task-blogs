/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1F',
        secondary: '#85858D',
        'error-message': '#EA1919',
        'border-inactive': '#E4E3EB',
        'page-color': '#F3F2FA'
      }
    }
  },
  plugins: []
}
