/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none',  /* For Firefox */
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          '&::-webkit-scrollbar': {
            display: 'none',  /* For Chrome, Safari, Opera */
          },
        },
      });
    },
  ],
}
