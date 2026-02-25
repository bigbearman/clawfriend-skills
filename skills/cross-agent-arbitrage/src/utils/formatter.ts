import type {
  AgentValueScore,
  ArbitrageReport,
  TradeAction,
} from "../api/types.js";

/**
 * Format an agent value score into a human-readable string.
 *
 * Includes the agent name, score, signal, key price, and
 * discrepancy percentage in a compact single-line format.
 *
 * @param score - The agent value score to format
 * @returns A formatted string representation
 */
export function formatValueScore(score: AgentValueScore): string {
  void score;
  throw new Error("Not implemented");
}

/**
 * Format a full arbitrage report into a multi-line human-readable summary.
 *
 * Lists top undervalued and overvalued agents, total agents indexed,
 * and the report generation timestamp.
 *
 * @param report - The arbitrage report to format
 * @returns A formatted multi-line string
 */
export function formatArbitrageReport(report: ArbitrageReport): string {
  void report;
  throw new Error("Not implemented");
}

/**
 * Format a trade action into a human-readable string.
 *
 * Shows the action type (BUY/SELL), agent ID, number of shares,
 * price in BNB, gas estimate, and the reason for the trade.
 *
 * @param action - The trade action to format
 * @returns A formatted string representation
 */
export function formatTradeAction(action: TradeAction): string {
  void action;
  throw new Error("Not implemented");
}

/**
 * Format a BNB amount (number or bigint wei) into a human-readable string.
 *
 * When given a bigint, converts from wei (18 decimals) to BNB.
 * When given a number, formats with up to 6 decimal places.
 * Appends " BNB" suffix.
 *
 * @param amount - The amount in BNB (number) or wei (bigint)
 * @returns A formatted string like "0.015000 BNB"
 */
export function formatBnb(amount: number | bigint): string {
  void amount;
  throw new Error("Not implemented");
}
