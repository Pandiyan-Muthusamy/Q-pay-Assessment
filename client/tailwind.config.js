/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#42794A",
        "background-secondary": "#61CE70",
        "background-info": "#FFFFFF",
        "text-primary": "#42794A",
        "text-info": "#FFFFFF",
      },
      fontSize: {
        xxs: "0.65rem",
        huge: "5rem",
      },
      fontWeight: {
        extra: "950",
      },
      borderRadius: {
        smaller: "5px",
      },
    },
  },
  plugins: [],
};
