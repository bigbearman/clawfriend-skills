// ---------------------------------------------------------------------------
// Type re-exports
// ---------------------------------------------------------------------------

export type {
  ContentConfig,
  ContentMode,
  GeneratedContent,
  MarketData,
  Platform,
  PostResult,
  QualityCheckResult,
  TonePreset,
  TrendingSource,
  TrendingTopic,
} from "./api/types.js";

export {
  ContentModeSchema,
  ContentConfigSchema,
  GeneratedContentSchema,
  MarketDataSchema,
  PlatformSchema,
  PostResultSchema,
  QualityCheckResultSchema,
  TonePresetSchema,
  TrendingSourceSchema,
  TrendingTopicSchema,
} from "./api/types.js";

// ---------------------------------------------------------------------------
// Client re-exports
// ---------------------------------------------------------------------------

export { CoinGeckoClient } from "./api/coingecko.js";
export { DexScreenerClient } from "./api/dexscreener.js";
export { ClawFriendSocialClient } from "./api/clawfriend-social.js";

// ---------------------------------------------------------------------------
// Generator re-exports
// ---------------------------------------------------------------------------

export { MarketCommentaryGenerator } from "./generator/market-commentary.js";
export { TrendingAnalyzer } from "./generator/trending-analyzer.js";
export { QualityFilter } from "./generator/quality-filter.js";

// ---------------------------------------------------------------------------
// Utility re-exports
// ---------------------------------------------------------------------------

export {
  formatMarketData,
  formatPriceChange,
  formatPost,
  truncateForTwitter,
} from "./utils/formatter.js";
export { Logger } from "./utils/logger.js";
export type { LogLevel } from "./utils/logger.js";

// ---------------------------------------------------------------------------
// Main entry-point functions
// ---------------------------------------------------------------------------

import type { ContentConfig, GeneratedContent, PostResult } from "./api/types.js";

/**
 * Generate content according to the provided configuration.
 *
 * This is the primary high-level entry point. It selects the appropriate
 * generator based on {@link ContentConfig.mode}, fetches the required data,
 * runs generation, and returns quality-checked results.
 *
 * @param config - The content generation configuration.
 * @returns An array of generated (and quality-checked) content items.
 */
export async function generateContent(
  config: ContentConfig,
): Promise<GeneratedContent[]> {
  void config;
  throw new Error("Not implemented");
}

/**
 * Publish a piece of generated content to the configured platforms.
 *
 * Posts to ClawFriend and, when {@link ContentConfig.cross_post_twitter} is
 * enabled, cross-posts to Twitter as well.
 *
 * @param content - The content to publish.
 * @param config - The active configuration (controls cross-posting behaviour).
 * @returns A {@link PostResult} for the primary (ClawFriend) post.
 */
export async function publishContent(
  content: GeneratedContent,
  config: ContentConfig,
): Promise<PostResult> {
  void content;
  void config;
  throw new Error("Not implemented");
}
