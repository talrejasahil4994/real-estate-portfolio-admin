/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FD650B", // Reference orange
        secondary: "#1A1A1A",
        accent: "#F5F5F5",
      },
    },
  },
  plugins: [],
}
