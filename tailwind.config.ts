import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': "'Space Grotesk', sans-serif",
        'body': "'Space Grotesk', sans-serif",
        'mono': "'DM Mono', monospace",
        'serif': "'Cormorant Garamond', serif",
        'sans': "'DM Sans', sans-serif",
        'modern': "'Outfit', sans-serif",
      },
      fontSize: {
        'label': ['11px', { letterSpacing: '0.16em' }],
        'tag': ['11px', { letterSpacing: '0.06em' }],
      },
    },
  },
  plugins: [],
} satisfies Config
