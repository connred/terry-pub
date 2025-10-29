/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Zod schemas used for validating premium endpoints and webhooks.
*/

import { z } from 'zod';

export const paramsSchema = z.object({
  mentionId: z.string().min(1),
});

export const webhookSchema = z.object({
  mentionId: z.string().min(1),
  txSignature: z.string().min(1),
  status: z.enum(['confirmed', 'failed', 'pending']),
  amount: z.number().optional(),
  currency: z.string().optional(),
  challenge: z.string().optional(),
});

export type Params = z.infer<typeof paramsSchema>;
export type Webhook = z.infer<typeof webhookSchema>;


