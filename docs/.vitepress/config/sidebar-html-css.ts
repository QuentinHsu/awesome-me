import type { DefaultTheme } from 'vitepress'

export function SidebarHtmlCss(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'HTML & CSS',
      items: [
        {
          text: '布局',
          collapsed: false,
          items: [
            {
              text: '基础布局',
              collapsed: false,
              items: [
                { text: '居中布局', link: '/layout/basic/center' },
                { text: 'Header Content Footer', link: '/layout/basic/header-content-footer' },
              ],
            },
            {
              text: '文本布局',
              collapsed: false,
              items: [
                { text: '中文段落排版', link: '/layout/text/chinese-paragraph-layout' },
              ],
            },

          ],
        },
      ],
    },

  ]
}
