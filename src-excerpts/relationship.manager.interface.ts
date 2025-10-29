/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1
*/

export interface UserContext {
  relationshipName: string;
  recentTopics?: string[];
  isVeteran?: boolean;
  customGreeting?: string;
}

export interface RelationshipManager {
  isReady(): boolean;
  getUserContext(userId: string): UserContext | null;
  shouldRespondTo(userId: string, data: { category: string; text: string }): boolean;
  recordInteraction(userId: string, platform: string, username: string, details: unknown): Promise<void>;
}


