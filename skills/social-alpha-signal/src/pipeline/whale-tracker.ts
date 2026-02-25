import type { WhaleActivity } from "../api/types.js";
import type { MoralisClient } from "../api/moralis.js";
import type { BscScanClient } from "../api/bscscan.js";

/**
 * Tracks whale wallet activity on BNB Smart Chain and identifies
 * accumulation / distribution patterns.
 */
export class WhaleTracker {
  private readonly moralisClient: MoralisClient;
  private readonly bscScanClient: BscScanClient;
  private readonly watchedAddresses: string[];

  constructor(
    moralisClient: MoralisClient,
    bscScanClient: BscScanClient,
    watchedAddresses: string[],
  ) {
    this.moralisClient = moralisClient;
    this.bscScanClient = bscScanClient;
    this.watchedAddresses = watchedAddresses;
  }

  /**
   * Execute a full tracking cycle: fetch recent transactions from all watched
   * wallets and classify their net flow direction.
   *
   * @returns Array of whale activity records.
   */
  async track(): Promise<WhaleActivity[]> {
    throw new Error("Not implemented");
  }

  /**
   * Return whale activities where the total volume exceeds the given threshold
   * and the net flow is ACCUMULATING.
   *
   * @param minVolumeUsd - Minimum total volume in USD (default 100_000).
   * @returns Filtered whale activities showing accumulation signals.
   */
  async getAccumulationSignals(
    minVolumeUsd?: number,
  ): Promise<WhaleActivity[]> {
    void minVolumeUsd;
    throw new Error("Not implemented");
  }

  /**
   * Check whether a wallet address is in the known-whale list.
   *
   * @param address - The wallet address to check.
   * @returns True if the address is a known whale.
   */
  isKnownWhale(address: string): boolean {
    void address;
    throw new Error("Not implemented");
  }
}
