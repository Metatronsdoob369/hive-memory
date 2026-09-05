# AI Drone Cinematography & 3D Video Pipeline — Master Blueprint

**Date:** 2026-09-03  
**Status:** ACTIVE RE-ORIENTATION  
**Objective:** High-level cinematic drone flyovers of any location on Earth by combining georeferenced macro trajectory control with modern AI 3D reconstruction and generative view synthesis.

---

## 1. What Went Wrong Over the Last 36 Hours (Forensic Autopsy)

The previous agent sessions suffered from **extreme engineering myopia**:
1. **Confusing the Macro Rig for the Visual Product**: Google Earth Studio was chosen because it provides mathematically bulletproof camera physics: real 6-DoF trajectory, WGS84 coordinates, focal length, and time-of-day sun lighting. But previous agents treated the *melted, low-res satellite imagery* as the final background, and a *30-polygon hand-modeled clay box* as the final building.
2. **The "Plumb Compliance" Misunderstanding**: A corporate boundary rule stating *"Flyover renders visuals, Plumb calculates insurance replacement quantities"* was turned into an absurd test script (`test_compliance.py`) that banned all computer vision libraries (`pycolmap`, `hloc`, `solvepnp`). This prevented the pipeline from using modern AI multi-view 3D reconstruction on real client aerial photos!
3. **Abandoning AI Video Prematurely**: After one single unaided consumer web prompt on Grok drifted and hallucinated a Google watermark, the previous agents declared generative video dead and retreated into hand-modeling individual shingle texture course lines.

---

## 2. The Real Architecture: Multi-Tier AI Drone Pipeline

Based on your uploaded pipeline diagrams and reference repositories:

```
                  [Macro Trajectory & Scale]
                   Google Earth Studio (HITL)
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
   6-DoF Camera Trajectory              Time-of-Day Sun Vector
   (Lat/Lon/ASL, ENU, FOV40)           (Elev 5.4°, Az 275.5°)
            │                                     │
            ├──────────────────┬──────────────────┤
            ▼                  ▼                  ▼
  [Client Aerial Photos]   [3D Tiles API]   [Tripo-3D / AI Mesh]
   IMG_7635–7642.JPG       Google 3D Mesh    Text/Image-to-3D
            │                  │                  │
            └──────────────────┼──────────────────┘
                               ▼
                [Subject & Context 3D Veneer]
                 High-Detail Building Model
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
   Headless Blender (Cycles/EEVEE)       Unreal Engine 5 (Nanite/Lumen)
   - Depth Map G-Buffer (Per-frame)      - Orbit Cinematic Sequencer
   - Normal / Edge Pass                  - Volumetric Atmosphere
   - Alpha Composite Matte               - Photorealistic Materials
            │                                     │
            └──────────────────┬──────────────────┘
                               ▼
                [AI Temporal View Synthesis]
         Gemini Omni Flash / Veo / Depth-Conditioned Video
         - Transforms G-buffers & client photos into photorealistic motion
         - Eliminates "melted satellite" look
         - Preserves rigid camera orbit & geometry
                               │
                               ▼
        HIGH-LEVEL CINEMATIC DRONE FLYOVER (0.98–1.6s / frame)
```

---

## 3. Repositories & Tooling Integration

1. **`Metatronsdoob369/3d-tiles`**:
   - Streams Google Photorealistic 3D Tiles directly into Blender or Unreal Engine. Replaces flat 2D satellite orthomosaics with real 3D city/terrain meshes.
2. **`Metatronsdoob369/tripo-3d-for-blender`**:
   - Turns 2D client photos (`IMG_7635.JPG`–`7642.JPG`) into clean, high-detail 3D geometry with PBR materials inside Blender, eliminating manual box modeling.
3. **`Metatronsdoob369/Unreal_mcp` & `UnrealEngine5-Skills`**:
   - Direct agent control of Unreal Engine 5. Automates camera orbits, Nanite geometry import, Lumen dynamic lighting, and cinematic movie render queues.
4. **`gemini-omni-flash-api`**:
   - Image-referenced video generation and video editing with temporal consistency. Uses the rendered G-buffers as motion guides.
5. **`Metatronsdoob369/3D-DAY-DREAM`**:
   - Continuous novel view synthesis from sparse, uncalibrated image collections.
