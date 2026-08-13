# Hermes Spectral — CURRENT STATE (handoff brief)

**Thesis:** Re-implement Hermes as a financial-intel agent substrate. The primary loop — financial-intel MCP corpora → spectral topology of procedures → value conversion for paying agents — is sovereign. Residual signals (consistency scores, timing features, provenance graphs) power secondary streams (blockchain arbitrage, polygraph-style verification) as near-free byproducts: the bartender and the booze. Settlement and selective discovery run on x402. **Clarity of the primary product is the governing constraint.**

**Vision source:** `vision-2026-08-11-hermes-spectral.pdf` (this folder; Grok print of Joe's 2026-08-11 session). Its timeline framings carry no authority (Joe, 2026-08-11) — sequence and completion criteria below govern instead.

## Boundaries — test every expansion against these before starting it

1. **Clarity.** Ask "does this dilute or displace the core work?" The perk never becomes the job. Muddying flags and early-warning table: vision PDF §7.
2. **Key separation.** One process sells, a different process pays. The seller kernel stays key-less (its boot refuses spending-shaped keys in env); spending lives only in the wallet process (`Whiteglove/packages/wallet-mcp`).
3. **Manifest authority.** Routes, schemas, prices, and discovery come from generated, digest-locked artifacts. The kernel already refuses second-source patterns by design — keep that property in anything new.
4. **Residual rules.** A residual is generated whether or not it is consumed; residual revenue never justifies primary architecture; residual consumption never sets collection priorities.

## Already built — extend, don't rebuild

- **Seller rails:** `~/Whiteglove/spectral-x402` — mount kernel, two doors (HTTP + MCP Streamable HTTP), sealed content-addressed packs, SQLite ledger with structural invariants, real-settlement gate. Adding a mount is **config-only** (proven: `src/test/boundary.test.ts`, third-mount test — that test is the recipe). Current state, scar tissue, and the MCP-listing rules: [x402 hub](../x402-points-of-sale/_x402-points-of-sale-Hub.md) — **read it before any MCP-surface or listing work.**
- **Buyer side:** `~/Whiteglove/packages/wallet-mcp` + `spectral-x402/scripts/pay-tile.ts` — agent-pays capability, started 2026-08-10.
- **Corpus source:** `~/NODE_OUT_Master/financial-intel-mcp` — 31 tools, paper arena, survival/guardrails loop. Its intermediates (consistency, timing, provenance) ARE the residual inventory; no new pipeline needed to observe them.
- **Hermes runtime:** `~/.hermes/config.yaml` (blockrun model routing).
- **Sibling product:** SupplyLens (`Marsh-Press-Co/supplylens`) — official x402 v2 stack, Bazaar declaration in. The discovery precedent to copy, not re-derive.

## Mission status

- **Mission 1 — MERGED & LIVE (2026-08-12).** PR #36 merged (`48bbe93`); service restarted; live discovery publishes 9 resources incl. all three fintel routes; unpaid fintel call returns 402 challenge. Revenue address: `X402_PAYTO_FINTEL_PAPER_ARENA_PAYTO` = the address `joewales.base.eth` resolves to on Base (`0xe8fC…a0D9`, resolved on-chain via the Basenames resolver, Joe's call 2026-08-12) — NOTE this differs from the `0x3276…CCE8` the other two mounts pay to. CC-BY-4.0 stamp still awaiting Joe's confirmation before Mission 3 listing. Original record: Pack `fintel-paper-arena-2026-08` cut from the paper arena's own record (16 tiles: 12 closed trades, 3 strategy summaries, 1 portfolio snapshot; deterministic rebuild verified byte-identical). Mounted as the third sold mount via manifest edit only — zero kernel code. Both suites green (spectral-x402 194/194 incl. 3 new fintel tests pinning paid delivery over both doors on loopback; spectral-config no drift). Branch `worktree-fintel-pack-v0` (worktree `.claude/worktrees/fintel-pack-v0`), commits `aa4cd78..c5db8eb`. Cutter: `spectral-x402/scripts/cut-fintel-pack.ts`. Pack files copied to the main checkout's `spectral-x402/packs/` (inert until merge). Prices: tile 200 / proof 100 / manifest 800 atomic USDC, Base Sepolia. payTo env: `X402_PAYTO_FINTEL_PAPER_ARENA_PAYTO` (documented in `.env.example`).

- **Mission 2 — ASSIGNED TO HERMES (2026-08-13).** Deliverable: the spectral-topology design doc, written INTO THIS FOLDER as `2026-08-XX-spectral-topology-design.md`. Read this whole hub first. Mission 1 is MERGED & LIVE — do not redo any of it. Do NOT edit spectral-x402 or spectral-config (build lanes belong to the Claude Code session: Pi deploy → CDP Sepolia lane → mainnet gate). Done when the doc names (1) concrete data structures, (2) embedding approach, (3) update cadence — all computable from intermediates that already exist (financial-intel-mcp tool outputs, the paper-arena record incl. the sealed fintel pack, the canon_version-1 tile discipline in spectral-config/src/canon.ts + tile.schema.ts) — and (4) walks one worked example from real corpus data. Design only; no code.

## Missions — in order; run Boundary 1 before each

Build order below; Joe's clarification order for the vision's open questions (1→2→4→3→5) is preserved inside it — Q3 (muddying thresholds) lives inside Mission 4's density review rather than as its own mission.

1. **Financial pack v0.** Cut one high-signal slice of financial-intel-mcp output into a sealed pack; mount it on spectral-x402 — config-only, recipe = the third-mount boundary test. **Done when:** a paid call delivers the pack over both doors on loopback, and both suites stay green (`spectral-x402: npm test`; `spectral-config: npm run check:all`).
2. **Spectral topology decision** (vision Q1). Name the concrete data structures, embedding approach, and update cadence; v0 must be computable from intermediates that already exist. **Done when:** a design doc in this folder names all three and walks one example from real corpus data.
3. **Listing experiment** (vision Q2). One surface — Bazaar first, SupplyLens precedent — financial-intel capabilities only, copy that leads with the primary mission. **Gate:** the x402 hub's scar-tissue list verified present on the serving stack. **Done when:** the listed capability is reached and paid by an external wallet on testnet.
4. **Residual logging, internal-first** (vision Q4, folding in Q3). Thin overlay off the primary loop logging consistency/timing/provenance residuals — an overlay on existing intermediates, never a parallel pipeline. **Done when:** the log exists and its density review has an owner and a numeric threshold, measured in events, not weeks.
5. **Attestation wrappers** (vision Q5) — starts only after Mission 4's density review passes its threshold.

## Token gate — evidence-gated issuance (banked 2026-08-11, Joe's framing)

Anyone can mint a token; the value is the trust record behind it. So the token is
not a mission — it is a **promotion gate** fed by a witness log, the same
fail-closed shape as `mainnet-gate.json`. Issuance happens only when signed
evidence crosses pre-declared graduation criteria; until then the subject is
closed and costs nothing.

**Mechanism (the only buildable part today):** a witness log — periodic signed
attestations cut from the kernel's own ledger (settled calls, unique payers,
volume per mount, refusal/replay counts, invariant-breach count), each tile
content-addressed and chained via `prev_cid` so history cannot be rewritten.
Same pack discipline as Mission 1, pointed at the kernel's own commerce record.
A thin overlay on data the ledger already holds — Boundary 4 compliant,
generated whether or not consumed. Build alongside Mission 4's residual logging.

**Graduation criteria (drafts — Joe edits, then they freeze):**
1. External payers not operated by us: sustained > N distinct payers.
2. Settled volume: M consecutive witness epochs above a floor Joe sets.
3. Invariant breaches across the whole attestation chain: zero.
4. Settlements verified through a real facilitator (not stub), on the
   network tier the gate names.
5. Counsel review of the issuance shape — human-only gate; a token promoted
   against a revenue history is a securities-shaped claim.

**Rule:** criteria may be tightened at any time; loosening or waiving any
criterion requires Joe's written note in this hub with a date. The witness
log exists regardless of the token — it is the trust record, and it is
valuable even if the answer to the coin stays "not yet" forever.

## Links (do not copy)

- Rails + scar tissue + settlement state: [x402-points-of-sale hub](../x402-points-of-sale/_x402-points-of-sale-Hub.md)
- Substrate family: [whiteglove hub](../whiteglove/_whiteglove-Hub.md)
- War room: co-lab #33 (x402 points of sale)
