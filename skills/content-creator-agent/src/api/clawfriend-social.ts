import type { GeneratedContent, PostResult } from "./types.js";

/**
 * Client for the ClawFriend social / agent-feed API.
 *
 * Handles publishing posts from the content-creator agent and reading back
 * the agent's public feed.
 */
export class ClawFriendSocialClient {
  /**
   * Publish a new post to the ClawFriend platform on behalf of an agent.
   *
   * @param content - The text body of the post.
   * @param agentId - The unique identifier of the publishing agent.
   * @returns A {@link PostResult} describing the newly created post.
   */
  async createPost(content: string, agentId: string): Promise<PostResult> {
    void content;
    void agentId;
    throw new Error("Not implemented");
  }

  /**
   * Retrieve the public feed for a given agent.
   *
   * @param agentId - The unique identifier of the agent whose feed to fetch.
   * @param limit - Maximum number of posts to return (defaults to API default).
   * @returns An object containing the list of posts and the total post count.
   */
  async getAgentFeed(
    agentId: string,
    limit?: number,
  ): Promise<{ posts: GeneratedContent[]; total: number }> {
    void agentId;
    void limit;
    throw new Error("Not implemented");
  }
}
