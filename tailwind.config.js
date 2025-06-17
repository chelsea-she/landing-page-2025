/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "app-gray-50": "rgb(var(--app-gray-50) / <alpha-value>)",
        "app-gray-100": "rgb(var(--app-gray-100) / <alpha-value>)",
        "app-gray-200": "rgb(var(--app-gray-200) / <alpha-value>)",
        "app-gray-300": "rgb(var(--app-gray-300) / <alpha-value>)",
        "app-gray-400": "rgb(var(--app-gray-400) / <alpha-value>)",
        "app-gray-500": "rgb(var(--app-gray-500) / <alpha-value>)",
        "app-gray-600": "rgb(var(--app-gray-600) / <alpha-value>)",
        "app-gray-700": "rgb(var(--app-gray-700) / <alpha-value>)",
        "app-gray-800": "rgb(var(--app-gray-800) / <alpha-value>)",
        "app-gray-900": "rgb(var(--app-gray-900) / <alpha-value>)",
        "app-gray-950": "rgb(var(--app-gray-950) / <alpha-value>)",
      },
      boxShadow: {
        "custom-gray": "0 4px 24px 0 rgb(var(--app-gray-300) / 0.25)",
      },
    },
  },
  plugins: [],
};
