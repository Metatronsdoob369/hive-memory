# Hive Corpus — CURRENT STATE (design gate, not yet building)

**Thesis:** onboard ~3,000 hours of LLM session logs (Claude, Grok, GPT, Gemini, …) plus the cross-session "LLM wiki" — but structure is a hard precondition (Joe, 2026-08-12): **nothing is ingested until the six decisions below are locked.** This hub is the readiness gate.

## Status

- NOT STARTED, by design. Do not begin ingestion, normalization, or export-collection from any session archive until Joe marks each decision LOCKED here.
- What exists today: Graphify graph+wiki compiled from vault docs only (`layers: graph+wiki true, spectral false`). The envisioned LLM wiki (cross-session synthesis) is a DIFFERENT artifact — see decision 4.

## The six decisions (LOCKED = Joe's dated note beside it)

1. **Layer separation** — raw corpus lives outside the working vault (sibling repo `hive-corpus` preferred over an in-repo `30-Corpus/`; 3k hours must not ride in the brain's git clone). Brain links corpus; never the reverse. — OPEN
2. **Canonical session schema** — frontmatter per session: source model, date, format-of-origin, project mapping, hash of raw. Raw immutable + content-addressed; derived files point at raw. — OPEN
3. **Distillation over dumping** — retrieval compiles per-session distillates (decisions, gotchas, artifacts, links) in SESSION_LOG shape; raw transcripts never enter autopack/assemble directly. — OPEN
4. **LLM wiki = generated artifact** — synthesis pages derived from corpus+vault, regenerated never hand-edited (manifests discipline; drift = regenerate). — OPEN
5. **Door gate** — secrets sweep + provenance stamp on every incoming file, refuse-don't-repair. — OPEN
6. **Pilot before mass onboarding** — one bounded slice (e.g. 30 days of Claude sessions), retrieval-value criteria written BEFORE the pilot runs; 3k hours move only after the pilot passes. — OPEN

## Links (do not copy)

- Vault rules: [Memory-Protocol](../../00-Director/Memory-Protocol.md) (compact-vs-linked, no twin notes, compile visibility)
- Pattern sources: sealed-pack/provenance discipline in [x402 hub](../x402-points-of-sale/_x402-points-of-sale-Hub.md); evidence-gate pattern in [hermes-spectral hub](../hermes-spectral/_hermes-spectral-Hub.md) (token gate)
- Router/compile: `arbiterOS-legal-confidant-/tools/hive`
