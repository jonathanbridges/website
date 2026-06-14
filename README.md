# jonathanbridges.com

Personal portfolio site built with Vite, React, TypeScript, and Tailwind CSS.

The previous Create React App version lives in [`legacy/`](legacy/).

## Prerequisites

- **Node.js** >= 24 (`.nvmrc` pins `v24` — currently LTS Krypton)
- **pnpm** 11.6+

```bash
nvm use          # switches to Node 24
```

Supply-chain settings live in [`pnpm-workspace.yaml`](pnpm-workspace.yaml) (`minimumReleaseAge`, `trustPolicy`, `allowBuilds`, etc.). Run `pnpm audit` to check advisories.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

```bash
pnpm deploy
```

Deploys the `dist/` folder to GitHub Pages via `gh-pages`.

## AI Chat (optional)

The floating chat widget calls a Cloudflare Worker proxy. To enable it:

1. Deploy the worker (see [`worker/README.md`](worker/README.md))
2. Copy `.env.example` to `.env` and set `VITE_CHAT_API_URL`
3. Rebuild and deploy

Without `VITE_CHAT_API_URL`, the chat widget is hidden.

## Themes

Three themes are available: Light, Dark, and GeoCities (toggle in the header).
