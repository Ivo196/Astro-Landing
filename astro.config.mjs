import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],site: 'https://Ivo196.github.io',
  base: '/Astro-Landing',
});