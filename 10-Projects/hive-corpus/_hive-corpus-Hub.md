# Hive Corpus — CURRENT STATE (design gate, not yet building)

**Thesis:** onboard ~3,000 hours of LLM session logs (Claude, Grok, GPT, Gemini, …) plus a cross-session generated wiki. This is NOT project data — it is Joe's brain-record across a period of personal upheaval and rebuilding; the value includes micro-decisions he won't remember and questions he doesn't yet know to ask. Structure precedes onboarding (Joe, 2026-08-12); nothing is ingested until the decisions below are LOCKED.

## Constitution (Joe, 2026-08-12 — supersedes the earlier "distillation" design)

**Preservation-neutral.** Nothing discarded; nothing ranked at ingestion; no pre-baked rule decides what of Joe's conversation, style, or history is "important." Agents may generate readings; **only Joe promotes anything from corpus into working memory** — there is no write path from corpus to Director/hubs/rules except through Joe's dated note (token-gate shape: agents propose, Joe ratifies). Merit determination on his own past is his act alone.

## Status

- Vessel standing EMPTY at `/Users/joewales/hive-corpus` (local git, NO remote — by lock #1). Decisions 1–3 LOCKED; 4–6 OPEN. Ingestion remains gated: no collecting exports, no normalizing, no lens tooling against real data until 4–6 lock and Joe says go (pilot #6 governs first data).

## Decisions (LOCKED = Joe's dated note beside it)

1. **Vessel** — **LOCKED (Joe, 2026-08-12):** one dedicated repo `/Users/joewales/hive-corpus`, append-only, per-file hashes. **Local-only — no remote, never pushed — until a reversible redaction layer exists** (secrets flagged + vaulted, never deleted). Simplified from the earlier two-tier sketch per Joe's one-repo picture.
2. **Envelope = facts of capture only** — **LOCKED (Joe, 2026-08-12):** organization is provider + chronology, nothing else — one folder per model (claude/, gpt/, grok/, gemini/, new providers get new folders), files in date order. Frontmatter: source model, export format, date span, raw hash. No topic tags, no importance field, no project mapping at ingestion; those are lens outputs later, suggested never stamped.
3. **Lossless normalization** — **LOCKED (Joe, 2026-08-12):** records land whole and in the order lived — one canonical transcript format (turns, timestamps, model), hash-verified, reversible; format is the only permitted transformation at the door, content untouched, nothing summarized or reordered.
4. **Lenses, not distillates** — readings are on-demand generated views citing raw (session + turn); disposable, regenerable, never authoritative, never a filter on what exists. — OPEN
5. **Merit loop** — lens findings land in a candidates file with citations; promotion into Director/hubs/rules requires Joe's dated note. No exceptions, no auto-promotion. — OPEN
6. **Pilot = recall test** — Joe names half-remembered moments; tooling must find them and descend to the raw exchange. Findability is the bar (preserves unknown-unknowns), not curation quality. — OPEN

## Scope addendum (2026-08-12): ~150 NotebookLM notebooks

- In scope, same constitution — content is never judged/filtered at the door ("not PC-approved" is not a field; local-only means no platform in the loop).
- Structural fit under lock #2: provider folder `notebooklm/`, one sub-folder per notebook (Joe's own titles = facts of capture), each a BUNDLE (sources, notes, generated material, chats) with the same capture-facts frontmatter. Bundles, not transcripts — consistent with the lock's spirit.
- **Priority flag:** these are the most at-risk corpus assets — hosted on Google's infrastructure, subject to their retention/policy/judgment, no clean bulk export. When Joe opens the collection gate, notebooks go FIRST, before chat logs. The gate itself is unchanged and remains Joe's.

## Design note (2026-08-12, Joe's idea — pends locks 4–6): book-pipeline as the derived-text stage

- Attach book-pipeline's deterministic core as an on-contact ingestion stage. Two-class rule keeps it constitutional:
  - **Joe's words** (chats, notes): lossless forever per lock #3 — markdown may be emitted BESIDE, never instead.
  - **Third-party sources** (notebook PDFs/docs, books, papers — reproducible, not authored by Joe): derived markdown + raw hash + bibliographic pointer REPLACES the bulk; original to cold storage or left where it lives. ~95–99% size reduction where the size actually is.
- Verify at gate-open (not assumed): PDF→markdown lives in book-pipeline's deterministic half; the credit-blocked DNA stage should be irrelevant here.

## Links (do not copy)

- Vault rules: [Memory-Protocol](../../00-Director/Memory-Protocol.md)
- Gate pattern precedent: [hermes-spectral hub](../hermes-spectral/_hermes-spectral-Hub.md) token gate (propose/ratify, criteria before temptation)
- Provenance/immutability pattern: [x402 hub](../x402-points-of-sale/_x402-points-of-sale-Hub.md) sealed packs
- Router/compile: `arbiterOS-legal-confidant-/tools/hive`
