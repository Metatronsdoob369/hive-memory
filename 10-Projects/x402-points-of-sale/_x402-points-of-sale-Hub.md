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
- **Enterprise handoff (2026-08-09):** 30-question transition doc landed (`SUPPLYLENS_HANDOFF_ANSWERS.md`, on repo `design-docs` branch), no secrets. Code is a **checksummed tarball authored outside git** in Joe's build env (no commit provenance); Joe is producing a fresh downloadable checksummed package and **will not claim `main` exists until the org repo receives + verifies it** (Evidence Gate on his own handoff — correct). Bonnie's job on arrival: extract → `npm ci && npm run verify` cold → push `main` → counterparty run **including a live npm probe** (not just the bundled suite). **NEW P0:** product lies on real input — npm install-v1 media type omits license/repo/maintainers/time → false warnings; 53/53 didn't catch it because fixtures were richer than reality (see [[Memory-Protocol]] gotcha). Recovery unwired (`recoverStartup` never called). Scar-tissue items (rate limit, session budget, rebinding, body cap) confirmed present in handoff §21. Build issue: co-lab #34.
- **Open (2026-08-09 evening):** receive+verify+push the incoming SupplyLens package; roster PR co-lab #35 awaits a human go; live Sepolia gates await Joe's recipient + funded payer test wallet. Resolved same day: "endorse" (relayed, ratification PR photon-lab #4), "freeze it" (Marsh's word), repo home ("org").
