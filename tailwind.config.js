/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'pulse-dark': 'pulse_dark 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse_dark: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .9 },
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

