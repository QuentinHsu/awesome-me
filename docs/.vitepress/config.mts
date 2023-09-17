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
        items: [{ text: 'Start GPG Key', link: '/doc/start-gpg-key' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    footer: {
      // message: '',
      copyright: 'Copyright © 1997-2023 Xu Quentin Yang',
    },
  },
})
