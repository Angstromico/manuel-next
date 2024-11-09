import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable dark mode using the class strategy
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark':
          'linear-gradient(135deg, var(--color-dark-start), var(--color-purple), var(--color-dark-end))',
        'gradient-light':
          'linear-gradient(135deg, var(--color-light-start), var(--color-cyan), var(--color-light-end))',
      },
      colors: {
        background: '#080808',
        bWhite: '#f5f5f5',
        darkGradientStart: '#1a1a1a',
        darkGradientMid: '#333333',
        darkGradientEnd: '#4d4d4d',
        lightGradientStart: '#e6e6e6',
        lightGradientMid: '#cccccc',
        lightGradientEnd: '#b3b3b3',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite', // Adjust speed (e.g., 3s for slower spin)
        'spin-fast': 'spin 0.5s linear infinite', // Adjust speed (e.g., 0.5s for faster spin)
      },
    },
  },
  plugins: [],
}
export default config
