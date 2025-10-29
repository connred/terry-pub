/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Minimal logging interface with redaction pattern. Transports removed.
*/

export function redactSecrets(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const sensitive = /(secret|token|api|key|authorization|password)/i;
  const clone = Array.isArray(obj) ? [] : {};
  for (const [k, v] of Object.entries(obj)) {
    clone[k] = v && typeof v === 'object' ? redactSecrets(v) : sensitive.test(k) ? '[REDACTED]' : v;
  }
  return clone;
}

export const logger = {
  info: (msg, meta) => console.log('INFO', msg, redactSecrets(meta)),
  warn: (msg, meta) => console.warn('WARN', msg, redactSecrets(meta)),
  error: (msg, meta) => console.error('ERROR', msg, redactSecrets(meta)),
};


