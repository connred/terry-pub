/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Outbound HTTP retry policy with jitter/backoff and failure taxonomy.
*/

export type RetryOptions = {
  retries?: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
};

export function isRetriable(status?: number, errorCode?: string): boolean {
  if (errorCode === 'ECONNABORTED') return true;
  if (!status) return true; // network/timeout
  return status >= 500;
}

export async function retry<T>(fn: () => Promise<T>, opts: RetryOptions = {}): Promise<T> {
  const retries = opts.retries ?? 3;
  let delay = opts.initialDelayMs ?? 250;
  const maxDelay = opts.maxDelayMs ?? 2000;
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (e: any) {
      const status = e?.response?.status as number | undefined;
      const code = e?.code as string | undefined;
      if (attempt >= retries || !isRetriable(status, code)) throw e;
      await new Promise(r => setTimeout(r, delay));
      delay = Math.min(maxDelay, Math.floor(delay * 1.8 + Math.random() * 100));
      attempt++;
    }
  }
}


