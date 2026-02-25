import type { Pool } from "./types.js";

/**
 * Client for interacting with PancakeSwap V3 on BNB Smart Chain.
 *
 * Retrieves farm data, pool APYs, and LP reserve information from
 * PancakeSwap's on-chain contracts and public API endpoints.
 */
export class PancakeSwapClient {
  /**
   * Fetch all active farms with their current yield data.
   *
   * @returns Array of Pool objects representing PancakeSwap farms.
   */
  async getFarms(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  /**
   * Get the current APY for a specific pool.
   *
   * @param poolId - The on-chain identifier for the pool.
   * @returns The total APY as a decimal (e.g. 0.12 for 12%).
   */
  async getPoolApy(poolId: string): Promise<number> {
    throw new Error("Not implemented");
  }

  /**
   * Retrieve the current reserves for a liquidity pair.
   *
   * @param pairAddress - The contract address of the LP pair.
   * @returns An object containing reserve0 and reserve1 as bigint values.
   */
  async getLpReserves(
    pairAddress: string,
  ): Promise<{ reserve0: bigint; reserve1: bigint }> {
    throw new Error("Not implemented");
  }
}
