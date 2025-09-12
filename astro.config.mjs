import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
  output: "static",
  adapter: github(),
  site: process.env.SITE || undefined,
  base: process.env.BASE || undefined,
});
