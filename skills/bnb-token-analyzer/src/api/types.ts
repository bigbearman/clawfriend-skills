import { z } from "zod";

// ─── Enums ───────────────────────────────────────────────────────────────────

export const RiskLevel = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type RiskLevel = z.infer<typeof RiskLevel>;

export const LogLevel = z.enum(["debug", "info", "warn", "error"]);
export type LogLevel = z.infer<typeof LogLevel>;

// ─── GoPlus Token Security ───────────────────────────────────────────────────

export const TokenSecurityResultSchema = z.object({
  is_honeypot: z.boolean(),
  is_mintable: z.boolean(),
  is_proxy: z.boolean(),
  is_open_source: z.boolean(),
  can_take_back_ownership: z.boolean(),
  owner_address: z.string().nullable(),
  owner_change_balance: z.boolean(),
  hidden_owner: z.boolean(),
  selfdestruct: z.boolean(),
  external_call: z.boolean(),
  buy_tax: z.string(),
  sell_tax: z.string(),
  cannot_buy: z.boolean(),
  cannot_sell_all: z.boolean(),
  slippage_modifiable: z.boolean(),
  is_blacklisted: z.boolean(),
  is_whitelisted: z.boolean(),
  transfer_pausable: z.boolean(),
  trading_cooldown: z.boolean(),
  personal_slippage_modifiable: z.boolean(),
  anti_whale_modifiable: z.boolean(),
  token_name: z.string(),
  token_symbol: z.string(),
  total_supply: z.string(),
  holder_count: z.number(),
});

export type TokenSecurityResult = z.infer<typeof TokenSecurityResultSchema>;

// ─── Holder Info ─────────────────────────────────────────────────────────────

export const HolderInfoSchema = z.object({
  address: z.string(),
  balance: z.string(),
  percentage: z.number(),
  is_contract: z.boolean(),
  is_locked: z.boolean(),
});

export type HolderInfo = z.infer<typeof HolderInfoSchema>;

// ─── Liquidity Info ──────────────────────────────────────────────────────────

export const LiquidityInfoSchema = z.object({
  pair_address: z.string(),
  dex_name: z.string(),
  liquidity_usd: z.number(),
  lp_locked: z.boolean(),
  lp_lock_duration: z.number().nullable(),
});

export type LiquidityInfo = z.infer<typeof LiquidityInfoSchema>;

// ─── Social Verification ─────────────────────────────────────────────────────

export const SocialVerificationSchema = z.object({
  has_website: z.boolean(),
  has_twitter: z.boolean(),
  has_telegram: z.boolean(),
  coingecko_listed: z.boolean(),
  cmc_listed: z.boolean(),
  website_url: z.string().nullable(),
  twitter_url: z.string().nullable(),
  telegram_url: z.string().nullable(),
});

export type SocialVerification = z.infer<typeof SocialVerificationSchema>;

// ─── Contract Audit Result ───────────────────────────────────────────────────

export const ContractAuditResultSchema = z.object({
  is_open_source: z.boolean(),
  is_proxy: z.boolean(),
  is_mintable: z.boolean(),
  is_honeypot: z.boolean(),
  can_take_back_ownership: z.boolean(),
  has_hidden_owner: z.boolean(),
  has_selfdestruct: z.boolean(),
  has_external_call: z.boolean(),
  buy_tax_percentage: z.number(),
  sell_tax_percentage: z.number(),
  transfer_pausable: z.boolean(),
  is_blacklisted: z.boolean(),
  risk_flags: z.array(z.string()),
  score: z.number().min(0).max(100),
});

export type ContractAuditResult = z.infer<typeof ContractAuditResultSchema>;

// ─── Holder Analysis Result ──────────────────────────────────────────────────

export const HolderAnalysisResultSchema = z.object({
  total_holders: z.number(),
  top_holders: z.array(HolderInfoSchema),
  top10_concentration_percentage: z.number(),
  creator_holds_percentage: z.number(),
  locked_percentage: z.number(),
  contract_holders_count: z.number(),
  risk_flags: z.array(z.string()),
  score: z.number().min(0).max(100),
});

export type HolderAnalysisResult = z.infer<typeof HolderAnalysisResultSchema>;

// ─── Liquidity Analysis Result ───────────────────────────────────────────────

export const LiquidityAnalysisResultSchema = z.object({
  total_liquidity_usd: z.number(),
  pairs: z.array(LiquidityInfoSchema),
  primary_dex: z.string(),
  lp_locked: z.boolean(),
  lp_lock_duration_days: z.number().nullable(),
  risk_flags: z.array(z.string()),
  score: z.number().min(0).max(100),
});

export type LiquidityAnalysisResult = z.infer<
  typeof LiquidityAnalysisResultSchema
>;

// ─── Risk Report ─────────────────────────────────────────────────────────────

export const RiskReportSchema = z.object({
  token_address: z.string(),
  token_name: z.string(),
  token_symbol: z.string(),
  risk_score: z.number().min(0).max(100),
  risk_level: RiskLevel,
  contract_audit: ContractAuditResultSchema,
  holder_analysis: HolderAnalysisResultSchema,
  liquidity_analysis: LiquidityAnalysisResultSchema,
  social_verification: SocialVerificationSchema,
  recommendation: z.string(),
  timestamp: z.string().datetime(),
});

export type RiskReport = z.infer<typeof RiskReportSchema>;

// ─── API Response Wrappers ───────────────────────────────────────────────────

/** GoPlus API response envelope */
export const GoPlusResponseSchema = z.object({
  code: z.number(),
  message: z.string(),
  result: z.record(z.string(), z.unknown()),
});

export type GoPlusResponse = z.infer<typeof GoPlusResponseSchema>;

/** BscScan API response envelope */
export const BscScanResponseSchema = z.object({
  status: z.string(),
  message: z.string(),
  result: z.unknown(),
});

export type BscScanResponse = z.infer<typeof BscScanResponseSchema>;

/** DexScreener API response envelope */
export const DexScreenerResponseSchema = z.object({
  schemaVersion: z.string().optional(),
  pairs: z.array(z.unknown()).nullable(),
});

export type DexScreenerResponse = z.infer<typeof DexScreenerResponseSchema>;

// ─── DexScreener Pair ────────────────────────────────────────────────────────

export const DexPairSchema = z.object({
  chainId: z.string(),
  dexId: z.string(),
  url: z.string(),
  pairAddress: z.string(),
  baseToken: z.object({
    address: z.string(),
    name: z.string(),
    symbol: z.string(),
  }),
  quoteToken: z.object({
    address: z.string(),
    name: z.string(),
    symbol: z.string(),
  }),
  priceUsd: z.string().nullable(),
  liquidity: z
    .object({
      usd: z.number(),
      base: z.number(),
      quote: z.number(),
    })
    .nullable(),
  volume: z
    .object({
      h24: z.number(),
    })
    .nullable(),
  priceChange: z
    .object({
      h24: z.number(),
    })
    .nullable(),
});

export type DexPair = z.infer<typeof DexPairSchema>;

// ─── BscScan Specific Types ─────────────────────────────────────────────────

export const TransactionSchema = z.object({
  hash: z.string(),
  from: z.string(),
  to: z.string(),
  value: z.string(),
  timeStamp: z.string(),
  blockNumber: z.string(),
  gasUsed: z.string(),
  gasPrice: z.string(),
  methodId: z.string(),
  functionName: z.string(),
});

export type Transaction = z.infer<typeof TransactionSchema>;

export const TokenBasicInfoSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  total_supply: z.string(),
  contract_creator: z.string().nullable(),
  creation_tx: z.string().nullable(),
});

export type TokenBasicInfo = z.infer<typeof TokenBasicInfoSchema>;

// ─── Analyzer Config ─────────────────────────────────────────────────────────

export const AnalyzerConfigSchema = z.object({
  goplus_api_url: z.string().url().default("https://api.gopluslabs.io"),
  bscscan_api_key: z.string(),
  bscscan_api_url: z
    .string()
    .url()
    .default("https://api.bscscan.com/api"),
  dexscreener_api_url: z
    .string()
    .url()
    .default("https://api.dexscreener.com"),
  chain_id: z.string().default("56"),
  top_holders_limit: z.number().default(10),
  log_level: LogLevel.default("info"),
});

export type AnalyzerConfig = z.infer<typeof AnalyzerConfigSchema>;
