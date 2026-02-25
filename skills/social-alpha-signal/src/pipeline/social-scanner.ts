import type { SocialMention, SentimentResult } from "../api/types.js";
import type { TwitterClient } from "../api/twitter.js";

/**
 * Scans social channels for token mentions and performs sentiment analysis.
 */
export class SocialScanner {
  private readonly twitterClient: TwitterClient;
  private readonly keywords: string[];

  constructor(twitterClient: TwitterClient, keywords: string[]) {
    this.twitterClient = twitterClient;
    this.keywords = keywords;
  }

  /**
   * Execute a full social scan: fetch recent mentions across all configured
   * channels and return aggregated sentiment results per token.
   *
   * @returns Sentiment results grouped by token ticker.
   */
  async scan(): Promise<SentimentResult[]> {
    throw new Error("Not implemented");
  }

  /**
   * Analyze an array of social mentions and produce per-token sentiment results.
   *
   * @param mentions - Raw social mentions to analyze.
   * @returns Aggregated sentiment results grouped by token ticker.
   */
  analyzeSentiment(mentions: SocialMention[]): SentimentResult[] {
    void mentions;
    throw new Error("Not implemented");
  }

  /**
   * Extract token tickers (e.g. "$BNB", "$CAKE") from a text string.
   *
   * @param text - The text to scan for tickers.
   * @returns Array of unique uppercase ticker strings.
   */
  extractTokenTickers(text: string): string[] {
    void text;
    throw new Error("Not implemented");
  }

  /**
   * Return the top trending tokens by social volume and sentiment.
   *
   * @param limit - Number of results to return (default 10).
   * @returns Sentiment results sorted by trending score descending.
   */
  async getTopTrending(limit?: number): Promise<SentimentResult[]> {
    void limit;
    throw new Error("Not implemented");
  }
}
