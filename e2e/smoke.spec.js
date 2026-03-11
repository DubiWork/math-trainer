// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Smoke tests — live site', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Math Trainer/i);
  });

  test('page renders content (no blank screen)', async ({ page }) => {
    await page.goto('/');
    const root = page.locator('#root');
    await expect(root).not.toBeEmpty();
  });

  test('no console errors on load', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    // Wait for the app to settle
    await page.waitForLoadState('networkidle');

    // Filter out known benign errors (e.g., third-party analytics, favicon 404)
    const criticalErrors = errors.filter(
      (e) => !e.includes('favicon') && !e.includes('404')
    );
    expect(criticalErrors).toEqual([]);
  });

  test('PWA manifest is accessible', async ({ request }) => {
    const baseURL =
      process.env.E2E_BASE_URL ||
      'https://math-trainer-1a632-staging.web.app';
    const response = await request.get(`${baseURL}/manifest.webmanifest`);
    expect(response.ok()).toBeTruthy();

    const manifest = await response.json();
    expect(manifest).toHaveProperty('name');
    expect(manifest).toHaveProperty('icons');
    expect(manifest.name).toContain('Math Trainer');
  });

  test('game screen loads', async ({ page }) => {
    await page.goto('/');
    // Wait for the app to fully render
    await page.waitForLoadState('networkidle');

    // The app should show interactive content — look for a button or game element
    // The main app renders into #root, so there should be meaningful DOM content
    const root = page.locator('#root');
    const childCount = await root.evaluate((el) => el.children.length);
    expect(childCount).toBeGreaterThan(0);

    // The page should contain at least one interactive element (button, input, etc.)
    const interactiveElements = page.locator(
      'button, input, [role="button"], a[href]'
    );
    await expect(interactiveElements.first()).toBeVisible({ timeout: 10000 });
  });
});
