import type { Pool } from "../api/types.js";

/**
 * Calculate the impermanent loss for a given price ratio.
 *
 * Uses the standard IL formula:
 *   IL = 2 * sqrt(priceRatio) / (1 + priceRatio) - 1
 *
 * @param priceRatio - The ratio of current price to entry price (e.g. 1.5 means 50% price increase).
 * @returns The impermanent loss as a negative decimal (e.g. -0.02 for 2% loss).
 */
export function calculateImpermanentLoss(priceRatio: number): number {
  throw new Error("Not implemented");
}

/**
 * Estimate the impermanent loss for a specific pool over a holding period.
 *
 * Uses historical volatility data and the pool's token pair characteristics
 * to project expected IL over the given timeframe.
 *
 * @param pool - The pool to estimate IL for.
 * @param holdingPeriodDays - The number of days the position will be held.
 * @returns The estimated IL as a negative decimal.
 */
export function estimateIlForPool(
  pool: Pool,
  holdingPeriodDays: number,
): number {
  throw new Error("Not implemented");
}
