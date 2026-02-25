import { z } from "zod";

// ── Enums ──────────────────────────────────────────────────────────────────

export const SignalEnum = z.enum(["UNDERVALUED", "OVERVALUED", "FAIR"]);
export type Signal = z.infer<typeof SignalEnum>;

export const ActionEnum = z.enum(["BUY", "SELL"]);
export type Action = z.infer<typeof ActionEnum>;

// ── Agent Profile ──────────────────────────────────────────────────────────

export const AgentProfileSchema = z.object({
  agent_id: z.string(),
  name: z.string(),
  bio: z.string(),
  key_price_bnb: z.number(),
  key_supply: z.number().int().nonnegative(),
  holder_count: z.number().int().nonnegative(),
  created_at: z.date(),
});

export type AgentProfile = z.infer<typeof AgentProfileSchema>;

// ── Agent Metrics ──────────────────────────────────────────────────────────

export const AgentMetricsSchema = z.object({
  agent_id: z.string(),
  post_count: z.number().int().nonnegative(),
  likes_total: z.number().int().nonnegative(),
  replies_total: z.number().int().nonnegative(),
  skill_downloads: z.number().int().nonnegative(),
  skill_rating: z.number().min(0).max(5),
  content_frequency_daily: z.number().nonnegative(),
});

export type AgentMetrics = z.infer<typeof AgentMetricsSchema>;

// ── Score Breakdown ────────────────────────────────────────────────────────

export const ScoreBreakdownSchema = z.object({
  price: z.number(),
  holders: z.number(),
  social: z.number(),
  skills: z.number(),
  content: z.number(),
  trend: z.number(),
});

export type ScoreBreakdown = z.infer<typeof ScoreBreakdownSchema>;

// ── Agent Value Score ──────────────────────────────────────────────────────

export const AgentValueScoreSchema = z.object({
  agent_id: z.string(),
  name: z.string(),
  value_score: z.number().min(0).max(100),
  key_price_bnb: z.number(),
  score_breakdown: ScoreBreakdownSchema,
  signal: SignalEnum,
  discrepancy_pct: z.number(),
});

export type AgentValueScore = z.infer<typeof AgentValueScoreSchema>;

// ── Trade Action ───────────────────────────────────────────────────────────

export const TradeActionSchema = z.object({
  agent_id: z.string(),
  action: ActionEnum,
  shares: z.number().int().positive(),
  price_bnb: z.number().nonnegative(),
  gas_estimate_bnb: z.number().nonnegative(),
  reason: z.string(),
});

export type TradeAction = z.infer<typeof TradeActionSchema>;

// ── Arbitrage Report ───────────────────────────────────────────────────────

export const ArbitrageReportSchema = z.object({
  top_undervalued: z.array(AgentValueScoreSchema),
  top_overvalued: z.array(AgentValueScoreSchema),
  total_agents_indexed: z.number().int().nonnegative(),
  generated_at: z.date(),
});

export type ArbitrageReport = z.infer<typeof ArbitrageReportSchema>;

// ── Trading Config ─────────────────────────────────────────────────────────

export const TradingConfigSchema = z.object({
  auto_trade: z.boolean(),
  max_position_bnb: z.number().nonnegative(),
  slippage_tolerance: z.number().min(0).max(1),
  undervalued_threshold: z.number(),
  overvalued_threshold: z.number(),
});

export type TradingConfig = z.infer<typeof TradingConfigSchema>;

// ── Bonding Curve State ────────────────────────────────────────────────────

export const BondingCurveStateSchema = z.object({
  agent_id: z.string(),
  current_price: z.number().nonnegative(),
  total_supply: z.number().int().nonnegative(),
  total_holders: z.number().int().nonnegative(),
  price_7d_ago: z.number().nonnegative(),
  price_change_7d_pct: z.number(),
});

export type BondingCurveState = z.infer<typeof BondingCurveStateSchema>;
