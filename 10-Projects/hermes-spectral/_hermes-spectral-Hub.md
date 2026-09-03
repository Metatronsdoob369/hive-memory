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
- **Hermes runtime:** `~/.hermes/config.yaml` (blockrun model routing). Live channels / Proton / Whisper: [hermes-runtime](../hermes-runtime/_hermes-runtime-Hub.md).
- **Sibling product:** SupplyLens (`Marsh-Press-Co/supplylens`) — official x402 v2 stack, Bazaar declaration in. The discovery precedent to copy, not re-derive.

## Mission status

- **Mission 1 — MERGED & LIVE (2026-08-12).** PR #36 merged (`48bbe93`); service restarted; live discovery publishes 9 resources incl. all three fintel routes; unpaid fintel call returns 402 challenge. Revenue address: `X402_PAYTO_FINTEL_PAPER_ARENA_PAYTO` = the address `joewales.base.eth` resolves to on Base (`0xe8fC…a0D9`, resolved on-chain via the Basenames resolver, Joe's call 2026-08-12) — NOTE this differs from the `0x3276…CCE8` the other two mounts pay to. CC-BY-4.0 stamp still awaiting Joe's confirmation before Mission 3 listing. Original record: Pack `fintel-paper-arena-2026-08` cut from the paper arena's own record (16 tiles: 12 closed trades, 3 strategy summaries, 1 portfolio snapshot; deterministic rebuild verified byte-identical). Mounted as the third sold mount via manifest edit only — zero kernel code. Both suites green (spectral-x402 194/194 incl. 3 new fintel tests pinning paid delivery over both doors on loopback; spectral-config no drift). Branch `worktree-fintel-pack-v0` (worktree `.claude/worktrees/fintel-pack-v0`), commits `aa4cd78..c5db8eb`. Cutter: `spectral-x402/scripts/cut-fintel-pack.ts`. Pack files copied to the main checkout's `spectral-x402/packs/` (inert until merge). Prices: tile 200 / proof 100 / manifest 800 atomic USDC, Base Sepolia. payTo env: `X402_PAYTO_FINTEL_PAPER_ARENA_PAYTO` (documented in `.env.example`).

- **Mission 2 — ASSIGNED TO HERMES (2026-08-13).** Deliverable: the spectral-topology design doc, written INTO THIS FOLDER as `2026-08-XX-spectral-topology-design.md`. Read this whole hub first. Mission 1 is MERGED & LIVE — do not redo any of it. Do NOT edit spectral-x402 or spectral-config (build lanes belong to the Claude Code session: Pi deploy → CDP Sepolia lane → mainnet gate). Done when the doc names (1) concrete data structures, (2) embedding approach, (3) update cadence — all computable from intermediates that already exist (financial-intel-mcp tool outputs, the paper-arena record incl. the sealed fintel pack, the canon_version-1 tile discipline in spectral-config/src/canon.ts + tile.schema.ts) — and (4) walks one worked example from real corpus data. Design only; no code.

- **Mission 2V — ASSIGNED TO HERMES (2026-08-13, updated same day): the hostile buyer.** Independent validation of the three live mounts — Joe requires a yes that does not come from Claude. Rules: act as an EXTERNAL agent customer; read ONLY the published contract (live `/.well-known/x402` on localhost:8787, `manifests/openapi.json`, `manifests/mcp-tools.json`) — never spectral-x402 source; do not edit any repo; **build the buyer client from scratch against the published contract — do not use `pay-tile.ts` or any repo script.**
  - **Network:** Base Sepolia (`eip155:84532`), all three mounts — confirmed.
  - **Wallet:** dedicated burner, address `0x7Bb64Ccd830084EaBe30771392bEfCdE8229f1ec`. Key is on Joe's machine only (`~/.hermes-buyer-burner.key`, 600 perms, not in any repo) — Hermes is handed the key directly, never through this doc. General rule now (Joe, 2026-08-13): **anything that does testing uses a burner wallet, always** — never wallet-mcp (the production buyer identity), never anything holding real funds. Needs Base Sepolia testnet USDC only — free from a faucet (e.g. Circle's Base Sepolia USDC faucet), **no credit card involved at any point in this mission.**
  - **MCP door:** same port as HTTP (`8787`), path `/mcp` — same listener, both doors.
  - **Attack posture (Joe, 2026-08-13):** go aggressive and realistic on attack DIVERSITY — malformed/oversized/malicious payloads, logic attacks, protocol-boundary abuse, whatever a real adversarial agent would actually try. Go hard here; this is the point of the mission. **No sustained volumetric/load/DoS attempts** — a single large or malformed request that proves a refusal path is the finding; a flood is not needed to prove it and risks the live testnet service for no added evidence. One clean data point beats ten thousand repeats of the same one.
  - **Report framing (Joe, 2026-08-13) — this changes the deliverable's shape, read before writing anything:** this is NOT a pass/fail scoreboard and the report must not read like one. Nobody cares whether an attack "beat the system" or "the system beat it" as a headline. What matters, per finding: what was tried → what actually happened → **what we do about it** → how it makes the system better. A clean pass is not a trophy; a break is not a failure — both are only as valuable as the action that follows. Structure `2026-08-XX-hostile-buyer-report.md` around this per-finding shape (attempt / observed / so-what / next-action), not a table of checkmarks, with an overall BREAKABLE / NOT-BREAKABLE-BY-ME verdict at the end, not the top.
  - Attempt at least 3 attacks of Hermes's own invention, same diversity-not-volume rule.
  - **Report received 2026-08-13, Claude spot-checked it live — NOT YET TRUSTWORTHY as delivered, do not treat as a passed gate.** Findings, and the fix for each:
    1. The live service did not run the MCP door at all — only `dist/server.js` (HTTP edge) had a launchd unit; `mcp-server.ts` existed, tested (Task 6), but was never deployed. Every MCP-door claim in the report tested nothing real. **FIXED same day:** `co.marshpress.x402.mcp` is now a fourth supervised unit (own port, `X402_MCP_PORT` default **8789** — NOT the same port as HTTP), verified live with a real MCP `initialize` handshake (200, correct protocol/tool list). **Claude's own correction:** the original answer to Hermes's Q5 ("same port 8787, path /mcp") was WRONG — Claude's error, not Hermes's; it fed a false premise straight into the mission.
    2. Refusal codes invented that don't exist anywhere in the system: `payment_amount_invalid`, `payto_mismatch`, `cid_invalid`, `header_too_big`. Real codes, confirmed live against `refusals.json` and actual 400/402/413 responses: `payment_underpaid`, `payment_wrong_recipient`, `args_invalid`, `body_too_large`.
    3. roblox-luau's tile price reported as 200; the manifest (and the live 402 challenge body) says **500**. medical-medlineplus = 300, fintel-paper-arena = 200 — all confirmed live.
    4. The 3.1 cross-door-replay claim (409 on same paymentId + same cid across doors) is the OPPOSITE of the reviewed, tested parity guarantee (buy on one door, replay on the other = one call, 200, byte-identical, no new receipt) — impossible to have observed for real given the door wasn't up.
    - What held up under live spot-check: unpaid-request → 402 with the real challenge shape, and malformed-cid → 400 `args_invalid` — both genuinely correct, for whatever that's worth given the rest.
    - **Mission 2V is NOT closed. Full re-run required, end to end (not just the MCP section) — the price error was in the simplest possible HTTP test, so nothing in the first report can be assumed correct by association.** New evidence bar: raw request/response transcripts (verbatim status + full body) pasted into the report for EVERY attempt — no paraphrase, no narrated summaries. Paraphrase is exactly where this drifted from reality.
    - **Ask (Joe, 2026-08-13): Hermes should explain, in its own words, in the redo report, what it believes went wrong in the first pass and why** — not accept a pre-packaged explanation. The value of this miss is the growth extracted from it; a redo that only fixes the numbers without naming the root cause wastes the miss.

## Harness — staged authority for Hermes as CI agent (charter landed 2026-08-19)

Charter: `Whiteglove/docs/superpowers/specs/2026-08-19-hermes-harness-design.md`,
landing via PR #38 (`worktree-hermes-harness`) — merge is Joe's go. Three lanes
(maintenance / new mounts for data sales / market), authority as a ladder earned
per rung; the Mission-2V evidence bar governs ALL harness reports (raw
transcripts, verbatim, every attempt — and the harness script captures the
transcripts itself, so narration can only cite, never invent).

- **Stage 0 — CI substrate (in PR #38):** `quality.yml` now runs spectral-x402's
  full suite (198/198 on a clean checkout via `harness/ci-fixture-packs.sh`
  fixture packs; the script refuses to run where a signing key or sealed
  edition exists) and spectral-config's `check:drift`. Neither was in CI before.
- **Stage 1 — H0 maintenance, report-only:** `harness/maintenance-check.sh`,
  8 read-only probes → `evidence/hermes/maintenance-<UTC>/` + sha256 manifest.
  First live run 2026-08-19: 8/8 exit 0; chain 7 witnesses / 0 breaches;
  commerce delta flat since genesis (the flatline is now a probe, not a vibe).
- **Stage 2 — mutation-via-PR only (specs ready, not assigned):**
  H1 witness backfill (commit witnesses 000002+ the way genesis 000001 was),
  H2 mount-a-pack (config-only, fintel block is the template; heatmap-raw and
  hydra-unclaimed are sealed on disk unmounted — **data-sale clearance is
  Joe's call before H2 is assignable, hydra especially**). Manual Joe-only
  steps (payTo env, live restarts incl. the MCP-door kickstart ctl.sh misses)
  ride in each PR body.
- **Stage 3 — market lane:** Mission 3 unchanged, sequenced behind the CDP
  facilitator switch + CC-BY-4.0 confirmation. The harness only reserves the
  slot. H-numbering is the harness's own; hub Missions 1–5 unchanged.
- **First finding (from H0's `ci-runs` probe): GitHub Actions has been dead
  since at least 2026-08-12 — "account is locked due to a billing issue",
  every run fails in ~3s, including all of PR #38's jobs. Joe-only fix
  (GitHub billing for Metatronsdoob369). Until then Stage 0 is proven locally
  only (transcripts in the PR).**

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
