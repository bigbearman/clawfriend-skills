// ─── Type Re-exports ─────────────────────────────────────────────────────────

export type {
  RiskReport,
  RiskLevel,
  TokenSecurityResult,
  HolderInfo,
  LiquidityInfo,
  SocialVerification,
  ContractAuditResult,
  HolderAnalysisResult,
  LiquidityAnalysisResult,
  DexPair,
  Transaction,
  TokenBasicInfo,
  AnalyzerConfig,
  LogLevel,
} from "./api/types.js";

export {
  RiskReportSchema,
  AnalyzerConfigSchema,
  RiskLevel as RiskLevelEnum,
} from "./api/types.js";

// ─── Client Re-exports ──────────────────────────────────────────────────────

export { GoPlusClient } from "./api/goplus.js";
export { BscScanClient } from "./api/bscscan.js";
export { DexScreenerClient } from "./api/dexscreener.js";

// ─── Analyzer Re-exports ────────────────────────────────────────────────────

export { analyzeContract } from "./analyzers/contract-audit.js";
export { analyzeHolders } from "./analyzers/holder-analysis.js";
export { analyzeLiquidity } from "./analyzers/liquidity-analysis.js";

// ─── Utility Re-exports ─────────────────────────────────────────────────────

export { formatRiskReport, formatRiskLevel, formatUsd } from "./utils/formatter.js";
export { Logger } from "./utils/logger.js";

// ─── Main Entry Point ───────────────────────────────────────────────────────

import type { RiskReport, AnalyzerConfig } from "./api/types.js";

/**
 * Analyze a BEP-20 token on BNB Smart Chain for security risks.
 *
 * Orchestrates the full analysis pipeline:
 * 1. Contract audit via GoPlus (honeypot, ownership, taxes)
 * 2. Holder concentration analysis via BscScan
 * 3. DEX liquidity analysis via DexScreener
 * 4. Social verification checks
 * 5. Composite risk scoring and recommendation generation
 *
 * @param tokenAddress - The BEP-20 token contract address (0x-prefixed, checksummed or lowercase)
 * @param config - Configuration object with API keys and endpoints
 * @returns A comprehensive risk report with score (0-100), level (HIGH/MEDIUM/LOW),
 *          section breakdowns, and a human-readable recommendation
 *
 * @example
 * ```ts
 * import { analyzeToken } from "@clawfriend/bnb-token-analyzer";
 *
 * const report = await analyzeToken(
 *   "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", // CAKE
 *   {
 *     bscscan_api_key: process.env.BSCSCAN_API_KEY!,
 *   },
 * );
 *
 * console.log(`Risk: ${report.risk_level} (${report.risk_score}/100)`);
 * console.log(report.recommendation);
 * ```
 */
export async function analyzeToken(
  tokenAddress: string,
  config: AnalyzerConfig,
): Promise<RiskReport> {
  throw new Error("Not implemented");
}
