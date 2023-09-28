import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Awesome Me',
  description: 'about Xu Quentin Yang',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/assets/blue.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Latest', link: '/doc/start-gpg-key' },
    ],

    sidebar: [
      {
        text: 'Latest',
        items: [
          {
            text: '在 Cloudflare 部署 Bun 前端项目',
            link: '/doc/2023/deploy-the-bun-front-end-project-in-cloudflare',
          },
          { text: 'Start GPG Key', link: '/doc/start-gpg-key' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    footer: {
      // message: '',
      copyright: 'Copyright © 1997-2023 Xu Quentin Yang',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },
})
