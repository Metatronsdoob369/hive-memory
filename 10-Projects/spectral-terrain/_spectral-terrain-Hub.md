# Spectral-terrain / TGIL — CURRENT STATE

**Path:** `/Users/joewales/spectral-terrain/` (also NODE_OUT copies)

## Where we are

- Refinery: crude (code/data) → gas (terrain / shards / calibrated vectors). Geometry, not tokenization.
- Local: Qdrant + Ollama embedder; circadian/canary/watchdog/drift.
- **Boundary invariant:** NO downstream awareness. Consumers depend on output contract; spectral must never model consumers.

## Fork note (stARBITRAGE)

- Portable into WhiteGlove: GEOTRANS wrapper + bridge (keyless).
- Do not port: Streamlit mixer.
- Gaps if forking: CartoCDN tiles (last rented surface); `MILITARY_BASES` three-item sample under-flags.

## Links

- WhiteGlove consumes TGIL patterns — see [whiteglove hub](../whiteglove/_whiteglove-Hub.md).
- Do not deep-productize here unless Joe asks.
