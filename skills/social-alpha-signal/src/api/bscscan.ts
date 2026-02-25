import type { WhaleTransaction } from "./types.js";

/**
 * Client for the BscScan API.
 *
 * Provides on-chain data lookups for BNB Smart Chain wallets and token transfers.
 */
export class BscScanClient {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Retrieve the top BNB-holding wallets.
   *
   * @param limit - Number of wallets to return (default 20).
   * @returns Array of wallet addresses with BNB balance and optional label.
   */
  async getTopWallets(
    limit?: number,
  ): Promise<{ address: string; balance_bnb: number; label?: string }[]> {
    void limit;
    throw new Error("Not implemented");
  }

  /**
   * Fetch ERC-20 token transfer history for a wallet, optionally scoped to a
   * specific token contract.
   *
   * @param walletAddress - The wallet address to query.
   * @param tokenAddress  - Optional token contract address to filter by.
   * @returns Array of whale transactions.
   */
  async getWalletTokenTransfers(
    walletAddress: string,
    tokenAddress?: string,
  ): Promise<WhaleTransaction[]> {
    void walletAddress;
    void tokenAddress;
    throw new Error("Not implemented");
  }
}
