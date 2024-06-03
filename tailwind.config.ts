import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": '#908DD9',
        "secondary": '#7C2A2C',
        "accent": '#BF9E42',
        "text": '#DFDFF4',
        "background": '#070612'
      },
    },
    keyframes: {
      moveCircleBeforeMain: {
        '0%': { clipPath: 'circle(15% at 30% 20%)' },
        '25%': { clipPath: 'circle(15% at 40% 30%)' },
        '50%': { clipPath: 'circle(15% at 20% 40%)' },
        '75%': { clipPath: 'circle(15% at 35% 50%)' },
        '100%': { clipPath: 'circle(15% at 30% 20%)' },
      },
      moveCircleAfterMain: {
        '0%': { clipPath: 'circle(20% at 70% 80%)' },
        '25%': { clipPath: 'circle(20% at 60% 70%)' },
        '50%': { clipPath: 'circle(20% at 80% 60%)' },
        '75%': { clipPath: 'circle(20% at 65% 50%)' },
        '100%': { clipPath: 'circle(20% at 70% 80%)' },
      },
      moveCircleBeforeFirst: {
        '0%': { clipPath: 'circle(20% at 20% 30%)' },
        '25%': { clipPath: 'circle(20% at 30% 40%)' },
        '50%': { clipPath: 'circle(20% at 40% 20%)' },
        '75%': { clipPath: 'circle(20% at 50% 35%)' },
        '100%': { clipPath: 'circle(20% at 20% 30%)' },
      },
      moveCircleAfterFirst: {
        '0%': { clipPath: 'circle(15% at 70% 70%)' },
        '25%': { clipPath: 'circle(15% at 70% 60%)' },
        '50%': { clipPath: 'circle(15% at 60% 80%)' },
        '75%': { clipPath: 'circle(15% at 80% 65%)' },
        '100%': { clipPath: 'circle(15% at 70% 70%)' },
      },
      moveCircleBeforeSecond: {
        '0%': { clipPath: 'circle(10% at 40% 50%)' },
        '25%': { clipPath: 'circle(10% at 50% 90%)' },
        '50%': { clipPath: 'circle(10% at 90% 100%)' },
        '75%': { clipPath: 'circle(10% at 100% 40%)' },
        '100%': { clipPath: 'circle(10% at 40% 50%)' },
      },
      moveCircleAfterSecond: {
        '0%': { clipPath: 'circle(8% at 10% 30%)' },
        '25%': { clipPath: 'circle(8% at 30% 60%)' },
        '50%': { clipPath: 'circle(8% at 60% 90%)' },
        '75%': { clipPath: 'circle(8% at 90% 10%)' },
        '100%': { clipPath: 'circle(8% at 10% 30%)' },
      },
    },
    animation: {
      moveCircleBeforeMain: 'moveCircleBeforeMain 10s infinite ease-in-out',
      moveCircleAfterMain: 'moveCircleAfterMain 12s infinite ease-in-out',
      moveCircleBeforeFirst: 'moveCircleBeforeFirst 12s infinite ease-in-out',
      moveCircleAfterFirst: 'moveCircleAfterFirst 10s infinite ease-in-out',
      moveCircleBeforeSecond: 'moveCircleBeforeSecond 12s infinite ease-in-out',
      moveCircleAfterSecond: 'moveCircleAfterSecond 10s infinite ease-in-out',
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'danfo': ['Danfo', 'sans-serif']
    },
  },
  plugins: [],
};
export default config;
