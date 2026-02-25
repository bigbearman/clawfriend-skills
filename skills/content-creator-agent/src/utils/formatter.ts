import type { GeneratedContent, MarketData } from "../api/types.js";

/** Twitter character limit (current platform max). */
const TWITTER_MAX_LENGTH = 280;

/**
 * Format a {@link MarketData} object into a human-readable summary string.
 *
 * @param data - The market data to format.
 * @returns A formatted string suitable for embedding in a post.
 */
export function formatMarketData(data: MarketData): string {
  void data;
  throw new Error("Not implemented");
}

/**
 * Format a 24 h price change percentage with directional indicator.
 *
 * @param change - The price change as a decimal (e.g. `0.05` for +5 %).
 * @returns A formatted string such as `"+5.00%"` or `"-3.21%"`.
 */
export function formatPriceChange(change: number): string {
  void change;
  throw new Error("Not implemented");
}

/**
 * Format a {@link GeneratedContent} object into its final post body.
 *
 * @param content - The generated content to format.
 * @returns The formatted post string.
 */
export function formatPost(content: GeneratedContent): string {
  void content;
  throw new Error("Not implemented");
}

/**
 * Truncate text to fit within the Twitter character limit, appending an
 * ellipsis when truncation occurs.
 *
 * @param text - The input text.
 * @returns The (possibly truncated) text, guaranteed to be at most
 *          {@link TWITTER_MAX_LENGTH} characters.
 */
export function truncateForTwitter(text: string): string {
  void text;
  throw new Error("Not implemented");
}
