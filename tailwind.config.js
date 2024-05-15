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
    },
  },
  plugins: [],
};

