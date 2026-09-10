# mikeitdone.pl

Personal DIY / workshop / microblog site of Michał Jaskólski.

🌐 **Live:** [mikeitdone.pl](https://mikeitdone.pl)

## Stack

- **VitePress** — static site generator
- **GitHub Actions** — CI/CD
- **GitHub Pages** — hosting (custom domain via `docs/public/CNAME`)

## Development

```bash
pnpm install        # install dependencies
pnpm docs:dev       # start dev server
pnpm docs:build     # build for production
pnpm docs:preview   # preview production build
```

## Structure

```
docs/
├── .vitepress/
│   ├── config.ts          # site config (nav, footer, social links)
│   ├── categories.ts      # category definitions (edit here)
│   ├── posts.data.ts      # build-time loader collecting all posts + tags
│   └── theme/             # custom theme, styles, Vue components
├── public/                # static assets (logo, banner, CNAME, favicon)
├── posts/                 # blog posts + /posts/ all-posts page
├── kategorie/             # categories overview + dynamic /kategorie/<slug>
├── about/                 # about page
└── index.md               # home page
```

## Publishing a post

Add a Markdown file to `docs/posts/`, named `YYYY-MM-DD-slug.md`:

```markdown
---
title: My Post Title
date: 2026-07-29
tags:
  - projekt
  - warsztat
excerpt: One-line summary shown in listings.
---

# My Post Title

Content...
```

- The post automatically appears on **/posts/** (with tag filtering) and in any
  **category** whose tags intersect the post's `tags`.
- A short **microblog** note is just a post tagged `mikroblog`.

## Categories

Categories are defined in [`docs/.vitepress/categories.ts`](docs/.vitepress/categories.ts).
Each category maps a display name to a list of tags; every post whose tags
intersect that list is grouped under it. Add or rename a category by editing
that one file — nav, the overview grid, and the category pages update
automatically.

## Support

If you find this project useful, consider [buying me a coffee](https://buymeacoffee.com/emdzej) ☕ or [sponsoring on GitHub](https://github.com/sponsors/emdzej) or if it's your thing: via PayPal

[![Donate with PayPal](https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=TDBR3A97PLQRQ&no_recurring=0&item_name=%28emdzej%29&currency_code=PLN)

## License

MIT
