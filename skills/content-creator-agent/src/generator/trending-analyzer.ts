import type {
  GeneratedContent,
  TonePreset,
  TrendingTopic,
} from "../api/types.js";

/**
 * Discovers trending topics across social platforms and generates posts
 * that surface timely alpha for the ClawFriend audience.
 */
export class TrendingAnalyzer {
  /**
   * Scan configured sources and return a ranked list of trending topics.
   *
   * @returns An array of {@link TrendingTopic} objects sorted by relevance.
   */
  async analyze(): Promise<TrendingTopic[]> {
    throw new Error("Not implemented");
  }

  /**
   * Generate a social post about a specific trending topic.
   *
   * @param topic - The trending topic to write about.
   * @param tone - The desired tone preset for the generated post.
   * @returns A {@link GeneratedContent} object with mode `TRENDING_TOPICS`.
   */
  async generatePost(
    topic: TrendingTopic,
    tone: TonePreset,
  ): Promise<GeneratedContent> {
    void topic;
    void tone;
    throw new Error("Not implemented");
  }
}
