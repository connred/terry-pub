/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1
*/

export class HttpError extends Error {
  status: number;
  details?: unknown;
  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export function handleRouteError(res: any, err: Error, defaultStatus = 500) {
  const status = (err as any).status || defaultStatus;
  return res.status(status).json({ status: 'error', message: err.message, details: (err as any).details ?? null });
}


