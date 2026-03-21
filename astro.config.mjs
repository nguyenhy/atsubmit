// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import legacy from "@vitejs/plugin-legacy";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "compile",
  }),

  vite: {
    plugins: [
      legacy(),
      tailwindcss(),
    ],
    build: {
      minify: "esbuild",
    },
  },

  integrations: [mdx()],
});
