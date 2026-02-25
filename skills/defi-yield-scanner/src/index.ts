import type { ScannerConfig, ScanResult } from "./api/types.js";

// ---------------------------------------------------------------------------
// Re-export key types for consumers
// ---------------------------------------------------------------------------

export type {
  AlertConfig,
  LendingMarket,
  Pool,
  ScannerConfig,
  ScanResult,
  UserPosition,
  YieldAlert,
  YieldOpportunity,
} from "./api/types.js";

export {
  Protocol,
  RiskLevel,
  YieldAlertType,
} from "./api/types.js";

// ---------------------------------------------------------------------------
// Re-export Zod schemas
// ---------------------------------------------------------------------------

export {
  AlertConfigSchema,
  LendingMarketSchema,
  PoolSchema,
  ScannerConfigSchema,
  ScanResultSchema,
  UserPositionSchema,
  YieldAlertSchema,
  YieldOpportunitySchema,
} from "./api/types.js";

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

/**
 * Scan BNB Chain DeFi protocols for yield opportunities.
 *
 * This is the primary entry point for the DeFi Yield Scanner skill.
 * It aggregates data from PancakeSwap, Venus, Alpaca, and Thena,
 * ranks opportunities by risk-adjusted APY, and generates alerts
 * for yield spikes, decay, and rotation signals.
 *
 * @param config - Scanner configuration controlling which protocols to scan,
 *                 alert thresholds, and result limits.
 * @returns A ScanResult containing ranked opportunities and alerts.
 *
 * @example
 * ```ts
 * import { scanYields, Protocol } from "defi-yield-scanner";
 *
 * const result = await scanYields({
 *   protocols: [Protocol.PANCAKESWAP, Protocol.VENUS],
 *   alertConfig: {
 *     min_apy_threshold: 0.05,
 *     yield_spike_multiplier: 2.0,
 *     decay_alert_enabled: true,
 *   },
 *   maxResults: 20,
 * });
 *
 * console.log(result.opportunities);
 * ```
 */
export async function scanYields(config: ScannerConfig): Promise<ScanResult> {
  throw new Error("Not implemented");
}
