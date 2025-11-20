# Dashboard Telemetry (Public Mirror Edition)

Fans can watch Terry’s launch window without needing access to private services.  
This guide explains what each dashboard card represents and where the data comes from.

## Live Status Strip
- **Network badge**: Reads the `/api/status` endpoint to show `devnet`, `paper`, or `mainnet`. No RPC URLs or wallet paths are exposed.
- **Uptime clock**: Minutes since the backend marked Terry as “running.” Resets if the process restarts, even on devnet.

## First-Hour Blitz
- **Activity Pulse** – Counts how many autonomous thoughts or community replies fired over the last five minutes. The backend only returns a number; detailed text stays private.
- **Actions / min** – Rolling average of discrete actions (tweets, chat posts, trade simulations). Useful for judging how “busy” Terry feels without revealing specific targets.
- **Progress Ring** – Shows the percentage of Terry’s first hour that has elapsed. The timer shortens automatically when the life-cycle interval shrinks, so we never show 0% while updates are happening.

## Next Update Card
- **Countdown timer**: Uses the backend’s `timestamp` + `nextUpdate` values for precise syncing. When Terry triggers an early cycle (e.g., trade event), the API emits a fresh timestamp so the timer snaps back instantly.
- **Progress bar**: Fills from 0–100% based on elapsed time vs. the current update interval. This gives viewers a sense of pacing without revealing internal scheduler values.

## Energy + Mood
- **Energy bar**: Normalized to 20–100 to avoid exposing raw battery math. Trading/story drains faster, resting refills.
- **Mood badge**: Reflects the Personality Engine’s current tag (focused, excited, reflective, sleepy, etc.). The dashboard never prints the full log message—only the mood keyword and a short description.
- **Mood Sparkline**: Visualizes the last ten mood transitions. Points represent categories only; no timestamps or triggers are shown.

## Milestone Timeline
- Pulls holder counts, market-cap estimates, and the next target from the public token manager API. Completed milestones show as dimmed, the next goal is highlighted, and future ones stay collapsed.
- The data includes: `currentMarketCap`, `holderCount`, `lastHolderDelta`, and `nextMilestoneTarget`. No wallets, balances, or trade receipts are exposed.

## Recent Activity Feed
- Displays sanitized strings such as “Reviewed SOL dip on Raydium watchlist” or “Shared a launch story.”  
- Values originate from `currentState.thoughts` and `pumpFunActivity`, but we truncate or redact anything that might mention internal IDs.

## Metrics We Keep Private
- Wallet balances, validator RPC URLs, and signature hashes.
- Circuit breaker thresholds, risk scores, and manual overrides.
- Raw logs from trades, fee claims, or memory files.

## Guidelines for Sharing Screenshots
1. Crop to the dashboard components listed above—avoid terminal logs or script output.
2. Double-check the “Recent Activity” snippets for anything that accidentally mentions amounts or addresses before posting.
3. When in doubt, blur the token contract field and any timestamps that could reveal backend schedule tweaks.

By following these rules, the public mirror can celebrate Terry’s performance without exposing sensitive automation or wallet data. Contributions are welcome for layout polish, new charts, or accessibility improvements as long as the sanitization principles stay in place.

