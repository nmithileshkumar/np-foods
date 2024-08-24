import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs": "0.625rem",
      xs: "0.75rem", // 12px
      sm: "0.875rem",
      base: "1rem", // 16px
      lg: "1.125rem",
      xl: "1.25rem", // 20px
      "2xl": "1.375rem",
      "4xl": "1.5rem", // 24px
    },
    extend: {
      colors: {
        chalk: {
          // all light theme colors here
          background: {
            DEFAULT: "#f7f7f7",
            navigation: "#FFFFFF",
          },
          primary: {
            // shades of Red here
            redShades:{
              100: "#FF6347",
              200: "#e5593f",
              300: "#cc4f38",
              400: "#b24531",
              500: "#993b2a",
              600: "#7f3123",
              700: "#66271c",
            },
            // shades of Orange here
            orangeShades:{
              100: "#ffa500",
              200: "#e59400",
              300: "#cc8400",
              400: "#b27300",
              500: "#996300",
              600: "#7f5200",
              700: "#664200",
            },
            // shades of Green here
            greenShades:{
              100: "#32cd32",
              200: "#2db82d",
              300: "#28a428",
              400: "#238f23",
              500: "#1e7b1e",
              600: "#196619",
              700: "#145214",
            },
            // shades of Brown here
            brownShades:{
              100: "#8b4513",
              200: "#7d3e11",
              300: "#6f370f",
              400: "#61300d",
              500: "#53290b",
              600: "#452209",
            },
          },
          heading: {
            primary: "#1c1c1c",
            secondary: "#606060",
            accent: "#FF6347",
          },
          // shades of Grey here
          grey: {
            100: "#1c1c1c",
            200: "#323232",
            300: "#494949",
            400: "#606060",
            500: "#767676",
            600: "#8d8d8d",
            700: "#a4a4a4",
            800: "#bababa",
            900: "#d1d1d1",
            1000: "#e8e8e8",
            1100: "#ffffff",
          },
          status: {
            success: "#29C13B",
            failure: "#FF0000",
            alert: "#FFC0C0",
            pending: "#F5A623",
          },
        },
        "text-emoji": "#1C5ED9",
      },
      fontFamily: {
        "Helvetica": ["Helvetica", "sans-serif"],
        "Helvetica-Bold": ["Helvetica-Bold", "sans-serif"],
        "Helvetica-BoldOblique": ["Helvetica-BoldOblique", "sans-serif"],
        "Helvetica-Light": ["Helvetica-Light", "sans-serif"],
        "Helvetica-Oblique": ["Helvetica-Oblique", "sans-serif"],
        "Roboto-Black": ["Roboto-Black", "sans-serif"],
        "Roboto-Black-Italic": ["Roboto-BlackItalic", "sans-serif"],
        "Roboto-Bold": ["Roboto-Bold", "sans-serif"],
        "Roboto-Bold-Italic": ["Roboto-BoldItalic", "sans-serif"],
        "Roboto-Italic": ["Roboto-Italic", "sans-serif"],
        "Roboto-Light": ["Roboto-Light", "sans-serif"],
        "Roboto-Light-Italic": ["Roboto-LightItalic", "sans-serif"],
        "Roboto-Medium": ["Roboto-Medium", "sans-serif"],
        "Roboto-Medium-Italic": ["Roboto-MediumItalic", "sans-serif"],
        "Roboto-Regular": ["Roboto-Regular", "sans-serif"],
        "Roboto-Thin": ["Roboto-Thin", "sans-serif"],
        "Roboto-Thin-Italic": ["Roboto-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
