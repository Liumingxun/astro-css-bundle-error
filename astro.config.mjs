import tailwindcss from '@astrojs/tailwind'

import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwindcss()],
  redirects: {},
  build: {
    format: 'file',
  },
})
