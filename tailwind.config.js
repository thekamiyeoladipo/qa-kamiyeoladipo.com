 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./dist/*.{html,css,js}"],
   theme: {
     extend: {
      colors: {
         dark: "0f0f0f",
          light: "fff",
          accent: "",
       }
     },
   },
   plugins: [],
 }