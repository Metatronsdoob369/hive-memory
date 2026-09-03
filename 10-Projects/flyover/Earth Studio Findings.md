---
title: Earth Studio Findings
type: reference
tags: [earth-studio, gotchas, verified]
created: 2026-09-03
---
# Google Earth Studio — verified findings (2–3 Sep 2026)

Things the docs don't say, or say wrongly, each confirmed on the [[ONSC Clubhouse]] build.

- **Typing a value does not create a keyframe.** Click the Camera Position keyframe diamond after entering lon/lat/alt. Filled = keyed, hollow = not.
- **Bare keystrokes are shortcuts.** Digits 1–4 change the viewport count; other keys toggle fullscreen etc. Only type into a focused field; rename track points via ⋮ → Rename.
- **Default lens is 20° vertical (telephoto).** At an 85 m top-down hold that covers ~53 × 30 m — a 60 m building's corners are out of frame. **Use Field of View 40°** (~110 × 62 m at 85 m). → [[Decision - Field of View 40]]
- **Track point altitude doesn't follow a typed coordinate** — type the elevation too.
- **Camera Target** at origin + 7 m, Influence 100 % → only position needs keyframing. Never pass exactly over the target (180° flip risk) → [[Decision - Top keys offset 3 m]].
- **Auto-Smooth** appears on middle keys automatically; 45° orbit keys become an arc.
- **Time of Day** (GMT) gives real sun; **Clouds** pull live NOAA weather — hide them.
- **KML overlays bake into renders**; they are for framing only. Import needs the OS file picker.
- **Render dialog** may reopen defaulting to cloud .mp4 — switch back to local image sequence. Map Style Clean. Advanced → 3D Tracking Data JSON, Coordinate space Local.
- **Export format is not what the docs say.** → [[Earth Studio Export Format]]
- **No API.** The build/render stage is human-in-the-loop or browser automation. → [[Flyover SaaS Backend]]
- **Attribution** is mandatory on every frame; no commercial no-attribution licence. The render stays an internal guide; the customer asset is generated from photos.
- Claude-in-Chrome hygiene: tools act on the front tab only; if every tool fails, close/reopen the side panel; screenshot `scale` may be ignored (coordinates 1:1).
