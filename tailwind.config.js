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
        primary: '#6366f1',
        secondary: '#4f46e5',
        accent: '#818cf8',
        neutral: '#1f2937',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        entanglux: {
          "primary": "#6366f1",
          "primary-focus": "#4f46e5",
          "primary-content": "#ffffff",
          "secondary": "#4f46e5",
          "secondary-focus": "#4338ca",
          "secondary-content": "#ffffff",
          "accent": "#818cf8",
          "accent-focus": "#6366f1",
          "accent-content": "#ffffff",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
          "--btn-text-case": "none",
          "--rounded-btn": "0.5rem",
        },
      },
    ],
  },
} 