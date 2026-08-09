# SupplyLens / x402 — Handoff Request (exit interview)

You are handing off the SupplyLens (x402 points-of-sale) project. Another team
is taking over development and operations. Answer everything below in **one
complete markdown document**.

Ground rules for your answers:

- **Do not summarize away detail.** Exact names, paths, versions, addresses,
  URLs, commands. If a section is long, it's long.
- **Never paste secret values** — no private keys, seeds, API keys, tokens,
  passwords. Give the *identifier and storage location* of each secret instead
  (e.g. "payer test wallet, address 0x…, key stored in ~/.env.supplylens as
  PAYER_KEY").
- **Mark unknowns as `UNKNOWN`** rather than guessing. An honest gap is
  useful; a plausible guess is sabotage.
- Where you made something up on the spot (a name, a price, a limit), say so.

---

## 1. Inventory and provenance

1. Full file tree of everything you built (SupplyLens and anything adjacent),
   with the absolute path of where it currently lives on disk.
2. Any git repos, branches, gists, or remote copies you created — URLs and
   current sync state (is disk ahead of remote?).
3. Exact dependency list with pinned versions (`package.json` +
   lockfile status), and which of `@x402/core|hono|evm|extensions` APIs you
   actually call.
4. Any code copied or adapted from examples, templates, or docs — from where,
   and under what license.

## 2. External registrations and identities (critical)

5. **Bazaar declaration:** where it was submitted, under what account, exactly
   what it declares (name, description, URL, price, schema), and whether any
   URL in it points at a location that would break if the code moves repos.
6. **npm:** package name — reserved? published? under which npm account?
   Exact name and version if published.
7. **Facilitator:** which facilitator, what account/config, what the preflight
   on Base Sepolia (`eip155:84532`) actually verified.
8. **Wallets:** every address you created or used (operator, payer, test),
   role of each, where each key/seed is stored, which have funds.
9. Any domains, emails, service accounts, webhooks, cron jobs, or deployed
   services you created — anything with an ongoing side effect that outlives
   this handoff.
10. Anywhere you posted, registered, or communicated externally about this
    project (forums, registries, issue trackers, directories).

## 3. Secrets audit

11. Every secret you created or handled: identifier, storage location, and
    whether it should be rotated now that you're handing off.

## 4. Decisions and rationale

12. Architecture decisions with the *why* — especially anywhere you deviated
    from x402 v2 defaults or examples.
13. Why USD 0.05/call; what pricing alternatives you considered.
14. Why the 8-second upstream timeout; what happens at second 9.
15. The risk-brief output schema: how you designed it, what a coding agent is
    expected to do with each field, what you cut.
16. Anything you evaluated and rejected (stacks, facilitators, chains,
    designs) and why — so the next team doesn't re-litigate it blind.

## 5. Conformance and testing

17. What the 53-item conformance suite actually covers, item by item or by
    category; how it is graded; which items are self-graded judgment calls vs
    mechanical checks.
18. Exact commands + environment to reproduce the 53/53 run from a clean
    clone.
19. What a *counterparty* conformance run would need from the other side —
    what you'd hand an external verifier.
20. Test wallets/fixtures the tests depend on, and anything (files, state,
    funded accounts) that is NOT in the repo but required for tests to pass.

## 6. Known gaps, fragility, assumptions

21. Your own list of known gaps and unfinished work — including but not
    limited to: rate limiting, MCP session budget/TTL, DNS-rebinding/origin
    gates, npm-registry upstream exposure inside the timeout.
22. Assumptions you made about the npm registry (rate limits, availability,
    response shapes) and what breaks if they're wrong.
23. The three most fragile things in the codebase — where you'd expect the
    next team to get burned first.
24. Any place where payment acceptance and authorization are coupled, or
    where a malformed-but-present payment gets downgraded to a challenge
    instead of refused.

## 7. Operations runbook

25. End-to-end: how to start the service, required env vars (names +
    locations, not values), and the full lifecycle of one paid call — HTTP
    door and MCP door — from request to settlement to delivery.
26. What remains to reach live Sepolia settlement: exact steps, in order,
    with what the operator must provide at each step.
27. Ledger/state: what is persisted where (sqlite files, paths), and what is
    safe to delete vs must be preserved.

## 8. Roadmap and commitments

28. What you planned for Phase 2+ — in enough detail to evaluate, not adopt.
29. Any promises already made in public-facing text (README, Bazaar listing,
    package description) that the next team inherits.
30. Anything you know about this project that no document currently records
    and that isn't covered above. This is the catch-all — empty it.

---

Return the answers as a single markdown document titled
`SUPPLYLENS_HANDOFF_ANSWERS.md`. Completeness beats polish.
