---
title: Open - Renderer route
type: decision
status: open
tags: [decision, flyover, renderer]
---
# Open: which renderer route first

1. **Higgsfield video-to-video** — Earth Studio frames as motion/structure guide, photos as appearance. Fastest; geometry approximate; QA via `anchor_pixels.csv`.
2. **Image-to-3D + Blender camera** — photos → textured model placed at the cupola origin, scaled to the 60.4 m axis, camera driven by `camera_matrices.json`. Exact camera; surface quality depends on the model.
3. **Full 3DGS / photogrammetry** — highest fidelity, multi-day GPU build, needs many photos.
Owner: Joe. → [[Renderer Hand-off]]
