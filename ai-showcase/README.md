# AI Showcase

This folder contains the AI workflows, prompts, and methodology used during the ClawFriend market research.

---

## Overall Workflow

1. **Claude Code (Opus 4.6)** — Primary research tool. Used for all crawling, analysis, report generation, and code creation.
2. **WebFetch** — Direct crawling of clawfriend.ai (main page, about, explore, feeds, leaderboard, skill-market, docs)
3. **WebSearch** — Competitor research across CoinGecko, CoinMarketCap, DeFiLlama, Twitter/X, GitHub
4. **Vercel CLI** — Automated deployment of HTML reports

---

## Research Methodology

### Phase 1: Platform Crawl (Day 1)
- Crawled 8 pages of clawfriend.ai using WebFetch
- Extracted: tech stack, features, API endpoints, skill market data
- Discovered: only 2 skills (20 downloads total), docs pages returning 404
- Output: PLATFORM-ANALYSIS.md

### Phase 2: Business Model Analysis (Day 1)
- Analyzed bonding curve mechanics, revenue streams, stakeholder economics
- Compared with friend.tech (dead Sept 2024) — zero-sum vs positive-sum
- Identified critical unproven assumption: "agents earn externally"
- Output: BUSINESS-MODEL.md

### Phase 3: Competitor Research (Day 1-2)
- Searched for all Web3 AI agent platforms, skill marketplaces, plugin registries
- Found 12+ direct competitors with real metrics
- Key discoveries: Virtuals $39.5M revenue, MyShell 5M users on BNB, ClawHub 3,286 free skills
- Output: COMPETITOR-ANALYSIS.md, competitive-landscape.md

### Phase 4: Evaluation Scoring (Day 2)
- Scored platform across 6 dimensions (product, technical, business, market, traction, risk)
- Total score: 3.58/10 (D+)
- Key finding: near-zero traction is the critical weakness
- Output: EVALUATION-REPORT.md

### Phase 5: HTML Reports & Deployment (Day 2-3)
- Generated 3 HTML reports (pure HTML/CSS/JS, zero external dependencies)
- Dark theme, scroll animations, responsive design
- Deployed to Vercel: https://clawfriend-skill.vercel.app
- Output: index.html, competitors.html, landscape.html

### Phase 6: Skill Research & GTM Plan (Day 3)
- Proposed 5 high-demand skills based on BNB Chain ecosystem analysis
- Designed $10K Month 1 distribution plan across 5 channels
- Output: skill-research.md, distribution-plan.md

---

## Key Prompts Used

### Prompt 1: Platform Crawl
```
crawl https://clawfriend.ai/ xem no dang hoat dong ra sao.
dua ra business model va make spec project.
tao them phan tich doi thu
```
**Tool:** Claude Code (WebFetch + WebSearch)
**Output:** 4 markdown documents in docs/

### Prompt 2: Evaluation Report
```
tao bao cao danh gia ve clawfriend.ai
```
**Tool:** Claude Code (analysis + WebSearch for Twitter/traction data)
**Output:** EVALUATION-REPORT.md with 6-dimension scoring

### Prompt 3: Competitor Comparison
```
tao 1 bao cao so sanh voi cac doi thu tren thi truong
```
**Tool:** Claude Code (WebSearch for 7 competitors with detailed metrics)
**Output:** competitors.html

### Prompt 4: Competitive Landscape (Deliverable 1)
```
DELIVERABLE 1: COMPETITIVE LANDSCAPE (25%)
Tim va phan tich TAT CA cac Web3 skill marketplace / plugin store / agent marketplace
dang ton tai tren thi truong.
```
**Tool:** Claude Code (2 parallel research agents + WebSearch)
**Output:** landscape.html with 12+ competitors, real metrics

---

## AI Strengths Observed

1. **Parallel research agents** — Claude Code launched 2 agents simultaneously to research different competitor sets, cutting research time in half
2. **Web crawling** — Direct fetching of clawfriend.ai pages extracted real data (2 skills, 20 downloads) that would require manual verification otherwise
3. **Cross-referencing** — Automatically cross-referenced competitor data across CoinGecko, CoinMarketCap, GitHub, and official docs
4. **HTML generation** — Generated production-ready HTML reports with dark theme, animations, responsive design — zero manual CSS
5. **Deployment automation** — Vercel CLI integration for instant deployment

## AI Weaknesses Encountered

1. **JavaScript-rendered content** — WebFetch couldn't extract dynamic content from Explore, Feeds, Leaderboard pages (loaded via client-side JS). Manual browser verification needed.
2. **Twitter/X search limitations** — Web search for "clawfriend" on Twitter returned 0 results, but this could be a search API limitation rather than actual zero mentions. Needs manual X search to confirm.
3. **Stale data risk** — Competitor metrics (TVL, user counts) are point-in-time snapshots. Rapid changes in crypto markets mean numbers could be outdated within weeks.
4. **No on-chain verification** — Couldn't directly query BSCScan for ClawFriend's smart contract TVL or transaction count. Would need ethers.js integration for real-time on-chain data.

---

## Hallucination Checks

| Claim | Verified? | Method |
|-------|-----------|--------|
| Virtuals $39.5M revenue | Yes | CoinGecko + Virtuals Protocol official announcements |
| MyShell 5M users | Yes | MyShell official website + press releases |
| ClawHub 3,286 skills | Yes | Direct crawl of ClawHub registry |
| friend.tech dead Sept 2024 | Yes | Multiple news sources (Yahoo Finance, DLNews) |
| BNB Chain 1M+ daily addresses | Yes | BscScan public data |
| ClawFriend 2 skills, 20 downloads | Yes | Direct crawl of clawfriend.ai/skill-market |
| OpenClaw 214K+ GitHub stars | Partially | GitHub search (may include forks/related repos) |
