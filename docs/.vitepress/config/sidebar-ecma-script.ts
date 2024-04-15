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
        {
          text: 'Syntax',
          collapsed: false,
          items: [{ text: 'JavaScript 的提升', link: '/syntax/javascript-hoist' }],
        },
      ],
    },

  ]
}
