---
title: Flyover SaaS Backend
type: project
status: design
tags: [flyover, saas, backend, notebooklm]
---
# Flyover SaaS backend (designed in NotebookLM)

Goal: productize the [[Flyover Pipeline]] — per-building flyovers as a repeatable service.

Design constraints established 3 Sep 2026:
- Two entities: **Site** (`anchors.json`, permanent) and **Flight** (`move.json`, disposable); renders, exports and QA hang off a Flight.
- **Earth Studio has no API** → model stage 3 as a human-in-the-loop / browser-automation task with hand-off in (KML, keyframes CSV, track-point table) and hand-off out (tracking JSON, frame folder). Everything else is pure Python.
- Export frame is ECEF-shifted; rotation R = Rx·Ry·Rz; FOV 40 required → [[Earth Studio Export Format]], [[Earth Studio Findings]].
- Customer asset is never the Earth Studio render (attribution licence); `anchor_pixels.csv` is the acceptance test for the generated video.
- Not yet built: `es_matrices.py` as a script, renderer hand-off, frame stitching, photo-capture workflow.

Sources for NotebookLM: `flyover/engine/SKILL.md`, `HANDOFF.md`, `qa/clubhouse_export_notes.md`.
