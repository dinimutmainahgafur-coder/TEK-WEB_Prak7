/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-main": "#1D4ED8",

        "yellow-pilar": "#FACC15",
        "green-pilar": "#4ADE80",
      },
      backgroundImage: {
        "career-talks-bg": "linear-gradient(135deg, #DBEAFE, #EFF6FF)",
        "extra-classes-bg": "linear-gradient(135deg, #FEF9C3, #ECFCCB)",
        "project-work-bg": "linear-gradient(135deg, #DCFCE7, #E0F2FE)",
        "mentoring-bg": "linear-gradient(135deg, #FCE7F3, #FAE8FF)",
      },
    },
  },
  plugins: [],
};
