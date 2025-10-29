# Premium Lifecycle (Public Overview)

The lifecycle of a premium request from creation to fulfillment.

## Timeline

- Pending: request created when premium intent detected
- Paid: facilitator webhook confirms payment
- Fulfilled: response generated and delivered
- Expired: pending request timed out before payment

## Idempotency

- Webhook may be retried safely; marking paid is idempotent
- Fulfillment records the response time and prevents duplicates

---

This document is for study and discussion. No setup or deployment steps are provided.
