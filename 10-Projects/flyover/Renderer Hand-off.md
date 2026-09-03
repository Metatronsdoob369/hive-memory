---
title: Renderer Hand-off
type: stage
status: not-started
tags: [flyover, renderer, higgsfield, helios, 3dgs]
---
# Renderer hand-off (next stage)

**Division of labour.** Geometry from Earth (anchors), motion from the Earth Studio camera (`camera_enu.csv` / `camera_matrices.json`), light direction from Time of Day, appearance from the property's own photos (or Grok Imagine 2 replicas of them), AI as the compositor. The invariant is **geometry** — roof planes, ridges, scale, the cupola's place — not the roof's current surface: the product is showing the prospect's building as it is *and* re-covered with any shingle they might buy. → [[Product - Shingle Visualization]]

**Inputs ready:** 661 guide frames (FOV40), per-frame camera pose + intrinsics, per-frame anchor pixel positions, anchors in ENU. → [[ONSC Clubhouse]]

**Inputs missing:** the photo set (shot list in the site note); a measured roof height for QA.

**Routes:** → [[Open - Renderer route]]. Helios runs locally as an alternative to Higgsfield.

**Acceptance test:** the four roof corners in the generated video must sit on (or move parallel to) the pixel tracks in `anchor_pixels.csv`.
