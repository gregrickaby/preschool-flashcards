module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './data/**/**/*.{js,ts,jsx,tsx,md,mdx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem'
        }
      }
    }
  },
  plugins: [],
  future: {}
}
