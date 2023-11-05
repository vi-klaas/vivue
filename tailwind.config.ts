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
      width: {
        300: '300px'
      },
    fontSize: {
      base: '14px'
    },
    borderRadius: {
      default: '12px',
      'border-radius': '0.375rem'
    },
    transitionProperty: {
      'left': 'left',
    },
    transitionDuration: {
      default: '200ms',
      '150': '150ms'
    },
      animation: {
        'fadein-3': 'fadein 3s',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    boxShadow: {
      'focus-ring': '0 0 0 2px var(--focus-ring)',
      'focus-ring-inset': 'inset 0 0 0 2px var(--focus-ring)',
      'sm': '0px 3px 5px rgba(0,0,0,.02), 0px 0px 2px rgba(0,0,0,.05), 0px 1px 4px rgba(0,0,0,.08)',
      'card': 'var(--card-shadowo)'
    },
      zIndex: {
        999:'999',
      },
    colors: {
      'surface-a': 'var(--surface-a)',
      'surface-b': 'var(--surface-b)',
      'surface-c': 'var(--surface-c)',
      'surface-d': 'var(--surface-d)',
      'surface-e': 'var(--surface-e)',
      'surface-f': 'var(--surface-f)',
      'surface-ground': 'var(--surface-ground)',
      'surface-section': 'var(--surface-section)',
      'surface-overlay': 'var(--surface-a)',
      'surface-border': 'var(--surface-border)',
      'surface-hover': 'var(--surface-hover)',
      surface: {
      0: 'var(--surface-0)',
      50: 'var(--surface-50)',
      100: 'var(--surface-100)',
      200: 'var(--surface-200)',
      300: 'var(--surface-300)',
      400: 'var(--surface-400)',
      500: 'var(--surface-500)',
      600: 'var(--surface-600)',
      700: 'var(--surface-700)',
      800: 'var(--surface-800)',
      900: 'var(--surface-900)',
    },
        'surface-card': 'var(--surface-card)',
      textColor: {
      'primary': 'var(--text-color)',
      'secondary': 'var(--text-color-secondary)',

      },
      'primary-color': 'var(--primary-color)',
      'primary-color-text': 'var(--primary-color-text)',
      'highlight-bg': 'var(--highlight-bg)',
      'highlight-text-color': 'var(--highlight-text-color)',
      'focus-ring': '0 0 0 1px #6366F1',
      'maskbg': 'rgba(0, 0, 0, 0.4)',
    },
    plugins: [
      typography,
      forms,
    ],
  },
},
}
