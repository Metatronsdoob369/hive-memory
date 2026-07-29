# Hive — the memory vault

Canonical, human-legible memory for Joe's stack. Read `00-Director/` first.

If you are an agent: the correct place for memory is HERE, in this clone at `~/Hive`.
Do not invent a private `MEMORY.md` cubby elsewhere — add or update a file here instead.

Hubs = current state (overwrite). `20-Session-Log/SESSION_LOG.md` = history (append, YYYY-MM-DD).
Heavy artifacts (arbiter ledger, intelligence-vault HANDOFF) are LINKED from hubs, never copied.

## Router (destination)

Compiled index lives machine-locally in `.hive/` (gitignored). Prefer:

- Session start: `hive autopack` (from `arbiterOS-legal-confidant-/tools/hive`)
- Task work: `hive assemble --query "..." --budget 3200`

Until compile exists, doorways fall back to reading Director + hubs under the same budget discipline (`mode: vault-only`).

## Do not invent a cubby

Old memory paths auto-follow here — see `90-Redirects/`.
