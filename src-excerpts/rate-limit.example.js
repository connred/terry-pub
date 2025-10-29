/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: rate limit configuration shapes.
*/

export const rateLimits = {
  api: { windowMs: 60_000, max: 120 },
  premium: { windowMs: 60_000, max: 30 },
};


