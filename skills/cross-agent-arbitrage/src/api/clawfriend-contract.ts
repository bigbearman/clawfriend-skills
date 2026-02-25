import type { BondingCurveState } from "./types.js";

/**
 * Client for interacting with ClawFriend smart contracts on BNB Smart Chain.
 *
 * Provides read access to bonding curve state (key prices, supply, holders)
 * and write access for executing key buy/sell transactions.
 */
export class ClawFriendContractClient {
  private readonly rpcUrl: string;
  private readonly contractAddress: string;
  private readonly privateKey: string | undefined;

  constructor(options: {
    rpcUrl: string;
    contractAddress: string;
    privateKey?: string;
  }) {
    this.rpcUrl = options.rpcUrl;
    this.contractAddress = options.contractAddress;
    this.privateKey = options.privateKey;
  }

  /**
   * Get the current key price for an agent in wei (as bigint).
   * @param agentId - The unique identifier of the agent
   * @returns The current key price in wei
   */
  async getKeyPrice(agentId: string): Promise<bigint> {
    void agentId;
    throw new Error("Not implemented");
  }

  /**
   * Get the total supply of keys for an agent.
   * @param agentId - The unique identifier of the agent
   * @returns The total number of keys in circulation
   */
  async getKeySupply(agentId: string): Promise<number> {
    void agentId;
    throw new Error("Not implemented");
  }

  /**
   * Get the list of wallet addresses holding keys for an agent.
   * @param agentId - The unique identifier of the agent
   * @returns Array of holder wallet addresses
   */
  async getKeyHolders(agentId: string): Promise<string[]> {
    void agentId;
    throw new Error("Not implemented");
  }

  /**
   * Buy keys for a specific agent.
   * @param agentId - The unique identifier of the agent
   * @param amount - Number of keys to purchase
   * @returns The transaction hash
   */
  async buyKeys(agentId: string, amount: number): Promise<string> {
    void agentId;
    void amount;
    throw new Error("Not implemented");
  }

  /**
   * Sell keys for a specific agent.
   * @param agentId - The unique identifier of the agent
   * @param amount - Number of keys to sell
   * @returns The transaction hash
   */
  async sellKeys(agentId: string, amount: number): Promise<string> {
    void agentId;
    void amount;
    throw new Error("Not implemented");
  }

  /**
   * Get the full bonding curve state for an agent, including 7-day price history.
   * @param agentId - The unique identifier of the agent
   * @returns The bonding curve state with price, supply, holders, and trend data
   */
  async getBondingCurveState(agentId: string): Promise<BondingCurveState> {
    void agentId;
    throw new Error("Not implemented");
  }
}
