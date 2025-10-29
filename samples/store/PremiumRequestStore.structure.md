# PremiumRequestStore (Structure)

- id: `PREMIUM-<mentionId>`
- mentionId: string
- username: string
- question: string
- amount: number (USDC)
- currency: 'USDC'
- status: 'pending' | 'paid' | 'fulfilled' | 'expired'
- createdAt: number (ms)
- expiresAt: number (ms)
- paidAt?: number (ms)
- respondedAt?: number (ms)
- txSig?: string

Persistence model
- JSON map persisted atomically
- Append-only journal for durability (create / paid / fulfilled / cleanup)
- Startup recovery replays journal then writes store
- Daily rotation creates dated backups; retention prunes old files

This document is for study and discussion. No setup or deployment steps are provided.
