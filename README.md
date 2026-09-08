# bhajamaach.dev

Personal site and portfolio for Kanishka Das — systems engineering, AI infra, and low-level performance work. Built with [Astro](https://astro.build).

## Project structure

```
/
├── public/                  static assets (favicon, resume.pdf, robots.txt)
├── src/
│   ├── components/          Astro components (Nav, Footer, ThemeToggle, ParticleCube, ...)
│   ├── content/
│   │   ├── blog/            blog posts (Markdown)
│   │   └── projects/        project write-ups (Markdown)
│   ├── content.config.ts    content collection schemas
│   ├── layouts/Layout.astro base page shell (meta tags, theme init, Nav/Footer)
│   ├── lib/                 shared utilities (fuzzy search)
│   ├── pages/                routes: index, /blog, /blog/[slug], /projects, /projects/[id], /contact, rss.xml
│   └── styles/global.css    global styles, theme variables
└── astro.config.mjs
```

## Commands

All commands run from the project root:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`        | Start the local dev server at `localhost:4321` |
| `npm run build`      | Build the production site to `./dist/`         |
| `npm run preview`    | Preview the production build locally           |
| `npm run check`      | Type-check the project with `astro check`      |
| `npm run astro ...`  | Run any Astro CLI command                      |

## Content

- **Blog posts** live in `src/content/blog/*.md`. Frontmatter: `title`, `publishDate`, `tags`, `summary` (optional), `coverImage` (optional).
- **Projects** live in `src/content/projects/*.md`. Frontmatter: `name`, `description`, `category` (`Systems` | `AI/ML` | `Client Work`), `techStack`, `githubUrl` (optional), `liveUrl` (optional), `coverImage` (optional).
- Featured projects on the homepage are selected by id in `src/pages/index.astro` (`featuredIds`).

## Deployment notes

- Deployed via GitHub Pages (`.github/workflows/deploy.yml`) — builds and deploys on every push to `main`.
- `site` in `astro.config.mjs` must match the live domain — it's used for RSS item links, the sitemap, canonical/OG URLs, and the JSON-LD structured data in `Layout.astro`.
- Set to `https://bhajamaach.dev` — DNS points at GitHub Pages, `public/CNAME` holds the domain, and `public/robots.txt` (Sitemap + llms.txt pointer) matches.
