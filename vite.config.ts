import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      fileName: 'loader',
      formats: ['iife'],
      name: 'loader',
      entry: './src/index.ts',
    },
  },
})
