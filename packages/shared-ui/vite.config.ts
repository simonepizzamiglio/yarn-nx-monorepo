import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

export default defineConfig({
  build: {
    lib: {
      // Use the name field from package.json as the entry point
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Externalize React and ReactDOM
      external: ["react", "react-dom"],
    },
  },
  plugins: [react()],
})
