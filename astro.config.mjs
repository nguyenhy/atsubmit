// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";
import legacy from "@vitejs/plugin-legacy";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atsubmit.com/',
  trailingSlash: 'ignore',
  output: 'static',
  outDir: "./dist",
  build: {
    assets: "assets",
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: "compile"
  }),

  vite: {
    plugins: [legacy()],
    build: {
      minify: "esbuild",
    },
  },

  integrations: [mdx(), sitemap()],
});
