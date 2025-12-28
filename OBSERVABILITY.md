# Observability (Public Overview)

Core practices used in this project.

## Request IDs
- Every HTTP response includes `X-Request-Id`
- IDs are logged with each request lifecycle

## Structured logs
- JSON logs with redaction of sensitive fields
- Consistent fields: `service`, `level`, `timestamp`, `message`, `requestId`

## Metrics
- Basic counters and histograms for HTTP
- Example names: `terry_http_requests_total`, `terry_http_duration_seconds`

---

This document is for study and discussion. No setup or deployment steps are provided.
