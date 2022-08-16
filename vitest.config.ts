import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "happy-dom", // 或 'jsdom', 'node'
    include: ["test/unit/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  },
});
