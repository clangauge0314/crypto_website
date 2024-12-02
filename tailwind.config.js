/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans',
          'Noto Sans KR',
          'Noto Sans JP',
          'Noto Sans SC',
          'Noto Sans TC',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}