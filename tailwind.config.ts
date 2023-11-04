import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mainBg' : '#1E1E27',
        'footerBg': '#2E2F3C',
        'itemBg': '#24252E',
        'searchBg': '#30313C',
        'toggleGreen': '#07D41B',
        'btnPurpleBg': 'linear-gradient(0deg, #884DFE 0%, #884DFE 100%), linear-gradient(104deg, #A139FD 11.26%, #50BDFC 90.79%)'

      }
    },
  },
  plugins: [],
}
export default config
