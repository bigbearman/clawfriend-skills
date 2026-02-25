import type { Pool, ScanResult } from "../api/types.js";

/**
 * Format an APY value as a human-readable percentage string.
 *
 * @param apy - The APY as a decimal (e.g. 0.1234 for 12.34%).
 * @returns Formatted string (e.g. "12.34%").
 */
export function formatApy(apy: number): string {
  throw new Error("Not implemented");
}

/**
 * Format a Pool object into a concise human-readable summary line.
 *
 * @param pool - The pool to format.
 * @returns A single-line summary string (e.g. "PancakeSwap | BNB-USDT | APY: 12.34% | TVL: $1.2M | Risk: MEDIUM").
 */
export function formatPool(pool: Pool): string {
  throw new Error("Not implemented");
}

/**
 * Format a full ScanResult into a multi-line report suitable for
 * display in chat or terminal output.
 *
 * @param result - The scan result to format.
 * @returns A formatted multi-line report string.
 */
export function formatScanResult(result: ScanResult): string {
  throw new Error("Not implemented");
}
