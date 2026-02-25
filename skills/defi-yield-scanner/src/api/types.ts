import { z } from "zod";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export enum Protocol {
  PANCAKESWAP = "PANCAKESWAP",
  VENUS = "VENUS",
  ALPACA = "ALPACA",
  THENA = "THENA",
}

export const ProtocolSchema = z.nativeEnum(Protocol);

export enum RiskLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  VERY_HIGH = "VERY_HIGH",
}

export const RiskLevelSchema = z.nativeEnum(RiskLevel);

export enum YieldAlertType {
  SPIKE = "SPIKE",
  DECAY = "DECAY",
  ROTATION = "ROTATION",
}

export const YieldAlertTypeSchema = z.nativeEnum(YieldAlertType);

// ---------------------------------------------------------------------------
// Pool
// ---------------------------------------------------------------------------

export const PoolSchema = z.object({
  protocol: ProtocolSchema,
  name: z.string(),
  pair: z.string(),
  tvl_usd: z.number().nonnegative(),
  apy_base: z.number(),
  apy_reward: z.number(),
  apy_total: z.number(),
  il_estimate: z.number(),
  risk_level: RiskLevelSchema,
});

export type Pool = z.infer<typeof PoolSchema>;

// ---------------------------------------------------------------------------
// LendingMarket
// ---------------------------------------------------------------------------

export const LendingMarketSchema = z.object({
  asset: z.string(),
  supply_apy: z.number(),
  borrow_apy: z.number(),
  utilization: z.number().min(0).max(1),
  total_supply_usd: z.number().nonnegative(),
  total_borrow_usd: z.number().nonnegative(),
});

export type LendingMarket = z.infer<typeof LendingMarketSchema>;

// ---------------------------------------------------------------------------
// YieldOpportunity
// ---------------------------------------------------------------------------

export const YieldOpportunitySchema = z.object({
  pool: PoolSchema,
  risk_adjusted_apy: z.number(),
  rank: z.number().int().positive(),
  timestamp: z.date(),
});

export type YieldOpportunity = z.infer<typeof YieldOpportunitySchema>;

// ---------------------------------------------------------------------------
// UserPosition
// ---------------------------------------------------------------------------

export const UserPositionSchema = z.object({
  protocol: ProtocolSchema,
  pool_name: z.string(),
  deposited_usd: z.number().nonnegative(),
  current_apy: z.number(),
  entry_date: z.date(),
  unrealized_pnl: z.number(),
});

export type UserPosition = z.infer<typeof UserPositionSchema>;

// ---------------------------------------------------------------------------
// AlertConfig
// ---------------------------------------------------------------------------

export const AlertConfigSchema = z.object({
  min_apy_threshold: z.number().nonnegative(),
  yield_spike_multiplier: z.number().positive(),
  decay_alert_enabled: z.boolean(),
});

export type AlertConfig = z.infer<typeof AlertConfigSchema>;

// ---------------------------------------------------------------------------
// YieldAlert
// ---------------------------------------------------------------------------

export const YieldAlertSchema = z.object({
  type: YieldAlertTypeSchema,
  pool: PoolSchema,
  current_apy: z.number(),
  previous_apy: z.number(),
  message: z.string(),
  timestamp: z.date(),
});

export type YieldAlert = z.infer<typeof YieldAlertSchema>;

// ---------------------------------------------------------------------------
// ScanResult
// ---------------------------------------------------------------------------

export const ScanResultSchema = z.object({
  opportunities: z.array(YieldOpportunitySchema),
  alerts: z.array(YieldAlertSchema),
  scanned_at: z.date(),
});

export type ScanResult = z.infer<typeof ScanResultSchema>;

// ---------------------------------------------------------------------------
// ScannerConfig (used by the top-level entry point)
// ---------------------------------------------------------------------------

export const ScannerConfigSchema = z.object({
  protocols: z.array(ProtocolSchema).optional(),
  alertConfig: AlertConfigSchema.optional(),
  maxResults: z.number().int().positive().optional(),
});

export type ScannerConfig = z.infer<typeof ScannerConfigSchema>;
