/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'sleep-mode':'#111827',
        'icon-sun':'#969696',
        'notify-btn':'#4f7df3',
        'hv-n-btn':'#afbad6',
        'span-color':'#151f29',
        'btn-border':'#d1d5db',
        'pale-border':'#374151',
        "light-border":"",
      },
      
      
    },
  },
  plugins: [],
}