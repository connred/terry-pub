# Overview

Terry is a character driven project that explores how software can hold a consistent voice and narrative while interacting with people and data. The repository focuses on design and safety. It is not a turnkey product.

## Scope

- Character system with mood, memory, and behavior
- Intelligence system with belief formation, prediction tracking, and learning
- Safety first trading framework with limits and circuit breakers
- High level interfaces to Twitter, Solana, and language models

## Out of scope

- Production deployment instructions
- Token launch steps and operations
- Monetization templates

## Architecture at a glance

### Core Systems
- **PersonalityEngine** - Defines tone, mood, and emotional state
- **ConsciousnessEngine** - Manages attention and thought generation
- **BehaviorEngine** - Drives activity cycles and mode transitions
- **DecisionEngine** - Handles multi-factor choices
- **MemorySystem** - Stores experiences and context persistently
- **TradingEngine** - Executes guarded trading actions
- **TokenManager** - Tracks the project token

### Intelligence Systems
- **TerryLearningEngine** - Orchestrates learning from all experiences
- **TerryBeliefSystem** - Forms and evolves opinions with confidence tracking
- **TerryPredictionTracker** - Makes and tracks market predictions
- **TerryContextEngine** - Builds memory-augmented prompts for AI
- **TerryIntelligenceMetrics** - Calculates IQ and tracks learning milestones

### Integrations
- **Helius API** - Premium on-chain data and RPC
- **Twitter API v2** - Social media posting and mentions
- **OpenAI GPT-4** - Dynamic content generation
- **Jupiter/Orca** - DEX quotes and trading
- **PumpPortal** - Real-time token events

Integrations are isolated behind service layers. Safety checks sit in front of any operation that can change state on chain or on a social surface.

## Safety

- Staged activation (observation, fee claiming, trading, twitter)
- Environment flags for granular control of each system
- Limits on frequency and size of actions
- Circuit breakers for loss and abnormal market behavior
- Manual controls for pauses and overrides
- Reset capability for fresh launch state

---

This document is for study and discussion. No setup or deployment steps are provided.
