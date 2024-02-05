/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1320px"
      },
      screens:{
        '2Issue': {'min': '1300px', 'max': '1500px'},
      },
      fontFamily:{
        Poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

