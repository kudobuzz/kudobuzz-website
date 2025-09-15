import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.SITE || undefined,
  base: process.env.BASE || undefined,
});
