/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1
*/

export type MemoryItem = {
  id: string;
  category: 'thought'|'decision'|'interaction'|'premium_request';
  content: string;
  importance: number; // 0..1
  emotionalImpact?: number; // -1..1
  createdAt: number;
};

export interface MemorySystem {
  addMemory(category: MemoryItem['category'], data: Omit<MemoryItem, 'id'|'category'|'createdAt'>): Promise<void>;
  getRecentMemories(limit: number): MemoryItem[];
}


