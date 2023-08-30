/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-color': '#33E092',
        'secondary-color': '#0CCE6B',
        'tertiary-color': '#16a34a',
        'primary-bg': 'rgba(39, 39, 43, 0.4)',
        'secondary-bg': 'rgba(250, 250, 250, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
