/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    include: ['**/*.test.tsx'],
    setupFiles: './src/setupTests.ts',
    isolate: false,
  },
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/abstracts/index";`
      }
    }
  },
  plugins: [react(), svgr()],
})
