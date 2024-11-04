import type {Config} from "tailwindcss"
import sharedUIPreset from "shared-ui/tailwind-preset"

export default {
  presets: [sharedUIPreset],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared-ui/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config
