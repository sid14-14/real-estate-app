//this checks index.html and all files w the below extensions inside src folder and any tailwind classes we add will be detected and equivalent css class is created

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}