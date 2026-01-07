/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Design Tokens - Tech Style Theme
      colors: {
        tech: {
          bg: '#0a0a0f',      // bg-tech-bg
          surface: '#111118', // bg-tech-surface
          border: '#1f2937',  // border-tech-border
          hover: '#374151',   // hover:bg-tech-hover
        },
        accent: {
          primary: '#22d3ee',   // text-accent-primary (cyan)
          secondary: '#3b82f6', // text-accent-secondary (blue)
          success: '#10b981',   // text-accent-success (emerald/green)
          warning: '#f59e0b',   // text-accent-warning (amber)
        },
        text: {
          primary: '#f9fafb',   // text-text-primary (white)
          secondary: '#d1d5db', // text-text-secondary (gray-300)
          muted: '#9ca3af',     // text-text-muted (gray-400)
          dim: '#6b7280',       // text-text-dim (gray-500)
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
