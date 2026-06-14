# Portfolio Chat Worker

Cloudflare Worker that proxies Anthropic API requests for the portfolio AI chat demo.

## Setup

## Prerequisites

From the repo root, use Node 22.13+ and pnpm 11.6+:

```bash
nvm use
pnpm install
```

Then configure the worker:

```bash
cd worker
wrangler login
wrangler secret put ANTHROPIC_API_KEY
```

## Development

```bash
pnpm dev
```

## Deploy

```bash
pnpm deploy
```

After deploy, set `VITE_CHAT_API_URL` in the root `.env` to your worker URL + `/api/chat`.
