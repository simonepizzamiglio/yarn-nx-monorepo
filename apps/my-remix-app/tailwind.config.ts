import type {Config} from "tailwindcss"
import sharedUIPreset from "shared-ui/tailwind-preset"

export default {
  presets: [sharedUIPreset],
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "../../packages/shared-ui/**/*.{js,ts,jsx,tsx}",
  ],
} satisfies Config
