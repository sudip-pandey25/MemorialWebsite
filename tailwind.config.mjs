/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "linear-gradient(to bottom right, #f0fdfa, #ebf8ff)",
      },
      colors: {
        "primary-gradient": {
          DEFAULT: "linear-gradient(to bottom right, #f0fdfa, #ebf8ff)",
        },
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
      keyframes: {
        "translate-x-reverse": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "translate-x-reverse": "translate-x-reverse 40s linear infinite",
        "translate-x-reverseSlowed": "translate-x-reverse 50s linear infinite",
      },
    },
  },
  plugins: [],
};
