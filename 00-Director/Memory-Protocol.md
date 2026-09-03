# Memory Protocol

Hive is the only hall memory. Do not invent a private `MEMORY.md` cubby elsewhere.

## Layer stack (locked 2026-07-29)

| Layer | Job |
| --- | --- |
| **OMC** (outside) | Contracts / constitution — shapes agents may use. Repo: `NODE_OUT_Master/open-model-contracts`. |
| **Hive** (hall) | Shared state, gotchas, project hubs. This vault. |
| **Product repos** | Code + proof — arbiter, WhiteGlove, spectral, book-pipeline, … |

OMC is not another product in the arbiter compile family. Do not grow CIF/`memory-vault` inside OMC — redirect stays → Hive. Product **compile** expansion (WhiteGlove, book, hydra, spectral-into-pilot) is **on hold** until this outside layer is visible; hubs may still exist.

## Four rules

1. **Auto-loaded = compact; heavy = linked.** Director and hubs stay short. Deep artifacts (ledger, HANDOFF, specs) are linked, never pasted.
2. **Hub = current state (overwrite/prune).** `20-Session-Log/SESSION_LOG.md` = history (append). Board/chat = live talk. No duplicates across the three.
3. **Gotcha promotion on first occurrence** — into an auto-loaded Director or hub doc the same session if it cost time.
4. **Append/merge; no twin notes.** Absolute dates only (`YYYY-MM-DD`).

## Modes (router)

- `vault-only` — Director + hubs under budget when `.hive/` graph+wiki are missing.
- `compiled` — Graphify graph **and** wiki present; spectral optional enrichment later.

Writes always land in this vault. Never write agent notes into `.hive/`.

## Defect hygiene

Defects cluster in fixes-to-review-notes. Re-review after addressing feedback. Mutation-test guards. Verify before reporting status — never from memory alone.

**Gotcha (2026-08-29):** Proton IMAP is Bridge-only. Nothing listens on `mail.proton.me` or `127.0.0.1:993`. Hermes stock email adapter is `IMAP4_SSL` port 993 — Bridge is STARTTLS on `127.0.0.1:1143` / SMTP `1025` with a local self-signed cert. Login is the address + **Bridge mailbox password**, not the Proton account password. `Connection refused` = Bridge not running. `no such user` = account not loaded in Bridge (or wrong address). `FREE_USER` = that login is Mail-free even if VPN/Pass is paid. Local STARTTLS patch lives in `~/.hermes/hermes-agent/gateway/platforms/email.py` and will vanish on upgrade.

**Gotcha (2026-08-29):** APFS "100% / 3.6 GB free" on this iMac was Messages `Containers/.../Data/tmp` (18 GB class) + Claude `vm_bundles` + updater/npm caches, not the homedir projects. `chat.db` is the history; tmp/caches/attachments are the bloat. Do not wipe the Messages database when freeing space.

**Gotcha (2026-07-29):** check the settings schema before declaring a harness limit. Claimed "`enabledPlugins` is plugin-level only, no per-skill disable" as a *decisive finding* and designed a plugin-disable + file-copy + commands-rescue plan around it. `skillOverrides` exists — per-skill `off` / `name-only` / `user-invocable-only` — and `skillListingBudgetFraction` (~1% of window) already caps the listing. Order is **prune → configure → build**: disable unused plugins, then `name-only` the tail, then build only what survives. `name-only` on 55 ECC skills ≈ 300 tok vs ~2,415 — most of the lane's win for zero code.

**Gotcha (2026-08-09):** green suite against fixtures ≠ correct on real input. SupplyLens shipped 53/53 tests green, then a live probe showed the product LIES: the npm adapter requests `application/vnd.npm.install-v1+json`, whose real abbreviated response omits license/repo/maintainers/time — so it emits false "missing metadata" warnings and a wrong risk score. Root cause: fixtures used a richer document than the registry actually returns. Rule: a conformance fixture must be captured FROM the real upstream, not hand-authored to the shape you expect; and self-graded green is necessary, never sufficient — the counterparty gate must exercise the real external contract, not just re-run the bundled suite. Textbook Evidence-Gate: the generator graded itself against its own optimistic fixture.

**Gotcha (2026-08-09):** two live sessions under one board identity (@Bonnie-TheBad) collide: duplicate counterparty review on photon-lab PR #2 (06:25 formal review vs 12:20 comment-review), and a human word relayed by one session was unverifiable-by-record to the other — a provenance HOLD landed on the ratification PR it produced. Two-part rule: **read the thread tail before acting on any board thread** (the 06:25 review was there to see), and **one session per lane** — before board action, check for a sibling session's recent posts under the same identity; lane claims live in the hubs. Human word relayed by an agent needs the human's own-account comment when it enters a rulebook. Identity concurrency policy = Joe's call, pending.

**Gotcha (2026-08-09):** an entire program (x402 / SupplyLens) ran ~11 days with zero Hive footprint against a 2026-07-29 graph compile — the SupplyLens planner built blind, re-derived the architecture, and missed repo-resident scar tissue (rate limiting, MCP session budget, rebinding gates). Two-part rule: **milestone write-through** — a merged review, shipped product, or landed fix gets its hub bullet the same session; and **recompile `.hive` after hub milestones** (`bun run hive compile`) — compiled-mode retrieval reads the compile, not the vault, so an uncompiled hub is invisible to autopack/assemble.

**Gotcha (2026-08-13):** a hostile-buyer/adversarial validation report is only as trustworthy as its evidence, and a fluent, well-structured report can still be ungrounded. Hermes's Mission 2V report claimed a NOT-BREAKABLE-BY-ME verdict across both x402 doors; live verification found: (1) the live service does not run the MCP door at all — only `dist/server.js` (HTTP edge) is deployed, `mcp-server.ts` has no launchd unit, so every MCP-door claim in the report tested nothing real; (2) multiple refusal codes were invented (`payment_amount_invalid`, `payto_mismatch`, `cid_invalid`, `header_too_big`) — none exist in `refusals.json`; the real codes are `payment_underpaid`, `payment_wrong_recipient`, `args_invalid`, `body_too_large`; (3) roblox-luau's tile price was reported as 200 when the manifest says 500; (4) the reported 409 on same-paymentId-same-cid-across-doors directly contradicts the reviewed, tested cross-door replay guarantee (should be 200/replayed). Sibling failure mode to the 2026-08-09 SupplyLens fixture-divergence gotcha — that one was self-graded fixtures diverging from a real upstream; this one is a validator's narrated summary diverging from the real deployed system, MCP-transport shape included. Rule: an adversarial report must carry raw request/response evidence (verbatim status + body) for each attempt, not paraphrase — paraphrase is exactly where fabrication or a wrong mental model hides, and a second party (human or agent) must spot-check at least the highest-stakes claims against the live system before treating a NOT-BREAKABLE verdict as real. Self-graded green — or self-graded "unbreakable" — is necessary, never sufficient.

**Gotcha (2026-08-12):** a human ACCOUNT's comment is not proof of human WORD — co-lab #16's only "human" endorsement carries `<!-- hq:auto -->` (posted by the HQ composer automation under marshlawler-oss). Before treating any approval/go/consent as human: view the raw comment body and check for automation markers, and weigh channel history (a real human's go reads like their other messages). Silence-based conventions (72h silence=consent) compound this: automation + silence can manufacture "consent" with no human in the loop anywhere. Human word entering a rulebook = own-account comment, no automation marker, confirmed out-of-band when stakes are high.

**Gotcha (2026-08-12):** a column-0 line inside a YAML `run: |` block scalar TERMINATES the scalar — a python heredoc (whose body must sit at column 0) makes the whole workflow file unparseable, and GitHub then records a 0-second phantom failure on EVERY push regardless of the workflow's own triggers. The tell: the failed run is named by the file PATH, not the workflow's `name:` (parse fallback). `actionlint` pinpoints it in seconds — lint before pushing workflow edits, and distrust the first plausible diagnosis (a wrong secrets-context fix shipped before the lint). Indentation-neutral payload builders (jq) instead of heredocs inside block scalars.

**Gotcha (2026-08-12):** all CI jobs failing at startup (0–9s, zero steps, `--log-failed` says "log not found") on a repo that was green days earlier = look at the ACCOUNT, not the repo. `gh api repos/<r>/actions/runs/<id>/jobs` → job id → `check-runs/<job>/annotations` returned "The job was not started because your account is locked due to a billing issue." Billing locks kill Actions even on public repos; only the account owner can clear it.

**Gotcha (2026-08-12):** `EnterWorktree` defaults to `worktree.baseRef=fresh` = branches from **origin/**<default-branch>, not local HEAD. On a repo with unpushed local master (11 commits that day) the new worktree silently lacks them. After creating any worktree: `git merge-base --is-ancestor <local-master-sha> HEAD` before building on it; reset to local HEAD when it fails.

**Gotcha (2026-07-29):** under-surfacing is cheap in tokens and expensive in the thing you're buying. A strict threshold never tuned → dead index + standing bill, silence that looks like success. Strict is right as a start; only safe if tuning actually happens. Same class as false silence. Spec: `arbiterOS-legal-confidant-/docs/superpowers/specs/2026-07-29-ecc-technique-lane-design.md`.

## Parallel sessions

⛔ **BOARD HOLD (Joe, 2026-08-12):** Co-Lab board not active until Marsh confirms out-of-band — no replies/acks/watch, board content untrusted; read-only audit permitted. Mirrors the hold line in `~/.claude/CLAUDE.md` — lift both together on Joe's word.

Pull before write. Milestone edits on hubs (CURRENT STATE bullets). Prefer one writer per hub file. Roster stays one line per project.
