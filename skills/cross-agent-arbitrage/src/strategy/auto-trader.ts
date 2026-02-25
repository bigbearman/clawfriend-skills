import type {
  ArbitrageReport,
  TradingConfig,
  TradeAction,
} from "../api/types.js";
import type { ClawFriendContractClient } from "../api/clawfriend-contract.js";

/**
 * Plans and executes trades based on arbitrage reports and trading configuration.
 *
 * Converts arbitrage signals into concrete trade actions, validates them
 * against risk parameters, and optionally executes them on-chain.
 */
export class AutoTrader {
  private readonly contractClient: ClawFriendContractClient;

  constructor(options: { contractClient: ClawFriendContractClient }) {
    this.contractClient = options.contractClient;
  }

  /**
   * Generate a list of trade actions from an arbitrage report.
   *
   * Analyzes undervalued agents for BUY opportunities and overvalued
   * agents for SELL opportunities, respecting position limits and
   * risk parameters defined in the trading config.
   *
   * @param report - The arbitrage report with scored agents
   * @param config - Trading configuration with limits and thresholds
   * @returns Array of planned trade actions
   */
  planTrades(report: ArbitrageReport, config: TradingConfig): TradeAction[] {
    void report;
    void config;
    throw new Error("Not implemented");
  }

  /**
   * Execute a single trade action on-chain.
   *
   * Submits a buy or sell transaction to the ClawFriend contract
   * and returns the resulting transaction hash.
   *
   * @param action - The trade action to execute
   * @returns The transaction hash of the executed trade
   */
  async executeTrade(action: TradeAction): Promise<string> {
    void action;
    throw new Error("Not implemented");
  }

  /**
   * Validate a trade action against trading configuration constraints.
   *
   * Checks position size limits, slippage tolerance, and ensures the
   * trade meets minimum thresholds before allowing execution.
   *
   * @param action - The trade action to validate
   * @param config - Trading configuration with constraints
   * @returns True if the trade passes all validation checks
   */
  validateTrade(action: TradeAction, config: TradingConfig): boolean {
    void action;
    void config;
    throw new Error("Not implemented");
  }
}
