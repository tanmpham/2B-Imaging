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
        blue_1: '#004580',
        blue_2: '#ABCEDD',
        green_1: '#A5F8EE91',
        green_2: '#4b7772',
        navBg: '#0A0A0A',
        grey_2: '#D9D9D9',
        grey_1: '#0000005C',
        orange_1: '#E89903',
      },
    },
  },
  plugins: [],
}
export default config
