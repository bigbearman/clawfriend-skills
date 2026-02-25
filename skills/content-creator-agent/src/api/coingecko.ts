import type { MarketData } from "./types.js";

/**
 * Client for the CoinGecko API.
 *
 * Provides market data, trending tokens, and individual token price lookups
 * used by the content generation pipeline.
 */
export class CoinGeckoClient {
  /**
   * Fetch market data for a list of token IDs (CoinGecko IDs).
   *
   * @param tokenIds - CoinGecko token identifiers (e.g. `["bitcoin", "ethereum"]`).
   * @returns An array of {@link MarketData} objects, one per requested token.
   */
  async getMarketData(tokenIds: string[]): Promise<MarketData[]> {
    void tokenIds;
    throw new Error("Not implemented");
  }

  /**
   * Retrieve the current list of trending tokens from CoinGecko.
   *
   * @returns An array of {@link MarketData} for trending tokens.
   */
  async getTrendingTokens(): Promise<MarketData[]> {
    throw new Error("Not implemented");
  }

  /**
   * Get the current USD price for a single token.
   *
   * @param tokenId - CoinGecko token identifier.
   * @returns The current price in USD.
   */
  async getTokenPrice(tokenId: string): Promise<number> {
    void tokenId;
    throw new Error("Not implemented");
  }

  /**
   * Fetch global crypto market aggregates.
   *
   * @returns An object containing total market cap, 24 h volume, and BTC dominance.
   */
  async getGlobalMarketData(): Promise<{
    total_market_cap: number;
    total_volume: number;
    btc_dominance: number;
  }> {
    throw new Error("Not implemented");
  }
}
