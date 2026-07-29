# Session log

Append-only. Newest first. Absolute dates `YYYY-MM-DD`.

---

## 2026-07-29 — plugin surface pruned; `skillOverrides` found

- **Disabled** `azure` / `aws-startup-advisor` / `data-agent-kit-starter-pack` in `~/.claude/settings.json` — no Azure, AWS, or live GCP in the stack. 53 skills, ~2,330 tok. Reversible booleans; Azure has $1,000 unusable-on-Anthropic credit, so re-enable is one flip when something gets built there.
- **Census of enabled plugins:** ECC is 65 of ~156 standing skills — 42%, not the whole problem. Optimising it first was optimising what was mentioned, not what was largest.
- **`skillOverrides` found in the settings schema** (per-skill `off` / `name-only` / `user-invocable-only`). Largely obsoletes the ECC lane's plumbing — `name-only` on the 55 non-keepers ≈ 300 tok with zero code, no plugin disable, no commands rescue. Lane re-scoped to *measure first, build only if it still earns it*.
- Two spec assumptions broken by the same read: the 4,207-token headline is a raw frontmatter sum (harness already caps via `skillListingBudgetFraction`/`MaxDescChars`), and `UserPromptSubmit` is already occupied by `manage.py`.
- **Design rule banked:** a name clash is not a collision — skills collide only when contending for the same *trigger moment*. Reading them reversed 2 of 3 demotions (`security-review`, `verification-loop` are complementary; only `tdd-workflow` genuinely contends).
- Noted: 2 xAI keys + n8n JWT plaintext in `settings.json`. Joe rotating.

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
