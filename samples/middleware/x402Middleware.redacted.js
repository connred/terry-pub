/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 This file illustrates the x402 headers and verification flow without
 runnable glue. Secrets and network calls are removed.
*/

export function createX402MiddlewareSample({ amount, currency, receiver, facilitator, expiresMs, memo }) {
  return (req, res) => {
    const expiresAt = new Date(Date.now() + (expiresMs || 30 * 60 * 1000)).toISOString();
    res.set({
      'X-Payment-Required': 'true',
      'X-Payment-Amount': String(amount),
      'X-Payment-Currency': currency || 'USDC',
      'X-Payment-Receiver': receiver || '__REDACTED__',
      'X-Payment-Facilitator': facilitator || '__REDACTED__',
      'X-Payment-Expires': expiresAt,
      'X-Payment-Memo': memo || '',
      'Payment-Required': 'true',
      '402-Amount': String(amount),
      '402-Asset': currency || 'USDC',
      '402-Receiver': receiver || '__REDACTED__',
      '402-Facilitator': facilitator || '__REDACTED__',
      '402-Expires-At': expiresAt
    });
    res.status(402).json({ error: 'Payment Required' });
  };
}

export function verifyPaymentHeadersSample(headers) {
  // Minimal example that checks structure only; no signatures
  const required = ['x-payment-required', 'x-payment-amount', 'x-payment-currency'];
  return required.every(h => headers[h] != null);
}


