import type { Config } from "tailwindcss";

const config: Config = {
  content: ["../../apps/web/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6600",
      },
    },
  },
  plugins: [],
};

export default config;
