import type { WhaleTransaction } from "./types.js";

/**
 * Client for the Moralis Web3 API.
 *
 * Monitors whale wallet activity and token transfers on BNB Smart Chain.
 */
export class MoralisClient {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Open a real-time stream that yields transactions from the watched wallets.
   *
   * @param addresses - Wallet addresses to monitor.
   * @yields {WhaleTransaction} Each detected transaction mapped to a WhaleTransaction.
   */
  async *watchWallets(
    addresses: string[],
  ): AsyncGenerator<WhaleTransaction> {
    void addresses;
    throw new Error("Not implemented");
  }

  /**
   * Fetch historical transactions for a specific wallet.
   *
   * @param address - The wallet address to query.
   * @param limit   - Maximum number of transactions to return (default 50).
   * @returns Array of whale transactions.
   */
  async getWalletTransactions(
    address: string,
    limit?: number,
  ): Promise<WhaleTransaction[]> {
    void address;
    void limit;
    throw new Error("Not implemented");
  }

  /**
   * Fetch recent ERC-20 transfers for a given token, optionally filtering by
   * minimum USD value.
   *
   * @param tokenAddress - The token contract address.
   * @param minValue     - Minimum transfer value in USD to include.
   * @returns Array of whale transactions.
   */
  async getTokenTransfers(
    tokenAddress: string,
    minValue?: number,
  ): Promise<WhaleTransaction[]> {
    void tokenAddress;
    void minValue;
    throw new Error("Not implemented");
  }
}
