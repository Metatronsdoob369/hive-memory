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
- **Material pass complete (2026-09-03, 7718543):** v0 roof re-covered in the generic laminate spec (`material_spec.json`, sector-agnostic schema, quotable=false) at true course scale — proofs: course spacing 67.67 vs 67.77 expected (0.07-course diff), alpha alignment 100%, light + hold margin confirmed. Sun A/B ran: spec'd 5.4°/275.5° kills shade planes; **20.7°/264.6° (18:00 local) chosen** — material sun is free since the guide composite is internal-only (fact 10). `renders/composite_internal_fov40.mp4` = first "clubhouse in shingle X" in motion (INTERNAL). **Hero-still blockers:** refs EXIF stripped (need original photo / stated capture time / shadow-derived sun) + camera registration of the oblique still to write. Depth pass (HF/VACE step 1) queued behind the hero still.
- **Grok Imagine leg, first generation graded (2026-09-03, 5137ccb): verdict HALLUCINATED.** Web surface accepts image uploads only (no video-to-video anywhere — Image/Video modes toast "Only image files are supported", Agent mode drops it silently; xAI API key also out of credits). One i2v run from master f180 seed (720p/6 s → 1280×720@24): cupola 187–207 px off the true track, camera pushed in instead of orbiting, building redesigned, roof brown not grey, Google Earth mark reproduced photorealistically. Full QA evidence in `renders/gen/`. **Implication:** Grok i2v cannot hold geometry unaided — its lane is step-2 photo replicas and the step-3 hero still (drift-tolerant); structure must come from the Blender G-buffers or a control-signal-capable model. Steps 2/3 and any second generation await Joe's go.

## Open decisions (Joe)

- ~~[[Open - Renderer route]] — Higgsfield v2v vs image-to-3D+Blender vs full 3DGS~~ — **decided 2026-09-05 (later session): UE5 + Twinmotion Content-for-UE plugin**, not the external Twinmotion app, no OS-level UI automation; deliverable is rendered 4K/60fps video only, not an editable `.tm` project. See [[Joint Pipeline Decision]] — **but that same doc's stated priority order puts this behind gate-chain fixes (done) and the photo re-shoot (still open)**, so it's the next renderer to build, not a green light to ship.
- [[Open - Pacing 22 s vs 44 s]] — decide after first preview.
- **New:** whether to stand up a live Unreal/Blender MCP bridge for this session vs. keep driving UE5/Blender headlessly via `UnrealEditor-Cmd`/`blender -b` scripts (as done throughout) — see [[Server MCP Environment Audit]]. Note the 2026-09-05 Tripo milestone below claims a Blender MCP server on `localhost:9876` from an earlier session; a port scan on the 5820 later the same day found nothing listening there — reconcile before relying on it.

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

### Milestone: 3D AI Reconstructed Asset Extraction (2026-09-04)
- **Model:** Extracted via TRELLIS.2 from reference oblique image.
- **Mesh:** 152,021 vertices, fully modeled architectural features (cupola, weathervane, hips, valleys, chimneys, porch).
- **Cleanup:** Floating lake background plate isolated and stripped via Blender geometry pipeline.
- **Orientation & Origin:** Centered at (0, 0, 0) with Z grounded at foundation level.
- **Artifact:** `sites/onsc-clubhouse/models/onsc_clubhouse_clean.glb` (8.2 MB).
- **Visual Verification:** `sites/onsc-clubhouse/renders/trellis_clean_preview.png`.

### Milestone: 661-Frame Trajectory Integration & Multi-Angle Flight Renders (2026-09-04)
- **Asset Placement:** `onsc_clubhouse_clean.glb` scaled to 60.18m span and oriented along site bearing.
- **Flight Engine:** `engine/render_flight_test.py` executed across 6-DoF Google Earth Studio trajectory (`clubhouse_trajectory.json`).
- **Physical Sun:** Azimuth 178.2°, Elevation 62.6° matching EXIF drone timestamp.
- **Contact Sheet Verified:** 5 keyframes (f0, f180, f285, f480, f600) showing continuous 360-degree orbit from lake approach (20m AGL) to top-down inspection (85m AGL).
- **Output:** `sites/onsc-clubhouse/renders/trellis_flight_contact_sheet.png`.

### Milestone: Mathematical Gate Correction & Oblique IoU Resolution (2026-09-04/05)
- **Mathematical Fix (144bf58):** Yaw sign formula corrected to $\psi = (90 - B) - \theta$. Optimal scale = `61.664`, optimal yaw = `−23.16°`.
- **Oblique IoU Gate:** At nadir (f600), 180° ambiguity is near-degenerate (0.509 vs 0.499); on oblique (f285), entrance asymmetry separates decisively (0.494 vs 0.454). Rule: resolve orientation flips on oblique frames.
- **Aspect Deficit Proof:** 1D linear cross-axis scaling (1.278×) proves insufficient because stretching warps bilateral masses into ovals; true multi-view reconstruction is mathematically required.

### Milestone: InfiniSplat 3DGS Radiance Field & Drone Sweep (2026-09-05)
- **Model:** 1,483,945 3D Gaussians (`onsc_scene.ply`, 79 MB) reconstructed via `PLUS-WAVE/InfiniSplat` in 6s from `real_hero_weatheredwood.jpg`.
- **Viewer:** Embedded WebGL standalone viewer `standalone.html` (21 MB).
- **Flight Render:** Blender Geometry Nodes point-rasterization pipeline reading SH0 vertex colors rendered 30 fps smooth camera sweep `onsc_infinisplat_flight.mp4`.
- **Finding:** Single-view splat demonstrates why 360° flight requires opposing baseline views (frustum boundary cutoff).

### Milestone: Master 360° Composite Flight Across All 661 Frames (2026-09-05)
- **Solid Clubhouse Overlay:** `onsc_clubhouse_v2.glb` rendered with verified scale `61.664`, yaw `−23.16°`, and physical sun (178.2° az, 62.6° el) with alpha transparency across all 661 frames.
- **Plate Composite:** Overlayed directly onto 1080p Google Earth Studio plate `ONSC Clubhouse Roof Hero FOV40.mp4`.
- **Output:** `sites/onsc-clubhouse/renders/onsc_master_flight_composite.mp4` (14.2 MB, 22 seconds @ 30 fps). Zero dissolving, solid 360° architecture, 100% real Badin Lake environment.

### Milestone: Tooling Integration — Tripo 3D & Meshy MCP (2026-09-05)
- **Tripo 3D Blender Addon:** Cloned `Metatronsdoob369/tripo-3d-for-blender`, submodules updated, symlinked into Blender 4.5/4.2 addons, verified operational. Multi-view (Front/Back/Left/Right) 3D generation and Blender MCP server on `localhost:9876`.
- **Meshy MCP Server:** Cloned `meshy-dev/meshy-mcp-server`, built, wired to Antigravity (`mcp_config.json`) and Cursor (`~/.cursor/mcp.json`). Exposes 24 tools including `meshy_multi_image_to_3d` with Meshy 7 and 8K textures.
- **Local Server Staging:** Dedicated local GPU compute server being prepared for local 4K rendering and multi-view generation.

### Milestone: Dell Precision 5820 GPU Bench Commissioning & First Render (2026-09-05)
- **Hardware & Environment:** Dell Precision 5820 (Xeon W-2145 8C/16T, 128 GB Quad-Channel ECC, RTX 3070 8GB GDDR6, 1.55 TB SSD + 3.64 TB HDD). Windows 10/11 Pro for Workstations Build 26200 / 25H2. Headless AutoAdminLogon configured.
- **Topology:** Disk 0 (`C:`) holds OS, `C:\UE5_DDC` (Unreal Engine cache), and WSL2 Ubuntu 24.04 ext4 (`/srv/repos`, `/srv/stacks`, `/srv/work`). Disk 1 (`E:`) holds `E:\Lab\` (`00-inbox` through `90-cache`).
- **WSL2 Linux & GPU Passthrough:** Ubuntu 24.04 verified with user `themachinist`, `nvidia-smi` active (RTX 3070, Driver 591.86, CUDA 13.1), native `git-lfs` 3.4.1.
- **Repository Synced & Verified:** `flyover` repo synced to `/srv/repos/flyover` and `C:\Projects\flyover`. LFS integrity passed (`git lfs fsck OK`). Mathematical port checks passed: `es_matrices.py` (0.027° / 0.531 m) and `roof_check.py` (81 facets, PASS).
- **First GPU Render Complete:** Blender 4.5.10 LTS rendered `sites/onsc-clubhouse/models/infinisplat/onsc_scene.ply` (1,483,945 3D Gaussians) via RTX 3070 OptiX / EEVEE Next to `scratch/bench_splat_test.png` (1536x1152, 2.3 MB) in 23.7 seconds.

