---
title: ONSC Clubhouse
type: site
tags: [flyover, site, ground-truth, uwharrie-point]
aliases: [Old North State Club clubhouse, clubhouse]
location: 35.4690861, -80.10255
created: 2026-09-03
---
# ONSC Clubhouse — Old North State Club, Uwharrie Point, Badin Lake NC

First worked example of the [[Flyover Pipeline]] and the regression test for the engine.

## Ground truth
Hover-read from Google Earth Web (imagery 1/22/2024, 2D top-down), verified against Google's ruler: 72.12 m / 110.06° vs 72.06 m / 110.01° (6 cm). Anchors ±0.5 m.
- Origin **A1_cupola** 35°28'08.71"N 80°06'09.18"W, ground taken as **163 m ASL**.
- Footprint: long axis **60.4 m at 109.1°**; west end 9.6 m, east block 16.8 m deep; cupola 31.8 m from the west end, 31.3 m from the east.
- Lake/open side to the **SW**; entrance and roundabout to the **N**; parking lot **SSW**, ~6 m lower.

| anchor | DMS | decimal | elev m | E m | N m | note |
|---|---|---|---|---|---|---|
| A1_cupola | 35°28'08.71"N 80°06'09.18"W | 35.469086, -80.102550 | 164 | +0.0 | +0.0 | Cupola / roof lantern, clubhouse center — ORIGIN (0,0,0); ground under building taken as 163 m |
| A2_roof_W_NW | 35°28'08.91"N 80°06'10.45"W | 35.469142, -80.102903 | 163 | -32.0 | +6.2 | West block – NW roof corner |
| A3_roof_W_SW | 35°28'08.60"N 80°06'10.43"W | 35.469056, -80.102897 | 163 | -31.5 | -3.4 | West block – SW roof corner |
| A4_roof_E_NE | 35°28'08.37"N 80°06'08.06"W | 35.468992, -80.102239 | 163 | +28.2 | -10.5 | East block – NE roof corner |
| A5_roof_E_SE | 35°28'07.86"N 80°06'08.29"W | 35.468850, -80.102303 | 162 | +22.4 | -26.3 | East block – SE roof corner |
| A6_lot_S_NE | 35°28'05.85"N 80°06'11.00"W | 35.468292, -80.103056 | 157 | -45.8 | -88.4 | South parking lot – NE corner |
| A7_lot_S_NW | 35°28'05.39"N 80°06'12.35"W | 35.468164, -80.103431 | 156 | -79.8 | -102.7 | South parking lot – NW corner |
| A8_pavilion_W | 35°28'09.91"N 80°06'11.91"W | 35.469419, -80.103308 | 160 | -68.8 | +37.1 | West pavilion – roof center |
| REF_roundabout_pin | 35°28'09.84"N 80°06'09.00"W | 35.469400, -80.102500 | 162 | +4.5 | +34.9 | Roundabout island — the searched 'Selected Location' pin; reference only, not a fiducial |

## Flight: 22 s roof hero (`move.json`: open side 225°, clockwise, top offset 3 m)
| time | lat, lon | altitude | bearing / radius | beat |
|---|---|---|---|---|
| 0.0 s (f0) | 35.467816, -80.104110 | 20 m AGL / 183 m ASL | 225° / 200 m | KF0 Reveal start — over the lake SW, low, pushing toward the lawn façade |
| 6.0 s (f180) | 35.468387, -80.103408 | 40 m AGL / 203 m ASL | 225° / 110 m | KF1 Reveal end — lawn façade fills frame; begin orbit |
| 9.5 s (f285) | 35.469086, -80.103543 | 55 m AGL / 218 m ASL | 270° / 90 m | KF2 Orbit — west end (pavilion side) |
| 13.0 s (f390) | 35.469658, -80.103252 | 55 m AGL / 218 m ASL | 315° / 90 m | KF3 Orbit — NW, roof planes opening up |
| 16.0 s (f480) | 35.469895, -80.102550 | 60 m AGL / 223 m ASL | 0° / 90 m | KF4 Orbit end — over the roundabout, lake behind the building |
| 20.0 s (f600) | 35.469113, -80.102550 | 85 m AGL / 248 m ASL | 0° / 3 m | KF5 Roof hero — above the cupola (offset 3 m toward the last orbit key to avoid the camera-target flip), looking straight down |
| 22.0 s (f660) | 35.469113, -80.102550 | 85 m AGL / 248 m ASL | 0° / 3 m | KF6 Hold 2 s on the roof — end frame for the title card |

## Earth Studio
- Projects in Joe's Google account: `ONSC Clubhouse Roof Hero` (FOV 20, superseded) and **`ONSC Clubhouse Roof Hero FOV40`** (use this). 8 track points named as above, A1 local origin, Camera Target 170 m ASL, Time of Day 2026-09-02 23:15 GMT, Clouds hidden, Map Style Clean.
- Render: 661 JPEG frames 1920×1080 @ 30 fps + 3D Tracking Data JSON (Local). Verified: all keyframes exact; track points match anchors to 0.05–0.15 m after ENU rotation; every roof anchor in frame on all 661 frames at 40°.

## Files (repo `flyover/sites/onsc-clubhouse/`)
`inputs/anchors.json`, `inputs/move.json` · `plan/clubhouse_ground_truth.md`, `plan/clubhouse_anchors_path.kml`, `plan/clubhouse_keyframes.csv` · `earth-studio-export/*.json` · `qa/clubhouse_camera_enu.csv`, `qa/clubhouse_anchor_pixels.csv`, `qa/clubhouse_camera_matrices.json`, `qa/clubhouse_export_notes.md`. Frames: Mac, Earth Studio output folder → `ONSC Clubhouse Roof Hero FOV40/`.

## Still needed here
Photo capture keyed to the anchors (each roof corner from the corner and the diagonal; cupola from four sides + a low oblique; wide frames from the parking-lot corners; pavilion in frame with the west end for scale). Measure the real roof height once (QA assumes +9 m).
