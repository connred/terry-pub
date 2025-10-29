/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: behavior scheduler interfaces and tick loop skeleton.
*/

export type BehaviorMode = 'research' | 'trading' | 'story' | 'sleep';

export interface BehaviorScheduler {
  getCurrentMode(): BehaviorMode;
  setMode(mode: BehaviorMode): void;
  tick(now: number): void; // advance state machine
}

export class TimeBasedBehaviorScheduler implements BehaviorScheduler {
  private mode: BehaviorMode = 'research';
  getCurrentMode() { return this.mode; }
  setMode(mode: BehaviorMode) { this.mode = mode; }
  tick(now: number) {
    // Public excerpt skeleton only
    throw new Error('redacted in public sample');
  }
}


