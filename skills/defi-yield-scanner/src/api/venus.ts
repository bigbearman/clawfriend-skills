import type { LendingMarket } from "./types.js";

/**
 * Client for interacting with Venus Protocol on BNB Smart Chain.
 *
 * Retrieves lending market data including supply/borrow APYs,
 * utilization rates, and total market sizes.
 */
export class VenusClient {
  /**
   * Fetch all active lending markets on Venus.
   *
   * @returns Array of LendingMarket objects with current market data.
   */
  async getLendingMarkets(): Promise<LendingMarket[]> {
    throw new Error("Not implemented");
  }

  /**
   * Get the current supply and borrow APY for a specific market.
   *
   * @param marketAddress - The vToken contract address.
   * @returns An object with supplyApy and borrowApy as decimals.
   */
  async getMarketApy(
    marketAddress: string,
  ): Promise<{ supplyApy: number; borrowApy: number }> {
    throw new Error("Not implemented");
  }
}
