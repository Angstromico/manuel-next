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
      },
      colors: {
        background: '#080808',
        bWhite: '#f5f5f5',
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
