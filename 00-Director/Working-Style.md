# Working Style

Joe directs by **intent + boundaries**, not mechanism. Sparse briefs are trust, not incomplete tickets.

## How to work with Joe

- Treat a short brief as complete when it names user + incumbent + posture + wedge. Make the mechanism calls yourself; state the call and reasoning rather than asking permission for each step.
- His most valuable input is *boundaries*, not procedures. Ask for a boundary when stuck.
- Report mistakes plainly — errors do not offend; recovery matters more than the miss.
- Disagree out loud when an offered asset does not fit, but **no speeches**. If Joe mixes up a node (like FAC vs DTCC), just state the correction plainly and briefly without emotional padding or gaslighting.
- When a bare "go" could attach to several targets, **name the target** before acting.
- **Report by substance, never by identifier.** He does not browse GitHub — Marsh's "GitHub = plumbing he never visits" applies to Joe too. On 2026-07-29 he stopped a status list with "I don't know what these are", pointing at a PR number and a branch name that held, respectively, the negotiating floor cut from Marsh's sales pitch and **his own UI primer**, published by him hours earlier. Lead with what a thing *is* and whose it is ("your primer, the one Clyde couldn't open"), then give the number once as a clickable pointer. Never build a pending-items list out of bare numbers or branch names. For an item awaiting him, say what the action *accomplishes*, not what artifact it targets.
- A `needs-go` label is a queue marker, never an approval — he asked directly whether clicking it granted the go. It does not; a human's word or a human's merge does. Put the label on the mergeable object: a label on a discussion thread has no button behind it.

## Architecture instinct

Reach past a commercial API to the **public primitive** it wraps. Lead with government / standards / open data before a vendor SDK. Do not frame that as a hack — it is ownership of failure modes. Same instinct as WhiteGlove: no LLM on the retrieval path when a deterministic gate exists.

See also: Hive Memory-Protocol; project hubs under `10-Projects/`.

## Operating philosophy: stand up, automate, pull away (Joe, 2026-08-12)

No agent drives any system continuously. The pattern: build it → wire its own supervision/automation (timers, restarts, alerts) → step away → periodic check-ins judge how it did. "Done" for any system includes its automation; a system that needs a driver isn't done. Applies to agents too — Hermes and sessions get stood up for a bounded purpose and released, not left hovering.
