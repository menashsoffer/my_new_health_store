/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/my-health-store/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
