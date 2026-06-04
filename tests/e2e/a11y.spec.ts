import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG 2.1 A/AA accessibility audit (skill 6.3). Turnstile is blocked so axe
// audits our own markup, not Cloudflare's cross-origin widget.
const PAGES = ['/', '/ai-voice-demo'];

for (const path of PAGES) {
  test(`no WCAG A/AA violations on ${path}`, async ({ page }) => {
    await page.route('https://challenges.cloudflare.com/**', (r) => r.abort());
    await page.goto(path);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    // Strict gate — includes color-contrast. The brand accent was deepened in
    // Phase 6 (global.css) specifically so this passes; keep it strict so any
    // future regression (e.g. reverting the accent) fails the build.
    expect(results.violations).toEqual([]);
  });
}
