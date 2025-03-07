/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {sans: ["Inter", "sans-serif"],},
      transitionTimingFunction: {'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',},
    },
  },
  plugins: [tailwindScrollbar], 
};
