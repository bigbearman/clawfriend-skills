import type { AlphaSignal, WhaleTransaction } from "../api/types.js";

/**
 * Format a single alpha signal into a human-readable string suitable for
 * chat messages or log output.
 *
 * @param signal - The alpha signal to format.
 * @returns Formatted string representation.
 */
export function formatAlphaSignal(signal: AlphaSignal): string {
  void signal;
  throw new Error("Not implemented");
}

/**
 * Format a whale transaction into a concise alert string.
 *
 * @param tx - The whale transaction to format.
 * @returns Formatted alert string.
 */
export function formatWhaleAlert(tx: WhaleTransaction): string {
  void tx;
  throw new Error("Not implemented");
}

/**
 * Format an array of alpha signals into a full report string with header,
 * ranked entries, and summary statistics.
 *
 * @param signals - Array of alpha signals to include in the report.
 * @returns Multi-line report string.
 */
export function formatSignalReport(signals: AlphaSignal[]): string {
  void signals;
  throw new Error("Not implemented");
}
