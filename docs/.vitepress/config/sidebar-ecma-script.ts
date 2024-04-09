import type { DefaultTheme } from 'vitepress'

export function SidebarECMAScript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ECMAScript',
      items: [
        {
          text: 'Utility Functions',
          collapsed: false,
          items: [{ text: 'Debounce Throttle', link: '/debounce-throttle' }],
        },
      ],
    },

  ]
}
