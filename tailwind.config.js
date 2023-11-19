/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glacial: ["glacial", 'sans-serif'],
        glacialBold: ['glacialBold', "san-serif"]
      }
    },
    plugins: [],
  }
}
