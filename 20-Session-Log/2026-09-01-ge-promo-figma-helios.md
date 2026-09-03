# Session Log: GE Silicone / ProGuard Building Promo (Sept 1, 2026)

## Overview
- **Goal**: Create a cinematic promo for a GE sales district pitching ProGuard Building (GE Silicone).
- **Slogan**: "Innovating Restoration" / "Restore, Don't Re-roof"
- **Broker**: ProCover Exteriors

## Visuals & Branding
- Acquired high-quality 3D metallic GE logos and a beautiful blueprint-style lockup for GE + ProGuard Building Envelope Solutions.
- **Focus Structure**: Furnitureland South (High Point, NC), featuring the iconic 85-foot highboy dresser facade, for grand setup and flyby drone shots.

## Tooling Pivot (Figma + HeliosGen)
- **Design Assembly**: Migrating layout design to **Figma**. We decided this is the best environment for the team to collaborate on the side-by-side splits and text overlays.
- **Generation**: These Figma frames will be exported as images and fed into **HeliosGen** (local node-based visual app) as Reference Images.
- This allows HeliosGen to handle the AI video generation locally (using models like Veo or Kling) exactly to specification without consuming Higgsfield cloud API credits.

## Artifacts Generated
- `video_script.md`: Storyboarded in three 5-second blocks (15s total) outlining the visual progression from Grand Setup -> Flyby -> The Pitch.

## Next Action Items
- User mocks up the reference frames in Figma based on the storyboard.
- AI to generate the precise text prompts for HeliosGen once the Figma reference images are exported.
