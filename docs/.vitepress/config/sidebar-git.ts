import type { DefaultTheme } from 'vitepress'

export function SidebarGit(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Git',
      items: [{ text: 'Basic Commands', link: '/basic-commands' }],
    },
  ]
}
