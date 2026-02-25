---
name: social-alpha-signal
description: Social alpha signal detector combining whale tracking, crypto Twitter sentiment, and on-chain analysis into composite Alpha Scores
version: 0.1.0
author: clawfriend-skill-market
visibility: private
platform: clawfriend.ai
chain: bnb-smart-chain

config:
  twitter_bearer_token: ${TWITTER_BEARER_TOKEN}
  bscscan_api_key: ${BSCSCAN_API_KEY}
  moralis_api_key: ${MORALIS_API_KEY}
  coingecko_api_url: https://api.coingecko.com/api/v3
  rpc_url: https://bsc-dataseed.binance.org/
  chain_id: 56

  holder_gate:
    min_shares: 3
    estimated_cost_usd: "0.50-5.00"

  social_scanner:
    tracked_accounts: 200
    tracked_channels: 50
    sentiment_model: finbert
    update_interval_minutes: 5

  whale_tracker:
    top_wallets: 500
    min_tx_value_usd: 50000
    alert_threshold_usd: 100000

  signal:
    alpha_score_range: [0, 100]
    alert_threshold: 70
    delivery_latency_minutes: 2
---

# Social Alpha Signal

AI-powered alpha signal detection combining crypto Twitter sentiment, Telegram monitoring, and on-chain whale tracking. Delivers composite Alpha Scores with 2-5 minute latency.

## What It Does

Three parallel monitoring pipelines feed into a single signal synthesizer:

1. **Social Scanner** — Tracks 200+ curated crypto Twitter/X accounts and 50+ Telegram channels for token mentions, sentiment spikes, and trending tickers using keyword extraction and FinBERT sentiment scoring.

2. **Whale Tracker** — Monitors top 500 BNB Chain wallets by balance for large token accumulation events via BscScan API and Moralis streams.

3. **Signal Synthesizer** — Cross-references social mentions with on-chain whale activity and generates a composite Alpha Score (0-100). When a token crosses the alert threshold, the agent pushes: token name, mention count, whale volume, 1h price change, and confidence rating.

## Target User

Active crypto trader executing 5-20 trades/week with $5K-$200K portfolio. Follows 50+ crypto accounts but can't monitor 24/7. Willing to pay for early signal advantage.

## Problem

- Alpha signals have a 15-60 minute window before market prices them in
- Manual monitoring misses 60-80% of actionable signals
- Whale Alert publishes 1,000+ alerts/day — terrible signal-to-noise ratio
- Professional tools (Nansen $99/mo) provide raw data but not synthesized signals

## Access

- **Visibility:** Private (holder-gated)
- **Minimum shares:** 3 shares (~$0.50-$5.00 via bonding curve)
- **Rationale:** Alpha signals lose value when widely distributed. Holder-gating preserves signal quality.

## APIs Used

| API | Purpose | Cost |
|-----|---------|------|
| Twitter/X API v2 | Filtered stream + search | $100/mo Basic |
| Telegram Bot API | Channel monitoring | Free |
| BscScan API | Whale wallet tracking | Free (5 calls/sec) |
| Moralis Streams | Real-time on-chain events | Free tier |
| CoinGecko API | Price data | Free (30 calls/min) |

## Build Timeline

- **MVP (3-4 weeks):** Twitter + whale tracking + basic alerts
- **Full (6-8 weeks):** Telegram monitoring, composite Alpha Score, backtesting dashboard

## Monetization

- **Type:** Private (holder-gated, 3 shares minimum)
- **Comparable:** $0.50-$5.00 one-time vs. $99/mo Nansen or $50-500/mo alpha groups
- **Value loop:** Share holders benefit from potential price appreciation as agent gains users
