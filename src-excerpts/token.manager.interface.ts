/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1
*/

export interface TokenManager {
  tokenAddress?: string;
  isInitialized: boolean;
  marketCap?: number;
  initialize(address: string): Promise<void>;
  getPrice(): Promise<number>;
}


