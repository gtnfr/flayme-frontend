module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'flayme-orange': '#FF6B1A',
        'flayme-red': '#FF2C1B',
        'flayme-blue': '#1E90FF',
        'glass': 'rgba(26,28,40,0.80)',
      },
      boxShadow: {
        'neon': '0 0 18px 3px #FF6B1A80',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #1E2539 70%, #FF2C1B 100%)',
      }
    },
  },
  plugins: [],
};
