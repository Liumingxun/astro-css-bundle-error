import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['"Noto Sans SC"', ...fontFamily.sans],
      serif: ['"Protest Guerrilla"', ...fontFamily.serif],
      mono: ['"Fira Code"', ...fontFamily.mono],
    },
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },
      },
      animation: {
        floating: 'floating 3.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-primary': `linear-gradient(to bottom, #AAD37D, #66CCFF)`,
      },
    },
  },
}
