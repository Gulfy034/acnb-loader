import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      fileName: "loader",
      formats: ["iife"],
      name: "loader",
      entry: "./src/main.ts",
    },
  },
});
