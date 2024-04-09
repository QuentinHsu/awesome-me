import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ComponentDocBefore from './components/doc-before.vue'
import ComponentHomeHeroInfoAfter from './components/home-hero-info-after.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ComponentDocBefore),
      'home-hero-info-after': () => h(ComponentHomeHeroInfoAfter),
    })
  },
}
