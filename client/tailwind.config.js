/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'secondary': '#363A4E',
        'accent-1': '#34BA96',
        'accent-2': '#C4A6FE',
      },
    },
  },
  plugins: [],
}
