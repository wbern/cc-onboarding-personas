import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wbern.github.io',
  base: '/cc-onboarding-personas',
  integrations: [preact(), tailwind()],
});
