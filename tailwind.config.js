/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
      fontSize: {
        '20px': '20px',
      },
      lineHeight: {
        '27px': '27px',
      },
      width: {
        '12': '48px', // Custom width equivalent to 47px for precision.
      }, 
      height: {
        '7': '28px', // Custom height equivalent to 27px for precision.
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
