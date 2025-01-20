/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [sharedConfig],
}

