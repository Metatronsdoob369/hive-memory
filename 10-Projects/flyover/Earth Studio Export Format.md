---
title: Earth Studio Export Format
type: reference
tags: [earth-studio, json, camera, coordinates, verified]
created: 2026-09-03
---
# Earth Studio 3D Tracking Data (JSON, Local coordinate space) — decoded

Verified on the [[ONSC Clubhouse]] FOV40 export; mean forward-axis error vs the camera target 0.03°, roll 0.

- `cameraFrames[i].coordinate` — exact lat, lon, altitude (ASL m). **Trust first.**
- `cameraFrames[i].position`, `trackPoints[].position` — **"Local" = Earth-centred ECEF axes translated to the origin track point. NOT east/north/up.** Rotate by the ENU basis at the origin (φ, λ): ê = (−sin λ, cos λ, 0), n̂ = (−sin φ cos λ, −sin φ sin λ, cos φ), û = (cos φ cos λ, cos φ sin λ, sin φ). After rotation, track points match hover-read anchors to 0.05–0.15 m. Treating it as ENU is wrong by up to ~90 m on this site.
- `cameraFrames[i].rotation` (deg) — **R = Rx(x)·Ry(y)·Rz(z)**; camera forward = R·(0,0,+1), camera up = R·(0,−1,0). Camera frame is OpenCV-style (x right, y down, z forward).
- `fovVertical` per frame; horizontal FOV = 2·atan(tan(fov/2)·W/H). Intrinsics: fx = fy = (H/2)/tan(fov/2), principal point at centre. At 40°, 1920×1080: 1483.6 px.
- `numFrames` = 660 but there are **661** cameraFrames (0–660 inclusive).
- Camera-to-world for a renderer: columns = [x_cam, y_cam, z_cam, C] in ENU; for COLMAP/3DGS world-to-camera, invert. Implemented for ONSC in `qa/clubhouse_camera_matrices.json`; the generic script `es_matrices.py` is to be written. → [[Earth Ground Truth Skill]]
