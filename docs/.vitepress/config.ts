import { defineConfig } from 'vitepress'
import { categories } from './categories'

export default defineConfig({
  title: 'Mike It Done',
  description: 'Make It Right — projekty DIY, warsztat i mikroblog',
  lang: 'pl-PL',
  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://mikeitdone.pl'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#2c6fbb' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'pl_PL' }],
    ['meta', { name: 'og:site_name', content: 'Mike It Done' }]
  ],

  themeConfig: {
    logo: '/logo88.png',

    nav: [
      { text: 'Start', link: '/' },
      { text: 'Wpisy', link: '/posts/' },
      {
        text: 'Kategorie',
        items: [
          { text: 'Wszystkie kategorie', link: '/kategorie/' },
          ...categories.map((c) => ({
            text: `${c.icon} ${c.name}`,
            link: `/kategorie/${c.slug}`
          }))
        ]
      },
      { text: 'O...', link: '/about/' },
      { text: 'emdzej.pl ↗', link: 'https://emdzej.pl' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Wpisy',
          items: [{ text: 'Wszystkie wpisy', link: '/posts/' }]
        },
        {
          text: 'Kategorie',
          items: categories.map((c) => ({
            text: `${c.icon} ${c.name}`,
            link: `/kategorie/${c.slug}`
          }))
        }
      ],
      '/kategorie/': [
        {
          text: 'Kategorie',
          items: [
            { text: 'Wszystkie kategorie', link: '/kategorie/' },
            ...categories.map((c) => ({
              text: `${c.icon} ${c.name}`,
              link: `/kategorie/${c.slug}`
            }))
          ]
        },
        {
          text: 'Wpisy',
          items: [{ text: 'Wszystkie wpisy', link: '/posts/' }]
        }
      ]
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@MikeItDone' },
      { icon: 'instagram', link: 'https://instagram.com/mikeitdone' },
      { icon: 'facebook', link: 'https://facebook.com/mikeitdonepl' },
      { icon: 'github', link: 'https://github.com/emdzej' }
    ],

    footer: {
      message:
        'Więcej: ' +
        '<a href="https://patreon.com/MikeItDone">Patreon</a> · ' +
        '<a href="https://www.buymeacoffee.com/mikeitdone">Buy me a coffee</a> · ' +
        '<a href="https://www.printables.com/@MikeItDone_10760">Printables</a> · ' +
        '<a href="https://emdzej.pl">emdzej.pl</a>',
      copyright: '© 2019–present Michał Jaskólski · Mike It Done'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern:
        'https://github.com/emdzej/mikeitdone.pl/edit/main/docs/:path',
      text: 'Edytuj na GitHubie'
    },

    lastUpdated: {
      text: 'Ostatnia aktualizacja',
      formatOptions: {
        dateStyle: 'long'
      }
    },

    outline: {
      label: 'Na tej stronie'
    },

    docFooter: {
      prev: 'Poprzedni',
      next: 'Następny'
    },

    darkModeSwitchLabel: 'Motyw',
    lightModeSwitchTitle: 'Przełącz na jasny motyw',
    darkModeSwitchTitle: 'Przełącz na ciemny motyw',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Do góry',
    langMenuLabel: 'Zmień język'
  }
})
