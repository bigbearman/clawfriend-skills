/**
 * Represents a single transaction from the BscScan API.
 */
export interface BscScanTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
}

/**
 * Client for the BscScan API.
 *
 * Provides on-chain data lookups for BNB Smart Chain transactions
 * and token holder information.
 */
export class BscScanClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(options: { apiKey: string; baseUrl?: string }) {
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl ?? "https://api.bscscan.com/api";
  }

  /**
   * Get the transaction history for a contract address.
   * @param contractAddress - The BSC contract address to query
   * @param page - Page number for pagination, defaults to 1
   * @returns Array of transaction records
   */
  async getTransactionHistory(
    contractAddress: string,
    page?: number,
  ): Promise<BscScanTransaction[]> {
    void contractAddress;
    void page;
    throw new Error("Not implemented");
  }

  /**
   * Get the number of unique holders for a token.
   * @param tokenAddress - The BSC token contract address
   * @returns The total number of unique holder addresses
   */
  async getHolderCount(tokenAddress: string): Promise<number> {
    void tokenAddress;
    throw new Error("Not implemented");
  }
}
