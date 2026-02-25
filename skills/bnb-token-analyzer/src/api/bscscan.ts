import type {
  HolderInfo,
  Transaction,
  TokenBasicInfo,
  AnalyzerConfig,
} from "./types.js";

/**
 * Client for the BscScan API.
 *
 * Provides on-chain data retrieval for BNB Smart Chain tokens including
 * holder distributions, verified contract source code, transaction history,
 * and basic token metadata.
 *
 * @see https://docs.bscscan.com/
 */
export class BscScanClient {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(
    config: Pick<AnalyzerConfig, "bscscan_api_url" | "bscscan_api_key">,
  ) {
    this.apiUrl = config.bscscan_api_url;
    this.apiKey = config.bscscan_api_key;
  }

  /**
   * Fetch the top token holders sorted by balance descending.
   *
   * @param tokenAddress - The BEP-20 token contract address
   * @param limit - Maximum number of holders to return (default: 10)
   * @returns An array of holder information including balance and concentration
   */
  async getTopHolders(
    tokenAddress: string,
    limit: number = 10,
  ): Promise<HolderInfo[]> {
    throw new Error("Not implemented");
  }

  /**
   * Retrieve the verified Solidity source code for a token contract.
   *
   * @param tokenAddress - The BEP-20 token contract address
   * @returns The contract source code string, or `null` if the contract is not verified
   */
  async getContractSource(tokenAddress: string): Promise<string | null> {
    throw new Error("Not implemented");
  }

  /**
   * Fetch the transaction history for a token contract.
   *
   * @param tokenAddress - The BEP-20 token contract address
   * @param page - Page number for paginated results (default: 1)
   * @returns An array of transactions involving the token contract
   */
  async getTransactionHistory(
    tokenAddress: string,
    page: number = 1,
  ): Promise<Transaction[]> {
    throw new Error("Not implemented");
  }

  /**
   * Retrieve basic metadata for a BEP-20 token.
   *
   * @param tokenAddress - The BEP-20 token contract address
   * @returns Basic token information including name, symbol, decimals, and supply
   */
  async getTokenInfo(tokenAddress: string): Promise<TokenBasicInfo> {
    throw new Error("Not implemented");
  }
}
