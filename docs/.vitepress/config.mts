import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

import { SidebarECMAScript } from './config/sidebar-ecma-script'
import { SidebarGit } from './config/sidebar-git'
import { SidebarHtmlCss } from './config/sidebar-html-css'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '👨‍💻',
  description: '人生本就過的不愉快 那就來點羅曼蒂克',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      'ecma-script': { base: '/ecma-script/', items: SidebarECMAScript() },
      'git': { base: '/git/', items: SidebarGit() },
      'html-css': { base: '/html-css/', items: SidebarHtmlCss() },
    },
    outline: {
      level: [1, 7],
      label: '页面导航',

    },
    footer: {
      message: '',
      copyright: `版权所有 © 1997-${new Date().getFullYear()} Quentin Hsu`,
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/QuentinHsu' }],
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vitepress.dev/vitepress-og.jpg',
      },
    ],
  ],
  lastUpdated: true,
  markdown: {
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
})
function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '我的朋友们', link: '/page/my-friends/index' },
  ]
}
