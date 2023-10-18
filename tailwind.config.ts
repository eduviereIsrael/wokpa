import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
       'brand-color': "#1EAEA3",
       "brand-color2": "#7B61FF",
       "bg3": "rgba(48, 48, 48, 0.50)",
       "gray-text": "#B0B0B0"
      }
    },
  },
  plugins: [],
}
export default config
