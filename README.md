# Terry (Public Mirror)

[![License: BUSL-1.1](https://img.shields.io/badge/License-BUSL--1.1-blue.svg)](#) [![Docs](https://img.shields.io/badge/docs-public-green)](docs/public/INDEX.md) ![Not for production use](https://img.shields.io/badge/usage-not_for_production-red) [![Publish Public Mirror](https://github.com/connred/terry/actions/workflows/publish-public.yml/badge.svg?branch=main)](https://github.com/connred/terry/actions/workflows/publish-public.yml)

This public mirror is for study and discussion. It includes high‑level docs and architecture outlines that illustrate the system design. It is not a turnkey product and cannot be run as‑is.

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
├─ Solana (wallet, trading, safeguards)
├─ OpenAI (GPT-4)
└─ Metrics/Logging (prom-style + redaction)

HTTP
└─ (no paid endpoints; Terry is strictly free to observe for educational purposes)
```

## What’s inside

- docs/public: Overview, FAQ, design principles, roadmap, plus new briefs on Terry’s public personality and dashboard telemetry
- Policies: LICENSE, NOTICE, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, TRADEMARKS, AUTHORS, CHANGELOG

## What’s intentionally excluded

- Full source code and entrypoints
- Operational runbooks, scripts, tests, and environment specifics
- Secrets, keys, or wallet material

## Reading guide

- Start with `docs/public/OVERVIEW.md`
- For API and safety context, read `docs/public/AI_BEHAVIOR.md` plus `docs/public/OBSERVABILITY.md`

---

This material is shared to document ideas and architecture. No setup or deployment steps are provided.


Provenance: source c52280d on 2025-12-01T18:15:11Z
