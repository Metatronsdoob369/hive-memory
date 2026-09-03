# Flyover — CURRENT STATE

**One line:** Google Earth as coordinate system, Earth Studio as physically honest camera, property's own photos as appearance, AI as compositor — per-building roof-hero flyovers as a repeatable service (Cosine+ Autonomous). Pitch wedge: GE Southeast sales director / ProGuard Building Products via ProCover Exteriors ("Restore, Don't Re-roof").

**Product (2026-09-02 update):** the salesman hands the prospect a flyover of *their own building* — as it stands, then re-covered in the shingle line being sold, at true course size with correct shadows. Geometry is the invariant; the roof surface is the swappable material. Manufacturer catalogues become a material library. Recon by-products (plane areas, ridge/hip lengths, bundle count) ride along as quote-ready quantities. → [[Product - Shingle Visualization]]

## Where we are (2026-09-02)

- **Earth Studio leg complete** for the first site, [[ONSC Clubhouse]] (Old North State Club, Badin Lake NC): anchors, 22 s roof-hero move, FOV40 render (661 frames verified, anchors to 0.05–0.15 m), camera matrices. Pipeline stages 1–5 done → [[Flyover Pipeline]].
- **Skill** `earth-ground-truth-flyover` v4 lives on Joe's Claude account; embeds `gt_build.py` + `es_verify.py` → [[Earth Ground Truth Skill]].
- **Repo landed (2026-09-03):** `/Users/joewales/Projects/flyover` — engine v1.1 committed (git 32a04ba): 5 engine scripts incl. the new generic `es_matrices.py`, roof geometry layer v0, ONSC site fully verified (all 7 keyframes, 3305/3305 anchors, roof 661/661), Plumb-boundary compliance test. Frames at `/Users/joewales/NOdrone/Google Earth Studio/ONSC Clubhouse Roof Hero FOV40/footage/` (661 JPEGs, not in git); guide video + 3 beat cuts in `sites/onsc-clubhouse/renders/` (also not in git). Engine runs under `/usr/bin/python3` — Homebrew 3.14 pyexpat is broken.
- **Backend:** Supabase project `crygamfxzzbfxugtprpa` under the new **preston@cosineautonomous.com** account. MCP registered in `/Users/joewales/.mcp.json` (project scope, features docs/database/debugging/development/functions — account+branching deliberately off). **Blocked on Joe:** restart `claude -c` → approve server at startup → `/mcp` → Authenticate. Design doc: [[Flyover SaaS Backend]].
- **GPU server** arriving ~2026-09-05 — becomes the training/render worker (3DGS is renderer route 3). This iMac is Intel/AMD: no CUDA.
- **Renderer leg staged, Higgsfield paywalled (2026-09-03):** `refs/` (8 property photos + viewpoint index) and `engine/gen_qa.py` (time-mapped anchor/roof-edge overlay + held/drifted/hallucinated verdict) committed (6ed9360); gen_qa self-tested clean against the orbit guide. **Blocked on Joe:** Higgsfield CLI account (phooten4@gmail.com) is free-plan with 2 credits; the orbit run alone is 90 credits @1080p (45 @720p, ~198 total for all three beats) — pay or pivot (HeliosGen not found on this Mac — no Helios app or folder located 2026-09-03).
- **Route-2 (Blender) staged (2026-09-03, d51eafc):** Joe's `headless_blender_render.py` drop adapted into `engine/blender_gbuffers.py` (bugs fixed: argparse -h crash, 100 m clip_end, default-cube purge) + `matrices_to_trajectory.py` (quats at the 6-dp rounding floor, translations exact) + `roof_to_obj.py` (30 facets/47 verts, ENU verbatim). **DONE 2026-09-03:** Blender 4.5 installed (brew cask), camera acceptance PASSED — bidirectional 100% edge match vs `qa/clubhouse_roof_edges_px.csv` on all contact frames (fixes from the live run: Wireframe modifier not show_edges, Standard view transform not AgX, DEPTH enum absent → compositor Z-pass someday). Full 661-frame control clips rendered + encoded: `renders/wire_fov40.mp4` (structure) and `mask_fov40.mp4` (silhouette), 22.033 s each, git-ignored. Repo at 005c2c9. **Next:** feed guide + wire/mask + refs/ photos to whichever video model wins (Higgsfield still paywalled), or shingle-swap texturing on the v0 OBJ directly in Blender.
- **Grok Imagine leg, first generation graded (2026-09-03, 5137ccb): verdict HALLUCINATED.** Web surface accepts image uploads only (no video-to-video anywhere — Image/Video modes toast "Only image files are supported", Agent mode drops it silently; xAI API key also out of credits). One i2v run from master f180 seed (720p/6 s → 1280×720@24): cupola 187–207 px off the true track, camera pushed in instead of orbiting, building redesigned, roof brown not grey, Google Earth mark reproduced photorealistically. Full QA evidence in `renders/gen/`. **Implication:** Grok i2v cannot hold geometry unaided — its lane is step-2 photo replicas and the step-3 hero still (drift-tolerant); structure must come from the Blender G-buffers or a control-signal-capable model. Steps 2/3 and any second generation await Joe's go.

## Open decisions (Joe)

- [[Open - Renderer route]] — Higgsfield v2v vs image-to-3D+Blender vs full 3DGS. (HeliosGen runs locally as the Higgsfield alternative.) The shingle product names **route 2 (geometric) as the product path** — deterministic per SKU across all 661 frames; generative stays the fast mood-piece lane.
- [[Open - Pacing 22 s vs 44 s]] — decide after first preview.

## Missing inputs

- ONSC photo set (shot list in the site note) — **roof condition must come from real photos, never invented.**
- Measured roof height (QA assumes +9 m).
- ~~`es_matrices.py` as a generic script~~ — done 2026-09-03, in `engine/`; reproduces the ONSC QA matrices exactly (origin at published 7-dp lat/lon, anchors full-precision DMS).

## Hard constraints

- Earth Studio renders carry a mandatory-attribution licence — **internal guide only; the customer asset is always generated.** Acceptance test: roof corners vs `anchor_pixels.csv`.
- No Earth Studio API — stage 3 is human-in-the-loop / Claude-in-Chrome (~25 min/site).

## Adjacent assets (link, don't copy)

- `10-Projects/Birmingham-Leads/` — 207 Class-2 commercial parcels, 35205, with KML; every lead is missing `building_area` → the measurement side of this pipeline fills it.
- Promo renders in `~/Downloads` (`Furnitureland_South_Flyover_ProCover.mp4`, `Flyover – Branded Overlay*.mp4`) — GE/ProGuard promo leg, session log 2026-09-01.
- Brand rules: `10-Projects/cosine-brand/_cosine-brand-Hub.md`.

## Notes in this folder (from the 2026-09-02/03 browser session)

[[Flyover Pipeline]] · [[Earth Studio Findings]] · [[Earth Studio Export Format]] · [[Earth Ground Truth Skill]] · [[ONSC Clubhouse]] · [[Flyover SaaS Backend]] · [[Product - Shingle Visualization]] · [[Renderer Hand-off]] · [[Decision - Field of View 40]] · [[Decision - Top keys offset 3 m]]
