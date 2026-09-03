---
title: Decision - Top keys offset 3 m
type: decision
status: accepted
date: 2026-09-02
tags: [decision, earth-studio, flyover]
---
# Decision: the two top keys sit 3 m off the origin, not on it

Earth Studio's docs warn that a camera passing exactly over its Camera Target can snap through a 180° flip as the pan becomes undefined. The original brief put KF5/KF6 exactly on the cupola. Moving them 3 m toward the last orbit key gives 2° of tilt at 85 m — invisible in frame — and keeps the final four seconds stable. It also keeps the pixel projection well-defined. Encoded as `top_offset_m` in `move.json` (default 3). → [[Earth Ground Truth Skill]]
