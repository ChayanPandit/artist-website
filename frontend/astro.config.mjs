// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import { loadEnv } from "vite";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

const { SANITY_PROJECT_ID } = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: "production",
      useCdn: true
    }), 
    react()
  ],

  adapter: netlify()
});