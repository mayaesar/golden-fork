/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fefbe8",
          "100": "#fff8c2",
          "200": "#ffee89",
          "300": "#ffdb3d",
          "400": "#fdc812",
          "500": "#ecae06",
          "600": "#cc8602",
          "700": "#a35e05",
          "800": "#864a0d",
          "900": "#723c11",
          "950": "#431e05",
        },
      },
      maxWidth: {
        "app": "650px",
      },
      boxShadow: {
        "sm": "2px 2px 5px rgba(0, 0, 0, 0.2)",
        "md": "2px 2px 10px rgba(0, 0, 0, 0.2)",
        "lg": "2px 2px 15px rgba(0, 0, 0, 0.2)",
        "xl": "2px 2px 20px rgba(0, 0, 0, 0.2)",
        "2xl": "2px 2px 30px rgba(0, 0, 0, 0.2)",
        "3xl": "2px 2px 40px rgba(0, 0, 0, 0.2)",
        "4xl": "2px 2px 50px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

