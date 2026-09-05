# voice-instance — CURRENT STATE

**One line:** one process, one rented call. `mic → Silero VAD → 500 ms turn → faster-whisper → grok-4-fast → Kokoro → speaker`. Not TEN. Not Hydra.

## Where we are (2026-09-03)

- **Repo:** `/Users/joewales/voice-instance`
- **Run:** `uv sync --extra dev` → `uv run voice-instance fetch-models` → `uv run voice-instance talk`
- **Key:** load order is shell → `~/voice-instance/.env` → `~/.hermes/.env`. The Hermes file key is capped. Paste the working console key into the project `.env` (gitignored).
- **Hive briefing (2026-09-03):** on start, roster + each hub one-liner / first "where we are" bullet go into the system prompt so spoken Grok can talk the real projects. Restart `talk` after Hive or `.env` edits.
- **Intel Mac gotcha:** current `onnxruntime` / `torch` wheels dropped x86_64 macOS. Stack is ONNX Runtime 1.23.2 + no torch. Silero runs as a local ONNX file.
- **Default brain:** `grok-4-fast-non-reasoning`. Override `VOICE_GROK_MODEL` if that id is gone on the key (`grok-4.20-0309-non-reasoning` or `grok-4.6`).

## Boundaries

- Do not clone TEN to get a voice. `ten-vad` / turn-detection are optional libraries later, not this instance.
- Do not put this inside `property-hydra`. Voice stays overlay.
- Do not add Agora, Deepgram, ElevenLabs, or Vapi to get the first conversation.

## Next

- GPU box: bigger whisper or one native S2S pipe. Not both.
- Day-2 turn: TEN turn-detection if barge-in shows up.
