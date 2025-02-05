/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#27445D",
        foreground: "#497D74",
        primary: "#27445D",
        secondary: "#EFE9D5",
      },
      fontFamily: {
        Crimson: "Crimson Text",
        josefin: "Josefin Sans",
        Roboto: "Roboto",
        playwrite: "Playwrite IN",
        oswald: "Oswald",
        poppins: "Poppins",
        lato: "Lato",
      },
    },
  },
  plugins: [],
};
