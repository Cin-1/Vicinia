/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A0C17C',
        secondary: '#5E7C3B',
        neutralGray: '#C6C6C6',
        softBlack: '#2B2C31',
        complementary: '#E1957A',
      },
    },
  },
  plugins: [],
};
