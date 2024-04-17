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
        {
          text: 'Type Challenges',
          collapsed: false,
          items: [
            { text: '测试工具', link: '/type-challenges/test-utils' },
            { text: '热身', link: '/type-challenges/00013-warm-hello-world' },
            { text: '容易', collapsed: false, items: [{ text: 'Pick', link: '/type-challenges/00004-easy-pick' }] },
          ],
        },
        {
          text: 'Types',
          collapsed: true,
          items: [
            { text: '映射类型', link: '/type-script/types/mapped/index' },

          ],
        },
      ],
    },

  ]
}
