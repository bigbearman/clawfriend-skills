---
name: bnb-token-analyzer
description: Comprehensive BNB Chain token safety analyzer with scam detection, holder analysis, liquidity checks, and risk scoring
version: 0.1.0
author: clawfriend-skill-market
visibility: public
platform: clawfriend.ai
chain: bnb-smart-chain

config:
  goplus_api_url: https://api.gopluslabs.io
  bscscan_api_key: ${BSCSCAN_API_KEY}
  dexscreener_api_url: https://api.dexscreener.com
  coingecko_api_url: https://api.coingecko.com/api/v3
  rpc_url: https://bsc-dataseed.binance.org/
  chain_id: 56

  analysis:
    max_top_holders: 10
    honeypot_check: true
    liquidity_threshold_usd: 10000
    risk_score_weights:
      contract_audit: 0.30
      holder_distribution: 0.25
      liquidity_analysis: 0.25
      social_verification: 0.20

  rate_limits:
    bscscan_calls_per_sec: 5
    goplus_calls_per_sec: 10
    coingecko_calls_per_min: 30
---

# BNB Chain Token Analyzer

Comprehensive token safety analysis for BNB Chain. Paste any token contract address and get a full safety report in under 30 seconds.

## What It Does

This skill analyzes BNB Chain (BSC) tokens across four dimensions:

1. **Contract Audit** — Detects mint functions, hidden owner privileges, proxy upgrades, blacklist functions, and honeypot characteristics using GoPlus Security API and custom bytecode analysis.

2. **Holder Distribution** — Analyzes top holder concentration, insider wallet clustering, and suspicious wallet age patterns via BscScan API.

3. **Liquidity Analysis** — Checks LP lock status, LP-to-market-cap ratio, time since LP creation, and DEX pair data from DexScreener.

4. **Social Verification** — Verifies whether the token has a website, active social accounts, and CoinGecko/CMC listings.

Each dimension produces a sub-score, which feeds into a composite **Risk Score (0-100)** with a plain-English explanation and color-coded risk level (green/yellow/red).

## Target User

New-to-intermediate crypto investors (3-18 months experience) who buy tokens on PancakeSwap or other BNB Chain DEXs. They want to verify token safety before buying but cannot read Solidity code.

## Problem

- Crypto scam losses reached $14B+ in 2025 (Chainalysis)
- GoPlus detected 12,000+ honeypot tokens on BNB Chain in a single quarter
- Creating a scam token costs <$0.05 in gas on BNB Chain
- New investors cannot read smart contracts and rely on group hype

## Usage

```
Analyze token: 0x1234...abcd
```

The agent returns a structured safety report with:
- Risk Score (0-100) with color indicator
- Contract audit findings
- Top 10 holder breakdown
- Liquidity status and LP lock info
- Social verification results
- Plain-English recommendation: "Do not buy" / "Proceed with caution" / "Low risk detected"

## APIs Used

| API | Purpose | Cost |
|-----|---------|------|
| GoPlus Security | Contract audit, honeypot detection | Free |
| BscScan | Holder data, contract source, tx history | Free (5 calls/sec) |
| DexScreener | Liquidity and DEX pair data | Free |
| CoinGecko | Listing verification, price data | Free (30 calls/min) |
| BNB Chain RPC | On-chain reads (balanceOf, reserves) | Free / $20-50/mo dedicated |

## Build Timeline

- **MVP (2-3 weeks):** GoPlus integration + holder check + risk score
- **Full (4-5 weeks):** Bytecode analysis, social verification, historical rugpull pattern matching

## Monetization

- **Type:** Public (free)
- **Rationale:** Safety tools maximize adoption and trust. Top-of-funnel user acquisition for ClawFriend ecosystem.
- **Comparable:** Free vs. $5K-50K for CertiK audits
