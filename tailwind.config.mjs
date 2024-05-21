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
      },
      fontSize: {
        'mobile-text': ['0.9rem'],
        'desktop-text': ['1rem'],
        title: ['2.5rem'],
        'desktop-subtitle': ['1.9rem'],
        'mobile-subtitle': ['1.5rem']
      }
    }
  },
  plugins: []
}
