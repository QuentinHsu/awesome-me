import type { DefaultTheme } from 'vitepress'

export function SidebarEightPartEssay(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '八股',
      items: [
        {
          text: 'Web 前端',
          collapsed: false,
          items: [
            {
              text: 'JavaScript',
              link: 'web-front-end/JavaScript',
            },
            {
              text: '浏览器',
              link: 'web-front-end/browser',
            },
          ],
        },

      ],
    },
  ]
}
