/// <reference types="vitest/config" />

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      fileName: () => "loader.min.js",
      formats: ["iife"],
      name: "loader",
      entry: "./src/index.ts",
    },
  },
  test: {
    //todo
  }
})
