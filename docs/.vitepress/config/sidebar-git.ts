import type { DefaultTheme } from 'vitepress'

export function SidebarGit(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Git',
      items: [
        { text: '基础', collapsed: false, items: [{ text: 'Basic Commands', link: '/basic-commands' }] },
        { text: '分支', collapsed: false, items: [{ text: '如果你想删除分支', link: '/if-you-want-to-delete-the-branch' }] },

      ],
    },
  ]
}
