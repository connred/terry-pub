/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: route shapes and validation only. No app bootstrap.
*/

export const routes = {
  getPremium: {
    method: 'GET',
    path: '/premium/:mentionId',
    validate: { mentionId: 'string' },
    status: 402,
  },
  webhook: {
    method: 'POST',
    path: '/premium/webhook',
    validate: { mentionId: 'string', txSignature: 'string', status: ['confirmed','failed','pending'] },
  },
  status: {
    method: 'GET',
    path: '/premium/status/:mentionId',
    validate: { mentionId: 'string' },
  }
};


