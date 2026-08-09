# x402 Points of Sale — CURRENT STATE

**Thesis:** every sealed dataset or replay-safe analysis is a *point of sale* — one paid kernel, two doors (HTTP + MCP tool call); AI agents with wallets are first-class customers. War room: [co-lab #33](https://github.com/Marsh-Press-Co/co-lab/issues/33). Growth = packs × discovery × pricing.

## Where we are (2026-08-09)

- **spectral-x402** (inside `Metatronsdoob369/Whiteglove-`, `spectral-x402/`): hand-rolled seller-side kernel. Mount kernel merged (PR #35); settlement gate reviewed (`feat/x402-real-settlement`); 139/139 green. Sealed content-addressed packs, digest-verified manifests, SQLite ledger, stub facilitator loopback-only. Packs are untracked local artifacts — fresh worktrees must copy `spectral-x402/packs/` from the main checkout or 107 tests fail on ENOENT.
- **SupplyLens** (Phase 1, built 2026-08-09; **home: `Marsh-Press-Co/supplylens`**, org-from-day-one on Joe's word 2026-08-09; design docs on `design-docs` branch, `main` left unborn for the code push from Joe's build env): official x402 v2 stack (`@x402/core|hono|evm|extensions` 2.21.0), Hono, node:sqlite. Product: USD 0.05/call npm package risk brief for coding agents. 53/53 local conformance (self-graded, Bonnie's counterparty run fires when code lands); facilitator preflight green on Base Sepolia `eip155:84532`; Bazaar declaration in. Build tracking: co-lab #34; roster PR co-lab #35 (needs-go). Gated finish: live Sepolia settlement (operator recipient + funded payer test wallet). Mainnet is startup-rejected.
- **Relationship:** siblings, not successor/corpse. Spectral = sealed-pack substrate + review scar tissue; SupplyLens = official rail + product wedge + Bazaar discovery answer.
- **Doctrine (SupplyLens, keep verbatim):** only replay-safe, side-effect-free adapters mount; **payment is not authorization**.

## Scar tissue (hard-won, transferable to any x402 MCP surface)

- **Never key a rate limiter on the MCP session id** — server-issued but client-CYCLED (initialize unmetered, DELETE frees the cap slot). Bind `socket.remoteAddress` at initialize; same key as the HTTP spoke so one caller = one bucket through both doors. Fixed 2026-08-09 (`0a26b22`), regression pinned in tests.
- MCP sessions need their own budget (hard ceiling + idle TTL, refuse **before** allocating); Host/Origin rebinding gate before allocation; per-session Server+transport pairs (GHSA-345p-7cg4-v4c7); SDK 1.30.0 ships DNS-rebinding protection OFF (GHSA-w48q-cv73-mx4w).
- Never import `createPaymentWrapper` (`@x402/mcp`) beside a kernel that owns the lifecycle — it runs its own verify/settle (double-settle risk). Wire-format helpers only.
- Delivery recorded only after the send finished (`writableFinished`); present-but-malformed payment = refusal, never downgraded to a challenge; `tools/list` returns the generated artifact verbatim (no second schema source).
- SupplyLens Phase-1 gaps flagged 2026-08-09: no rate limiting in design or gates; MCP session budget/rebinding unstated; npm-registry upstream exposure inside the 8 s timeout; conformance self-graded.

## Links (do not copy)

- Reviews: Whiteglove repo `docs/superpowers/reviews/` (final 712cfda..3a10fa8; fixwave re-review; settlement-gate + re-review 2026-08-07)
- SupplyLens docs (until repo home lands): `~/Downloads/2026-08-09-supplylens-design.md`, `local-conformance.md`, `README.md`
- Sibling hub: [whiteglove](../whiteglove/_whiteglove-Hub.md)
- **`main` LANDED + counterparty-verified (2026-08-09):** checksummed package `SupplyLens-Phase1-HANDOFF-2026-08-09.tar.gz` (SHA-256 `354c9c41…`) received, verified cold, pushed to `Marsh-Press-Co/supplylens` main (now default branch). First git provenance for the code. Verify GREEN on Node v26 (engines >=24; handoff ran 24.14): 53/53 + drift + typecheck + build. **P0 reproduced LIVE** (not just self-reported): adapter's `install-v1` Accept header → real registry strips license/repo/maintainers/time → false warnings + wrong risk; fixtures richer than reality (see [[Memory-Protocol]] fixture-divergence gotcha). Dev-dep vitest 3.2.4 has GHSA-5xrq-8626-4rwp (UI-only; bump 3.2.7). Verdict on co-lab #34.
- **Open (2026-08-09 evening):** P0 npm-truthfulness fix + captured-real-response regression (Bonnie can take); scar-tissue hardening (rate-limit socket-key, session budget, rebinding, body cap); wire startup recovery; **live Sepolia gates await Joe's recipient + funded payer test wallet**; roster PR co-lab #35 awaits a human go; Bazaar ranking research (#33). Resolved same day: "endorse", "freeze it", repo home ("org"), package received+verified+pushed.
