/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['ClashDisplay-Variable'],
        secondary: ['Panchang-Variable'],
        text: ['Poppins-Variable']
      },
      colors: {
        base: 'var(--base-color)',
        primary: 'var(--primary-color)',
        neutro: 'var(--neutro-color)'
      }
    }
  },
  plugins: []
}
