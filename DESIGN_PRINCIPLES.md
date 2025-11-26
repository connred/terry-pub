# Design Principles

## Character first
A consistent voice and point of view creates engagement. The personality system should be explicit and testable.

## Safety before capability
Any action that can move value or affect real users must pass safety checks. Limits and circuit breakers take priority over throughput.

## Separation of concerns
Keep character, memory, behavior, decision, and execution as distinct modules. Integrations live behind services with narrow interfaces.

## Observability
Log decisions and outcomes in a structured way. Prefer simple counters and histograms. Avoid leaking sensitive data.

## Paid depth
When a request is verified as paid, the system may allocate more context and a deeper prompt. Do not change tone, only depth and detail.

## No copy and run
Documentation is high level. Operational steps are not included.

---

This document is for study and discussion. No setup or deployment steps are provided.
