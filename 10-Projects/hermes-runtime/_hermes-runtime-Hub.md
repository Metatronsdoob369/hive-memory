# Hermes machine runtime — CURRENT STATE

**Role:** how Hermes actually runs on Joe's iMac. Not the x402/spectral product — that stays [hermes-spectral](../hermes-spectral/_hermes-spectral-Hub.md).

## Live (2026-08-29)

- **Gateway:** launchd `ai.hermes.gateway` (`hermes gateway run --replace`). Telegram + email + API (`127.0.0.1:8642`).
- **Telegram:** connected. Home DM `6985719694` (Joe C. Wales).
- **Email:** `calmingyourchaos@proton.me` via **Proton Mail Bridge** on loopback. Allowlist: `H.Maker@proton.me` only. Account login is `joecwales` (paid Mail); `calmingyourchaos` is one of two addresses on that account.
- **STT:** `stt.provider: local`, model `base`. `faster-whisper` 1.2.1 in `~/.hermes/hermes-agent/venv`. Intel i5-10600 / CPU int8. ffmpeg present. Voice notes on Telegram should transcribe. Bump to `small`/`medium` only if base is too sloppy — medium is slow on this box.
- **Model (2026-09-01):** default profile `grok-4.6` / `xai-oauth`. Was stuck on `blockrun/free` + `clawrouter` (dead — connection refused). OpenRouter env key rotated and valid (auth 200, $25); OpenRouter **manual** pool entry removed. Gateway launchd must be restarted to pick a new `.env` key — a running gateway keeps the old key in memory.
- **Disk after cleanup:** ~50 GB free (was 3.6 GB). Regenerable caches + iMessage tmp/attachments + Claude `vm_bundles` + Podman machine + `~/node_modules`. `chat.db` kept.

## Proton IMAP — required shape

Proton has no public IMAP. Bridge must stay running:

| | |
|---|---|
| IMAP | `127.0.0.1:1143` STARTTLS |
| SMTP | `127.0.0.1:1025` STARTTLS |
| Login | full address + **Bridge mailbox password** (not Proton login) |

Hermes stock adapter is implicit TLS on 993. Local patch in `~/.hermes/hermes-agent/gateway/platforms/email.py`: STARTTLS on port 1143 / `EMAIL_IMAP_STARTTLS`, and skip cert verify **only** for loopback (Bridge self-signed). **Dies on Hermes upgrade** — re-apply or upstream it.

`.env` keys (no values in Hive): `EMAIL_ADDRESS`, `EMAIL_PASSWORD` (Bridge mailbox), `EMAIL_IMAP_HOST/PORT`, `EMAIL_IMAP_STARTTLS`, `EMAIL_SMTP_HOST/PORT`, `EMAIL_ALLOWED_USERS`.

## Do not

- Point IMAP at `mail.proton.me` or localhost:993.
- Put `KEY=value` in Hermes Bitwarden `access_token_env` (must be the env **name**).
- Rebuild Signal or Cosine+ lander onto Higgsfield Workers (`type app` is a Quanta/Higgsfield brand leak). Factory stills only until Path B is an explicit ask.
- Mix SARN cyan into Cosine+ ads/stills.

## Next (not blocking)

- Leave Proton Bridge running (or add a Login Item). Email dies if Bridge is quit.
- OpenRouter key was rotated 2026-09-01; old key 401 User not found. If 401 returns, check gateway process env vs `.env`, then `hermes gateway restart`.
- Proton IMAP 3-day Plus trial / Higgsfield Plus: rejected. Higgsfield Starter unlim when that MCP seat is live: Soul V2, Seedream 5.0 Lite, Flux 2 Pro 1K.
