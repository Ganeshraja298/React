/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm':{'max':"420px"},
      'md':{'max':'767px'},
      'lg':{'min':"768px"},
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {},
    colors:{
      white:'#fff',
      border:"#ddd",
      primary_color:'#e71c24',
      secondary_color:'',
      primary_text:"#3a5165",
      secondary_text:"#7d7d7d",
      border_color:"#0f172a1a",
      card_color0:"#fbd5ff",
      card_color1:"#e7ffd5",
      card_color2:"#d5fbff",
      card_color3:"#ffd5d5",
    }
  },
  plugins: [],
}

