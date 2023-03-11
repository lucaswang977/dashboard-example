/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'gray-50': '#F1F5F9',
      'gray-200': '#64748B',
      'gray-400': '#475569',
      'gray-500': '#1E2A3B',
      'violet': '#6366F1',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
