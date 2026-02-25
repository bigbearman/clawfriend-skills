import type {
  AgentProfile,
  AgentMetrics,
  AgentValueScore,
  BondingCurveState,
} from "../api/types.js";
import type { ClawFriendSocialClient } from "../api/clawfriend-social.js";
import type { ClawFriendContractClient } from "../api/clawfriend-contract.js";

/**
 * Scores agents on a 0-100 value scale by combining on-chain bonding curve
 * data with social/skill metrics, then flags discrepancies between intrinsic
 * value and current key price.
 */
export class ValueScorer {
  private readonly socialClient: ClawFriendSocialClient;
  private readonly contractClient: ClawFriendContractClient;

  constructor(options: {
    socialClient: ClawFriendSocialClient;
    contractClient: ClawFriendContractClient;
  }) {
    this.socialClient = options.socialClient;
    this.contractClient = options.contractClient;
  }

  /**
   * Compute a composite value score for a single agent.
   *
   * Combines price, holder count, social engagement, skill quality,
   * content frequency, and 7-day price trend into a 0-100 score,
   * then determines whether the agent is undervalued, overvalued, or fair.
   *
   * @param profile - The agent's profile data
   * @param metrics - The agent's social/skill metrics
   * @param curveState - The agent's bonding curve state
   * @returns The computed value score with signal and breakdown
   */
  scoreAgent(
    profile: AgentProfile,
    metrics: AgentMetrics,
    curveState: BondingCurveState,
  ): AgentValueScore {
    void profile;
    void metrics;
    void curveState;
    throw new Error("Not implemented");
  }

  /**
   * Score all agents by fetching their metrics and bonding curve data.
   *
   * Iterates through the provided agent profiles, fetches on-chain and
   * social data for each, and returns sorted value scores.
   *
   * @param agents - Array of agent profiles to score
   * @returns Array of value scores sorted by value_score descending
   */
  async scoreAll(agents: AgentProfile[]): Promise<AgentValueScore[]> {
    void agents;
    throw new Error("Not implemented");
  }

  /**
   * Calculate individual component scores for an agent.
   *
   * Returns a record mapping component names (price, holders, social,
   * skills, content, trend) to their individual normalized scores.
   *
   * @param profile - The agent's profile data
   * @param metrics - The agent's social/skill metrics
   * @returns Record of component name to normalized score
   */
  calculateComponentScores(
    profile: AgentProfile,
    metrics: AgentMetrics,
  ): Record<string, number> {
    void profile;
    void metrics;
    throw new Error("Not implemented");
  }
}
