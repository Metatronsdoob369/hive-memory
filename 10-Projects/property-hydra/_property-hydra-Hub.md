# stARBITRAGE / property-hydra — CURRENT STATE

**Role:** one weapon — unclaimed Layer 1, public overlays Layer 2, assembler/esign as the close. Atlas / GEOID / Cesium are perforated overlays and a demo surface, not a second product and not the close path.

## Where we are (2026-08-22)

- **Operating loop is agent-run.** Incoming agents load repo `AGENTS.md` → `docs/HYDRA_OPS.md`. Cursor always-on rule + skill: `property-hydra/.cursor/rules/hydra-ops.mdc`, `.cursor/skills/hydra-ops/SKILL.md`. Architecture (jsonl, router, assembler, ARMED gates, local Ollama) is already built. Wholesale *feed* is starved, not deleted — do not rewrite it.
- **Store:** AL + NC in `store/records.jsonl`. **No MS on the Board until ingest.** Dashboard reads that jsonl only; `leads/*.tsv` is not live until `scanner/ingest.py`.
- **MS sweep engine lives.** Live Kelmar host is `ms.findyourunclaimedproperty.com` (old `mississippi.` is NXDOMAIN). Official treasury hub gates Search through a citizenship form; sweep hits Kelmar directly.
- **MS probes (not ingested unless Joe says):** `leads/MS_sweep_smoke.tsv` (TRUST+Jackson, 287); `leads/MS_sweep_lp_mineral_blank.tsv` (LP 189 + MINERAL 41, statewide `--blank-only`).
- **Jefferson tax lien** (~14k) is the overlay that actually deposited. Wholesale `:5052` down; `extra_overlays.wholesale` empty. Ignore `BEAD*` as `cross_signal`.
- **Close stack:** `contract_assembler.py`, Deals, esign dry-run, `HYDRA_ARMED=false`. Never arm from chat. In-house counsel reviews finder agreements (MS 10% cap) — Stream 1, not a SaaS legal product.
- **Sovereign `/sovereign`:** complete & leak-bound (2026-07-09). Demo. Not the loop.
- **Default next:** MS `ESTATE`+`TRUST` sweep, ingest when Joe says, overlay the shortlist. Skip `INC/CORP/LLC` until a packet has closed.
- **Compile: hold** (roster). Hub may update; do not expand Graphify pilot roots to hydra until Joe opens next root.

Atlas design remains locked (housing-first catalog, no Seller|Buyer lens) — it is not this week's close path. Spec linked below.

## Gotchas (this lane)

- Tokens (`TRUST` / `ESTATE` / `LP` / `LLC`) are **last-name substrings**, not property-type filters. Types (`ROYALTIES`, …) are a post-filter on the TSV. `MINERAL` is a name hit, not a sector hunt. Blank-city for rare tokens (1000-row cap truncates common names).
- MS list JSON **redacts holder and reportDate** (state `propertySearchResultFields` allowlist). AL/NC list TSVs are also date-empty. The 7-month MS locator clock cannot run off sweep TSV. Mapper aliases live in `unclaimed-property-search/lib/sws_sweep.py`.
- CDP Chrome for sweeps must stay alive; a tool-shell that exits kills `chrome-debug.sh`.
- `bridge/ingest.py` quarantines max_score ≤ 52. Prefer `scanner/ingest.py` for Board visibility; then filter MS, minScore 0.
- Nested `property-hydra/hive-memory/` is a stale clone. Writes go here (`~/Hive`) only.

## Boundaries

- Lead with government / public primitives (Working-Style).
- **FAC ≠ DTCC/custody cross** (bond-hunt). Atlas may register FAC as a federal vector; it is not the A↔B bridge.
- No cloud inference of lead data. No invented leads from name match. Join keys: CUSIP, GEOID/parcel, UEI/DUNS, CFDA, FRPP id.
- Do not treat DCIP-on-Guilford as a play. Do not fire CGS `--live` without a real CUSIP **and** Joe.
- API-All-the-X = catalog lineage / civic framing, not a forced repo merge into Hydra.
- Dashboard: webpack only. Lead markers on 3D tiles: billboards + `disableDepthTestDistance: Infinity`.

## Links (do not copy)

- Repo: `/Users/joewales/property-hydra`
- Operate: `docs/HYDRA_OPS.md`
- Agent entry: `AGENTS.md` / `CLAUDE.md` / `CODEX.md`
- Atlas design: `docs/superpowers/specs/2026-08-18-federal-vector-atlas-design.md`
- Sovereign memory: `stARBITRAGE/data/SOVEREIGN_MEMORY.md`
- Sweep engine: `/Users/joewales/unclaimed-property-search`
- Opportunity membrane: `shared/opportunity-contract/`
