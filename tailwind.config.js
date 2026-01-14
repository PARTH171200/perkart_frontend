/** @type {import('tailwindcss').Config} */
export default {
  // ... rest of your config
  theme: {
    extend: {
      // ... keep existing colors/fonts
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        // Keep your existing grid-pattern if you still use it elsewhere,
        // but we will define a new perspective one in CSS.
        'grid-pattern': "linear-gradient(to right, #18181b 1px, transparent 1px), linear-gradient(to bottom, #18181b 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}