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
        blue: '#004580',
        green: '#A5F8EE91',
        green_1: '#4b7772',
        navBg: '#0A0A0A',
        grey: '#D9D9D9',
        grey_1: '#0000005C',
        orange_1: '#E89903',
      },
    },
  },
  plugins: [],
}
export default config
