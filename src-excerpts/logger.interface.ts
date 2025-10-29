/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1
*/

export interface Logger {
  info(msg: string, meta?: unknown): void;
  warn(msg: string, meta?: unknown): void;
  error(msg: string, meta?: unknown): void;
}


