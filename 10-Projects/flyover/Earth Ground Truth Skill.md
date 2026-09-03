---
title: Earth Ground Truth Skill
type: tool
tags: [flyover, skill, claude, engine]
aliases: [earth-ground-truth-flyover, gt_build, es_verify]
created: 2026-09-03
---
# Earth Ground Truth → Flyover (Claude skill + engine)

Saved on Joe's Claude account as `earth-ground-truth-flyover` (v4, 3 Sep 2026). The SKILL.md is the process spec and embeds both scripts; the same files live in the repo at `flyover/engine/`.

- **`gt_build.py <site> move.json`** — from `anchors.json` + `move.json` writes the brief, the KML overlay and the keyframes CSV. Default move: 22 s roof hero (reveal from the open side r 200→110 m, orbit at r 90 m in 45° steps toward the entrance side, rise to 85 m hold offset 3 m). Knobs: `open_side_brg`, `orbit_direction`, `ground_m`, `target_agl`, `top_offset_m`, `orbit_keys`, `reveal`, `top`, `time_of_day_gmt`, `site_title`.
- **`es_verify.py <export.json> <site> --keyframes … --ground …`** — checks the Earth Studio export against the anchors and the CSV; writes `camera_enu.csv` + `anchor_pixels.csv`; reports anchors-in-frame.
- **`es_matrices.py`** — to write: per-frame 4×4 camera-to-world + intrinsics (spec in [[Earth Studio Export Format]]).
- Step 7b of the skill is the click-by-click path for Claude in Chrome to build the Earth Studio project (~25 min per site). → [[Earth Studio Findings]]

Reusability: **Site** = `anchors.json` (permanent). **Flight** = `move.json` (disposable). New flight = new move file; new property = new anchors. → [[Flyover Pipeline]]
