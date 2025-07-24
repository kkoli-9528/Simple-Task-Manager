import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom', // required for DOM-related tests
    globals: true,         // optional: allows you to skip `import { describe, it } from 'vitest'`
    setupFiles: './setupTests.js', // if you want to use jest-dom matchers
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})