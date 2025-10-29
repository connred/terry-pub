# Terry (Public Mirror)

[![License: BUSL-1.1](https://img.shields.io/badge/License-BUSL--1.1-blue.svg)](#) [![Docs](https://img.shields.io/badge/docs-public-green)](docs/public/INDEX.md) ![Not for production use](https://img.shields.io/badge/usage-not_for_production-red) [![Publish Public Mirror](https://github.com/connred/terry/actions/workflows/publish-public.yml/badge.svg?branch=main)](https://github.com/connred/terry/actions/workflows/publish-public.yml)

This public mirror is for study and discussion. It includes high‑level docs and small code samples that illustrate the system design. It is not a turnkey product and cannot be run as‑is.

## Architecture overview

```
Core
├─ PersonalityEngine
├─ ConsciousnessEngine
├─ BehaviorEngine ──────┐
├─ DecisionEngine       │  selects strategies
├─ MemorySystem ────────┼── context to AI & behavior
├─ TradingEngine ───────┘  (guarded by Safeguards)
└─ TokenManager

Integrations
├─ Twitter API  (MentionMonitor → ResponseEngine)
├─ Solana / x402 (PremiumRequestStore, x402 middleware)
├─ OpenAI (GPT-4)
└─ Metrics/Logging (prom-style + redaction)

HTTP
├─ /premium/:id     → 402 challenge headers (x402)
├─ /premium/webhook → payment verification (Kora)
└─ /premium/status  → request lifecycle
```

## Quick links

- Docs: docs/public/INDEX.md
- Samples: samples/
- Source Excerpts: src-excerpts/

## What’s inside

- docs/public: Overview, FAQ, design principles, roadmap
- samples: Small, redacted examples that show interfaces and flows
  - middleware/x402Middleware.redacted.js
  - http/premium-headers.http
  - prompts/premium-system-prompt.txt
  - logging/logger.redacted.js
  - validation/zod-schemas.ts
  - store/PremiumRequestStore.structure.md
  - trading/safeguards.example.ts
- src‑excerpts: Short, non‑runnable slices from core systems
  - TerryResponseEngine.example.js
  - TwitterMentionMonitor.example.js
  - premium.routes.example.js
  - PremiumRequestStore.example.js
  - behavior.scheduler.example.ts
  - decision.engine.example.ts
  - memory.interface.ts
  - safeguards.interface.ts
  - logger.interface.ts, http.interface.ts
  - config.example.js, rate-limit.example.js, metrics.example.ts, errors.example.ts
- Policies: LICENSE, NOTICE, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, TRADEMARKS, AUTHORS, CHANGELOG

## What’s intentionally excluded

- Full source code and entrypoints
- Operational runbooks, scripts, tests, and environment specifics
- Secrets, keys, or wallet material

## Reading guide

- Start with `docs/public/OVERVIEW.md`
- Review `samples/` for payment headers, validation, logging, and storage patterns
- Check `src-excerpts/` for small slices that show how systems connect

---

This material is shared to document ideas and architecture. No setup or deployment steps are provided.


Provenance: source 60d688c on 2025-10-29T19:57:47Z
