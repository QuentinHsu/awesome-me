import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'

import ComponentDocBefore from './components/doc-before.vue'
import ComponentHomeHeroInfo from './components/home-hero-info.vue'
import '@shikijs/vitepress-twoslash/style.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ComponentDocBefore),
      'home-hero-info': () => h(ComponentHomeHeroInfo),
    })
  },
}
