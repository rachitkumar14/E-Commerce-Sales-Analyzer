/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: '#0b1120',
          hover: '#17223b',
          active: '#2563eb',
        },
        canvas: '#f4f6fa',
      },
    },
  },
  plugins: [],
}
