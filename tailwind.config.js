/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
"./src/**/*.{js,ts,jsx,tsx,mdx}",
"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
],
theme: {
extend: {
colors: {
glamPink: "#fce4ec",
glamGold: "#d4af37",
},
fontFamily: {
sans: ["Inter", "sans-serif"],
},
},
},
plugins: [],
};
