import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            formats: ['iife'],
            name: 'loader',
            entry: './src/main.ts'
        }
    }
})
