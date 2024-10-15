/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // Enable dark mode based on a CSS class or media query
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      content: {
        empty: '""', // Empty string for the `before` pseudo-element
      },
    },
  },
  plugins: [],
};
