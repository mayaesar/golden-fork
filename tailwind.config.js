/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        cream: "#f9f9f7",
      },
      maxWidth: {
        "app": "650px",
      },
    },
  },
  plugins: [],
};

