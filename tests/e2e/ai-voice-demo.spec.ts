import { test, expect } from '@playwright/test';

test.describe('/ai-voice-demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ai-voice-demo');
  });

  test('renders hero, demo number, and content sections', async ({ page }) => {
    await expect(page).toHaveTitle(/AI Answering Service Demo/);
    await expect(page.locator('h1')).toContainText('working smarter');

    // Demo number is a tel: link, shown and dialable.
    const numberLink = page.locator('a[href="tel:9032944808"]').first();
    await expect(numberLink).toBeVisible();
    await expect(page.getByText('(903) 294-4808').first()).toBeVisible();

    await expect(page.getByRole('heading', { name: 'What happens on every call' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Two problems it solves cleanly' })).toBeVisible();
    await expect(page.getByRole('heading', { name: "Hang-ups don't mean lost leads" })).toBeVisible();
  });

  test('uses the SHARED site nav — no per-page "Back to site" swap', async ({ page }) => {
    // Shared navbar: real logo link home + the AI Demo pill, same as every page.
    // (AI Demo renders in both the desktop bar and the mobile-menu markup → count 2.)
    const header = page.locator('header');
    await expect(header.locator('img[alt="Tenor Creative LLC"]')).toBeVisible();
    expect(await header.locator('a', { hasText: 'AI Demo' }).count()).toBeGreaterThan(0);
    // The designer's shortcut must NOT be present.
    await expect(page.getByText('Back to site')).toHaveCount(0);
  });

  test('shared footer is present', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toContainText('Tenor Creative LLC');
    await expect(footer).toContainText('seth@tenorcreative.com');
  });

  test('bottom CTA links to home contact and re-dials', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/#contact');
    await expect(page.getByRole('link', { name: /Call the demo again/ })).toHaveAttribute(
      'href',
      'tel:9032944808'
    );
  });
});
