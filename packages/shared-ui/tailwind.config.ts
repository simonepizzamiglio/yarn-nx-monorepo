import type {Config} from "tailwindcss"
import preset from "./tailwind-preset"

export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./.storybook/**/*.{js,jsx,ts,tsx}"],
} satisfies Config
