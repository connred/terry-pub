/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: configuration shape with x402 placeholders.
*/

export const config = {
  x402: {
    enabled: process.env.TERRY_PREMIUM_ENABLED === 'true',
    facilitatorUrl: process.env.KORA_FACILITATOR_URL || '__REDACTED__',
    premiumWalletAddress: process.env.TERRY_PREMIUM_USDC_WALLET_ADDRESS || '__REDACTED__',
    premiumAmount: parseFloat(process.env.TERRY_PREMIUM_REQUIRED_USDC || '20.0'),
    expiresMinutes: parseInt(process.env.TERRY_PREMIUM_EXPIRES_MIN || '30'),
    koraApiKey: process.env.KORA_API_KEY ? '__REDACTED__' : undefined,
    solanaRpcUrl: process.env.SOLANA_PREMIUM_RPC_URL || '__REDACTED__',
  },
};


