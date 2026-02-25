import { z } from "zod";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export enum ContentMode {
  MARKET_COMMENTARY = "MARKET_COMMENTARY",
  TRENDING_TOPICS = "TRENDING_TOPICS",
  ALPHA_THREADS = "ALPHA_THREADS",
}

export const ContentModeSchema = z.nativeEnum(ContentMode);

export enum TonePreset {
  ANALYTICAL = "ANALYTICAL",
  DEGEN = "DEGEN",
  FORMAL = "FORMAL",
  MEME_FRIENDLY = "MEME_FRIENDLY",
}

export const TonePresetSchema = z.nativeEnum(TonePreset);

export enum Platform {
  CLAWFRIEND = "CLAWFRIEND",
  TWITTER = "TWITTER",
}

export const PlatformSchema = z.nativeEnum(Platform);

export enum TrendingSource {
  TWITTER = "TWITTER",
  REDDIT = "REDDIT",
  NEWS = "NEWS",
}

export const TrendingSourceSchema = z.nativeEnum(TrendingSource);

// ---------------------------------------------------------------------------
// Data types
// ---------------------------------------------------------------------------

export const MarketDataSchema = z.object({
  token_symbol: z.string(),
  price_usd: z.number(),
  price_change_24h: z.number(),
  volume_24h: z.number(),
  market_cap: z.number(),
  trending_rank: z.number().optional(),
});

export type MarketData = z.infer<typeof MarketDataSchema>;

export const TrendingTopicSchema = z.object({
  topic: z.string(),
  mention_count: z.number(),
  sentiment: z.number(),
  related_tokens: z.array(z.string()),
  source: TrendingSourceSchema,
});

export type TrendingTopic = z.infer<typeof TrendingTopicSchema>;

// ---------------------------------------------------------------------------
// Generated content & results
// ---------------------------------------------------------------------------

export const GeneratedContentSchema = z.object({
  mode: ContentModeSchema,
  text: z.string(),
  data_sources: z.array(z.string()),
  confidence: z.number(),
  tokens_mentioned: z.array(z.string()),
  created_at: z.date(),
});

export type GeneratedContent = z.infer<typeof GeneratedContentSchema>;

export const PostResultSchema = z.object({
  platform: PlatformSchema,
  post_id: z.string(),
  url: z.string().optional(),
  posted_at: z.date(),
});

export type PostResult = z.infer<typeof PostResultSchema>;

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

export const ContentConfigSchema = z.object({
  mode: ContentModeSchema,
  tone: TonePresetSchema,
  max_posts_per_day: z.number(),
  cross_post_twitter: z.boolean(),
  verify_data: z.boolean(),
});

export type ContentConfig = z.infer<typeof ContentConfigSchema>;

// ---------------------------------------------------------------------------
// Quality check
// ---------------------------------------------------------------------------

export const QualityCheckResultSchema = z.object({
  passed: z.boolean(),
  issues: z.array(z.string()),
  confidence: z.number(),
});

export type QualityCheckResult = z.infer<typeof QualityCheckResultSchema>;
