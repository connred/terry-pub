/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Simplified trading safeguards illustrating limits and circuit breaker.
 Execution and external calls are intentionally omitted.
*/

type Trade = { token: string; amountSol: number; estPriceImpactPct: number };

export class SampleSafeguards {
  private dailyTrades = 0;
  private dailyLossSol = 0;
  private lastReset = Date.now();

  constructor(
    private readonly maxTradesPerDay = 5,
    private readonly maxLossPerDaySol = 0.2,
    private readonly maxPriceImpactPct = 5
  ) {}

  private maybeReset() {
    const now = Date.now();
    if (now - this.lastReset > 24 * 60 * 60 * 1000) {
      this.dailyTrades = 0;
      this.dailyLossSol = 0;
      this.lastReset = now;
    }
  }

  canExecute(trade: Trade): boolean {
    this.maybeReset();
    if (this.dailyTrades >= this.maxTradesPerDay) return false;
    if (this.dailyLossSol >= this.maxLossPerDaySol) return false;
    if (trade.estPriceImpactPct > this.maxPriceImpactPct) return false;
    return true;
  }

  record(trade: Trade, pnlSol: number) {
    this.maybeReset();
    this.dailyTrades += 1;
    if (pnlSol < 0) this.dailyLossSol += Math.abs(pnlSol);
  }
}


