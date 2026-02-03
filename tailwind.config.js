/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "electric-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },

        "build-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        "pulse-grow": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.8" },
        },

        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },

        "float-fast": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(-10deg)" },
        },
      },

      animation: {
        electric: "electric-spin 3s linear infinite",
        "build-in": "build-in 0.4s ease-out forwards",
        "build-in-slow": "build-in 0.8s ease-out forwards",
        "pulse-grow": "pulse-grow 3s ease-in-out infinite 2s",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-fast": "float-fast 5s ease-in-out infinite",
        "float-slow-7": "float-slow 7s ease-in-out infinite",
      },

      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 50% 50%, rgba(75, 43, 238, 0.15) 0%, rgba(19, 16, 34, 0) 70%)",
      },
    },
  },
  plugins: [],
};
