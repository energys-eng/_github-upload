import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        energys: {
          navy: "#00306d",
          blue: "#0d56c0",
          mid: "#1a4ba0",
          yellow: "#fdb02a",
          mist: "#eef2f1",
          ink: "#102033",
          deep: "#1c0262",
          cyan: "#12b9df",
          paper: "#f8faf9"
        }
      },
      boxShadow: {
        soft: "0 22px 70px rgba(0, 48, 109, 0.14)",
        premium: "0 28px 90px rgba(28, 2, 98, 0.20)",
        line: "0 1px 0 rgba(13, 86, 192, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
