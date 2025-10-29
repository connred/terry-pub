/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Trading safeguards interfaces (execution removed).
*/

export type Trade = { token: string; amountSol: number; priceImpactMaxPct: number };

export interface TradingSafeguards {
  canExecuteToday(): boolean;
  checkPriceImpact(trade: Trade): boolean;
  checkLossCircuit(): boolean;
  recordTrade(trade: Trade, pnlSol: number): void;
}


