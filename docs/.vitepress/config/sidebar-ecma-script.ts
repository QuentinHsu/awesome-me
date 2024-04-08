import type { DefaultTheme } from 'vitepress'

export function SidebarECMAScript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ECMAScript',
      collapsed: false,
      items: [{ text: 'Debounce Throttle', link: '/debounce-throttle' }],
    },
  ]
}
