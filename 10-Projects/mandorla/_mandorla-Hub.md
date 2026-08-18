# Mandorla — CURRENT STATE

**Path:** `/Users/joewales/mandorla` (clone) · **Repo:** `Marsh-Press-Co/mandorla` · **Board:** co-lab #36
**Lane:** Bonnie owns **rungs 2–3**. Marsh's directive 2026-08-17: *the agents design and build this; humans watch, step in if it goes astray, and take the visualisation lane.*

## What it is

Zen sacred-geometry / cymatics game for phones, built from Tyler Engle's corpus. No fail states, no timers, no score; kid-clean; one IAP. Marsh's daughter is the canonical player. **Core verb (locked):** you don't draw the shape — you shape the wave, and the geometry arrives on its own.

**Structure = Engle's six-rung ladder as one continuous zoom** (Clyde's claim, argued and accepted): vibration → sphere → torus/atom → five solids → phi/fractal growth → architecture. Same verb each rung, new material.

## Who is on it

Four agents + two humans. **Clyde** (`@clyde-colab`, Marsh's) — field evaluator, rung 4, sound, zoom scaffolding, review ledger. **Sol** (OpenAI Codex on Marsh's laptop, posts as `marshlawler-oss` with a `Sol —` prefix) — rung 5, rung 6 spec; coordination is mandorla #1, Clyde relays. **Bonnie** — rungs 2–3. Marsh + Preston — the look.

## Where we are (2026-08-18)

- Rungs **1, 4, 5 on `main`**; the zoom is real (one page, `index.html`, pinch through the ladder). Rung 6 has a spec. Rungs 2–3 on main are a **placeholder** blue wireframe icosphere.
- **Bonnie's rung 2** — `rung-2/volumetric-field` (`50b897d`), `/ball.html`. Pushed, NOT merged. Cold review = **MERGE-AFTER-FIXES**, 4 mediums (see below). No PR opened yet, deliberately: the slide is the one departure from pure physics and Clyde should rule on it.
- **Collision, resolved:** built the spherical evaluator twice — Clyde's landed on `main` 44 min before Bonnie's branch. Marsh's call was don't hold the project on a round-trip; Clyde folded Bonnie's (l,n) ladder, `fold` control and anchor tests into `main` (`483542e`, co-authored). **`src/field/index.ts` is the only thing to build on.**
- **Sound is specced but unbuilt and unowned** — `docs/superpowers/specs/2026-08-18-sound-timbre-drives-the-field.md`, prompted by and credited to Preston.

## Preston's contribution — the thesis (2026-08-18)

Joe's own stack, kept separate and deliberately not folded in: a **tone generator** with layers/visuals, `Metatronsdoob369/cymatic-lattice`, and a one-page **Cymatic Calibration Workbench** (`~/Downloads/cymatic_calibration_workbench.html`) — plate material/width/thickness → real mode frequencies, live mic input (fundamental pitch or vocal RMS), Lambdoma grid, resonance orbit.

- **Verified, not taken on trust:** (5,3) on 30×30 cm C260 brass at 2 mm → computed 1330.2 Hz vs deck's 1329.5; (18,14) → 20,339 vs 20,333.7. Correct simply-supported plate model, correct units.
- **The thesis, posted to #36:** *nothing comes before vibration — the energy that moves the entire system, universally, realistically and hypothetically.* True in **both** registers (the digest's own solid column opens with oscillation as the base of everything simulated), which is rare and is why it lands.
- **Design consequence:** the sound driver is **rung 0**, not a late lane. Five rungs of geometry are built and sound isn't — backwards w.r.t. the thesis. Cheap to repair because rungs 4–5 already take "the field" as their potential.
- **Pedagogy (Joe):** no intuitive learning without feeling, hearing and seeing at the same time. The multimedia simultaneity IS the teaching; it reframes game-vs-toy more sharply than the zoom (closed loop the player stands inside vs structure they travel through).

## Gotchas paid for once — do not pay again

- **`|shape|/|∇shape|` does NOT find nodal-surface crossings in 3D.** It is the dish's nodal-width term and importing it was wrong (Bonnie claimed it on #36 and the code refuted it). Once grains settle, 99% sit on some nodal surface and the ratio spans only 0.009–0.4 → uniform glowing fog. It measures distance TO the nodal set, and at a crossing value and gradient vanish *together*, so it tends to a finite constant — can read dimmer on a crossing than on a plain sheet.
- **The discriminator is `|∇shape|` alone**, normalised by k. At a crossing `shape` factorises as A(r)B(θ)C(φ) and every partial carries a zero. Spans 3e-11..2e-3 over settled grains.
- **Brightness cannot manufacture line continuity.** Crossings are measure-zero; a tight exp() gate leaves scattered blobs. Needs a heavy tail (Lorentzian) AND grains sliding along the sheet toward lower `|∇|`. The slide is a **legibility choice, not acoustics** — marked as such in source.
- **Sound-driven dissolves that hack:** the chord's pattern is the time-averaged energy `S = Σ A²φ²` (cross terms average out — Clyde's addition, better than either of our statements). `S` is a sum of squares, so its zero set is where *all* excited modes vanish — codim-2 by construction. The wireframe comes free from a chord; the slide was compensating for a single pure tone.
- **We model a membrane and narrate a plate.** `∇²`/Bessel `J_m`/ω∝k is a membrane; a Chladni plate is biharmonic `∇⁴`/ω∝k². Why Joe's (18,14) is 20 kHz and the whole ladder sits at 13–110 Hz. Water in a dish genuinely is a membrane, so rung 1 isn't wrong — but "Chladni" means a plate with sand on it, and that's what the corpus is about.
- **`HZ_PER_K = 5.6`** is an invented scale ("Modelled, not measured; the UI says so"). Real physics is a dozen lines away.
- **Verification in the preview pane:** hidden tab ⇒ `innerWidth` reads 0, canvas 0×0, rAF never fires. Two timing attempts were meaningless (0.39 ms / "2500 fps") until forced with `gl.readPixels`. `gl.finish()` did NOT force a sync. Drive `window.__ball` / `window.__mandorla` directly and `renderOnce()`.
- Local dev server: `.claude/launch.json` entry `mandorla` → vite on 5180 (added in the Whiteglove workspace).

## Open in this lane

1. Fix the 4 cold-review mediums on rung 2: headers still document the *rejected* brightness term; the "descent" is a unit-speed flow so grains drift along sheets **with the slide off** (register line drawn in the wrong place — fix is signed tetra samples + Newton-clamped step); the flat core (`j_l ~ r^l`) lights as a false crossing — **the bright core in the frames is that artifact, and the quoted `p02 = 3e-11` was the core, not the wireframe**; no `EXT_color_buffer_float` capability check (phone-first silent failure).
2. Then rung 3 — small: `spinMix` already crossfades to the travelling mode, toroidal `|ψ|²` falls out.
3. Consider rebasing rung 2 onto the `S(x)` sound driver rather than `|shape3|`, so the ball lands sound-driven instead of retrofitted.
4. `tests/solids-thomson.test.ts` dial-JUMP case times out at the 5 s default on this machine (8.3 s; clean at 30 s). Pre-existing, cross-machine — this Mac is the slower node.

## Links (do not copy)

- Agent-side reference corpus: `docs/` — `source-digest.md`, `sonic-forge-video-digest.md`, `atoms-to-architecture-video-digest.md`. **Agents cannot read NotebookLM**; `docs/` is the agents' twin of Marsh's notebook.
- `docs/ladder-design-brief.md` — the ladder claim + lane split
- `docs/superpowers/specs/2026-08-18-sound-timbre-drives-the-field.md` — the sound spec (Preston-credited)
- `docs/superpowers/reviews/2026-08-18-rung2-ball-cold-review.md` — the 4 mediums
- Joe's own: `Metatronsdoob369/cymatic-lattice`, `~/Downloads/cymatic_calibration_workbench.html`, NotebookLM "SoundsHapes" (public; Courant nodal domain theorem is the unused idea in it)
