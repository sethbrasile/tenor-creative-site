// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Tailwind v4 is wired via PostCSS (postcss.config.mjs) rather than
// @tailwindcss/vite — the Vite plugin is incompatible with Astro 6's
// rolldown-vite resolver (Missing field `tsconfigPaths`).
//
// No framework integration: the site ships zero JS except a small inline
// menu toggle and the vanilla contact-form handler. No React island.

// https://astro.build/config
export default defineConfig({
  site: 'https://tenorcreative.com',
  integrations: [sitemap(), icon()],
});
