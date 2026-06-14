# jonathanbridges.com

Personal portfolio site for [Jonathan Bridges](https://jonathanbridges.com).

Built with Vite, React, TypeScript, and Tailwind CSS.

## Local development

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm test:run` | Run tests |
| `pnpm lint` | Lint |
| `pnpm preview` | Preview production build |

Node **24** and pnpm **11** (`nvm use`).

## Deploy

Pushes to `main` deploy to GitHub Pages automatically via GitHub Actions.

You can also deploy manually:

```bash
pnpm deploy
```

## Optional: AI chat

See [`worker/README.md`](worker/README.md). Set `VITE_CHAT_API_URL` in `.env` to enable the chat widget locally.

The previous Create React App site is in [`legacy/`](legacy/).
