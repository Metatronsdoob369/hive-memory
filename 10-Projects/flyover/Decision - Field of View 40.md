---
title: Decision - Field of View 40
type: decision
status: accepted
date: 2026-09-03
tags: [decision, earth-studio, flyover]
---
# Decision: roof-hero move uses Field of View 40° vertical

**Context.** Earth Studio's default lens is 20° vertical (≈34.8° horizontal). Projecting the [[ONSC Clubhouse]] anchors through the first render showed every roof corner out of frame at the 85 m hold (ground footprint ~53 × 30 m vs a 60.4 m building) and the west corners out at two orbit keys.

**Options.** Raise the hold (keeps the telephoto look); 30°; 35°; 40°. At 30° and 35° at least one roof corner (at roof-line height) still leaves the frame at the hold. 40° (~65.8° horizontal, footprint ~110 × 62 m at 85 m) keeps all roof anchors in frame on all 661 frames, ground and roof-line, with ~25 m buffer, and reads more like a real drone camera.

**Decision.** FOV 40°, static attribute, no keyframe changes. Re-rendered as `ONSC Clubhouse Roof Hero FOV40`; the 20° project kept for provenance. Written into the skill and the generator's brief. → [[Earth Studio Findings]]
