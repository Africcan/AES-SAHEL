import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',
        secondary: '#1A1A2E',
        accent: '#16213E',
        success: '#00D084',
        warning: '#FFA500',
        danger: '#FF6B6B',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
      },
    },
  },
  plugins: [],
}
export default config
