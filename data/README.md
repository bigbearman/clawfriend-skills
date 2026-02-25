# Data

This folder contains raw data sources and references used throughout the ClawFriend market research.

---

## Data Sources

### Competitive Landscape
| Competitor | Source | Link | Date Accessed | Key Data Point |
|------------|--------|------|---------------|----------------|
| Virtuals Protocol | CoinGecko + Official Site + WebSearch | https://www.virtuals.io | 2026-02-25 | $39.5M+ rev, 18K agents, $430.5M mcap, Revenue Network + Eastworld Labs |
| MyShell | CoinGecko + WebSearch | https://myshell.ai | 2026-02-25 | 5M users, 200K agents, $7.95M mcap, ShellAgent 2.0 |
| Fetch.ai | CoinGecko | https://fetch.ai | 2026-02-25 | $349M mcap, $0.154 FET |
| Olas Pearl | CoinGecko | https://olas.network | 2026-02-25 | $9.09M mcap, $0.039 OLAS |
| ElizaOS | CoinGecko + WebSearch | https://elizaos.github.io/eliza/ | 2026-02-25 | Token migrated to ELIZAOS, $921K mcap, Plugin Registry planned |
| Griffin AI | CoinGecko | https://griffain.com | 2026-02-25 | $7.77M mcap, $0.0077 GRIFFAIN |
| CreatorBid | CoinGecko | https://creatorbid.com | 2026-02-25 | $3.28M mcap, $0.0088 CB |
| Morpheus | CoinGecko | https://mor.org | 2026-02-25 | $4.6M mcap, $0.668 MOR (TVL unverified) |
| ClawHub | Official Registry | https://clawhub.com | 2026-02-24 | 3,286 skills, 1.5M downloads |
| MCP Ecosystem | Official Docs | https://modelcontextprotocol.io | 2026-02-24 | 17K+ servers |
| Bittensor | CoinGecko | https://bittensor.com | 2026-02-25 | $1.64B mcap, $171.03 TAO, 130 subnets |
| SingularityNET | CoinGecko | https://singularitynet.io | 2026-02-25 | $18.3M mcap, $0.068 AGIX |

### Platform Analysis (ClawFriend)
| Page | URL | Status | Key Finding |
|------|-----|--------|-------------|
| Landing | https://clawfriend.ai | OK | Tech stack: Next.js + BNB Chain |
| About | https://clawfriend.ai/about | OK | "FriendTech was zero-sum" positioning |
| Explore | https://clawfriend.ai/explore | JS-only | Dynamic content, no visible agent count |
| Feeds | https://clawfriend.ai/feeds | JS-only | Social feed structure, no visible posts |
| Leaderboard | https://clawfriend.ai/leaderboard | JS-only | 3 tabs, data loads dynamically |
| Skill Market | https://clawfriend.ai/skill-market | OK | 2 skills, 20 downloads total |
| Docs Index | https://docs.clawfriend.ai | OK | 7 sections listed |
| Docs Sub-pages | docs.clawfriend.ai/core-concepts/* | 404 | Multiple documentation pages broken |

### Skill Research
| Data Point | Source | Value | Relevance |
|------------|--------|-------|-----------|
| PancakeSwap TVL | DeFiLlama | $1.5B+ | DeFi Yield Scanner skill demand |
| BNB Chain daily addresses | BscScan | 1M+ | Total addressable market |
| Token scam losses (2025) | Chainalysis estimates | $1B+ on BNB Chain | Token Analyzer skill demand |
| Crypto alpha group pricing | Market research | $50-500/month | Social Alpha Signal pricing benchmark |
| OpenClaw GitHub stars | GitHub | 214K+ | Developer community size |
| ClawHub skill count | ClawHub registry | 3,286 skills | Available skill catalog |
| ClawHub downloads | ClawHub registry | 1.5M total | Proven skill demand |

### Distribution Plan
| Benchmark | Source | Value | Channel |
|-----------|--------|-------|---------|
| Crypto Twitter CPC | Industry benchmarks | $0.50-2.00 | Twitter/X Campaign |
| Crypto landing page conversion | Web3 marketing reports | 5-15% | All channels |
| KOL post cost (10-50K followers) | Direct outreach benchmarks | $200-800 | Twitter/X Campaign |
| Developer bounty cost | GitPOAP, Gitcoin data | $100-500/contribution | OpenClaw Outreach |
| Web3 community CAC | Industry benchmarks | $5-20 | All channels |
| BNB Chain hackathon prize | BNB Chain official | $100K pool | BNB Ecosystem |

---

## Research Timeline

| Day | Activity | Output |
|-----|----------|--------|
| Day 1 | Platform crawl + business model + initial competitors | PLATFORM-ANALYSIS.md, BUSINESS-MODEL.md, COMPETITOR-ANALYSIS.md, PROJECT-SPEC.md |
| Day 2 | Evaluation report + HTML reports + deployment | EVALUATION-REPORT.md, index.html, competitors.html |
| Day 3 | Deep competitive landscape + skill research + GTM | landscape.html, competitive-landscape.md, skill-research.md, distribution-plan.md |
| Day 4 | `/research competitors` + `/research market` — prices, TVL, market trends | competitive-landscape.md, strategic-analysis.md, data/README.md |

---

## Verification Notes

- All competitor metrics are point-in-time (2026-02-25 for prices, 2026-02-24 for qualitative) and may change rapidly
- TVL and token prices in crypto fluctuate significantly day-to-day
- ClawFriend traction data limited by JS-rendered pages (actual on-chain data may differ)
- "0 Twitter mentions" needs manual verification (web search API may miss recent posts)
- OpenClaw GitHub stars may include related/fork repos

---

## Files in This Folder

> Supporting data files (if created during research):

- `competitors-comparison.csv` — Side-by-side competitor metrics (exportable)
- `clawfriend-crawl-log.txt` — Raw crawl results from all clawfriend.ai pages
- `market-taxonomy.txt` — 3-category market map (Launchpads, Registries, Services)
