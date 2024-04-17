import { h } from 'vue'
import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'

import ComponentDocBefore from './components/doc-before.vue'
import ComponentHomeHeroInfoAfter from './components/home-hero-info-after.vue'
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
      'home-hero-info-after': () => h(ComponentHomeHeroInfoAfter),
    })
  },
}
