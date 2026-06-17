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
          ink: "#102033"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 48, 109, 0.12)",
        line: "0 1px 0 rgba(13, 86, 192, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
