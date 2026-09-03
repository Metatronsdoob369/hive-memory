---
title: Product - Shingle Visualization
type: product
status: concept
tags: [flyover, product, roofing, shingles, saas]
created: 2026-09-03
---
# Product: the prospect's roof, in any shingle

**What the salesman hands over.** A cinematic flyover of the prospect's own building — recon already done — first as it stands, then re-covered in the shingle line being sold. Same camera, same sun, same building; only the roof changes. Optionally a still (hero frame) per shingle colour for the proposal deck.

**Why the ground truth makes this credible.** The anchors fix the roof planes at true scale (60.4 m long axis on [[ONSC Clubhouse]]), the Earth Studio camera fixes the motion, Time of Day fixes the sun. A shingle spec (dimensions, exposure, profile, colour blend, hip/ridge cap) therefore renders at **true course size** and casts correct shadow lines — it is a material applied to real geometry, not a paint job on a picture.

**Two ways to do the swap**
- *Generative (Higgsfield / Grok):* prompt or reference-image the shingle onto the roof in the guide frames or a hero still. Fast, approximate, may drift between frames; fine for a mood piece and for a one-off still.
- *Geometric (route 2 — image-to-3D or modelled roof planes + Blender camera from `camera_matrices.json`):* the roof planes are surfaces; each shingle spec is a texture/material with real dimensions. Deterministic, repeatable per SKU, consistent across all 661 frames. **This is the product path.** Manufacturer catalogues become a material library; a new shingle is a new material, not a new render pipeline. → [[Open - Renderer route]]

**Recon by-products the same data yields for the rep** (from anchors + a pitch estimate from an oblique photo): footprint and plane areas, ridge and hip lengths, an approximate bundle count — a quote-ready quantity to hand over with the video. Pitch cannot be read from the nadir imagery; take it from a ground/oblique photo or the client's plans and mark it as an estimate.

**QA stays the same.** Generated or rendered output is checked against `anchor_pixels.csv`: roof corners must sit on their pixel tracks in every frame.
