---
title: Flyover Pipeline
type: project
status: earth-studio-leg-complete
tags: [flyover, earth-studio, ground-truth, proguard-pitch, saas]
aliases: [earth-ground-truth-flyover, ground truth flyover]
created: 2026-09-03
updated: 2026-09-03
---
# Flyover Pipeline

Google Earth used strictly as a **coordinate system**; Google Earth Studio as a **physically honest camera**; a generative or 3D renderer fed by the property's **own photos** for appearance. The Earth Studio pixels are throwaway; the geometry, the camera path and the sun are what we keep.

## Stages
1. **Extract** — hover-read anchors from Google Earth Web → `anchors.json` (permanent per site). → [[ONSC Clubhouse]]
2. **Plan** — `move.json` (one flight) → `gt_build.py` → brief + KML + keyframes CSV. → [[Earth Ground Truth Skill]]
3. **Build & render** — Earth Studio project (track points, camera target, FOV 40, golden hour) → frames + 3D Tracking Data JSON. **No API: human-in-the-loop / browser-driven.** → [[Earth Studio Findings]]
4. **Verify** — `es_verify.py` → camera in ENU, anchor pixels per frame, pass/fail. → [[Earth Studio Export Format]]
5. **Matrices** — per-frame camera-to-world + intrinsics for any renderer. (`es_matrices.py` to be written; ONSC output exists.)
6. **Render** — [[Renderer Hand-off]] (not started).
7. **QA** — generated video's roof corners vs `anchor_pixels.csv`.

## Status (3 Sep 2026)
- Stages 1–5 done for [[ONSC Clubhouse]]; deliverables in `onsc_flyover_handoff.zip` → repo `flyover/` (engine + site). Frames on the Mac in the Earth Studio output folder.
- Skill `earth-ground-truth-flyover` v4 carries the whole procedure. → [[Earth Ground Truth Skill]]
- Product direction: → [[Product - Shingle Visualization]]
- SaaS backend being designed in NotebookLM. → [[Flyover SaaS Backend]]

## Decisions
- [[Decision - Field of View 40]]
- [[Decision - Top keys offset 3 m]]
- [[Open - Pacing 22 s vs 44 s]]
- [[Open - Renderer route]]

## Why
Pitch to a GE Southeast sales director connected to ProGuard Building Products (commercial roofing restoration). The flyover is a **recon-based value-add a salesman presents to a prospect** — "we've already worked on your building" — that can become a final product, including the roof re-covered with any shingle in the catalogue. The roof is the hero of every move. → [[Product - Shingle Visualization]]
