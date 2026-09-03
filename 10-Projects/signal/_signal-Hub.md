# Signal — CURRENT STATE

**Role:** client-site upgrade — one embed script on a client's webpage that audits SEO + AIO on load and shows a token-scoped dashboard. Not a Hydra sibling and not a multi-tenant SaaS admin product yet.

## Where we are (2026-08-22)

- **Repo:** `/Users/joewales/signal` (local git `main` @ `6808424`). Not nested in property-hydra.
- **Posture:** feature Joe sells/ships onto client pages. Register domain → embed pack → beacon → `/dashboard/[token]`.
- **v0.1 shipped:** Bun + Next 16 (webpack-only `next dev --webpack`) + React 19 + Tailwind v4 + Postgres 16 (docker compose `:5433`) + Drizzle + Zod contracts + Vitest + CI.
- **Shape from v1:** token per site (hashed at rest), pack served from `/api/pack`, beacon, token-scoped dashboard.
- **Signals from v2:** AIO weight table (base 50; structured data +15; FAQ +10; HowTo +10; definitions +10; questions +5). Deterministic only.
- **Left on floor:** auto-fix DOM mutation, cross-tenant “self-learning,” OpenAI on ingest, unauthenticated global site list, WP/Shopify plugins.
- **Gotcha fixed:** Turbopack treated `~/pnpm-lock.yaml` as project root → React Client Manifest / `global-error` blank crash. Pin `turbopack.root` + `outputFileTracingRoot`; run webpack in dev.
- **Next session:** try sample sites, then real client sites Joe has access to. White-label / Joe’s origin in embed is the natural next cut after a real page closes the loop.

## Run

```bash
cd ~/signal
docker compose up -d
bun install
bun run db:migrate
bun run dev          # webpack; http://localhost:3000
```

Example page: `/example-client-page.html?token=…` from the dashboard.

## Boundaries

- No cloud inference of page content in v0.1.
- No invented lift claims (“25% higher SEO”) in product UI.
- Do not write into property-hydra for this product.
- Secrets stay in `.env.local` (gitignored). `.env.example` only in git.
- **Launched product off Cosine+.** Stay Next.js + Postgres. Do not rebuild on Higgsfield Workers. Higgsfield is a render bus, not the app host.

## Links (do not copy)

- Repo: `/Users/joewales/signal`
- Concept packets (reference only): `~/Downloads/upgrading-packet-v1.zip`, `~/Downloads/upgrading-packet-v2.zip`
- Plan: `~/.cursor/plans/signal_production_start_3ef3f818.plan.md`
