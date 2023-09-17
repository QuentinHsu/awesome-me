import DefaultTheme from 'vitepress/theme'
import Footer from './footer.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Footer,
}
