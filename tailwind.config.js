/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, // Giúp container được căn giữa
      padding: {
        DEFAULT: "1rem", // Thiết lập padding mặc định
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
        "3xl": "1280px",
        "4xl": "1280px",
      },
    },
    extend: {},
  },
  plugins: [],
};
