/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/src/assets/blob-haikei.svg')",
        'bg-form': "url('/src/assets/form-blob.svg')"
      },
    },
  },
  plugins: [],
}