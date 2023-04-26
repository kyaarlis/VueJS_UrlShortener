/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/src/assets/wave-haikei.svg')",
        'bg-img1': "url('/src/assets/layered-steps-haikei (1).svg')",
        'bg-form': "url('/src/assets/form-blob.svg')"
      },
    },
  },
  plugins: [],
}

