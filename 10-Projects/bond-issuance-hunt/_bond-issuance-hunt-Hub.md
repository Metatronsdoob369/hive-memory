# Bond issuance hunt — CURRENT STATE

**Pilot family:** same project as [arbiter](../arbiter/_arbiter-Hub.md). Proof stays in HANDOFF + ledger — linked, not pasted.

## Where we are

- **2026-07-31 board rebuild (post-Hyperagent):** Lane A vital→SSA/Numident (+ PACER exposure) and Lane B issuer/CUSIP/trustee/FAST/DWAC/Cede are **Confirmed** on the hunt map. **FAC (Federal Audit Clearinghouse) is not the cross.** Open = first A↔B bridge artifact.
- **2026-07-30:** Joe closed a Hyperagent loop; account then suspended — local artifacts untouched; do not treat that chat as store.
- Stance: build **search efficiency**; log leads/dead ends honestly; no Hardy Boys framing.
- Operator hypothesis (open): people as issuance basis / BC as stock-receipt framing — study only, not sealed.
- Hunt harness live: pack / resolve / auction / issuer-probe / posture.
- Empirical surfaces exercised: TA_WS auctions, FiscalData STRIPS parent links, FRED H.8, DTC swarm (institutional map; cold-map seeds optional).
- Identifier hunter: 100% recall live; PII quarantine; one open checksum bug in tooling lane (see skill notes).
- **Jackpot Test (Falsifier Metric):** We require an agency Statement of Transactions (SoT) / SF 1081 / FRST CUSIP listing that explicitly shows a debit/credit from a USSGL 151xxx inventory account (e.g., 151300) into a USSGL 16xxxx / §4360 marketable purchase, where the underlying identifier equals a birth-record or Numident.
- **Track C Frozen (Null Hypothesis):** Execution of the Holder/UCP matrix (Path 3) and public agency §4360 schedules (Path 2) yielded zero crossover. We hit 46 instances of person-ID + securities language (the "cousins"), but exactly 0 hits for USSGL 151xxx. The live signal is strictly standard unclaimed/residual property, not inventory→marketable. Track C is frozen as null for this formulation. Re-targeting to Path 4 (Numident endpoints) and Path 5 (escheat remittance).
- **Path 5 Confirmed (Cousin):** State Unclaimed Property (UCP) is the true source of SSN/CUSIP co-occurrence. Holder reporting packages explicitly link owner IDs (SSN/TIN if known) to securities properties (CUSIP) and remit them to *State* Treasuries, completely bypassing the Federal Fiscal Service and 151xxx ledgers. Track C will only reopen if a specimen surfaces with SSN+CUSIP on a claim surface that explicitly re-enters federal investment books.
## Links (do not copy)

- Canonical map: `arbiterOS-legal-confidant-/docs/research/hunt-map.md`
- Board discovery: `intelligence-vault/discoveries/2026-07-31-vital-ssa-vs-custody-machine-board.md`
- HANDOFF: `/Users/joewales/NODE_OUT_Master/intelligence-vault/hunt/HANDOFF.md`
- Hunt CLI: `/Users/joewales/NODE_OUT_Master/intelligence-vault/bond_issuance_hunt.py`
- Arbiter pointer: `arbiterOS-legal-confidant-/docs/research/bond-issuance-hunt.md`
- Numident API Schematic: `[numident_api_schematic.md](file:///Users/joewales/.gemini/antigravity-ide/brain/7b80abab-753e-468b-9baa-9fef3fda8000/numident_api_schematic.md)`
- Pcon ledger (study lane; no seal on BC→DTC): `backend/core/legal/pcon/hypothesisLedger.ts` / `knowledge/ledger/ledger.v1.json`
- Skill / dump: `Downloads/fixed-income-identifier-hunt/` (notes = recovery residue)
