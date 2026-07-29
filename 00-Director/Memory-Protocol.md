# Memory Protocol

Hive is the only hall memory. Do not invent a private `MEMORY.md` cubby elsewhere.

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

**Gotcha (2026-07-29):** check the settings schema before declaring a harness limit. Claimed "`enabledPlugins` is plugin-level only, no per-skill disable" as a *decisive finding* and designed a plugin-disable + file-copy + commands-rescue plan around it. `skillOverrides` exists — per-skill `off` / `name-only` / `user-invocable-only` — and `skillListingBudgetFraction` (~1% of window) already caps the listing. Order is **prune → configure → build**: disable unused plugins, then `name-only` the tail, then build only what survives. `name-only` on 55 ECC skills ≈ 300 tok vs ~2,415 — most of the lane's win for zero code.

**Gotcha (2026-07-29):** under-surfacing is cheap in tokens and expensive in the thing you're buying. A strict threshold never tuned → dead index + standing bill, silence that looks like success. Strict is right as a start; only safe if tuning actually happens. Same class as false silence. Spec: `arbiterOS-legal-confidant-/docs/superpowers/specs/2026-07-29-ecc-technique-lane-design.md`.

## Parallel sessions

Pull before write. Milestone edits on hubs (CURRENT STATE bullets). Prefer one writer per hub file. Roster stays one line per project.
