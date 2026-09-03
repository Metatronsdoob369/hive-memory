# Spectral-terrain / TGIL — CURRENT STATE

**Path:** `/Users/joewales/spectral-terrain/` (also NODE_OUT copies)

## Where we are

- Refinery: crude (code/data) → gas (terrain / shards / calibrated vectors). Geometry, not tokenization.
- Local: Qdrant + Ollama embedder; circadian/canary/watchdog/drift.
- **Boundary invariant:** NO downstream awareness. Consumers depend on output contract; spectral must never model consumers.
- **2026-08-23 — structural provider (5-D):** `EMBED_PROVIDER=structural EMBED_DIM=5` — deterministic 5-D fingerprints (cartographer 0-dim injector lineage: size, imul-31 complexity hash, lines, defs, imports; log-scaled, l2-normalized). 2,627 files in 7.3s, zero network. Replaces 1024-D as default for static code corpora.
- **2026-08-23 — engine hardening:** bounded embed concurrency (was unbounded `Promise.all` → flooded Ollama, queue seized, ingest froze at 0% CPU), 30s AbortSignal per embed call, 128KB file cap, `web_dist`/`release`/`coverage` in SKIP_DIRS, deterministic point IDs (sha512 of domain::path — re-ingests upsert, no ghost duplicates).
- **2026-08-23 — self-portrait:** engine mapped its own body (hermes-agent). Dir-purity 50.2% vs 33.9% random at k=8 in raw 5-D; empty `__init__.py` rooms = isolated cold/high-shatter diagonal streak; heat ↔ definition density r=+0.81. Time-axis flat (corpus written in one 12-day burst) — keep time-as-position pass for older repos.
- **2026-08-23 — cold map (Bench doctrine):** failure corpus (slop-canon fractures + legal deaths + session incidents) fingerprinted into `cold-map-5`; every terrain shard scored by cosine distance to failure manifold. Doctrine: failure = salaried position, Supreme Court tenure, zero attrition, never hire the same position twice; bench admission τ-rule (d*>τ → new seat, else mass+=1); success by proxy. Manifold currently prose-heavy (13/15 records) — sharpens as code fractures accumulate. Nightly circadian re-ingest = next hook.
- **2026-08-23 — README testimonial** written in-repo (the day's story, receipts table, Bench protocol).
- **2026-08-23 — productization green-lit, family named (Joe):** **AEP (Agent Environmental Positioning)** = the MCP layer — agents know where they are in the terrain; post-RAG positioning. **FTF (Fine-Tuned Files)** = terrain-passed dataset artifacts carrying heat/shatter/cold_dist columns. AEP is the wedge, FTF the payload; every AEP install is an FTF factory. Architecture: vendor-neutral MCP only — no AI-company names, brands, or APIs in the product (Joe's legal-safety requirement); local-first; structural 5-D default (zero model deps). Pricing: $49 perpetual Local / $79yr Atlas Pass (quarterly anonymized community bench packs — the recurring hook, threat-intel-feed precedent) / $299yr Team. 3-week ship plan drafted; **product name locked: `failFence`** (fail2ban lineage — containment, not prediction; USPTO/availability check pending); Week 1 = clean-room rename + embedded vault + `npm i -g` packaging + MCP serve mode.
- **2026-08-23 — Vault directive (Joe):** the bench-registry exchange (GitHub-for-agents: benches=repos, enrolled deaths=commits, admission τ-rule=merge review, provenance chain=blame) is **Phase 3 and will be built BY agents, FOR agents** — Joe founders it (seeds the founding atlas from his own benches) but does not build it; squad/co-lab pattern (Mandorla precedent). Vault rule: geometry in, never transcripts — 5-D fingerprints and digests are the redaction layer. Sequence: AEP (wedge) → FTF (payload) → Vault (exchange).
- **2026-08-24 (same session, late) — failFence market agent spun up:** financial-intel MCP healed — root cause: MCP SDK 1.27 `validateToolOutput` + the server's `outputSchema: z.any()` → `safeParseAsync(undefined)` → `_zod` TypeError on EVERY tool call (0.01s deterministic). Fix: drop outputSchema/structuredContent from the registerTool wrapper (JSON in text content), stack-trace try/catch kept permanently. Survival initialized: 10k paper bankroll, conservative guardrails (2% max order, 5% daily stop, live OFF). LP shatter pipeline verified: dex_price returns pair/priceUsd/liquidityUsd/volume24h shape for finance-crypto temporal ingest.
- **2026-08-24 — live timers + x402 exhaust path (Joe go):** two crons armed. `failFence-lp-shatter` (9f375e67dd3f, every 30m): watchlist pools → dex_price → gemini-embedding-2 (native 3072) → upsert `spectral-heatmap` → cosine anomaly vs the pair's own rolling baseline (threshold 0.35); read-only, watchdog-quiet unless anomalous. `failFence-market-agent` (2a6901ea884e, every 4h, prompt upgraded): terrain_query pre-flight before every candidate (high-shatter → skip or halve), bench-journal recidivism check (same strategy+market class lost < 3 days → skip), then paper_open under conservative guardrails. **x402 path (post-validation):** shatter-scored pool snapshots = FTF product — "selling our exhaust fumes"; mount via sealed-pack kernel once efficacy proves out on paper. gemini-embedding-2 GA wired into engine (`EMBED_PROVIDER=gemini`, MRL slices for temporal concat); preview restricted 2026-08-24.

## Gotcha (2026-08-23): unbounded chunk embed floods local Ollama

`Promise.all(chunks.map(embedChunk))` on a large file (~3,000 chunks) sends every chunk concurrently at a single-threaded Ollama — queue seizes solid, engine freezes at 0% CPU with buffered-invisible stdout, and even external health pings time out. Two ingests died this way before diagnosis. Fix shipped: worker-pool concurrency 6 (`EMBED_CONCURRENCY`), 30s abort per call, 128KB cap. Also: node stdout is block-buffered without a TTY — engine logs look dead while working; read Qdrant point counts as the live progress signal.

## Fork note (stARBITRAGE)

- Portable into WhiteGlove: GEOTRANS wrapper + bridge (keyless).
- Do not port: Streamlit mixer.
- Gaps if forking: CartoCDN tiles (last rented surface); `MILITARY_BASES` three-item sample under-flags.

## Links

- WhiteGlove consumes TGIL patterns — see [whiteglove hub](../whiteglove/_whiteglove-Hub.md).
- Productization is now Joe-directed (2026-08-23): AEP/FTF MCP product. Clean-room rename required before ship — zero vendor names in shipped code/docs/site.
- Artifacts 2026-08-23: `/tmp/self_portrait_5d.png`, `/tmp/cold_map_overlay.png`, `/tmp/cold_map_scores.json` (cold distance per shard — candidate column for terrain-passed datasets).
