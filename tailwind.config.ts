import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#cfcfcf",
          300: "#ababab",
          400: "#767676",
          500: "#4d4d4d",
          600: "#303030",
          700: "#1f1f1f",
          800: "#0f0d0d",
          900: "#020101"
        },
        ivory: {
          50: "#fffdfa",
          100: "#fff7ef",
          200: "#fdebd7",
          300: "#f9d8b2",
          400: "#f3bb7e",
          500: "#ec873a",
          600: "#d36d22",
          700: "#ad541a",
          800: "#8a4219",
          900: "#6f3818"
        },
        ember: {
          50: "#fff5ee",
          100: "#ffe8d6",
          200: "#ffd0ad",
          300: "#ffaf76",
          400: "#f79148",
          500: "#ec873a",
          600: "#d36d22",
          700: "#b2571c",
          800: "#8d441b",
          900: "#703817"
        },
        saffron: {
          50: "#fff8ef",
          100: "#ffecd1",
          200: "#ffd8a0",
          300: "#f8bb67",
          400: "#f09f4a",
          500: "#ec873a",
          600: "#d56e24",
          700: "#b2581d",
          800: "#8e451b",
          900: "#733918"
        },
        tangerine: {
          50: "#fef9f1",
          100: "#fae6cb",
          200: "#f5cb9b",
          300: "#eea866",
          400: "#e98f3f",
          500: "#e67e22",
          600: "#d35400",
          700: "#b64a05",
          800: "#935116",
          900: "#641e16"
        },
        gold: {
          50: "#fff8ef",
          100: "#ffe8d6",
          200: "#ffd0ad",
          300: "#f8b070",
          400: "#f1934f",
          500: "#ec873a",
          600: "#d96f24",
          700: "#b9591d",
          800: "#92461c",
          900: "#753919"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(236, 135, 58, 0.16)"
      },
      backgroundImage: {
        "radial-luxury":
          "radial-gradient(circle at top, rgba(236, 135, 58, 0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(236, 135, 58, 0.1), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
