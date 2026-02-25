export type {
  SocialMention,
  WhaleTransaction,
  AlphaSignal,
  AlertConfig,
  SentimentResult,
  WhaleActivity,
  SignalConfig,
  SocialSource,
  TradeAction,
  ConfidenceLevel,
  NetFlowDirection,
} from "./api/types.js";

export {
  SocialMentionSchema,
  WhaleTransactionSchema,
  AlphaSignalSchema,
  AlertConfigSchema,
  SentimentResultSchema,
  WhaleActivitySchema,
  SignalConfigSchema,
} from "./api/types.js";

export { TwitterClient } from "./api/twitter.js";
export { MoralisClient } from "./api/moralis.js";
export { BscScanClient } from "./api/bscscan.js";
export { SocialScanner } from "./pipeline/social-scanner.js";
export { WhaleTracker } from "./pipeline/whale-tracker.js";
export { SignalSynthesizer } from "./pipeline/signal-synthesizer.js";
export { formatAlphaSignal, formatWhaleAlert, formatSignalReport } from "./utils/formatter.js";
export { Logger } from "./utils/logger.js";
export type { LogLevel } from "./utils/logger.js";

import type { AlphaSignal, SignalConfig } from "./api/types.js";
import { TwitterClient } from "./api/twitter.js";
import { MoralisClient } from "./api/moralis.js";
import { BscScanClient } from "./api/bscscan.js";
import { SocialScanner } from "./pipeline/social-scanner.js";
import { WhaleTracker } from "./pipeline/whale-tracker.js";
import { SignalSynthesizer } from "./pipeline/signal-synthesizer.js";

/**
 * High-level entry point: run the full Social Alpha Signal pipeline.
 *
 * 1. Scans social channels (Twitter / Telegram) for token mentions.
 * 2. Tracks whale wallet activity on BNB Smart Chain.
 * 3. Synthesizes a ranked list of alpha signals that pass the alert thresholds.
 *
 * @param config - Pipeline configuration including keywords, wallet addresses,
 *                 and alert thresholds.
 * @returns Array of alpha signals that meet the configured thresholds, sorted
 *          by alpha score descending.
 *
 * @example
 * ```ts
 * const signals = await detectAlphaSignals({
 *   keywords: ["$BNB", "$CAKE"],
 *   whale_addresses: ["0xabc..."],
 *   alert: { alpha_score_threshold: 70, min_mentions: 5, min_whale_volume_usd: 50_000 },
 * });
 * ```
 */
export async function detectAlphaSignals(
  config: SignalConfig,
): Promise<AlphaSignal[]> {
  void TwitterClient;
  void MoralisClient;
  void BscScanClient;
  void SocialScanner;
  void WhaleTracker;
  void SignalSynthesizer;
  void config;
  throw new Error("Not implemented");
}
