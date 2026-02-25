import type {
  Pool,
  Protocol,
  ScanResult,
  YieldAlert,
  YieldOpportunity,
} from "../api/types.js";

/**
 * Core yield scanner that aggregates data across all supported BNB Chain
 * DeFi protocols, ranks opportunities by risk-adjusted APY, and detects
 * yield anomalies (spikes, decay, rotation signals).
 */
export class YieldScanner {
  /**
   * Run a full scan across all supported protocols.
   *
   * Fetches pool data from PancakeSwap, Venus, Alpaca, and Thena,
   * ranks the results, and generates any applicable alerts.
   *
   * @returns A ScanResult containing ranked opportunities and alerts.
   */
  async scanAll(): Promise<ScanResult> {
    throw new Error("Not implemented");
  }

  /**
   * Scan a single protocol for its current pool data.
   *
   * @param protocol - The protocol to scan.
   * @returns Array of Pool objects from the specified protocol.
   */
  async scanProtocol(protocol: Protocol): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  /**
   * Rank an array of pools by risk-adjusted APY.
   *
   * Applies risk weighting based on each pool's risk_level and IL estimate
   * to produce a sorted list of yield opportunities.
   *
   * @param pools - The pools to rank.
   * @returns Sorted array of YieldOpportunity objects (best first).
   */
  rankByRiskAdjustedApy(pools: Pool[]): YieldOpportunity[] {
    throw new Error("Not implemented");
  }

  /**
   * Compare current and previous pool snapshots to detect yield spikes.
   *
   * A spike is identified when a pool's APY increases beyond the
   * configured multiplier threshold compared to its previous value.
   *
   * @param current - Current pool snapshot.
   * @param previous - Previous pool snapshot for comparison.
   * @returns Array of YieldAlert objects for detected spikes.
   */
  detectYieldSpikes(current: Pool[], previous: Pool[]): YieldAlert[] {
    throw new Error("Not implemented");
  }
}
