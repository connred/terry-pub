/*
 Sample Only (Non-Turnkey)
 License: BUSL-1.1

 Excerpt: premium intent detection and instruction reply composition.
*/

export class TwitterMentionMonitor {
  detectPremiumIntent(text) {
    const premiumKeywords = ['[PREMIUM]', '[PAID]', '#premium', '#paid'];
    return premiumKeywords.some(kw => text.toUpperCase().includes(kw));
  }

  async replyWithPremiumInstructions(mention) {
    const replyText = `Hey @${mention.author.username} — premium response costs 20 USDC.\n\nClick for payment (auto-detects your wallet):\nhttps://terry.app/premium/${mention.id}\n\nYour wallet will handle payment automatically.`;
    // Posting redacted in public sample
    throw new Error('redacted in public sample');
  }
}


