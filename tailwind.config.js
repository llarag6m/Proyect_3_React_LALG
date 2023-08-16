/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'fira': ['Fira Code', 'monospace']
    },
    extend: {
      animation:{
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
       'header': "url(/img/fond1.png)",
       'fondbody': "url(/img/fond2.png)", 
       'elipse': "url(/img/Ellipse.png)",
       'circle': "url(/img/circle.png)",
       'name': "url(/img/name.png)",
    },
  },
  plugins: [],
  }

}