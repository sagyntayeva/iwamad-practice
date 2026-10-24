import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// GitHub Pages project sites are served from /<repository-name>/.
// Override with VITE_BASE (e.g. VITE_BASE=/my-repo/ npm run build) if the repo name differs.
const base = process.env.VITE_BASE ?? '/iwamad-practice/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
