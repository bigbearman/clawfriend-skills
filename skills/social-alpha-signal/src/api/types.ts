import { z } from "zod";

// ── Enums ──────────────────────────────────────────────────────────────────

export const SocialSourceSchema = z.enum(["TWITTER", "TELEGRAM"]);
export type SocialSource = z.infer<typeof SocialSourceSchema>;

export const TradeActionSchema = z.enum(["BUY", "SELL"]);
export type TradeAction = z.infer<typeof TradeActionSchema>;

export const ConfidenceLevelSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type ConfidenceLevel = z.infer<typeof ConfidenceLevelSchema>;

export const NetFlowDirectionSchema = z.enum([
  "ACCUMULATING",
  "DISTRIBUTING",
]);
export type NetFlowDirection = z.infer<typeof NetFlowDirectionSchema>;

// ── SocialMention ──────────────────────────────────────────────────────────

export const SocialMentionSchema = z.object({
  source: SocialSourceSchema,
  author: z.string(),
  content: z.string(),
  token_ticker: z.string(),
  sentiment_score: z.number().min(-1).max(1),
  timestamp: z.date(),
  engagement_count: z.number().int().nonnegative(),
});

export type SocialMention = z.infer<typeof SocialMentionSchema>;

// ── WhaleTransaction ───────────────────────────────────────────────────────

export const WhaleTransactionSchema = z.object({
  wallet_address: z.string(),
  token_address: z.string(),
  token_symbol: z.string(),
  action: TradeActionSchema,
  amount_usd: z.number().nonnegative(),
  tx_hash: z.string(),
  block_number: z.number().int().nonnegative(),
  timestamp: z.date(),
});

export type WhaleTransaction = z.infer<typeof WhaleTransactionSchema>;

// ── AlphaSignal ────────────────────────────────────────────────────────────

export const AlphaSignalSchema = z.object({
  token_address: z.string(),
  token_symbol: z.string(),
  alpha_score: z.number().min(0).max(100),
  social_mention_count: z.number().int().nonnegative(),
  whale_volume_usd: z.number().nonnegative(),
  price_change_1h: z.number(),
  confidence: ConfidenceLevelSchema,
  sources: z.array(z.string()),
  timestamp: z.date(),
});

export type AlphaSignal = z.infer<typeof AlphaSignalSchema>;

// ── AlertConfig ────────────────────────────────────────────────────────────

export const AlertConfigSchema = z.object({
  alpha_score_threshold: z.number().min(0).max(100),
  min_mentions: z.number().int().nonnegative(),
  min_whale_volume_usd: z.number().nonnegative(),
});

export type AlertConfig = z.infer<typeof AlertConfigSchema>;

// ── SentimentResult ────────────────────────────────────────────────────────

export const SentimentResultSchema = z.object({
  token_ticker: z.string(),
  average_sentiment: z.number().min(-1).max(1),
  mention_count: z.number().int().nonnegative(),
  trending_score: z.number(),
  sources: z.array(SocialMentionSchema),
});

export type SentimentResult = z.infer<typeof SentimentResultSchema>;

// ── WhaleActivity ──────────────────────────────────────────────────────────

export const WhaleActivitySchema = z.object({
  wallet_label: z.string(),
  total_volume_usd: z.number().nonnegative(),
  transactions: z.array(WhaleTransactionSchema),
  net_flow: NetFlowDirectionSchema,
});

export type WhaleActivity = z.infer<typeof WhaleActivitySchema>;

// ── SignalConfig (used by the main entry point) ────────────────────────────

export const SignalConfigSchema = z.object({
  keywords: z.array(z.string()),
  whale_addresses: z.array(z.string()),
  alert: AlertConfigSchema,
});

export type SignalConfig = z.infer<typeof SignalConfigSchema>;
