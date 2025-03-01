import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  dts: true, // ✅ Generates TypeScript definitions
  minify: true,
  external: ["react", "react-dom", "tailwindcss"],
});
