import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

import shiki from "shiki";

const gruvboxUrl = new URL("./src/data/gruvbox.json", import.meta.url).pathname;
const gruvbox = await shiki.loadTheme(gruvboxUrl);

// https://astro.build/config
export default defineConfig({
  // Enable Preact to support Preact JSX components.
  integrations: [preact(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: gruvbox,
    },
  },
});
