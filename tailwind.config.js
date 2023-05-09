const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Mulish: ['Mulish'],
        Nunito: ['Nunito'],
      },
      colors: {
        'app-sky-blue-light': '#E6ECF5',
        'app-blue': '#07469C',
        'app-sky-blue': '#0099E1',
        'app-red': '#EF3061',
        'app-gray': '#333333',
        'app-gray-light': '#757575',
        'app-gray-lighter': '#F2F2F2',
      },
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  plugins: [],
});
