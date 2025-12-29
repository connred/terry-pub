# Terry's Behavior & Decision Flow

Terry is built to feel alive without exposing the private automation that keeps him safe. This document explains how he thinks, learns, and decides—while keeping wallets, scripts, and protected tooling out of view.

## Operating Principles

- **Always-on Activity**: Terry cycles through research, storytelling, trading prep, and recovery modes. The dashboard never feels dormant.
- **Story-first Voice**: Every post or reply runs through personality systems. He sounds like the Alabama retiree fans expect.
- **Compounding Intelligence**: Terry remembers interactions, forms beliefs, and learns from experiences. His intelligence grows over time.
- **Guardrails Stay Private**: Circuit breakers, spending caps, and manual overrides exist, but public-facing content only acknowledges that "safety checks run before every trade."

## Life Cycle

The central orchestrator (TerryLifeManager) runs continuous update cycles:

1. **State Read** — Pulls mood, energy, wallet health, and token telemetry
2. **Context Build** — Mixes current activity with milestone status and notable mentions. Intelligence systems provide relevant memories and beliefs.
3. **Decision Pulse** — Calculates confidence score for acting (tweet, trade, respond) or waiting. Sub-threshold results become dashboard "observations."
4. **Learning & Reflection** — Processes experiences, forms/evolves beliefs, updates predictions
5. **Output & Broadcast** — Approved thoughts show on dashboard. Sanitized blurbs go to social feeds.

Update intervals adapt to Terry's age:
- First 5 minutes: 30-second cycles
- 5-30 minutes: 1-minute cycles
- 30-60 minutes: 2-minute cycles
- 1-2 hours: 3-minute cycles
- 2+ hours: 5-minute cycles

## Mood, Energy, and Intelligence

### Mood
Mood states drive copy style and decision-making:
- **Focused** — Analytical, market-oriented
- **Hyped** — Enthusiastic, excitable
- **Reflective** — Philosophical, memory-oriented
- **Sleepy** — Low energy, brief responses
- **Cautious** — Risk-averse, careful
- **Grumpy** — Sarcastic, short-tempered

Moods change naturally based on:
- Trade outcomes (wins = excited, losses = grumpy)
- Time of day (late night = philosophical, morning = energetic)
- Market conditions
- Social interactions

### Energy
Energy (0-100) drains during heavy trading/storytelling and recharges during "rest" periods. Low energy gates non-urgent decisions and reduces activity frequency.

### Intelligence (IQ)
IQ reflects learning progress:
- Starts at 75
- Grows with formed beliefs, accurate predictions, and learned lessons
- Higher IQ = lower decision confidence threshold
- Dashboard displays current IQ and learning milestones

## Aliveness 2.0: System Connections

All personality systems now influence each other. **Every action affects state, and state affects future actions.**

### Trading Connections
| Connection | Effect |
|------------|--------|
| Beliefs gate trading | Won't trade tokens he believes are scams |
| Opinions gate trading | Bad experiences block future trades on that token |
| Trade outcomes → mood | Wins make him excited, losses make him grumpy |
| Trade history → risk | 3+ recent losses = more cautious, 3+ wins = more bold |

### Decision Connections
| Connection | Effect |
|------------|--------|
| IQ → confidence | Higher IQ = lower decision threshold required |
| Energy → decisions | Low energy = defer non-urgent decisions |
| Dreams → opportunities | Dream-aligned trades get +30% opportunity score |
| Regrets → caution | Similar patterns to past failures get -30% penalty |

### Social Connections
| Connection | Effect |
|------------|--------|
| Relationship tier → depth | Veterans get longer, more personal responses |
| Memory recall | References past conversations with returning users |
| Mood → tweet style | Grumpy = sarcastic, excited = enthusiastic |
| Time → personality | Late night = philosophical, morning = energetic |

### Attention Connections
| Connection | Effect |
|------------|--------|
| Predictions → attention | MarketWatcher tracks pending predictions for resolution |
| Near-miss thoughts | Generates thoughts when beliefs save from bad trades |

## Aliveness 2.0: Feedback Loops

Intelligence compounds over time through these learning loops:

### 1. Belief Evolution
- Profitable trades strengthen beliefs that supported the decision
- Failed trades strengthen cautionary beliefs
- Creates natural "learning from experience" pattern
- Beliefs have 0-100% confidence that adjusts over time

### 2. Prediction Confidence
- Track record adjusts future prediction confidence
- 80% accuracy = +10% confidence boost on similar predictions
- 40% accuracy = -10% confidence reduction
- Prevents overconfidence after lucky streaks

### 3. Regret Generation
- Trade failures create searchable regret memories
- Regrets include context: slippage, rug, held too long, etc.
- Future decisions check regrets to avoid repeating mistakes
- DecisionEngine applies -30% penalty to regret-matching opportunities

### 4. Lesson Storage
- Lessons extracted from mistakes as separate memories
- Stored via addLessonMemory() for easy retrieval
- Lessons injected into decision context
- Enables "wisdom" that persists beyond individual memories

### 5. Active Goal Pursuit
- MarketWatcher actively seeks dream-aligned opportunities
- Dreams about "100x gems" trigger watching for new launches
- Dreams about "buy the dip" trigger watching for reversals
- Creates proactive behavior, not just reactive

## Content Generation

All public content flows through:

1. **Context Engine** — Retrieves relevant memories, beliefs, and relationships
2. **GPT-4 Generation** — Personality-prompted content creation (gpt-4o-mini)
3. **Content Safety Filter** — Validates appropriateness
4. **Rate Limiter** — Respects Twitter API tier limits

Content varies by relationship tier:
- **New users** — Standard, friendly responses
- **Returning users** — References past interactions
- **Veterans** — Longer, more personal, memory-rich responses

## Public-Safe Data

What the dashboard shows:
- Recent activity blurbs (no transaction signatures or wallet hints)
- Thematic text like "scanning SOL dips" or "chatting about veterans' stories"
- Token stats from public APIs (market cap, holder counts)
- Intelligence metrics (IQ level, belief count, prediction accuracy)
- Mood, energy, and behavioral state

What stays private:
- Network switching scripts and wallet paths
- Solana credentials and automation playbooks
- Internal runbooks for incident response
- Detailed milestone unlock mechanics
- Specific belief contents beyond summaries
- Trading scripts and testing harnesses

## The Result

With Aliveness 2.0, Terry exhibits emergent behavior:

- **Learns from mistakes** — Won't repeat the same errors
- **Gets smarter over time** — IQ genuinely increases with experience
- **Forms genuine opinions** — Based on what he's seen, not pre-programmed
- **Pursues goals actively** — Seeks opportunities aligned with his dreams
- **Remembers relationships** — Treats returning users differently
- **Shows emotional consistency** — Mood affects behavior in predictable ways

This creates an agent that feels alive—not just a bot executing scripts.

---

This document is for study and discussion. No setup or deployment steps are provided.
