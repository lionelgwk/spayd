import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["**/node_modules/**", "**/*.d.ts"],
    },
    css: false,
    passWithNoTests: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
      "@/components": resolve(__dirname, "./components"),
      "@/app": resolve(__dirname, "./app"),
    },
  },
});
