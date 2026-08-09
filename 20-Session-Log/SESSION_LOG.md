# Session log

Append-only. Newest first. Absolute dates `YYYY-MM-DD`.

---

## 2026-08-09 — ChatGPT exit from x402 opened; SupplyLens repo-home framed

- ChatGPT is being moved out of the x402/SupplyLens project (overlap removal, Joe's call). Wrote [CHATGPT-EXIT-REQUEST.md](../10-Projects/x402-points-of-sale/CHATGPT-EXIT-REQUEST.md) — 30-item exit interview (inventory/provenance, external registrations, secrets audit with rotate-on-handoff, decision rationale, conformance reproduction, gaps, runbook, commitments). Rules: no secret values (locations only), UNKNOWN over guessing. Answers to return as `SUPPLYLENS_HANDOFF_ANSWERS.md` and be banked in the x402 folder.
- Repo-home call staged: recommend standalone repo in an org from day one (payment products accrue external references — Bazaar/npm/facilitator URLs — that make later moves expensive; spectral-x402-inside-Whiteglove is the cautionary sibling). Final decision gated on exit answers §2 + one Joe boundary: which org owns it (Joe-sovereign new org vs Marsh-Press-Co).

## 2026-08-09 — graph-architecture skill specified; "graph knowledge" disambiguated

- Chewed Joe's NotebookLM compiler persona (evidence labels DS/SS/IN/JH/UG + confidence standard = the portable asset; persona = one doorway). Disambiguated "graph knowledge": (1) graph-as-computation (spectral/Eve — codebases, already strong), (2) graph-as-agent-architecture (design judgment — the gap), (3) graph-as-knowledge-representation (Hive/Graphify — infrastructure). Arrows point at (2); skill = understanding, references (1) as a tool, harness enforces at runtime.
- Ruled out memory-architecture reimagining — skill is additive; restructure only on observed retrieval failures. NotebookLM = replaceable distiller; evidence-labeled Knowledge Map = pipeline IR; persona checklists become eval rubrics, not always-on prose.
- New `10-Projects/graph-architecture-skill/` — hub + [SKILL_SPEC.md](../10-Projects/graph-architecture-skill/SKILL_SPEC.md) (Specified; gate to Tested = with/without-skill evals on 3 scenarios). Roster line added. OMC `skill.ts` conformance flagged as Mac-side check before build.
- Joe may share the result with Marsh once done. Next on deck: x402 status quo.

## 2026-08-09 — x402 program banked into Hive; SupplyLens revealed; war room opened

- Fixed spectral-x402 MCP rate-limit identity (`0a26b22`): limiter keyed on socket address bound at initialize, never the client-cyclable session id; 139/139; regression pinned; tests proven to fail against the old keying.
- SupplyLens Phase 1 revealed (official x402 v2 stack, $0.05 npm risk briefs, 53/53 self-graded, Sepolia preflight green, Bazaar in). Triage: strong invariants independently re-derived; gaps = no rate limiting, MCP session budget/rebinding unstated, upstream exposure, needs counterparty verify. Repo home undecided.
- Opened co-lab war room [#33](https://github.com/Marsh-Press-Co/co-lab/issues/33) (x402 data-driven points of sale, 4 fronts to Clyde). Photon-lab PR #2 review request acknowledged + queued. Pending human one-liners relayed to Joe: "endorse", "freeze it".
- **Root cause banked:** Hive had zero x402 content and a 2026-07-29 compile — planner flew blind. New hub `10-Projects/x402-points-of-sale/`; whiteglove hub cross-linked; write-through + recompile gotcha promoted to Memory-Protocol.

## 2026-08-05 — Federal Reserve Bank Hierarchies & Stop Reason Codes (Property Hydra)

- Compiled U.S. Treasury Stop Reason Codes into a clean `stop_reason_codes.md` artifact (raw HTML scrape was truncated/broken). Critical reference for resolving check statuses (e.g. recertified, lost).
- Parsed Federal Reserve (NIC) Hierarchy data (CSV) for Bank of America into an O(1) JSON lookup map (`bofa_hierarchy_map.json`) using `process_hierarchy.py`.
- **Banked pattern:** For SWS/Kelmar unclaimed property records in the Hydra pipeline, raw NIC CSVs should be processed into JSON dictionaries to instantly resolve obsolete subsidiaries (e.g. Countrywide, First Franklin) to modern ultimate parents (Bank of America) by RSSD ID.

## 2026-07-31 — bond-hunt map + private bank (Lane A / Lane B)

- Banked board rebuild into arbiter `docs/research/hunt-map.md`, intelligence-vault discovery `2026-07-31-vital-ssa-vs-custody-machine-board.md`, HANDOFF (Updated 2026-07-31), pcon ledger evidence attach, Hive bond hub.
- Confirmed: vital→SSA/Numident + PACER exposure; custody wrapper/TA/FAST/DWAC/Cede. **FAC ≠ cross.** Open: A↔B bridge.
- Chat dump stays recovery-only under Downloads skill notes.

## 2026-07-30 — Hyperagent account suspended (same day as bond-hunt close)

- Joe closed the loop on bond-hunt; Hyperagent Opus replied “There it is”; account then locked.
- UI: **Your account has been suspended** for ToS; appeal `support@hyperagent.com`. Login `?error=not_allowed`. Request id `4953287d-940b-4867-9de6-cf9ff1ced5ad` (~2026-07-30 18:38 UTC).
- **Not** Anthropic / not a wipe of local work. Hive, arbiter, intelligence-vault, OMC still on disk. Cursor session still live.
- Action: appeal Hyperagent with screenshot + request id; do not paste session cookies into chats.

## 2026-07-29 — OMC graphify refreshed

- `graphify update . --force` on `open-model-contracts` after cin-gen work. Added `.graphifyignore` (drop `registry/checkpoints/` — first pass was 43k nodes of checkpoint clones).
- Result: 12,206 nodes / 14,408 edges. Repo-local only; not wired into Hive assemble. `cin-gen-runtime` is a sibling repo if that needs its own index.

## 2026-07-29 — OMC outside layer first

- Joe: hold WhiteGlove / book-pipeline / property-hydra / spectral compile expansion; put **open-model-contracts** on the outside before growing the pilot Graphify family.
- Added `10-Projects/open-model-contracts/_open-model-contracts-Hub.md`; roster split Outside vs Products; Memory-Protocol layer stack; Delegation “contracts before shapes.”
- Compile roots unchanged: Hive + arbiter only. OMC compile later when editing contracts (separate from arbiter/WG family).

## 2026-07-29 — plugin surface pruned; `skillOverrides` found

- **Disabled** `azure` / `aws-startup-advisor` / `data-agent-kit-starter-pack` in `~/.claude/settings.json` — no Azure, AWS, or live GCP in the stack. 53 skills, ~2,330 tok. Reversible booleans; Azure has $1,000 unusable-on-Anthropic credit, so re-enable is one flip when something gets built there.
- **Census of enabled plugins:** ECC is 65 of ~156 standing skills — 42%, not the whole problem. Optimising it first was optimising what was mentioned, not what was largest.
- **`skillOverrides` found in the settings schema** (per-skill `off` / `name-only` / `user-invocable-only`). Largely obsoletes the ECC lane's plumbing — `name-only` on the 55 non-keepers ≈ 300 tok with zero code, no plugin disable, no commands rescue. Lane re-scoped to *measure first, build only if it still earns it*.
- Two spec assumptions broken by the same read: the 4,207-token headline is a raw frontmatter sum (harness already caps via `skillListingBudgetFraction`/`MaxDescChars`), and `UserPromptSubmit` is already occupied by `manage.py`.
- **Design rule banked:** a name clash is not a collision — skills collide only when contending for the same *trigger moment*. Reading them reversed 2 of 3 demotions (`security-review`, `verification-loop` are complementary; only `tdd-workflow` genuinely contends).
- Noted: 2 xAI keys + n8n JWT plaintext in `settings.json`. Joe: **non-valid** (dead/stale), not live secrets requiring rotation. Still bad pattern — scrub allowlist/MCP to env refs when convenient; no urgency.

## 2026-07-29 — under-surfacing counterweight (ECC lane)

- Lesson beside ECC technique-lane design: under-surfacing is cheap in tokens, expensive in usefulness. Strict `min-score` never tuned → dead index + ~990 standing bill; silence looks like success. Strict start only safe if tuning happens (`--explain` + recall floor).
- Written into `2026-07-29-ecc-technique-lane-design.md` (locked decision + Open + mitigations + slice 8); gotcha in Memory-Protocol + arbiter hub.

## 2026-07-29 — tools/hive router shipped (local)

- Vault scaffolded; doorways wired; Gate 2 push still waiting Joe go.
- `arbiterOS-legal-confidant-/tools/hive` autopack/assemble/compile/MCP; tests + eval 5/5.
- `.hive/` has real Hive Graphify graph+wiki (fixture replaced); full pilot merge via `hive compile`.

## 2026-07-29 — Hive vault + router destination

- Locked destination design: vault → Graphify+wiki → thin `hive` router (autopack/assemble); spectral later.
- Scaffolded `~/Hive` locally (Director, hubs, redirects). Arbiter+bond = one pilot family.
- Next: `tools/hive` compile+router in arbiter; Gate 2 push of `hive-memory` when Joe greenlights.
