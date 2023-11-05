import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue_1: '#004580',
        blue_2: '#ABCEDD',
        green_1: '#A5F8EE91',
        green_2: '#4b7772',
        navBg: '#0A0A0A',
        grey_1: '#0000005C',
        grey_2: '#D9D9D9',
        grey_3: '#0000008C',
        grey_4: '#878484',
        grey_5: '#828282',
        orange_1: '#E89903',
        red_1: `#250505`,
      },
    },
  },
  plugins: [],
}
export default config
