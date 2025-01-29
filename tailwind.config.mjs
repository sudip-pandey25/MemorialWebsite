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
        background: "#cec4b4",
        foreground: "#d4d0ca",
        primary: "#354228",
        secondary: "#1e2b1b",
      },
      fontFamily: {
        Crimson: "Crimson Text",
        josefin: "Josefin Sans",
        Roboto: "Roboto",
        playwrite: "Playwrite IN",
        oswald: "Oswald",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
