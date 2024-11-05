import {defineConfig} from "vite"

export default defineConfig({
  build: {
    lib: {
      // Use the name field from package.json as the entry point
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
})
