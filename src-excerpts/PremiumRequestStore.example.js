/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: data model and method shapes. I/O bodies redacted.
*/

export class PremiumRequestStore {
  constructor() { this.requests = new Map(); }
  async createRequest(mentionId, username, question) {
    const r = { id: `PREMIUM-${mentionId}`, mentionId, username, question, amount: 20.0, currency: 'USDC', status: 'pending', createdAt: Date.now(), expiresAt: Date.now() + 30*60*1000 };
    this.requests.set(r.id, r);
    throw new Error('redacted in public sample');
  }
  async markPaid(mentionId, txSig) { throw new Error('redacted in public sample'); }
  async markFulfilled(mentionId) { throw new Error('redacted in public sample'); }
  getRequestById(mentionId) { return this.requests.get(`PREMIUM-${mentionId}`); }
  getPaidRequests() { return [...this.requests.values()].filter(r => r.status === 'paid'); }
}

export default PremiumRequestStore;


