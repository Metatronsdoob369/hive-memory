# Hive Corpus — CURRENT STATE (design gate, not yet building)

**Thesis:** onboard ~3,000 hours of LLM session logs (Claude, Grok, GPT, Gemini, …) plus a cross-session generated wiki. This is NOT project data — it is Joe's brain-record across a period of personal upheaval and rebuilding; the value includes micro-decisions he won't remember and questions he doesn't yet know to ask. Structure precedes onboarding (Joe, 2026-08-12); nothing is ingested until the decisions below are LOCKED.

## Constitution (Joe, 2026-08-12 — supersedes the earlier "distillation" design)

**Preservation-neutral.** Nothing discarded; nothing ranked at ingestion; no pre-baked rule decides what of Joe's conversation, style, or history is "important." Agents may generate readings; **only Joe promotes anything from corpus into working memory** — there is no write path from corpus to Director/hubs/rules except through Joe's dated note (token-gate shape: agents propose, Joe ratifies). Merit determination on his own past is his act alone.

## Status

- NOT STARTED, by design. Permitted before locks: locking decisions here; creating an empty vessel repo containing only this constitution. NOT permitted: collecting exports, normalizing, ingesting, or building lens tooling against real data.

## Decisions (LOCKED = Joe's dated note beside it)

1. **Vessel** — separate repo (`hive-corpus`), append-only, content-addressed. Two tiers: sealed originals never leave the machine unencrypted; shareable layer carries reversibly-redacted copies (secrets flagged + vaulted, never deleted). — OPEN
2. **Envelope = facts of capture only** — source model, export format, date span, raw hash. No topic tags, no importance field, no required project mapping at ingestion; those are lens outputs later, suggested never stamped. — OPEN
3. **Lossless normalization** — one canonical transcript format (turns, timestamps, model), hash-verified, reversible. Format is the only permitted transformation at the door; content untouched. — OPEN
4. **Lenses, not distillates** — readings are on-demand generated views citing raw (session + turn); disposable, regenerable, never authoritative, never a filter on what exists. — OPEN
5. **Merit loop** — lens findings land in a candidates file with citations; promotion into Director/hubs/rules requires Joe's dated note. No exceptions, no auto-promotion. — OPEN
6. **Pilot = recall test** — Joe names half-remembered moments; tooling must find them and descend to the raw exchange. Findability is the bar (preserves unknown-unknowns), not curation quality. — OPEN

## Links (do not copy)

- Vault rules: [Memory-Protocol](../../00-Director/Memory-Protocol.md)
- Gate pattern precedent: [hermes-spectral hub](../hermes-spectral/_hermes-spectral-Hub.md) token gate (propose/ratify, criteria before temptation)
- Provenance/immutability pattern: [x402 hub](../x402-points-of-sale/_x402-points-of-sale-Hub.md) sealed packs
- Router/compile: `arbiterOS-legal-confidant-/tools/hive`
