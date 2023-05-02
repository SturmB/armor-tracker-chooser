/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "zelda-sword": "url('/zelda-sword-01.jpg')",
        "botw": "url('/bg-botw-01.jpg')",
        "totk": "url('/bg-totk-01.jpg')",
      },
    },
  },
  plugins: [],
};
