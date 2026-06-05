import { test, expect } from '@playwright/test';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero, all sections, and footer NAP', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('agencies build on');
    for (const id of ['#services', '#agency', '#work', '#about', '#contact']) {
      await expect(page.locator(id)).toHaveCount(1);
    }
    const footer = page.locator('footer');
    await expect(footer).toContainText('Tenor Creative LLC');
    await expect(footer).toContainText('seth@tenorcreative.com');
    await expect(footer.locator('a[href="tel:5807450069"]')).toBeVisible();
  });

  test('selected work lists all four projects', async ({ page }) => {
    const work = page.locator('#work');
    for (const title of [
      'Margin Check',
      'Potluck Planner',
      'Team RAG Pipeline',
      'Immutable Reverse-Proxy Edge',
    ]) {
      await expect(work).toContainText(title);
    }
  });

  test('AI Demo nav link points to the demo route', async ({ page }) => {
    // present in desktop bar and (hidden) mobile menu; scope to header.
    const pill = page.locator('header a', { hasText: 'AI Demo' }).first();
    await expect(pill).toHaveAttribute('href', '/ai-voice-demo');
  });
});

test.describe('desktop nav', () => {
  test('primary nav links are visible with cross-page anchors', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'desktop', 'desktop only');
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Primary' });
    await expect(nav.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/#services');
    await expect(nav.locator('a', { hasText: 'AI Demo' })).toBeVisible();
  });
});

test.describe('mobile menu', () => {
  test('hamburger toggles menu and Escape closes it', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile', 'mobile only');
    await page.goto('/');
    const toggle = page.getByRole('button', { name: 'Toggle navigation menu' });
    const menu = page.locator('#mobile-menu');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toBeVisible();
    await expect(menu.locator('a', { hasText: 'AI Demo' })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeHidden();
  });
});

test.describe('contact form validation', () => {
  test('empty submit surfaces required-field errors', async ({ page }) => {
    await page.goto('/#contact');
    await page.locator('#cf-submit').click();
    await expect(page.locator('[data-err-for="name"]')).toBeVisible();
    await expect(page.locator('[data-err-for="email"]')).toBeVisible();
    await expect(page.locator('[data-err-for="message"]')).toBeVisible();
  });

  test('invalid email is rejected', async ({ page }) => {
    await page.goto('/#contact');
    await page.fill('#cf-name', 'Test Person');
    await page.fill('#cf-email', 'not-an-email');
    await page.fill('#cf-message', 'This is a long enough message to pass validation.');
    await page.locator('#cf-submit').click();
    await expect(page.locator('[data-err-for="email"]')).toBeVisible();
    await expect(page.locator('[data-err-for="name"]')).toBeHidden();
  });

  test('field errors are exposed as alerts', async ({ page }) => {
    await page.goto('/#contact');
    await page.locator('#cf-submit').click();
    // role="alert" is what makes the error announce on submit (deep-review M1/H1).
    await expect(page.locator('[data-err-for="name"]')).toHaveAttribute('role', 'alert');
    await expect(page.locator('[data-err-for="email"]')).toHaveAttribute('role', 'alert');
    await expect(page.locator('[data-err-for="message"]')).toHaveAttribute('role', 'alert');
  });

  // Stub Turnstile + inject a token so the handler reaches the fetch.
  async function fillValidWithToken(page: import('@playwright/test').Page) {
    await page.goto('/#contact');
    await page.fill('#cf-name', 'Test Person');
    await page.fill('#cf-email', 'test@example.com');
    await page.fill('#cf-message', 'Need a custom build — let us scope it out together.');
    await page.evaluate(() => {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'cf-turnstile-response';
      input.value = 'test-token';
      form.appendChild(input);
    });
  }

  test('happy path shows success and moves focus to it (function + turnstile mocked)', async ({
    page,
  }) => {
    await page.route('https://challenges.cloudflare.com/**', (r) => r.abort());
    await page.route('**/api/contact', (r) =>
      r.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' })
    );
    await fillValidWithToken(page);
    await page.locator('#cf-submit').click();
    await expect(page.locator('#contact-success')).toBeVisible();
    await expect(page.locator('#contact-form')).toBeHidden();
    // Focus moves to the confirmation so screen readers announce it (deep-review M2).
    await expect(page.locator('#contact-success')).toBeFocused();
  });

  test('server error keeps the form, shows the message, re-enables submit', async ({ page }) => {
    await page.route('https://challenges.cloudflare.com/**', (r) => r.abort());
    await page.route('**/api/contact', (r) =>
      r.fulfill({
        status: 500,
        contentType: 'application/json',
        body: '{"error":"Server misconfiguration. Our team has been notified."}',
      })
    );
    await fillValidWithToken(page);
    await page.locator('#cf-submit').click();
    const formError = page.locator('#cf-form-error');
    await expect(formError).toBeVisible();
    await expect(formError).toContainText('Server misconfiguration');
    // Form stays so the visitor can retry; submit re-enables (deep-review M11).
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('#cf-submit')).toBeEnabled();
  });
});
