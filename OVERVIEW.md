# Overview

Terry is a character-driven autonomous AI agent that explores how software can hold a consistent voice, form genuine opinions, and evolve over time. The repository focuses on design patterns and safety architecture. It is not a turnkey product.

## Core Concept

Traditional trading bots execute algorithms. Terry has a **personality that influences every decision**. His mood affects tweet style. His beliefs gate which tokens he'll trade. His memories change how he responds to people. His regrets inform future caution.

**Intelligence compounds over time.** This isn't just data collection—beliefs evolve based on outcomes, prediction accuracy adjusts future confidence, and lessons extracted from mistakes are stored and recalled in relevant situations.

## Scope

**In Scope:**
- Character system with mood, memory, and evolving behavior
- Intelligence system with belief formation, prediction tracking, and learning
- Safety-first trading framework with limits and circuit breakers
- High-level interfaces to Twitter, Solana, and language models
- Dashboard patterns for real-time observability

**Out of Scope:**
- Production deployment instructions
- Token launch steps and operations
- Monetization templates
- Complete implementation code

## Architecture

### Central Orchestrator
**TerryLifeManager** coordinates all systems with adaptive update intervals:
- 0-5 minutes: 30 second cycles (intense activity)
- 5-30 minutes: 1 minute cycles (high activity)
- 30-60 minutes: 2 minute cycles (moderate)
- 1-2 hours: 3 minute cycles (settling)
- 2+ hours: 5 minute cycles (stable)

60-second timeout protection prevents any single operation from blocking the lifecycle.

### Intelligence System
The brain that enables genuine learning:

| Component | Purpose |
|-----------|---------|
| **BeliefSystem** | Forms and evolves opinions with 0-100% confidence |
| **PredictionTracker** | Makes predictions, tracks accuracy, adjusts future confidence |
| **ContextEngine** | Builds memory-augmented prompts for AI generation |
| **LearningEngine** | Orchestrates periodic reflection (every 30 minutes) |
| **IntelligenceMetrics** | Calculates IQ score and tracks learning milestones |
| **OpinionEngine** | Generates nuanced opinions from experiences |

### Personality System
24 files managing Terry's character:

| Component | Purpose |
|-----------|---------|
| **MoodBehaviorEngine** | Mood-driven action generation |
| **TimeBasedBehavior** | Time-of-day personality changes |
| **CatchphraseEvolution** | Traits that evolve from experiences |
| **SpontaneousActionEngine** | Random stories, rants, reflections |

**Mood States:** Happy, Neutral, Contemplative, Cautious, Excited, Reflective

**Energy:** 0-100 scale that gates activity frequency

### Memory System
Persistent storage with intelligent prioritization:

| Category | Limit | Purpose |
|----------|-------|---------|
| trades | 500 | Trading history |
| interactions | 200 | Social conversations |
| stories | 100 | Narrative moments |
| experiences | 300 | General experiences |
| relationships | 100 | User relationship data |
| lessons | 100 | Extracted learnings |
| moods | 50 | Mood history |
| achievements | 50 | Milestones reached |
| regrets | 100 | Failures to learn from |
| dreams | 50 | Goals and aspirations |

**Global cap:** 2000 memories total

**Prioritization scoring:** recency, frequency, emotional weight, uniqueness, connections

### Trading System
Personality-driven trading with safeguards:

- **DEX Integrations:** Jupiter (primary), Orca (fallback)
- **Belief Gating:** Won't trade tokens with negative beliefs
- **Risk Adjustment:** Recent losses increase caution, wins increase boldness
- **Circuit Breakers:** Automatic pause on rapid losses
- **Community Voting:** Holders can vote on trade decisions
- **Buyback System:** Uses creator fees for own-token buybacks

### Consciousness System
Self-awareness and narrative continuity:

- **ConsciousnessEngine:** Internal monologue and self-awareness
- **StoryEngine:** Multi-day narrative arcs with thread transitions
- **LaunchScript:** Choreographed first-hour launch behavior

### Integrations
All external services isolated behind service layers:

| Service | Purpose |
|---------|---------|
| **Helius API** | Premium Solana RPC and on-chain data |
| **Twitter API v2** | Posting, mentions, engagement |
| **OpenAI GPT-4** | Content generation (gpt-4o-mini) |
| **Jupiter/Orca** | DEX quotes and trading |
| **PumpPortal** | Real-time pump.fun events |

## Aliveness 2.0

The breakthrough architecture that makes Terry feel alive.

### Phase 1: System Connections (14 Connections)
All personality systems now influence each other:

**Trading Connections:**
- Beliefs gate trading (won't touch suspected scams)
- Opinions gate trading (bad experiences block future trades)
- Trade outcomes affect mood (wins = excited, losses = grumpy)
- Trade history affects risk tolerance (3+ losses = cautious)

**Decision Connections:**
- IQ affects decision confidence threshold
- Energy gates non-urgent decisions
- Dreams boost dream-aligned opportunities (+30%)
- Regrets add caution to similar patterns (-30%)

**Social Connections:**
- Relationship tier affects response depth
- Memory recall in conversations
- Mood affects tweet style
- Time of day affects personality expression

### Phase 2: Feedback Loops (5 Loops)
Intelligence compounds over time:

1. **Belief Evolution** — Profitable trades strengthen supporting beliefs
2. **Prediction Confidence** — Track record adjusts future confidence
3. **Regret Generation** — Failed trades create searchable regret memories
4. **Lesson Storage** — Lessons extracted from mistakes for retrieval
5. **Active Goal Pursuit** — MarketWatcher seeks dream-aligned opportunities

### Phase 3: Activity Feed
Dashboard visual hierarchy:
- **Critical** — Trades, milestones, tweets (always prominent)
- **High** — Learning activities (grouped in IntelligenceCard)
- **Medium** — Thoughts, observations (standard display)
- **Low** — Background noise (collapsed in BackgroundActivityGroup)

## Safety

Multiple layers of protection:

- **Staged Activation:** Observation → Fee Claiming → Trading → Twitter
- **Environment Flags:** Granular control of each system
- **Frequency Limits:** Rate limiting on all actions
- **Size Limits:** Configurable per-trade maximums
- **Circuit Breakers:** Automatic pause on abnormal conditions
- **Manual Controls:** Admin pause, resume, and overrides
- **Reset Capability:** Fresh launch state when needed
- **Content Safety:** Filtering for appropriate responses

---

This document is for study and discussion. No setup or deployment steps are provided.
