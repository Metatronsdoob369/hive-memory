# Graph-Architecture Skill — Specification

**Status:** Specified — not Tested, not Validated (ladder: Specified → Tested → Validated)
**Date:** 2026-08-09
**Author:** Claude session with Joe (drafted for review; nothing below is built yet)

---

## 1. Purpose

One sentence: load graph-agent design judgment — when a graph is justified, how to cut nodes, what contracts and limits every design must carry — into any agent at the moment it starts designing multi-agent work, so the failure modes are designed out before code exists.

## 2. What this is and is not

- **Is:** crystallized judgment (an understanding), packaged so runtimes load it at design time.
- **Is not:** a harness, a runtime, memory, or executable code. It never executes anything.
- Layering: **skill (judgment) → shapes work on the harness → which may invoke codebases (e.g. spectral) as tools.**

## 3. Placement and law

- **Law home (eventual):** OMC — the skill's I/O shape must conform to `spec/contracts/v3/skill.ts` (contracts before shapes). ⚠ *Not verifiable from this session — OMC repo lives on the Mac. Conformance check is a required step before the skill leaves Specified.*
- **Runtime homes (compile targets):** Claude Code skill dir (SKILL.md + references/), Co-Lab agents' session-start load, Domicile `Skills/` per SKILLS_CANON.
- **This draft:** parked in Hive for review only. Hive holds state, not law — when the skill is real, the spec moves to OMC/product repo and this folder's hub links it.

## 4. Activation conditions

Fires when a task involves **designing or building multi-agent / orchestrated work**:

- "Set up a workflow where agent A does X and agent B does Y"
- "Build an orchestrator / pipeline / crew / graph for …"
- Any request that implies ≥2 cooperating agents, routed control flow, or agent loops
- Critiquing or auditing an existing multi-agent design

## 5. Non-activation conditions

- Single-agent tasks, ordinary coding, retrieval, writing
- Graph *mathematics* (spectral, communities, embeddings) — that is a different discipline; this skill only knows when to point at it
- Executing an already-designed workflow (harness territory)

## 6. Judgment inventory (the payload)

### 6.1 Justification gate — runs first, always

Before drawing nodes: would a single agent, deterministic script, or linear pipeline meet the objective more cleanly? If yes, say so and stop. Never multiply agents for the appearance of sophistication. [SS — from persona doc + repeated across published graph-agent literature; JH origin]

### 6.2 Blueprint discipline — if a graph is justified

Every design must answer, per node:

- single responsibility owned
- what activates it
- exact state consumed / exact state produced (typed, not "text")
- where it may hand off; what it may **never** decide
- how success/failure is evaluated

And per workflow:

- entry conditions, termination conditions (explicit "done")
- hard loop limits on every cycle
- retry / fallback / recovery behavior
- human approval gates before anything irreversible or outward-facing
- tool access + permission boundaries per node
- observability signals

[DS — persona doc's blueprint template; converges with LangGraph/state-machine practice]

### 6.3 House patterns — the part a stock model does not have

- **No LLM on the retrieval path when a deterministic gate exists.** [DS — shipped in WhiteGlove]
- **Boundary invariant: never model your consumers.** Producers depend on output contracts only. [DS — shipped in spectral-terrain/TGIL]
- **Contracts before shapes.** Check OMC before inventing a specialist, skill shape, or agent I/O. [DS — Delegation-and-Agents law]
- **Silence-first / refuse to bluff.** An agent that can't support a step says so rather than improvising. [DS — WhiteGlove/arbiter posture]
- **Milestone write-through.** A workflow that ships something writes its hub bullet the same session; blind planners re-derive scar tissue (x402 gotcha 2026-08-09). [DS — Memory-Protocol]

### 6.4 Anti-pattern catalog

Uncontrolled loops · missing termination · state loss between handoffs · redundant/vanity nodes · ambiguous responsibilities · weak routing conditions · untestable outcomes · context window as implicit shared state · approval gates that are labels not buttons (`needs-go` is a queue marker, never approval). [DS/SS mix — persona audit list + Hive gotchas; to be enriched by corpus distillation]

## 7. Required inputs / outputs

- **Consumes:** the task description; relevant constraints (runtime, tools, irreversibility).
- **Produces:** (a) a justification verdict — graph / simpler shape, with reasoning; (b) if graph: a blueprint answering §6.2 in full; (c) flagged corpus gaps or unknowns instead of invented details.

## 8. Failure and uncertainty behavior

When the skill's knowledge doesn't cover a decision, the agent says so explicitly (no bluffing a "best practice") and either asks for a boundary or marks the step experimental with a validation test.

## 9. Package shape

```
graph-architecture/
  SKILL.md            # trigger description + justification gate + blueprint checklist (short)
  references/
    node-contracts.md    # state/handoff contract patterns
    failure-modes.md     # anti-pattern catalog with symptoms
    house-patterns.md    # §6.3 with provenance
    evaluation.md        # how to grade a design; rubric
```

SKILL.md stays small; references load progressively. The persona doc's 18-item checklist lives in `evaluation.md` **as a grading rubric, not always-on prose** — loaded instructions drift, rubrics have teeth.

## 10. Draft SKILL.md trigger description (most load-bearing text in the package)

> Use when designing, building, critiquing, or auditing any multi-agent or orchestrated workflow — orchestrators, pipelines, agent graphs, crews, routed control flow, agent loops. Read BEFORE proposing an architecture, spawning cooperating agents, or writing orchestration code. Not for single-agent tasks or graph mathematics.

## 11. Eval design (gate to *Tested*)

Method: cold-context agent gets a design task **with** and **without** the skill; both outputs graded blind against the `evaluation.md` rubric (blueprint completeness, justification quality, anti-patterns avoided).

Scenarios (draft):

1. **Over-engineering bait:** a task cleanly solvable by one agent + a script, phrased to invite a five-agent crew. Pass = with-skill output refuses the graph.
2. **Legitimate graph:** multi-source research → adversarial review → synthesis with human gate. Pass = complete blueprint (state contracts, loop caps, termination, approval gate placement).
3. **Critique task:** hand it a deliberately flawed design (unbounded review loop, untyped handoffs, vanity node). Pass = catches ≥ the planted defects.

Acceptance: with-skill measurably beats without-skill on all three; otherwise the skill is prose, not a skill. Claude Code `skill-creator` eval loop is available to run this.

## 12. Corpus / distillation plan (feeds references/, not SKILL.md)

- NotebookLM notebook + compiler persona = the **distiller** (replaceable).
- Its Mode-2 **Knowledge Map with evidence labels (DS/SS/IN/JH/UG)** is the pipeline's intermediate representation — committed as a versioned artifact, not left in chat.
- DS/SS → reference material; IN → experimental sections with validation tests; UG → excluded.
- Highest-value sources are Joe's own build logs (arbiter, spectral, WhiteGlove, x402/SupplyLens triage) — house patterns beat published docs. Published material fills the generic base layer.

## 13. Known limitations

- House patterns are DS by shipping history, not by formal eval — the eval loop tests the *skill's delivery* of them, not the patterns themselves.
- OMC `skill.ts` conformance unverified from this session (see §3).
- Anti-pattern catalog is seed-level until the distillation pass runs.
- Source independence in the corpus cannot be measured by the distiller, only estimated.

## 14. Open questions (for Joe)

1. First compile target: Claude Code here, or Co-Lab agents first?
2. Does SKILLS_CANON (still domicile-local) impose format requirements beyond `skill.ts`?
3. Name: `graph-architecture` vs something in the house voice.

## 15. Next steps

1. Joe reviews this spec → approve / cut / redirect.
2. Verify `skill.ts` conformance (Mac-side).
3. Build SKILL.md + references from §6 as seed; run §11 evals → *Tested*.
4. Distillation pass (NotebookLM corpus → Knowledge Map IR) enriches references.
5. First real build uses it and survives audit → *Validated*.
