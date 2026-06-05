import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// WCAG 2.1 A/AA accessibility audit (skill 6.3). Turnstile is blocked so axe
// audits our own markup, not Cloudflare's cross-origin widget.
const PAGES = ['/', '/ai-voice-demo', '/privacy', '/terms'];

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

// Audit the contact form's ERROR state, not just the initial render — automated
// audits normally never see it, which is how the error-text contrast failure (H1)
// slipped past a Lighthouse a11y of 100. Triggering the errors then running axe
// guards the deepened --destructive token + role=alert markup. (Deep-review pattern
// "axe-clean != AA-clean on interactive states".)
test('no WCAG A/AA violations on the contact form error state', async ({ page }) => {
  await page.route('https://challenges.cloudflare.com/**', (r) => r.abort());
  await page.goto('/#contact');
  await page.locator('#cf-submit').click();
  await expect(page.locator('[data-err-for="name"]')).toBeVisible();

  const results = await new AxeBuilder({ page })
    .include('#contact')
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
