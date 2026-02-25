import type {
  ContentMode,
  GeneratedContent,
  MarketData,
  TonePreset,
} from "../api/types.js";

/**
 * Generates market-commentary posts from aggregated market data.
 *
 * Translates raw price/volume data into human-readable (or degen-readable)
 * social posts according to the configured {@link TonePreset}.
 */
export class MarketCommentaryGenerator {
  /**
   * Generate a single market-commentary post.
   *
   * @param marketData - Array of {@link MarketData} to base the commentary on.
   * @param tone - The desired tone for the generated text.
   * @returns A {@link GeneratedContent} object with mode `MARKET_COMMENTARY`.
   */
  async generate(
    marketData: MarketData[],
    tone: TonePreset,
  ): Promise<GeneratedContent> {
    void marketData;
    void tone;
    throw new Error("Not implemented");
  }

  /**
   * Generate multiple market-commentary posts in one call.
   *
   * @param marketData - Array of {@link MarketData} to base the commentaries on.
   * @param count - Number of distinct posts to produce.
   * @returns An array of {@link GeneratedContent} objects.
   */
  async generateBatch(
    marketData: MarketData[],
    count: number,
  ): Promise<GeneratedContent[]> {
    void marketData;
    void count;
    throw new Error("Not implemented");
  }

  /**
   * Build the LLM prompt that will be used for generation.
   *
   * Exposed publicly so callers can inspect or cache the prompt before
   * sending it to the model.
   *
   * @param data - Array of {@link MarketData} to incorporate.
   * @param tone - The desired tone preset.
   * @returns The assembled prompt string.
   */
  buildPrompt(data: MarketData[], tone: TonePreset): string {
    void data;
    void tone;
    throw new Error("Not implemented");
  }
}
