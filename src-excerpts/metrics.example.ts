/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: metrics shapes with prom-client (no server wiring).
*/

export type Counter = { inc(labels?: Record<string,string>): void };
export type Histogram = { observe(labels: Record<string,string>, value: number): void };

export interface Metrics {
  httpRequests: Counter;
  httpDuration: Histogram;
}

export function createMetrics(): Metrics {
  // No real prom-client in public excerpt
  const noop = { inc: () => {}, observe: () => {} } as any;
  return { httpRequests: noop, httpDuration: noop };
}


