---
name: defi-yield-scanner
description: Cross-protocol DeFi yield scanner for BNB Chain with real-time APY tracking, IL estimation, and rotation alerts
version: 0.1.0
author: clawfriend-skill-market
visibility: public
platform: clawfriend.ai
chain: bnb-smart-chain

config:
  bscscan_api_key: ${BSCSCAN_API_KEY}
  rpc_url: https://bsc-dataseed.binance.org/
  chain_id: 56

  protocols:
    - name: pancakeswap
      subgraph: https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-bsc
      type: dex
    - name: venus
      api_url: https://api.venus.io
      type: lending
    - name: alpaca-finance
      subgraph: https://api.thegraph.com/subgraphs/name/alpacafinance/alpaca-finance
      type: leveraged-yield
    - name: thena
      api_url: https://api.thena.fi
      type: ve33

  scanning:
    poll_interval_minutes: 15
    min_tvl_usd: 50000
    min_apy_threshold: 5.0
    max_pools_tracked: 200
    il_estimation: true

  alerts:
    yield_spike_threshold: 2.0
    yield_decay_alert: true
    rotation_signal: true
---

# DeFi Yield Scanner

Cross-protocol yield scanning for BNB Chain. Continuously tracks APY across PancakeSwap, Venus, Alpaca Finance, and Thena to find the best risk-adjusted yield opportunities.

## What It Does

The agent polls on-chain data from major BNB Chain DeFi protocols every 15 minutes and:

1. **Calculates Real APY** — Factors in impermanent loss estimates, protocol fees, and token emission schedules for accurate yield comparison.

2. **Ranks Opportunities** — Sorts pools by risk-adjusted return across all tracked protocols.

3. **Pushes Alerts** — Notifies when yield exceeds configured thresholds or when short-lived high-APY windows open.

4. **Tracks Positions** — Monitors user's current positions and flags when it's time to rotate capital based on yield decay patterns.

## Target User

Mid-level DeFi farmer holding $1K-$50K across BNB Chain protocols. Checks yields 3-5 times daily but misses short-lived high-APY windows.

## Problem

- BNB Chain hosts $6.6B in DeFi TVL across dozens of protocols
- PancakeSwap alone has 200+ active farming pools
- Manual yield comparison takes 30-60 minutes per session
- Users miss 2-5x yield spikes lasting only 4-12 hours
- Average DeFi user leaves 15-30% of potential yield on the table

## Protocols Tracked

| Protocol | TVL | Type | Pools |
|----------|-----|------|-------|
| PancakeSwap v2/v3 | $1.22B | DEX Farming | 200+ |
| Venus | $1.4B | Lending/Borrowing | 30+ |
| Alpaca Finance | $43M | Leveraged Yield | 40+ |
| Thena | - | ve(3,3) Gauges | 50+ |

## APIs Used

| API | Purpose | Cost |
|-----|---------|------|
| PancakeSwap Subgraph | Farm and pool data | Free |
| Venus Protocol API | Lending market rates | Free |
| Alpaca Finance Subgraph | Leveraged vault data | Free |
| BscScan API | Token prices, contract reads | Free (5 calls/sec) |
| CoinGecko API | Historical APY validation | Free (30 calls/min) |
| BNB Chain RPC | On-chain reads (Multicall) | Free / $20-50/mo |

## Build Timeline

- **MVP (2-3 weeks):** Top 3 protocols, basic APY calculation, threshold alerts
- **Full (4-6 weeks):** IL calculator, position tracking, yield decay detection, all 4 protocols

## Monetization

- **Type:** Public (free)
- **Rationale:** Publicly available on-chain data. Maximizes adoption. Premium alert tiers via agent share ownership.
- **Comparable:** Free vs. $50-190/month for alpha group insights
