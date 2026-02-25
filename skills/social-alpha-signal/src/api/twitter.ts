import type { SocialMention } from "./types.js";

/**
 * Client for the Twitter/X API v2.
 *
 * Provides filtered streaming and search capabilities to discover
 * token-related social mentions in real time.
 */
export class TwitterClient {
  private readonly bearerToken: string;

  constructor(bearerToken: string) {
    this.bearerToken = bearerToken;
  }

  /**
   * Open a filtered stream that yields social mentions matching the given keywords.
   *
   * @param keywords - List of keywords / cashtags to track (e.g. ["$BNB", "$CAKE"]).
   * @yields {SocialMention} Each matching tweet mapped to a SocialMention.
   */
  async *streamFilteredTweets(
    keywords: string[],
  ): AsyncGenerator<SocialMention> {
    void keywords;
    throw new Error("Not implemented");
  }

  /**
   * Search recent tweets (last 7 days) matching a query string.
   *
   * @param query      - Twitter search query (supports operators).
   * @param maxResults - Maximum number of results to return (default 100).
   * @returns Array of social mentions derived from matching tweets.
   */
  async searchRecentMentions(
    query: string,
    maxResults?: number,
  ): Promise<SocialMention[]> {
    void query;
    void maxResults;
    throw new Error("Not implemented");
  }

  /**
   * Retrieve public metrics for a Twitter account.
   *
   * @param accountId - The Twitter user ID.
   * @returns Follower and tweet counts.
   */
  async getAccountMetrics(
    accountId: string,
  ): Promise<{ followers: number; tweets: number }> {
    void accountId;
    throw new Error("Not implemented");
  }
}
