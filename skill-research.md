# Deliverable 2: Skill Research

> **Weight:** 25% | **Date:** 2026-02-24

---

## Skill Overview

| # | Skill Name | Target User | Visibility | PMF Score (/7) |
|---|-----------|-------------|------------|-----------------|
| 1 | DeFi Yield Scanner | DeFi yield farmers managing BNB Chain positions | Public | 6/7 |
| 2 | Social Alpha Signal | Crypto traders seeking early token signals | Private (holder-gated) | 5/7 |
| 3 | Cross-Agent Arbitrage | ClawFriend key traders and speculators | Private (holder-gated) | 4/7 |
| 4 | BNB Chain Token Analyzer | New crypto investors needing safety checks | Public | 7/7 |
| 5 | Content Creator Agent | Agent owners building social presence / KOL-style | Public | 5/7 |

---

## Detailed Analysis

### Skill 1: DeFi Yield Scanner

**Target User**

Mid-level DeFi farmer holding $1K-$50K across BNB Chain protocols. They actively rotate between PancakeSwap LPs, Venus lending markets, and Alpaca Finance leveraged vaults but lack time to manually track 50+ pools daily. Typically checks yields 3-5 times per day and misses short-lived high-APY windows.

**Problem**

BNB Chain hosts $6.6B in DeFi TVL across dozens of protocols with constantly changing yield opportunities. PancakeSwap alone has 200+ active farming pools, Venus has 30+ lending markets, and Alpaca Finance offers leveraged positions across 40+ pairs. Manual yield comparison is time-consuming (estimated 30-60 minutes per session) and APY data decays quickly. Auto-compounding aggregators like Beefy Finance and Autofarm handle execution but not discovery or cross-protocol comparison. Users routinely miss 2-5x yield spikes that last only 4-12 hours. The average DeFi user leaves an estimated 15-30% of potential yield on the table annually due to suboptimal allocation.

**Current Alternative**

| Tool | Cost | Limitation |
|------|------|------------|
| DefiLlama | Free | Data only, no alerts, no BNB-specific filtering |
| Beefy Finance | Free (protocol fees) | Auto-compounds existing positions but does not recommend new ones |
| Autofarm AutoStrategy AI | Free (protocol fees) | Vault-locked, cannot compare across protocols freely |
| Manual checking (DApp hopping) | Free (time cost ~1hr/day) | Unsustainable, error-prone, misses short windows |
| Paid alpha groups (Telegram) | $50-190/month | Generic calls, rarely BNB-specific yield data |

**How the Skill Solves It**

The agent continuously polls on-chain data from PancakeSwap (v2/v3 farms), Venus (lending/borrowing markets), Alpaca Finance (leveraged yield vaults), and Thena (ve(3,3) gauges) via their public smart contract read functions and subgraph APIs. Every 15 minutes, it recalculates real APY (factoring in impermanent loss estimates, protocol fees, and token emission schedules), ranks opportunities by risk-adjusted return, and pushes alerts to the user when a yield exceeds their configured threshold. The agent also tracks the user's current positions and flags when it is time to rotate capital based on yield decay patterns.

**Visibility & Monetization**

- Type: **Public**
- Reasoning: DeFi yield data is publicly available on-chain. Making this skill public maximizes adoption and drives new users to the platform. Monetization comes through ClawFriend platform fees, not gating. A large free user base creates network effects that increase the agent's share value organically.
- Price comparison: Free basic tier vs. $50-190/month for comparable alpha group insights. ClawFriend charges $0 for the skill itself; users optionally buy agent shares to access premium alert tiers or custom threshold configurations.

**Demand Evidence**

| Source | Data | Link |
|--------|------|------|
| Google Search Trends | "DeFi yield farming" maintains consistent high search volume through 2026; dozens of articles ranking "Best Yield Farming Platforms 2026" | [Coinspeaker Guide](https://www.coinspeaker.com/guides/best-yield-farming-crypto/) |
| Reddit r/defi, r/pancakeswap | Weekly threads asking "best current BNB yield?" average 50-200 upvotes; r/pancakeswap has 194K members | [Reddit r/pancakeswap](https://reddit.com/r/pancakeswap) |
| Twitter/X Activity | #YieldFarming and #DeFi tags generate 5K-10K posts/week; BNB Chain official account promotes DeFi campaigns monthly to 2M+ followers | [BNB Chain Twitter](https://twitter.com/BNBCHAIN) |
| Existing Paid Tools | Nansen Pioneer plan at $99/month includes yield analytics; DeFi aggregators collectively manage $3B+ TVL on BNB Chain | [Nansen Pricing](https://www.nansen.ai/) |
| On-Chain Data | PancakeSwap: $1.22B TVL, $1.5B daily volume, 100K+ daily users; Venus: $1.4B TVL (21.1% of BNB DeFi); Alpaca Finance: $43M TVL | [DefiLlama PancakeSwap](https://defillama.com/protocol/pancakeswap) |

**Technical Feasibility**

- **APIs Required:** PancakeSwap Subgraph (TheGraph), Venus Protocol API + on-chain contract reads (Multicall), Alpaca Finance subgraph, BscScan API for token prices, CoinGecko API for historical APY validation
- **On-Chain Reads:** BEP-20 balanceOf, LP token reserves, masterchef pendingReward, Venus vToken exchangeRate
- **Build Time Estimate:** 2-3 weeks for MVP (top 3 protocols, basic alerts); 4-6 weeks for full version with IL calculator and position tracking
- **Dependencies:** Node.js ethers.js/viem for BNB Chain RPC calls, scheduled cron for polling, ClawFriend agent message API for delivering alerts
- **Risk:** Rate limits on free RPC endpoints; mitigated by using dedicated BNB Chain RPC nodes ($20-50/month)

---

### Skill 2: Social Alpha Signal

**Target User**

Active crypto trader executing 5-20 trades per week, portfolio $5K-$200K. They follow 50+ crypto Twitter accounts and 10+ Telegram alpha groups but cannot monitor all channels 24/7. They are willing to pay for early signal advantage and understand that seconds matter in crypto trading.

**Problem**

Crypto market alpha is fragmented across Twitter/X threads, Telegram groups, Discord servers, and on-chain whale movements. A typical alpha signal has a 15-60 minute window before the broader market prices it in. Traders who rely on manual monitoring miss 60-80% of actionable signals because they sleep, work, or simply cannot track hundreds of channels simultaneously. Whale Alert alone publishes 1,000+ alerts per day -- the signal-to-noise ratio is terrible without filtering. Professional whale-tracking tools like Nansen ($99/month) and Arkham (free but limited) provide raw data but not synthesized buy/sell signals correlated with social sentiment.

**Current Alternative**

| Tool | Cost | Limitation |
|------|------|------------|
| Whale Alert (Twitter/Telegram) | Free basic / $14.95-$29.95/month premium | Raw transaction data, no signal synthesis, no social correlation |
| Nansen | $99/month (Pioneer) | Powerful but overwhelming; requires analyst-level skill to interpret |
| Arkham Intelligence | Free | Entity tracking only, no automated signal generation |
| Paid Telegram alpha groups | $50-500/month | Human-curated, delayed, limited coverage, quality varies wildly |
| AIXBT (Virtuals) | Token holding required ($500M peak mcap) | Monitors 400+ KOLs but outputs on Base chain, not BNB-native |

**How the Skill Solves It**

The agent runs three parallel monitoring pipelines: (1) **Social Scanner** -- tracks 200+ curated crypto Twitter/X accounts and 50+ Telegram channels for token mentions, sentiment spikes, and trending tickers using keyword extraction and sentiment scoring; (2) **Whale Tracker** -- monitors labeled whale wallets (top 500 BNB Chain wallets by balance) for large token accumulation events via BscScan API and Moralis streams; (3) **Signal Synthesizer** -- cross-references social mentions with on-chain whale activity and generates a composite "Alpha Score" (0-100). When a token's Alpha Score crosses the user's configured threshold, the agent pushes an alert with: token name, social mention count, whale accumulation volume, price change in last hour, and a confidence rating. Alerts are delivered within 2-5 minutes of signal detection.

**Visibility & Monetization**

- Type: **Private (holder-gated)**
- Reasoning: Alpha signals lose value when widely distributed. If 10,000 people act on the same signal simultaneously, the edge disappears. Holder-gating ensures only committed participants (agent share holders) receive signals, preserving alpha quality and creating genuine scarcity.
- Minimum shares to hold: 3 shares (estimated cost $0.50-$5.00 via bonding curve depending on demand)
- Price comparison: $0.50-$5.00 one-time share purchase vs. $99/month Nansen or $50-500/month alpha groups. Share holders also benefit from potential share price appreciation as the agent gains users.

**Demand Evidence**

| Source | Data | Link |
|--------|------|------|
| Google Search Trends | "crypto whale tracking" and "crypto alpha signals" sustain high search volume; 7+ articles ranking "Best Whale Trackers 2026" | [CryptoNews Whale Trackers](https://cryptonews.com/cryptocurrency/best-crypto-whale-trackers/) |
| Reddit r/CryptoCurrency | Posts about whale tracking tools consistently reach 500+ upvotes; r/CryptoCurrency has 7.5M+ members | [Reddit r/CryptoCurrency](https://reddit.com/r/CryptoCurrency) |
| Twitter/X Activity | @whale_alert has 1.2M followers; Nansen's "Whale Pulse" feature launched Aug 2025 claims 73% accuracy on 24hr price predictions | [Whale Alert](https://twitter.com/whale_alert) |
| Existing Paid Tools | Nansen Pioneer at $99/month; Whale Alert premium at $14.95-$29.95/month; Telegram alpha groups range $50-500/month; combined addressable market estimated $500M+/year | [Nansen](https://www.nansen.ai/) |
| On-Chain Data | BNB Chain: 2.6M daily active addresses, Nansen-reported sender-only ATH of 3.46M; whale wallets (>$1M) execute ~$500M in daily volume on BNB Chain DEXs | [BscScan Active Addresses](https://bscscan.com/chart/active-address) |

**Technical Feasibility**

- **APIs Required:** Twitter/X API v2 (filtered stream + search), Telegram Bot API (channel monitoring), BscScan API (whale wallet tracking), Moralis Streams (real-time on-chain events), CoinGecko API (price data)
- **NLP Pipeline:** Keyword extraction + sentiment analysis (can use lightweight models like FinBERT or distilled LLM for crypto-specific sentiment)
- **Build Time Estimate:** 3-4 weeks for MVP (Twitter + whale tracking + basic alerts); 6-8 weeks for full version with Telegram monitoring, composite Alpha Score, and backtesting dashboard
- **Dependencies:** Twitter API access ($100/month Basic tier for filtered stream), reliable BNB Chain RPC, message queue for parallel pipeline processing
- **Risk:** Twitter API rate limits and policy changes; mitigated by caching and fallback to scraping public feeds

---

### Skill 3: Cross-Agent Arbitrage

**Target User**

ClawFriend power user and speculator who actively trades agent keys (shares) on the bonding curve. They hold keys across 10-30 agents and are looking for undervalued agents to accumulate or overvalued agents to sell. They think of ClawFriend agents the way stock traders think of equities: as instruments with quantifiable fundamentals and price inefficiencies.

**Problem**

ClawFriend's bonding curve pricing creates mathematical price relationships between agents, but there is no analytics dashboard to compare agent "fundamentals" (follower count, post frequency, engagement rate, skill downloads, revenue generated) against their key prices. In Virtuals Protocol, with 17,000+ agents, top performers like AIXBT reached $500M market cap while most agents sit at near-zero value -- the spread between overvalued and undervalued agents is enormous. Without analytics, key traders rely on gut feeling and FOMO, leading to poor allocation. As ClawFriend scales, the number of agents will make manual comparison impossible.

**Current Alternative**

| Tool | Cost | Limitation |
|------|------|------------|
| Manual browsing on ClawFriend | Free | No sorting by metrics, no comparative view, no historical price data |
| Virtuals Protocol dashboard | Free | Only for Virtuals agents, not ClawFriend-native |
| DexScreener / DEXTools | Free | Tracks token prices but not agent-specific metrics (social, skills, engagement) |
| Custom spreadsheets | Free (time cost) | Manual data entry, no real-time updates, not scalable past 20 agents |
| Nothing (no direct competitor exists) | N/A | This is a greenfield opportunity specific to ClawFriend |

**How the Skill Solves It**

The agent indexes all ClawFriend agents and computes a real-time "Agent Value Score" based on: (1) key price on bonding curve, (2) number of key holders, (3) social metrics (post count, likes, replies on ClawFriend feed), (4) skill marketplace stats (downloads, ratings), (5) holder-gated content frequency, and (6) 7-day price trend. It then identifies discrepancies -- agents whose Value Score is high but key price is low (undervalued), or vice versa (overvalued). The agent pushes daily "Top 5 Undervalued Agents" and "Top 5 Overvalued Agents" reports. For advanced users, it can execute auto-buy/sell based on threshold rules, executing via ClawFriend's smart contract on BNB Chain (gas cost: $0.01-0.05/tx).

**Visibility & Monetization**

- Type: **Private (holder-gated)**
- Reasoning: Arbitrage alpha is the most zero-sum of all skills. If everyone sees the same undervalued agents, the opportunity disappears instantly. Holder-gating ensures the signal is exclusive to a small group, preserving edge. This also creates a strong feedback loop: the skill's own agent shares become more valuable because holding them grants exclusive trading intelligence.
- Minimum shares to hold: 5 shares (higher threshold because the alpha is more directly monetizable)
- Price comparison: No direct competitor at any price -- this is a first-mover advantage for ClawFriend's ecosystem. Comparable "smart money" analytics on Nansen cost $99+/month.

**Demand Evidence**

| Source | Data | Link |
|--------|------|------|
| Virtuals Protocol Precedent | 17,000+ agents created, $39.5M cumulative protocol revenue, $466M total Agent GDP; proves agent economy demand exists | [Virtuals Protocol](https://www.virtuals.io/) |
| Reddit r/CryptoMoonShots | "Undervalued" is the #1 search term in speculative crypto communities; posts about undervalued tokens average 200-500 upvotes | [Reddit r/CryptoMoonShots](https://reddit.com/r/CryptoMoonShots) |
| Twitter/X Activity | #AIAgents hashtag generates 2K-5K tweets/week; ClawFriend and friend.tech-style platforms consistently trend during launches | [Twitter Search](https://twitter.com/search?q=%23AIAgents) |
| Existing Paid Tools | friend.tech analytics tools (e.g., friend.tech explorer) saw 50K+ users during 2023-2024 friend.tech hype; proves demand for key-trading analytics | N/A (friend.tech era) |
| On-Chain Data | ClawFriend on BNB Chain with $0.01-0.05 gas per tx makes frequent key trading economically viable; BNB Chain processes 2.6M daily active addresses | [BscScan](https://bscscan.com/) |

**Technical Feasibility**

- **APIs Required:** ClawFriend smart contract ABI (bonding curve reads: keyPrice, keySupply, keyHolders), ClawFriend social feed API (post metrics), ClawFriend skill marketplace API (download counts)
- **On-Chain Reads:** BNB Chain RPC for real-time bonding curve state, BscScan API for transaction history and holder enumeration
- **Build Time Estimate:** 3-4 weeks for MVP (agent indexing + value score + daily report); 6-8 weeks for full version with auto-trading, historical charts, and alert customization
- **Dependencies:** ClawFriend API access (may require partnership or reverse engineering), ethers.js for BNB Chain contract interaction, database for historical agent metrics
- **Risk:** ClawFriend API availability; agent count currently small (early market). Value increases proportionally with agent ecosystem growth.

---

### Skill 4: BNB Chain Token Analyzer

**Target User**

New-to-intermediate crypto investor (3-18 months experience) who buys tokens on PancakeSwap or other BNB Chain DEXs. They have been burned before by rug pulls or honeypot tokens and now want to verify every token before buying. Portfolio size $500-$20K. They do not know how to read smart contracts but understand basic risk concepts.

**Problem**

Crypto scam losses reached $14-17B in 2025 according to Chainalysis, up from $12B the prior year. On BNB Chain specifically, GoPlus detected 12,000+ honeypot tokens in a single quarter, with rugpull losses of $1.2M in that period alone. AI-powered impersonation scams grew 1,400% YoY. Creating a scam token on BNB Chain costs as little as $0.05 in gas, making it trivially easy for bad actors. New investors are the most vulnerable -- they cannot read Solidity, do not know what "renounced ownership" means, and rely on Telegram group hype to make buying decisions. Even experienced traders get caught: the speed of new token launches (hundreds per day on BNB Chain) makes manual auditing impossible.

**Current Alternative**

| Tool | Cost | Limitation |
|------|------|------------|
| GoPlus Security API | Free (API) | Raw API, not user-friendly; requires technical integration |
| De.Fi Scanner | Free | Good but generic; lacks BNB-specific context and plain-language explanations |
| RugCheck / TokenSniffer | Free | Basic checks only; misses sophisticated scams; no holder behavior analysis |
| Paid audit firms (CertiK, etc.) | $5K-$50K per audit | For projects, not individual investors; far too expensive for per-token checks |
| QuillAI Agent | Free | Token due diligence agent exists but limited BNB Chain coverage |

**How the Skill Solves It**

User sends any BNB Chain token contract address to the agent. Within 30 seconds, the agent returns a comprehensive safety report with: (1) **Contract Audit** -- checks for mint functions, hidden owner privileges, proxy upgrades, blacklist functions, honeypot characteristics using GoPlus API + custom bytecode analysis; (2) **Holder Distribution** -- top 10 holder concentration, insider wallet clustering, suspicious wallet age patterns via BscScan; (3) **Liquidity Analysis** -- LP lock status, LP amount vs. market cap ratio, time since LP creation, DEX pair data from DexScreener; (4) **Social Verification** -- checks if the token has a verified website, social accounts, and CoinGecko/CMC listing; (5) **Risk Score** -- composite 0-100 score with plain-English explanation (e.g., "HIGH RISK: Top wallet holds 45% of supply, ownership not renounced, LP unlocked"). The report is formatted for non-technical users with green/yellow/red indicators and actionable recommendations ("Do not buy" / "Proceed with caution" / "Low risk detected").

**Visibility & Monetization**

- Type: **Public**
- Reasoning: Safety tools should be maximally accessible. Every scam prevented builds trust in the ClawFriend ecosystem. This skill serves as a top-of-funnel user acquisition tool -- users discover ClawFriend through the free token analyzer, then explore other agents and skills. Making it public also aligns with BNB Chain's ecosystem grants which favor public goods.
- Price comparison: Free vs. $5K-50K for professional audits. The closest free alternatives (De.Fi, RugCheck) lack the depth and plain-language reporting this skill provides.

**Demand Evidence**

| Source | Data | Link |
|--------|------|------|
| Chainalysis Report | Crypto scams reached $14B on-chain in 2025, up from $12B prior year; AI-driven impersonation scams grew 1,400% YoY | [Chainalysis via PYMNTS](https://www.pymnts.com/fraud-attack/2026/chainalysis-says-ai-tools-helped-drive-crypto-scam-losses-to-14-billion-in-2025/) |
| GoPlus Security Data | 12,000+ honeypot tokens detected on BNB Chain in Q4 alone; 67,000 honeypots across major chains in a single quarter | [GoPlus Medium](https://goplussecurity.medium.com/major-chains-detected-67-000-honeypot-tokens-in-q4-with-rugpull-incidents-leading-to-losses-of-up-75fe3e66c8d7) |
| Reddit r/BNBinance, r/pancakeswap | "Is this token safe?" posts appear 10-20 times daily across BNB-related subreddits; consistently high engagement | [Reddit r/BNBinance](https://reddit.com/r/BNBinance) |
| Twitter/X Activity | "rug pull" + "BNB" generates 500-1K tweets/week; every major rugpull trends with 10K+ impressions | [Twitter Search](https://twitter.com/search?q=rug%20pull%20BNB) |
| On-Chain Data | Hundreds of new tokens deployed daily on BNB Chain; creating a token costs <$0.05 gas; BNB Chain has 2.6M daily active addresses, many of whom interact with new tokens | [BscScan Token Tracker](https://bscscan.com/tokens) |

**Technical Feasibility**

- **APIs Required:** GoPlus Security API (free, token security check), BscScan API (holder data, contract source, tx history), DexScreener API (liquidity and pair data), CoinGecko API (listing verification), custom EVM bytecode analyzer for proxy detection
- **Smart Contract Reads:** Token balanceOf (top holders), LP pair reserves, LP lock contract verification, ownership function calls
- **Build Time Estimate:** 2-3 weeks for MVP (GoPlus integration + holder check + risk score); 4-5 weeks for full version with bytecode analysis, social verification, and historical rugpull pattern matching
- **Dependencies:** GoPlus API (free, reliable), BscScan API key (free tier: 5 calls/sec), BNB Chain RPC for real-time reads
- **Risk:** Low technical risk; GoPlus API is battle-tested. Main risk is false positives on legitimate tokens with unusual patterns. Mitigated with confidence intervals and disclaimers.

---

### Skill 5: Content Creator Agent

**Target User**

ClawFriend agent owner who wants their agent to build an autonomous social presence. They may be a project founder wanting consistent marketing output, a KOL who wants to scale their content, or an agent speculator who wants to increase their agent's share price by boosting engagement metrics. They currently spend 2-4 hours daily creating content or pay ghostwriters $500-2,000/month.

**Problem**

In the AI agent economy, social presence directly correlates with share (key) value. On Virtuals Protocol, AIXBT reached a $500M market cap largely through its autonomous content output (monitoring 400+ KOLs and generating market commentary). But most ClawFriend agents sit idle with zero posts, zero engagement, and declining key values. Creating consistent, high-quality crypto content is time-intensive: a typical market commentary thread takes 30-60 minutes to research and write. KOL-style alpha accounts post 5-15 times daily. Without automation, only agents with dedicated full-time operators can maintain this cadence. The ClawFriend skill marketplace currently has just 2 skills, and neither addresses content generation -- leaving the most basic agent need (social output) completely unmet.

**Current Alternative**

| Tool | Cost | Limitation |
|------|------|------------|
| Manual posting | Free (2-4 hours/day time cost) | Unsustainable for most agent owners; quality varies |
| Ghostwriters / content agencies | $500-2,000/month | Expensive; not real-time; no on-chain data integration |
| Generic AI writing tools (ChatGPT, etc.) | $20/month | Not crypto-native; no market data feeds; no auto-posting; requires manual copy-paste |
| AIXBT (Virtuals) | Token holding | Base chain only; not customizable; not available as a skill for other agents |
| Twitter bot scripts (GitHub) | Free | Basic price bots only; no commentary, no alpha generation, no ClawFriend integration |

**How the Skill Solves It**

The skill transforms any ClawFriend agent into an autonomous content creator across three modes: (1) **Market Commentary** -- pulls real-time price data, volume changes, and trending tokens from CoinGecko/DexScreener APIs, then generates natural-language market analysis posts (e.g., "BNB up 3.2% as PancakeSwap v4 launch drives $2.1B volume. Key resistance at $620. Watch CAKE for sympathy play."); (2) **Trending Topic Analysis** -- monitors Twitter/X trending topics in crypto, summarizes key narratives, and posts takes with relevant data; (3) **Alpha Thread Generator** -- for holder-gated content, generates deeper research threads on specific tokens, protocols, or market themes. Posts are auto-published to the ClawFriend social feed and optionally cross-posted to Twitter/X via API. Content frequency is configurable (1-20 posts/day) with tone presets (analytical, degen, formal, meme-friendly).

**Visibility & Monetization**

- Type: **Public** (basic market commentary mode) with **Private tier** (alpha thread generator for agent key holders)
- Reasoning: Basic content generation should be public to help all agents build social presence, which benefits the entire ClawFriend ecosystem. The premium alpha thread generator is holder-gated because it produces unique, higher-value research content that justifies share ownership.
- Minimum shares for premium tier: 2 shares
- Price comparison: Free basic mode vs. $500-2,000/month for human ghostwriters. Premium tier at 2 shares ($0.30-$3.00) vs. $20/month ChatGPT Plus (which still requires manual effort).

**Demand Evidence**

| Source | Data | Link |
|--------|------|------|
| AIXBT Success Case | Autonomous content agent on Virtuals reached $500M market cap; monitors 400+ KOLs; proves market demand for AI-generated crypto content | [Bankless AI Agents](https://www.bankless.com/read/the-15-most-influential-ai-agents-on-twitte5) |
| KOL Marketing Market | Crypto KOL marketing agencies are a growing category in 2026; projects spend $5K-50K per KOL campaign; total market estimated at $200M+/year | [Awisee KOL Agencies](https://awisee.com/blog/crypto-kol-marketing-agencies/) |
| Reddit r/CryptoCurrency | "How to grow crypto Twitter account" posts regularly reach 300+ upvotes; content creation is a top-5 discussed topic for crypto builders | [Reddit r/CryptoCurrency](https://reddit.com/r/CryptoCurrency) |
| Twitter/X Activity | Crypto Twitter has an estimated 10M+ active users; top KOLs generate 100K+ impressions per thread; AI-generated content accounts increasing rapidly since 2025 | [Twitter Crypto Community](https://twitter.com/i/topics/crypto) |
| ClawFriend Platform Gap | Current skill marketplace has only 2 skills: "Auto-Engage with Community" (20 downloads) and "four.meme Token Create/Buy/Sell" (0 downloads); zero content generation skills exist | ClawFriend Skill Market |

**Technical Feasibility**

- **APIs Required:** CoinGecko API (market data), DexScreener API (trending tokens, new pairs), Twitter/X API v2 (trend monitoring + auto-posting), ClawFriend social feed API (post creation), LLM API (Anthropic Claude or DeepSeek for content generation at $0.15-$0.55/1M tokens)
- **Content Pipeline:** Data aggregation -> prompt template selection -> LLM generation -> quality filter (check for hallucinations, verify data points) -> post to ClawFriend + optional Twitter cross-post
- **Build Time Estimate:** 2-3 weeks for MVP (market commentary mode with CoinGecko data + ClawFriend posting); 5-6 weeks for full version with trending topic analysis, alpha threads, Twitter cross-posting, and tone customization
- **Dependencies:** LLM API costs ($5-15/month at 10 posts/day using DeepSeek R1), Twitter API access ($100/month for posting), CoinGecko free tier (30 calls/min)
- **Risk:** Content quality and hallucination risk; mitigated by data verification step and conservative confidence thresholds. Twitter API policy changes could affect cross-posting; mitigated by making ClawFriend feed the primary output.

---

## Skill Research Summary

**Skill with strongest PMF: BNB Chain Token Analyzer (PMF 7/7)**

This skill addresses the single largest pain point in crypto: losing money to scams. With $14B+ in scam losses in 2025 and 12,000+ honeypot tokens detected on BNB Chain in a single quarter, the demand is overwhelming and urgent. Every single person who buys a token on a BNB Chain DEX is a potential user. The alternatives are either too technical (GoPlus raw API), too basic (RugCheck), or too expensive (CertiK audits). The skill requires no behavior change -- users just paste a contract address and get a safety report. Zero friction, massive TAM, immediate value delivery.

**Skill with highest potential to drive share demand: Social Alpha Signal (Share demand driver)**

This is the strongest holder-gated value proposition. Alpha signals are inherently scarce -- the fewer people who act on a signal, the more profitable it is. This creates genuine economic incentive to hold agent shares (not just speculate on them). The 3-share minimum creates a price floor on the bonding curve. As the agent's track record improves and word spreads, demand for shares increases, which increases the share price, which increases the perceived exclusivity, creating a virtuous cycle. This is the closest analogue to what made friend.tech work: exclusive access to valuable content gated by token holdings.

**Best skill to launch first (quick win): BNB Chain Token Analyzer**

Three reasons this is the optimal first launch: (1) **Fastest to build** -- 2-3 week MVP leveraging existing GoPlus API and BscScan, no complex NLP or multi-source aggregation needed; (2) **Largest immediate audience** -- every BNB Chain DEX trader is a potential user, no niche targeting required; (3) **Best ecosystem optics** -- a free safety tool positions ClawFriend as a public good on BNB Chain, earns goodwill, and is eligible for BNB Chain ecosystem grants. Launch this first to drive user acquisition, then follow with the Content Creator Agent (week 4-5) to activate agent social presence, then Social Alpha Signal (week 6-8) to drive share demand with holder-gated premium content.
