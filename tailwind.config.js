import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        dark: '#071123',
        'primary-blue': '#483FFB',
        'accent-cyan': '#46FCF4',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(90deg, rgba(72, 63, 251, 0.8071) 0%, rgba(70, 252, 244, 0.510241596368555) 100%)',
        'gradient-hover': 'linear-gradient(90deg, rgba(72, 63, 251, 0.6) 0%, rgba(70, 252, 244, 0.4) 100%)',
      },
    },
  },
  plugins: [],
})
