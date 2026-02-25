import type { Pool } from "./types.js";

/**
 * Client for interacting with Alpaca Finance on BNB Smart Chain.
 *
 * Retrieves vault data and calculates leveraged yield for
 * Alpaca's leveraged yield farming positions.
 */
export class AlpacaClient {
  /**
   * Fetch all active Alpaca vaults with their current yield data.
   *
   * @returns Array of Pool objects representing Alpaca vaults.
   */
  async getVaults(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  /**
   * Calculate the expected leveraged yield for a vault at a given leverage.
   *
   * @param vaultAddress - The contract address of the Alpaca vault.
   * @param leverage - The leverage multiplier (e.g. 2.0 for 2x).
   * @returns The estimated leveraged APY as a decimal.
   */
  async getLeveragedYield(
    vaultAddress: string,
    leverage: number,
  ): Promise<number> {
    throw new Error("Not implemented");
  }
}
