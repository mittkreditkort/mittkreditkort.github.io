import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [react()],
  site: "https://mittkreditkort.info",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
