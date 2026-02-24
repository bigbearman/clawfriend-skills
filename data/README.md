# Data

This folder contains raw data sources and references used throughout the ClawFriend market research.

---

## Data Sources

### Competitive Landscape
| Competitor | Source | Link | Date Accessed | Key Data Point |
|------------|--------|------|---------------|----------------|
| Virtuals Protocol | CoinGecko + Official Site | https://www.virtuals.io | 2026-02-24 | $39.5M revenue, 18K agents |
| MyShell | Official Site + Press | https://myshell.ai | 2026-02-24 | 5M users, 200K agents |
| Fetch.ai | Official Site + CoinMarketCap | https://fetch.ai | 2026-02-24 | 2.5M agents, 34M tx |
| Olas Pearl | Official Site + Crunchbase | https://olas.network | 2026-02-24 | $13.8M funding, 6M tx |
| ElizaOS | GitHub + Docs | https://elizaos.github.io/eliza/ | 2026-02-24 | 268 plugins, 16K stars |
| Griffin AI | Official Site | https://griffain.com | 2026-02-24 | 15K agents, 265K signups |
| CreatorBid | Official Site | https://creatorbid.com | 2026-02-24 | 3,500 agents |
| Morpheus | Official Site + DeFiLlama | https://mor.org | 2026-02-24 | $320M TVL |
| ClawHub | Official Registry | https://clawhub.com | 2026-02-24 | 3,286 skills, 1.5M downloads |
| MCP Ecosystem | Official Docs | https://modelcontextprotocol.io | 2026-02-24 | 17K+ servers |
| Bittensor | Official Site | https://bittensor.com | 2026-02-24 | 130 subnets |
| SingularityNET | Official Site | https://singularitynet.io | 2026-02-24 | ~70 services |

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

---

## Verification Notes

- All competitor metrics are point-in-time (2026-02-24) and may change rapidly
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
