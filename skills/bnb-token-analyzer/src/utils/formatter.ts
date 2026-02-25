import type { RiskReport, RiskLevel } from "../api/types.js";

/**
 * Format a complete risk report into a human-readable string.
 *
 * Produces a structured text summary suitable for display in chat interfaces
 * or terminal output, including risk score, level, section breakdowns, and
 * the final recommendation.
 *
 * @param report - The full risk report to format
 * @returns A formatted multi-line string representation of the report
 */
export function formatRiskReport(report: RiskReport): string {
  throw new Error("Not implemented");
}

/**
 * Determine the risk level category from a numeric risk score.
 *
 * Score ranges:
 * - 0-33: LOW risk (safer)
 * - 34-66: MEDIUM risk (caution advised)
 * - 67-100: HIGH risk (dangerous)
 *
 * @param score - A numeric risk score from 0 to 100
 * @returns The corresponding RiskLevel enum value
 */
export function formatRiskLevel(score: number): RiskLevel {
  throw new Error("Not implemented");
}

/**
 * Format a number as a USD currency string.
 *
 * Examples:
 * - `1234.5` -> `"$1,234.50"`
 * - `0.001` -> `"$0.00"`
 * - `1500000` -> `"$1,500,000.00"`
 *
 * @param amount - The numeric USD amount to format
 * @returns A formatted USD string with comma separators and 2 decimal places
 */
export function formatUsd(amount: number): string {
  throw new Error("Not implemented");
}
