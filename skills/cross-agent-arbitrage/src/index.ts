// ── Type re-exports ────────────────────────────────────────────────────────

export type {
  AgentProfile,
  AgentMetrics,
  AgentValueScore,
  TradeAction,
  ArbitrageReport,
  TradingConfig,
  BondingCurveState,
  ScoreBreakdown,
  Signal,
  Action,
} from "./api/types.js";

export {
  AgentProfileSchema,
  AgentMetricsSchema,
  AgentValueScoreSchema,
  TradeActionSchema,
  ArbitrageReportSchema,
  TradingConfigSchema,
  BondingCurveStateSchema,
  SignalEnum,
  ActionEnum,
} from "./api/types.js";

// ── Client re-exports ─────────────────────────────────────────────────────

export { ClawFriendContractClient } from "./api/clawfriend-contract.js";
export { ClawFriendSocialClient } from "./api/clawfriend-social.js";
export { BscScanClient } from "./api/bscscan.js";

// ── Strategy re-exports ───────────────────────────────────────────────────

export { ValueScorer } from "./strategy/value-scorer.js";
export { ArbitrageDetector } from "./strategy/arbitrage-detector.js";
export { AutoTrader } from "./strategy/auto-trader.js";

// ── Utility re-exports ───────────────────────────────────────────────────

export {
  formatValueScore,
  formatArbitrageReport,
  formatTradeAction,
  formatBnb,
} from "./utils/formatter.js";
export { Logger } from "./utils/logger.js";
export type { LogLevel } from "./utils/logger.js";

// ── Imports for top-level functions ───────────────────────────────────────

import type { ArbitrageReport, TradingConfig } from "./api/types.js";

/**
 * Scan all agents on the ClawFriend platform, score them, and generate
 * an arbitrage report identifying undervalued and overvalued agents.
 *
 * This is the primary entry point for the skill. It orchestrates:
 * 1. Fetching the full agent directory from the social API
 * 2. Scoring each agent using on-chain and social data
 * 3. Detecting arbitrage opportunities based on value discrepancies
 *
 * @param config - Trading configuration with thresholds for under/overvalued detection
 * @returns An arbitrage report with ranked opportunities
 *
 * @example
 * ```ts
 * const report = await scanAgents({
 *   auto_trade: false,
 *   max_position_bnb: 0.5,
 *   slippage_tolerance: 0.02,
 *   undervalued_threshold: 20,
 *   overvalued_threshold: 20,
 * });
 * console.log(report.top_undervalued);
 * ```
 */
export async function scanAgents(
  config: TradingConfig,
): Promise<ArbitrageReport> {
  void config;
  throw new Error("Not implemented");
}

/**
 * Execute trades based on an arbitrage report and trading configuration.
 *
 * Plans trades from the report's undervalued (BUY) and overvalued (SELL)
 * signals, validates each against risk parameters, and submits them
 * on-chain. Only executes if `config.auto_trade` is true.
 *
 * @param report - The arbitrage report containing trade opportunities
 * @param config - Trading configuration with execution parameters
 * @returns Array of transaction hashes for executed trades
 *
 * @example
 * ```ts
 * const txHashes = await executeTrades(report, {
 *   auto_trade: true,
 *   max_position_bnb: 0.5,
 *   slippage_tolerance: 0.02,
 *   undervalued_threshold: 20,
 *   overvalued_threshold: 20,
 * });
 * console.log(`Executed ${txHashes.length} trades`);
 * ```
 */
export async function executeTrades(
  report: ArbitrageReport,
  config: TradingConfig,
): Promise<string[]> {
  void report;
  void config;
  throw new Error("Not implemented");
}
