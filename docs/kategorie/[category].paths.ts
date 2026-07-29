import { categories } from '../.vitepress/categories'

export default {
  paths() {
    return categories.map((c) => ({
      params: {
        category: c.slug,
        name: c.name,
        icon: c.icon,
        description: c.description,
        tags: c.tags
      }
    }))
  }
}
