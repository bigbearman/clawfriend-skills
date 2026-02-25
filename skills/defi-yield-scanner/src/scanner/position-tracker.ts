import type { UserPosition, YieldAlert } from "../api/types.js";

/**
 * Tracks user positions across DeFi protocols and monitors for
 * rotation signals (e.g. when a position's APY has decayed enough
 * that moving to a higher-yield pool would be net-positive after fees).
 */
export class PositionTracker {
  /**
   * Add a new user position to the tracker.
   *
   * @param position - The position to track.
   */
  addPosition(position: UserPosition): void {
    throw new Error("Not implemented");
  }

  /**
   * Retrieve all currently tracked positions.
   *
   * @returns Array of all tracked UserPosition objects.
   */
  getPositions(): UserPosition[] {
    throw new Error("Not implemented");
  }

  /**
   * Check all tracked positions for rotation signals.
   *
   * A rotation signal is generated when a position's current APY has
   * dropped significantly and better alternatives exist, factoring in
   * estimated gas costs and slippage for the migration.
   *
   * @returns Array of ROTATION-type YieldAlert objects.
   */
  checkRotationSignals(): YieldAlert[] {
    throw new Error("Not implemented");
  }
}
