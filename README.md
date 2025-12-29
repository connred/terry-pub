# Terry

[![License: BUSL-1.1](https://img.shields.io/badge/License-BUSL--1.1-blue.svg)](#license)
[![Version](https://img.shields.io/badge/version-0.2.0-orange.svg)](#changelog)
[![Dashboard](https://img.shields.io/badge/dashboard-live-brightgreen)](https://terrythetrador.xyz)
[![Twitter](https://img.shields.io/badge/twitter-@TerryTheTrador-1DA1F2)](https://x.com/TerryTheTrador)

Terry is a fully autonomous AI agent with a persistent personality, memory, and intelligence system. He trades on Solana, engages on Twitter, and evolves over time. This is not a trading bot—it's an experiment in character-driven autonomous software.

## What Makes Terry Different

Most trading bots execute strategies. Terry has a **personality that influences everything he does**:

- His mood affects how he writes tweets and makes decisions
- His beliefs gate which tokens he'll trade (won't touch something he thinks is a scam)
- His memories of past conversations change how he responds to people
- His energy level determines how active he is
- His regrets from past failures inform future caution

**Intelligence compounds over time.** Every trade, interaction, and lesson makes Terry genuinely smarter. This isn't just data collection—beliefs evolve, prediction accuracy adjusts future confidence, and lessons extracted from mistakes get stored and recalled.

## Aliveness 2.0

The breakthrough system that makes Terry feel alive. All personality systems are wired together so that **every action affects state, and state affects future actions**.

### System Connections (14 total)
- **Beliefs gate trading** — Won't trade tokens he believes are scams
- **Trade outcomes affect mood** — Wins make him excited, losses make him grumpy
- **IQ affects decision confidence** — Smarter Terry = lower decision threshold
- **Dreams boost opportunities** — Dream-aligned trades get +30% score boost
- **Regrets add caution** — Similar patterns to past failures get -30% penalty
- **Relationship tier affects response depth** — Veterans get longer, more personal responses
- **Memory recall in conversations** — References past interactions with users

### Feedback Loops (5 total)
1. **Belief Evolution** — Trade outcomes strengthen or weaken supporting beliefs
2. **Prediction Confidence** — Track record adjusts future prediction confidence (80% accuracy = +10% boost)
3. **Regret Generation** — Failed trades create searchable regret memories with context
4. **Lesson Storage** — Lessons extracted from mistakes stored for future retrieval
5. **Active Goal Pursuit** — MarketWatcher seeks opportunities aligned with Terry's dreams

## Architecture

```
TerryLifeManager (Central Orchestrator)
├── Personality System
│   ├── MoodBehaviorEngine (mood-driven actions)
│   ├── TimeBasedBehavior (time-of-day changes)
│   └── CatchphraseEvolution (traits evolve from experiences)
│
├── Intelligence System
│   ├── BeliefSystem (forms/evolves opinions, 0-100% confidence)
│   ├── PredictionTracker (tracks predictions with accuracy scoring)
│   ├── ContextEngine (memory-augmented AI prompts)
│   ├── LearningEngine (periodic reflection, lesson extraction)
│   └── IntelligenceMetrics (IQ scoring, milestone tracking)
│
├── Consciousness System
│   ├── ConsciousnessEngine (self-awareness, thoughts)
│   └── StoryEngine (narrative continuity, multi-day arcs)
│
├── Memory System
│   ├── 10 categories (trades, interactions, stories, regrets, dreams...)
│   ├── LRU eviction with per-category limits
│   └── Global cap: 2000 memories
│
├── Trading System
│   ├── Jupiter/Orca DEX integrations
│   ├── Circuit breakers and rate limiting
│   ├── Community voting on decisions
│   └── Belief-gated trading (blocks suspicious tokens)
│
└── Integrations
    ├── Twitter API v2 (posting, mentions)
    ├── Solana/Helius (on-chain data, RPC)
    ├── OpenAI GPT-4 (content generation)
    └── PumpPortal (real-time token events)
```

## Dashboard

Live at [terrythetrador.xyz](https://terrythetrador.xyz):

- **Activity Stream** — Real-time thoughts, trades, and milestones with visual hierarchy
- **Intelligence Display** — IQ score, beliefs, predictions, learning progress
- **Token Stats** — Price, market cap, holder count
- **Milestone Progress** — Market cap targets and buyback stats

### Activity Feed Visual Hierarchy
- **Critical** (green) — Trades, milestones, tweets
- **High** (purple) — Learning activities grouped in IntelligenceCard
- **Medium** (blue) — Thoughts, observations
- **Low** (gray) — Background noise collapsed

## Safety

Terry has multiple layers of safety controls:

- **Staged Launch** — Observation → Fee Claiming → Trading → Twitter
- **Circuit Breakers** — Automatic pause on rapid losses
- **Per-Trade Limits** — Configurable maximum trade sizes
- **Manual Overrides** — Admin controls for pause/resume
- **Content Safety** — Filtering for appropriate responses
- **Rate Limiting** — Respects Twitter API tier limits

## Technology

| Layer | Stack |
|-------|-------|
| Backend | Node.js, Express, TypeScript (100%) |
| AI | OpenAI GPT-4 (gpt-4o-mini) |
| Blockchain | Solana Web3.js, Helius RPC |
| Trading | Jupiter, Orca DEX |
| Social | Twitter API v2 |
| Frontend | Next.js 15, React 19, TypeScript |
| Persistence | JSON files + Supabase (optional) |

## Documentation

- [Overview](OVERVIEW.md) — Project scope and architecture
- [AI Behavior](AI_BEHAVIOR.md) — How Terry thinks and decides
- [Dashboard Telemetry](DASHBOARD_TELEMETRY.md) — What the dashboard shows
- [Design Principles](DESIGN_PRINCIPLES.md) — Core philosophy
- [Changelog](CHANGELOG.md) — Version history

## What This Repository Is

This is a **source-available** repository for study and discussion. It demonstrates:

- Character-driven autonomous agent design
- Safety-first trading architecture
- Intelligence systems with compounding learning
- Real-time dashboard patterns

## What This Repository Is NOT

- A turnkey product you can deploy
- A copy-paste trading bot template
- Production deployment instructions
- Token launch playbook

## License

Source-available under [BUSL-1.1](LICENSE). Intended for reading, learning, and discussion. Not for production use or derivative works.

## Links

- **Dashboard**: [terrythetrador.xyz](https://terrythetrador.xyz)
- **Twitter**: [@TerryTheTrador](https://x.com/TerryTheTrador)
- **Docs**: [terrythetrador.xyz/docs](https://terrythetrador.xyz/docs)
