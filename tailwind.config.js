/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {      
      colors: {
        "themeOrange": "",
        "darkBg": "#121212",
        "rich-black": "#00111cff",
        "rich-black-2": "#001523ff",
        "rich-black-3": "#001a2cff",
        "prussian-blue": "#002137ff",
        "prussian-blue-2": "#00253eff",
        "prussian-blue-3": "#002945ff",
        "prussian-blue-4": "#002e4eff",
        "prussian-blue-5": "#003356ff",
        "indigo-dye": "#003a61ff",
        "indigo-dye-2": "#00406cff",        
      },
      fontFamily:{
        "styled-font": "LXGW WenKai TC, cursive",
        "elegant": "Montserrat, sans-serif"
      },
      backgroundImage:{
        "bgLight": "linear-gradient(to bottom right, #FFECD2 40%, #FCB69F 100%)",        
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],  
};
