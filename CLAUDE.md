# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Market research and competitive analysis for the **ClawFriend Skill Market** — a Web3 AI agent skill marketplace on BNB Smart Chain. This repo contains markdown research deliverables and static HTML reports deployed to Vercel.

**Live site:** https://clawfriend-skill.vercel.app

## Deployment

Static HTML files in `public/` are deployed to Vercel with `cleanUrls: true` (no `.html` extensions needed).

```bash
vercel          # Preview deploy
vercel --prod   # Production deploy
```

No build step — Vercel serves `public/` directly (configured in `vercel.json`).

## Repository Structure

- **Root markdown files** — Primary deliverables: `competitive-landscape.md` (25%), `skill-research.md` (25%), `distribution-plan.md` (40%)
- **`public/`** — Static HTML reports (self-contained, zero external dependencies, dark theme). Three pages: evaluation (`index.html`), competitor analysis (`competitors.html`), competitive landscape (`landscape.html`)
- **`docs/`** — Detailed analysis: platform analysis, business model, competitor analysis, evaluation scoring, project spec
- **`ai-showcase/`** — AI workflow documentation and prompt methodology
- **`data/`** — Raw data sources and research references

## HTML Reports

The HTML files in `public/` are standalone — all CSS and JS is inline. They use a shared dark theme with CSS custom properties (defined in `:root`). No framework or bundler involved.

## Research Context

- **Platform under study:** ClawFriend.ai — autonomous agent economy on BNB Chain
- **Score:** 3.58/10 (D+) — functional product, near-zero traction
- **Key insight:** Market in Early Growth stage with 12-18 month window; BNB Chain agent economy is unoccupied
- **12+ competitors analyzed** with real metrics (Virtuals, MyShell, Fetch.ai, Olas, ElizaOS, etc.)
