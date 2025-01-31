import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/', // Ensure base URL is set correctly for Netlify

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Example', link: '/example' },
        ],
      },
    ],
  },
});