// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          teodor: ['var(--font-teodor)', 'serif'],
          sf: ['var(--font-sf-pro)', 'system-ui', 'sans-serif'],
        },
        fontWeight: {
          light: '400',
          regular: '500',
          medium: '600',
        },
      },
    },
    plugins: [],
  }
  