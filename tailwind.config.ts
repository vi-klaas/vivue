/** @type {import('tailwindcss').Config}*/


import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'


export default {
  darkMode: 'class',
  content: [
      './index.html',
      './src/**/*.{html,vue,js,cjs,ts,cts,mts,jsx,tsx,md,mdx}',
    ],
  theme: {
    extend: {
      spacing: {
        gutter: '1.5rem' // 24px
      },
    },
      fontSize: {
        base: '14px'
      },
      borderRadius: {
        default: '12px'
      },
      transitionDuration: {
        default: '200ms'
      },
      boxShadow: {
        'focus-ring': '0 0 0 2px var(--focus-ring)',
        'focus-ring-inset': 'inset 0 0 0 2px var(--focus-ring)'
      }
  },
  plugins: [
    typography,
    forms,
  ],
}
