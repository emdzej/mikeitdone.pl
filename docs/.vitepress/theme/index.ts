import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Banner from './components/Banner.vue'
import Posts from './components/Posts.vue'
import PostItems from './components/PostItems.vue'
import CategoryView from './components/CategoryView.vue'
import CategoriesOverview from './components/CategoriesOverview.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Renders only on the home page (layout: home).
      'home-hero-before': () => h(Banner)
    })
  },
  enhanceApp({ app }) {
    app.component('Banner', Banner)
    app.component('Posts', Posts)
    app.component('PostItems', PostItems)
    app.component('CategoryView', CategoryView)
    app.component('CategoriesOverview', CategoriesOverview)
  }
} satisfies Theme
