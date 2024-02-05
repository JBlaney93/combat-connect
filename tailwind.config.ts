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
        "backgroundFloralWhite": "#FFF8F0", 
        "primaryFontBlack": "#252627", 
        "navBackgroundRaisinBlack": "#0f172a", 
        "navBackgroundGreyHover": "#FAFAF9", 
        "themeAccentBlue": "#4B88A2", 
        "themeAccentBlueHover": "#3A697E", 
        "themeAccentRed": "#BB0A21" 
      },
    },
  },
  plugins: [],
}
export default config
