# Multiverse Portfolio (Next.js)

Next.js 15 (App Router) + React 19 + TypeScript. No UI libraries.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit your content
Everything is in **`lib/data.ts`**: name, email, social links and every project.

- **Real images**: put files in `public/assets/design/` or `public/assets/photo/`, then set `image: "/assets/design/your-file.jpg"`. No `image` keeps the colored placeholder.
- **Resume**: save your PDF as `public/assets/resume.pdf`.
- **Add a project**: copy one `{ ... }` block in the right list and edit it.

## Structure
| Path | What |
|---|---|
| `app/page.tsx` | Hub (multiverse portals) |
| `app/design/page.tsx` | Design universe (Swiss / editorial) |
| `app/webdev/page.tsx` | Web Dev universe (terminal) |
| `app/photography/page.tsx` | Photography universe (dark gallery) |
| `components/` | Header, footer, portal transition, grid, lightbox, starfield |
| `styles/globals.css` | Shared styles |
| `styles/{hub,design,webdev,photo}.css` | One stylesheet per universe, scoped under `.u-<name>` so styles never leak |

## Deploy
```bash
npm run build    # static site in ./out (next.config.mjs: output "export")
```
- **Vercel** (easiest): push to GitHub, import the repo, done.
- **Netlify / Cloudflare Pages / GitHub Pages**: upload or point at `out/`.
- `out/` must be served over http(s); opening `out/index.html` by double-click will not work. Use `npm run dev` locally.
