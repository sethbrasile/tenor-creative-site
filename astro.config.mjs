// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Tailwind v4 is wired via PostCSS (postcss.config.mjs) rather than
// @tailwindcss/vite — the Vite plugin is incompatible with Astro 6's
// rolldown-vite resolver (Missing field `tsconfigPaths`).

// https://astro.build/config
export default defineConfig({
  site: 'https://tenorcreative.com',
  integrations: [react(), sitemap(), icon()],
});
