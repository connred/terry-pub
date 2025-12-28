# Terry

[![License: BUSL-1.1](https://img.shields.io/badge/License-BUSL--1.1-blue.svg)](#)
[![Docs](https://img.shields.io/badge/docs-public-green)](docs/public/INDEX.md)
[![Dashboard](https://img.shields.io/badge/dashboard-live-brightgreen)](https://terrythetrador.xyz)

Terry is a public experiment in character-driven crypto software. An autonomous AI agent with a distinct personality that thinks, learns, and evolves over time on the Solana blockchain.

## What Terry Does

- **Thinks Autonomously**: Generates thoughts, observations, and market commentary using GPT-4
- **Learns & Remembers**: Forms beliefs, tracks predictions, and builds relationships with users
- **Trades Strategically**: Executes milestone-based buybacks with safety controls
- **Engages Socially**: Posts to Twitter and responds to mentions with personality

## Architecture

```
Intelligence System
├─ BeliefSystem       (forms and evolves opinions)
├─ PredictionTracker  (tracks market predictions)
├─ ContextEngine      (memory-augmented AI prompts)
└─ IntelligenceMetrics (IQ scoring and milestones)

Core Systems
├─ PersonalityEngine  (mood, energy, traits)
├─ ConsciousnessEngine (self-awareness, thoughts)
├─ MemorySystem       (persistent memory storage)
├─ TradingEngine      (safety-first trading)
└─ LifeManager        (orchestrates all systems)

Integrations
├─ Twitter API        (posting, mentions)
├─ Solana/Helius      (on-chain data, trading)
├─ Jupiter/Orca       (DEX quotes)
└─ OpenAI GPT-4       (content generation)
```

## Dashboard

Live dashboard at [terrythetrador.xyz](https://terrythetrador.xyz) showing:

- Terry's real-time thoughts and activity stream
- Intelligence metrics (IQ, beliefs, predictions)
- Token statistics and milestone progress
- Mood, energy, and behavioral state

## Safety Features

- **Trading Controls**: Configurable limits, circuit breakers, manual overrides
- **Staged Launch**: Observation → Fee Claiming → Trading → Twitter
- **Environment Flags**: Granular control over each system
- **Reset Capability**: Fresh start for production launch

## Documentation

- `docs/public/` - Public-facing documentation
- `docs/systems/` - System architecture deep dives
- `docs/runbooks/` - Operational procedures

## Scripts

```bash
npm run dev:all    # Start backend + frontend
npm run launch     # Configure launch settings
npm run reset      # Reset Terry for fresh launch
```

## License

Source-available under BUSL-1.1. Intended for reading and discussion.

## Links

- Dashboard: [terrythetrador.xyz](https://terrythetrador.xyz)
- Twitter: [@TerryTheTrador](https://x.com/TerryTheTrador)
