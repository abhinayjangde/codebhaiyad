/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config";

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [sharedConfig]
}

