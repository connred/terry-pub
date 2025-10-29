# x402 Flow (Public Overview)

This page explains the request flow for premium payment using HTTP 402 and x402 headers.

## Sequence

1. Client requests `GET /premium/:mentionId`
2. Server responds `402 Payment Required` with x402 headers
3. Wallet/facilitator handles payment
4. Facilitator calls `POST /premium/webhook` upon confirmation
5. Client can poll `GET /premium/status/:mentionId`

## Headers (example)

- X-Payment-Required: true
- X-Payment-Amount: 20
- X-Payment-Currency: USDC
- X-Payment-Receiver: <address>
- X-Payment-Facilitator: <url>
- Payment-Required: true
- 402-Amount: 20
- 402-Asset: USDC
- 402-Receiver: <address>

## State Diagram (simplified)

```
PENDING --> (payment confirmed) --> PAID --> (response sent) --> FULFILLED
          \-> (expires) -> EXPIRED
```

---

This document is for study and discussion. No setup or deployment steps are provided.
