// Single source of truth for post categories.
//
// A category groups posts by their tags: any post whose `tags` intersect a
// category's `tags` list belongs to that category. To add or rename a
// category, edit this file only — nav, category pages and the overview all
// derive from it automatically.

export interface Category {
  /** URL slug, used for /kategorie/<slug> */
  slug: string
  /** Display name */
  name: string
  /** Emoji shown next to the name */
  icon: string
  /** Short description shown on the category page */
  description: string
  /** Posts with any of these tags belong to this category */
  tags: string[]
}

export const categories: Category[] = [
  {
    slug: 'projekty',
    name: 'Projekty',
    icon: '🛠️',
    description: 'Większe realizacje od pomysłu do efektu końcowego.',
    tags: ['projekt', 'project', 'diy']
  },
  {
    slug: 'warsztat',
    name: 'Warsztat',
    icon: '🔧',
    description: 'Motoryzacja, naprawy i wszystko, co dzieje się w garażu.',
    tags: ['warsztat', 'workshop', 'cars', 'e46', 'moto']
  },
  {
    slug: 'narzedziownia',
    name: 'Narzędziownia',
    icon: '🧰',
    description: 'Narzędzia, sprzęt i recenzje wyposażenia.',
    tags: ['narzedzia', 'workbench', 'sprzet', 'video-gear', 'recenzja']
  },
  {
    slug: 'mikroblog',
    name: 'Mikroblog',
    icon: '📝',
    description: 'Krótkie notki, myśli i drobne aktualizacje.',
    tags: ['mikroblog']
  }
]

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug)
