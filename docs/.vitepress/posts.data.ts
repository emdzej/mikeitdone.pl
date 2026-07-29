import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  excerpt: string
  tags: string[]
  date: {
    time: number
    string: string
  }
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  transform(raw): Post[] {
    return raw
      // Only entries that look like posts (have a date); skips /posts/ index.
      .filter((page) => page.frontmatter.date)
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title ?? url,
        url,
        excerpt: frontmatter.excerpt ?? '',
        tags: frontmatter.tags ?? [],
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string | Date): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
