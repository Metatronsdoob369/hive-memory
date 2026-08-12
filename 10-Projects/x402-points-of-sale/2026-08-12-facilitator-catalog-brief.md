# Facilitator & Discovery-Catalog Brief — spectral-x402

**Date:** 2026-08-12
**Scope:** Which facilitator spectral-x402 should route settlements through, and which discovery catalog that choice feeds. Web research + public docs only, read-only. No GitHub issue/PR interaction beyond reading public issue text; Marsh-Press-Co/co-lab was not touched.

**Current stack (verified from repo, not the web):**
- `spectral-x402/src/facilitator.ts` — `StandardFacilitator` wraps `@x402/core`'s own `HTTPFacilitatorClient` (`@x402/core@2.21.0`). It is not a hand-rolled HTTP client; it is a thin adapter around the SDK's `POST /verify`, `POST /settle`, `GET /supported`, keyed by a single `baseUrl` + optional bearer `apiKey`.
- `spectral-x402/.env.example` and `spectral-x402/docs/SETTLEMENT-PROVISIONING.md` — current default: `X402_FACILITATOR_URL=https://x402.org/facilitator`, no API key. Verified reachable by our own settlement gate on **2026-08-07**: `GET /supported` → 200, `kinds` include `exact` + `eip155:84532` (Base Sepolia). A CDP facilitator is documented as the alternative (`X402_FACILITATOR_API_KEY` sent as `Authorization: Bearer <key>` on all three verbs) but is explicitly marked **"Not exercised here. Unverified until provisioned."**
- Mainnet (`eip155:8453`) is startup-blocked until a signed `manifests/mainnet-gate.json` validates — a separate, deliberate decision from facilitator choice.

---

## (a) Current public x402 facilitators

| Facilitator | URL | Base Sepolia (`eip155:84532`) | Base mainnet (`eip155:8453`) | Fees | Auth |
|---|---|---|---|---|---|
| **Coinbase CDP** | `https://api.cdp.coinbase.com/platform/v2/x402` (verify/settle/supported) | Yes | Yes | Verify always free. Settle: first 1,000 onchain tx/month free, then $0.001/tx. | CDP API key ID + secret required |
| **x402.org / facilitator** (reference/public instance) | `https://x402.org/facilitator` | Yes | **No — testnet only** | None (zero facilitator fee) | None — no API key |
| **Stripe** (private preview) | via Stripe, US-eligibility limited | Not confirmed | Base (live mode) | 1.5% per successful charge | Stripe account |
| **Circle Gateway** | Circle-hosted | Not confirmed | USDC via Gateway balance, batched settlement | No per-payment gas; commercial terms apply | Circle account |
| **thirdweb** | thirdweb-hosted | Broad EVM + Solana | Broad EVM + Solana (170+ chains claimed) | ~0.3% facilitator fee | thirdweb account |
| **PayAI** | PayAI-hosted | Solana/Base/Polygon/Avalanche/IoTeX/Sei | Same set | Free tier then $0.001/tx (sources disagree on the free-tier size: 1,000 vs 10,000/mo — **unverified, conflicting**) | None documented; auto-lists in Bazaar per PayAI's own claim |
| **Corbits (Faremeter)** | self-hosted, open source | Polygon, Solana | Polygon, Solana | Free (self-hosted) | None (self-hosted) |
| **Cloudflare** | Cloudflare Agents SDK, edge-hosted | Not confirmed | Base, Ethereum | Not confirmed | Cloudflare account |
| **Stellar / "Built on Stellar"** (OpenZeppelin Relayer) | Stellar-native | Stellar testnet, sponsored fees | Stellar mainnet (shipped production-ready March 2026 per search results) | Not confirmed | Not confirmed |
| **Pieverse (x402b)**, **AsterPay**, second-state, GoPlausible (Algorand), Satoshi (bitcoinsapi.com), AceDataCloud, and other long-tail community facilitators | various | varies | varies (BNB Chain, Base+EUR/SEPA, Bitcoin+Base+Solana, ICP+EVM+SVM, Algorand, etc.) | varies | varies |

**Notes / gaps:**
- The CDP URL above (`api.cdp.coinbase.com/platform/v2/x402`) is corroborated by two independent sources — CDP docs search snippets and the raw facilitator response quoted in a GitHub issue ("this is the raw response from `api.cdp.coinbase.com/platform/v2/x402/settle`") — but I could not fetch the CDP docs page directly with full endpoint-path detail; treat the exact path as high-confidence but not hand-verified against a live 200.
- `x402.org/facilitator` is treated inconsistently across sources: some describe it as "the public facilitator operated by Coinbase," others as a generic example URL in SDK code samples. On-chain, the settling addresses associated with this class of testnet infrastructure are labeled "Coinbase: x402 Facilitator N" on BaseScan. The weight of evidence is that this is **Coinbase-run infrastructure exposed at the protocol's own domain**, not an independent third party — see (b) for why this matters.
- The protocol is permissionless (anyone can run a facilitator), so this list is necessarily a snapshot, not exhaustive.

**Sources:**
- [CDP Facilitator — Coinbase Developer Documentation](https://docs.cdp.coinbase.com/x402/core-concepts/facilitator)
- [x402 Facilitator API reference](https://docs.cdp.coinbase.com/api-reference/v2/rest-api/x402-facilitator/x402-facilitator)
- [x402 ecosystem — facilitators](https://www.x402.org/ecosystem?category=facilitators)
- [FAQ — x402 GitBook](https://x402.gitbook.io/x402/faq)
- [x402 Payments in 2026: Coinbase, Stripe, Cloudflare, AWS and Alternatives — Wavect](https://wavect.io/blog/x402-payments-comparison-2026/)
- [Who's actually running x402 right now? — Sagar Shah, Medium](https://medium.com/@sagarshah16/whos-actually-running-x402-right-now-c96a055cf53c)
- [Coinbase's x402 Facilitator Launches on Polygon](https://www.coinbase.com/developer-platform/discover/launches/x402facilitator-polygon)
- [Bazaar: CDP facilitator never emits documented `EXTENSION-RESPONSES` header — GitHub issue #2112, x402-foundation/x402](https://github.com/x402-foundation/x402/issues/2112) (quotes the raw settle-endpoint URL)
- [x402 on Stellar — Stellar Docs](https://developers.stellar.org/docs/build/agentic-payments/x402)
- BaseScan address labels, e.g. [0x9c09faa4...98ac48738](https://basescan.org/address/0x9c09faa49c4235a09677159ff14f17498ac48738) — "Coinbase: x402 Facilitator 8"
- Repo-internal: `/Users/joewales/Whiteglove/spectral-x402/.env.example`, `/Users/joewales/Whiteglove/spectral-x402/docs/SETTLEMENT-PROVISIONING.md`

---

## (b) What the Bazaar is, what feeds it, and the claim

**What it is.** The "x402 Bazaar" is Coinbase's discovery/catalog layer for x402-payable resources — a machine-readable, agent-facing index ("a search engine for agents"). It is documented at `docs.cdp.coinbase.com/x402/bazaar`, has a public browsing UI at `x402bazaar.xyz`, and ships SDK helpers (`@coinbase/x402`, the Go `bazaar` extension package) to query it. Discovery reads are public and need no CDP API key.

**What feeds it — declaration *and* settlement, not one alone.** The protocol-level extension spec is explicit that neither side is sufficient by itself:
> "A server-side declaration alone catalogs nothing if no paying client echoes it."

The mechanics: a seller advertises Bazaar metadata (schema, price, description) in its `402 PaymentRequired` response and enables `discoverable: true`; a real client must **echo** that declaration back inside its `PaymentPayload` when it pays; the facilitator that settles that payment validates the echoed extension and is what actually writes the catalog entry. Per Coinbase's own seller-facing checklist:
> "Every validated endpoint is eligible for indexing in the CDP Bazaar after a successful settled payment." … "Complete a successful paid call through the CDP Facilitator" [is the final onboarding step].

So it is **settlement-triggered on top of an explicit opt-in declaration** — closer to "declare, then get one real payment through," not passive volume-based crawling and not a manual submission form.

**Is the spec facilitator-agnostic?** Yes, by design:
> "The spec for marketplace items is open and part of the x402 scheme, meaning any facilitator can implement their own discovery layer."

**Does the x402.org facilitator feed a separate catalog?** This is where I could **not fully verify the claim as stated**, and where the evidence points the other way on the claim's central premise:

1. **x402.org is not an operator with its own catalog — it's the protocol's standards site.** `x402.org` is run by the x402 Foundation (a Linux Foundation project); its front page is protocol documentation, not a commercial facilitator/discovery product, and it contains no catalog or discovery UI of its own. I found **zero evidence anywhere** — not on x402.org, not in the `coinbase/x402` or `x402-foundation/x402` GitHub repos, not in any blog post, comparison article, or community aggregator (`x402station`, the Onyx leaderboard, `awesome-x402`, `x402bazaar.org`) — of a second, independently hosted discovery catalog distinct from Coinbase's CDP Bazaar. Every discovery surface found either **is** the CDP Bazaar or is a third-party crawler/aggregator sitting on top of the same CDP-fed data.
2. **`x402.org/facilitator` itself looks like Coinbase-run infrastructure, not a separate entity's facilitator.** See (a) — BaseScan labels the settling addresses as Coinbase's, and multiple secondary sources use `x402.org/facilitator` and "the CDP facilitator" interchangeably in code samples.
3. **Whether traffic through `x402.org/facilitator` specifically populates the CDP Bazaar is the one point I could not pin down either way.** Coinbase's own "get discovered" checklist phrases the indexing trigger as running "against the **CDP Facilitator** on Base Sepolia or Solana Devnet" — worded as the CDP-branded facilitator (i.e., the authenticated `api.cdp.coinbase.com` product), not explicitly as "any endpoint under the x402.org domain." No primary source I reached states affirmatively that the free, keyless `x402.org/facilitator` door reports into the same Bazaar index as the authenticated CDP endpoint. **This is a real, unresolved gap, flagged explicitly rather than guessed at.**

**Verdict on the claim.** *"The x402.org facilitator maintains its own separate catalog, which is not the CDP Bazaar"* — **not supported by any source found, and likely false as literally stated**: there is no evidence x402.org operates any catalog at all, separate or otherwise. The second half of the claim — *"indexing follows the facilitator the settlements run through"* — is **directionally true as protocol design** (the spec is facilitator-agnostic and settlement-triggered), but in the deployed ecosystem today there is exactly one catalog with real population and adoption (CDP's), and no evidence of a competing one tied to any other facilitator, x402.org included. The practically important unknown is narrower and more useful than the original claim: **does settling through the free `x402.org/facilitator` testnet door feed the CDP Bazaar, or feed nothing?** Unverified — treat as "probably nothing" until tested, given the CDP-specific wording in Coinbase's own onboarding doc.

**Real-world friction, independent of all the above.** [GitHub issue #2112](https://github.com/x402-foundation/x402/issues/2112) documents a seller with 8 successful settlements **through the CDP facilitator** who still was not indexed; the documented `EXTENSION-RESPONSES` diagnostic header was never observed in raw facilitator responses, and whether the `payTo` wallet must be a CDP-registered wallet is an open question in the thread. Take this as evidence that even the "declare + settle through CDP" path has undocumented failure modes in practice, not just in theory.

**Sources:**
- [Discover services (Bazaar) — CDP docs](https://docs.cdp.coinbase.com/x402/bazaar)
- [Get discovered — CDP docs](https://docs.cdp.coinbase.com/x402/seller/get-discovered)
- [Bazaar (Discovery Layer) — docs.x402.org/extensions/bazaar](https://docs.x402.org/extensions/bazaar)
- [Bazaar (Discovery Layer) — x402 GitBook](https://x402.gitbook.io/x402/core-concepts/bazaar-discovery-layer)
- [Introducing x402 Bazaar — Coinbase](https://www.coinbase.com/developer-platform/discover/launches/x402-bazaar)
- [Coinbase Developer Platform announcement thread — X/Twitter](https://x.com/CoinbaseDev/status/1965445897489428869)
- [x402 Bazaar live catalog](https://x402bazaar.xyz/)
- [x402 Bazaar — bazaar package, Go — pkg.go.dev](https://pkg.go.dev/github.com/coinbase/x402/go/extensions/bazaar)
- [Bazaar indexing issue #2112 — GitHub, x402-foundation/x402](https://github.com/x402-foundation/x402/issues/2112)
- [x402.org homepage](https://www.x402.org/) (confirms x402 Foundation / Linux Foundation operatorship, no catalog of its own)
- Third-party aggregators consulted for corroboration, not treated as authoritative: [Onyx x402 Leaderboard](https://onyx-actions.onrender.com/bazaar), [x402station](https://x402station.com/about), [x402bazaar.org](https://www.x402bazaar.org/), [awesome-x402](https://github.com/xpaysh/awesome-x402)

---

## (c) Listing mechanics, per catalog

**CDP Bazaar (the only catalog with confirmed real population):**
1. Integrate the CDP facilitator (directly, or via `@coinbase/x402` middleware) for `/verify` and `/settle`.
2. Add Bazaar metadata to the `402 PaymentRequired` response and set the extension's `discoverable: true` flag (declare schema, price, description) — this is an **explicit opt-in declaration**, not automatic just from using CDP.
3. Get one real client to complete a paid call whose `PaymentPayload` **echoes** that declaration, settled through the CDP facilitator.
4. Indexing follows — no manual submission form, no minimum settlement-volume threshold documented for basic inclusion. **Curated/"featured" placement is explicitly gated on mainnet**: "Accepting live x402 payments on mainnet" is a stated requirement for that tier specifically, implying baseline discovery is not mainnet-gated the same way.
5. `/.well-known/x402` (or `x402.json`) is part of the broader protocol's self-description convention, but no source found ties it directly to *how the Bazaar ingests* a listing — it looks like a general config-discovery convention, not confirmed as the Bazaar's crawl target.

**Does testnet activity appear in a public catalog?** Yes, in practice, if thin: Coinbase's own get-discovered FAQ states discovery "endpoints surface testnet resources once verify and settle have run through CDP" on Base Sepolia or Solana Devnet. Independently, a third-party leaderboard snapshot showed **Base-Sepolia entries present but a small minority** (7 of 1,000 listed services in one snapshot, vs. hundreds/thousands on Base mainnet) — consistent with testnet being visible in baseline discovery but essentially absent from curated/featured surfaces and from most real agent traffic's practical attention. **Discovery is not strictly mainnet-only**, but it is mainnet-dominated.

**Other catalogs (x402station, Onyx leaderboard, awesome-x402, x402bazaar.org):** these read as third-party crawlers/aggregators layered on the same underlying CDP-facilitator-driven data (and/or manual PR-based README lists for `awesome-x402`), not independent listing mechanisms tied to a different facilitator.

**Sources:** same as (b), plus [Ship an x402-Powered API with Bazaar — HeimLabs, Medium](https://medium.com/@heimlabs/ship-a-402-powered-api-bazaar-with-x402-from-discovery-to-paid-response-in-one-script-cf08f3853b05)

---

## (d) Pragmatic recommendation for spectral-x402

**Facts that matter for us, specifically:**
- Facilitator choice is already a one-line, low-cost switch: `StandardFacilitator` only needs `X402_FACILITATOR_URL` (+ optional `X402_FACILITATOR_API_KEY`); the wire translation (`x402-wire.ts`) is facilitator-agnostic. No kernel code change is required to point at a different facilitator — confirmed by reading `spectral-x402/src/facilitator.ts` directly.
- Our current default, `https://x402.org/facilitator`, is free, keyless, Base-Sepolia-only, and already confirmed reachable (2026-08-07, per our own `SETTLEMENT-PROVISIONING.md`). It is the right choice for a pure testnet-settlement-correctness posture and costs nothing to keep.
- But per (b), routing through it gives us **no confirmed path into the one catalog that matters today** (CDP Bazaar). Nothing found suggests `x402.org/facilitator` feeds any catalog of its own — because no such catalog appears to exist.
- Our HTTP edge (`http.ts`) currently only publishes our **own** `/.well-known/x402` (`kernelDiscovery`) — this is not the same thing as the Bazaar's echoed-`PaymentPayload` declaration mechanism, so even switching facilitators today would not automatically make us Bazaar-discoverable; the "declare in the 402 body + get a client to echo it" step is separate, unbuilt work regardless of which facilitator URL is configured.

**Decision for Joe**

1. **Status quo — keep `x402.org/facilitator` only.** *Tradeoff:* zero cost, zero new integration, but we stay invisible to the one real discovery surface indefinitely, and we never actually test whether that free door feeds anything.
2. **(Recommended) Add a CDP-keyed Base-Sepolia lane now, in parallel, purely to de-risk discovery before mainnet.** Sign up for a CDP Developer Platform account, set `X402_FACILITATOR_API_KEY`, point a second environment/config at the CDP facilitator on `eip155:84532`, add the Bazaar `discoverable: true` declaration to our 402 challenge body, and run one real settled test payment through it. *Tradeoff:* small one-time integration cost (account signup + a challenge-body change to add Bazaar metadata + a code change so a client echoes it) but converts an unverified assumption into evidence — on testnet, before mainnet money is at stake — and is a direct rehearsal for the eventual mainnet cutover.
3. **Switch everything to CDP now, drop `x402.org/facilitator` entirely.** *Tradeoff:* consolidates onto the facilitator with actual discovery adoption, but forces every dev/CI run to depend on a CDP account and burns free-tier settlement quota (1,000 tx/month) on internal testing rather than saving it for real buyers, with no benefit over option 2 while we're still testnet-only.

**Recommendation: Option 2.** Keep `x402.org/facilitator` as the zero-friction default for local dev/CI settlement-correctness testing (it costs nothing and is already proven reachable) — but stand up a CDP-keyed Base-Sepolia lane immediately, add the Bazaar declaration to our challenge/wire, and run it through one real test settlement to get a definitive, first-party answer on indexing before `manifests/mainnet-gate.json` is ever signed. **Switch cost at mainnet is then almost entirely already paid**: flipping `X402_FACILITATOR_URL` to the CDP production endpoint, keeping the same `X402_FACILITATOR_API_KEY`, passing the mainnet gate, and restarting — the Bazaar-declaration work and the "does this actually get indexed" question will already be answered from the testnet rehearsal, rather than discovered for the first time with real money moving.
