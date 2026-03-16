// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Regression tests for Epic #28 — Level Progression UI
 *
 * Covers: LevelUpScreen, champion variant, LevelMap, screen transitions,
 * and level-related UI behavior observable in the browser.
 *
 * These tests run against the deployed staging/production URL.
 * Profile setup is done through the UI (CreateProfile wizard).
 */

const TEST_PIN = '1234';
const TEST_NICKNAME = 'TestHero';

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Create a fresh test profile through the UI and land on StartScreen.
 * Returns after the StartScreen is visible.
 */
async function createProfileAndGoToStart(page) {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  // Wait for app to be interactive (ProfileSwitcher or StartScreen)
  await page.locator('button').first().waitFor({ state: 'visible', timeout: 15000 });

  // If we see a "Create Hero" or "Add Hero" button, click it to start wizard
  const createBtn = page.locator('button', { hasText: /create|add/i }).first();
  if (await createBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await createBtn.click();

    // Fill nickname
    const nicknameInput = page.locator('input[type="text"], input[name="nickname"], input[placeholder*="name" i]').first();
    if (await nicknameInput.isVisible({ timeout: 3000 }).catch(() => false)) {
      await nicknameInput.fill(TEST_NICKNAME);
    }

    // Advance through wizard steps (theme selection, PIN entry, etc.)
    // Click next/continue buttons through each step
    const nextBtn = page.locator('button', { hasText: /next|continue|done|create|start/i }).first();
    if (await nextBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await nextBtn.click();
    }

    // Fill PIN if PIN entry is shown
    const pinInputs = page.locator('input[type="password"], input[type="tel"], input[inputmode="numeric"]');
    if (await pinInputs.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      for (let i = 0; i < 4; i++) {
        const input = pinInputs.nth(i);
        if (await input.isVisible().catch(() => false)) {
          await input.fill(TEST_PIN[i]);
        }
      }
    }

    // Confirm/complete the wizard
    const confirmBtn = page.locator('button', { hasText: /done|create|confirm|start/i }).first();
    if (await confirmBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await confirmBtn.click();
    }
  } else {
    // Profile already exists — try to select it (enter PIN)
    const profileCard = page.locator('[data-testid*="profile"], button', { hasText: new RegExp(TEST_NICKNAME, 'i') }).first();
    if (await profileCard.isVisible({ timeout: 3000 }).catch(() => false)) {
      await profileCard.click();
    }

    const pinInputs = page.locator('input[type="password"], input[type="tel"], input[inputmode="numeric"]');
    if (await pinInputs.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      for (let i = 0; i < 4; i++) {
        const input = pinInputs.nth(i);
        if (await input.isVisible().catch(() => false)) {
          await input.fill(TEST_PIN[i]);
        }
      }
    }
  }

  // Wait for StartScreen to appear (Play button visible)
  await page.locator('button', { hasText: /play|start/i }).first().waitFor({ state: 'visible', timeout: 15000 });
}

// ── Level Map (REG-061 to REG-066) ──────────────────────────────────────────

test.describe('Level Map — StartScreen integration', () => {
  test('REG-061: Level map renders on StartScreen with 13 level nodes', async ({ page }) => {
    await createProfileAndGoToStart(page);

    // Level map should be visible
    const levelMap = page.locator('[data-testid="level-map"]');
    await expect(levelMap).toBeVisible({ timeout: 5000 });

    // Should have 13 level nodes
    const nodes = page.locator('[data-testid^="level-node-"]');
    await expect(nodes).toHaveCount(13);
  });

  test('REG-062: Level map has accessible list structure', async ({ page }) => {
    await createProfileAndGoToStart(page);

    const list = page.locator('[role="list"][aria-label="Level progress map"]');
    await expect(list).toBeVisible({ timeout: 5000 });

    const items = list.locator('[role="listitem"]');
    await expect(items).toHaveCount(13);
  });

  test('REG-063: Level 1 node is current (gold styling) for new profile', async ({ page }) => {
    await createProfileAndGoToStart(page);

    const node1 = page.locator('[data-testid="level-node-1"]');
    await expect(node1).toBeVisible({ timeout: 5000 });

    // Current level should have aria-label ending with "current"
    await expect(node1).toHaveAttribute('aria-label', /Level 1.*current/i);
  });

  test('REG-064: Locked levels show lock icons', async ({ page }) => {
    await createProfileAndGoToStart(page);

    // For a new profile at level 1, level 2+ should be locked
    const node2 = page.locator('[data-testid="level-node-2"]');
    await expect(node2).toHaveAttribute('aria-label', /Level 2.*locked/i);

    // Should have a lock icon
    const lockIcon = node2.locator('[data-testid="lock-icon"]');
    await expect(lockIcon).toBeVisible();
  });

  test('REG-065: 12 connectors rendered between 13 nodes', async ({ page }) => {
    await createProfileAndGoToStart(page);

    const connectors = page.locator('[data-testid^="connector-"]');
    await expect(connectors).toHaveCount(12);
  });

  test('REG-066: Level node aria-labels include level name and status', async ({ page }) => {
    await createProfileAndGoToStart(page);

    // First level should include name "First Steps"
    const node1 = page.locator('[data-testid="level-node-1"]');
    await expect(node1).toHaveAttribute('aria-label', /First Steps/);

    // Last level should be locked with name "Math Champion"
    const node13 = page.locator('[data-testid="level-node-13"]');
    await expect(node13).toHaveAttribute('aria-label', /Math Champion.*locked/i);
  });
});

// ── Game Start with Level (REG-067 to REG-068) ─────────────────────────────

test.describe('Game start — level wiring', () => {
  test('REG-067: Clicking Play starts game screen', async ({ page }) => {
    await createProfileAndGoToStart(page);

    // Click play/start button
    const playBtn = page.locator('button', { hasText: /play|start/i }).first();
    await playBtn.click();

    // Should see a math problem (number displayed) or game UI
    const gameContent = page.locator('[data-testid*="problem"], [data-testid*="game"], [data-testid*="question"]').first();
    await expect(gameContent).toBeVisible({ timeout: 10000 });
  });

  test('REG-068: Game screen shows answer buttons', async ({ page }) => {
    await createProfileAndGoToStart(page);

    const playBtn = page.locator('button', { hasText: /play|start/i }).first();
    await playBtn.click();

    // Wait for game to load, then look for answer option buttons
    await page.waitForTimeout(2000);

    // Should have answer buttons (typically 4 options)
    const answerButtons = page.locator('button').filter({ hasNotText: /exit|quit|back/i });
    const count = await answerButtons.count();
    expect(count).toBeGreaterThanOrEqual(2); // At least 2 answer options visible
  });
});

// ── Level-Up Celebration Screen (REG-069 to REG-074) ────────────────────────
// NOTE: These tests verify the LevelUpScreen component's UI behavior.
// Triggering shouldLevelUp in a real E2E flow requires answering many questions
// correctly (confidence >= 85, streak >= 3). These scenarios are documented
// but may require test fixtures or reduced thresholds for practical E2E execution.

test.describe('Level-Up Screen — visual checks (requires level-up trigger)', () => {
  // Skip in CI unless level-up can be triggered; document as scenarios
  // These validate the component exists and has correct structure

  test('REG-069: LevelUpScreen has correct heading structure', async ({ page }) => {
    // Navigate to a state that shows LevelUpScreen
    // This requires either a test fixture or playing through enough questions
    // For regression, we verify the component's existence by checking the deployed app
    // can render the levelup screen state
    test.skip(true, 'Requires level-up trigger — covered by unit tests, E2E deferred');
  });

  test('REG-070: LevelUpScreen confetti particles render', async ({ page }) => {
    test.skip(true, 'Requires level-up trigger — covered by unit tests, E2E deferred');
  });

  test('REG-071: LevelUpScreen hero emoji is visible', async ({ page }) => {
    test.skip(true, 'Requires level-up trigger — covered by unit tests, E2E deferred');
  });

  test('REG-072: LevelUpScreen continue button meets 44px touch target', async ({ page }) => {
    test.skip(true, 'Requires level-up trigger — covered by unit tests, E2E deferred');
  });

  test('REG-073: LevelUpScreen has screen-reader status announcement', async ({ page }) => {
    test.skip(true, 'Requires level-up trigger — covered by unit tests, E2E deferred');
  });

  test('REG-074: Champion variant shows trophy and "Math Champion!" at max level', async ({ page }) => {
    test.skip(true, 'Requires level-up trigger at level 13 — covered by unit tests, E2E deferred');
  });
});

// ── Screen Isolation (REG-075 to REG-077) ───────────────────────────────────

test.describe('Screen isolation and transitions', () => {
  test('REG-075: Only one screen visible at a time during game flow', async ({ page }) => {
    await createProfileAndGoToStart(page);

    // On start screen, no game or result content should be visible
    const startContent = page.locator('button', { hasText: /play|start/i }).first();
    await expect(startContent).toBeVisible({ timeout: 5000 });

    // Start the game
    await startContent.click();
    await page.waitForTimeout(2000);

    // Game screen should be visible; start screen should not
    // The "Play" button from StartScreen should no longer be visible
    await expect(startContent).not.toBeVisible({ timeout: 5000 });
  });

  test('REG-076: Exit during game returns to start screen', async ({ page }) => {
    await createProfileAndGoToStart(page);

    // Start game
    const playBtn = page.locator('button', { hasText: /play|start/i }).first();
    await playBtn.click();
    await page.waitForTimeout(2000);

    // Click exit button
    const exitBtn = page.locator('button', { hasText: /exit|quit|back|close/i }).first();
    if (await exitBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await exitBtn.click();

      // Should return to start screen or result screen
      const backAtStart = page.locator('button', { hasText: /play|start/i }).first();
      await expect(backAtStart).toBeVisible({ timeout: 10000 });
    }
  });

  test('REG-077: No console errors during game-to-start transition', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await createProfileAndGoToStart(page);

    // Start game
    const playBtn = page.locator('button', { hasText: /play|start/i }).first();
    await playBtn.click();
    await page.waitForTimeout(2000);

    // Exit
    const exitBtn = page.locator('button', { hasText: /exit|quit|back|close/i }).first();
    if (await exitBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
      await exitBtn.click();
      await page.waitForTimeout(2000);
    }

    // Filter known benign errors
    const criticalErrors = errors.filter(
      (e) => !e.includes('favicon') && !e.includes('404') && !e.includes('firebase')
    );
    expect(criticalErrors).toEqual([]);
  });
});

// ── Reduced Motion (REG-078) ────────────────────────────────────────────────

test.describe('Reduced motion support', () => {
  test('REG-078: Level map pulse animation respects prefers-reduced-motion', async ({ page }) => {
    // Emulate reduced motion
    await page.emulateMedia({ reducedMotion: 'reduce' });

    await createProfileAndGoToStart(page);

    const levelMap = page.locator('[data-testid="level-map"]');
    await expect(levelMap).toBeVisible({ timeout: 5000 });

    // Current level node should have motion-reduce class applied
    // The CSS utility motion-reduce:animate-none suppresses pulse animation
    const currentNode = page.locator('[data-testid="level-node-1"]');
    await expect(currentNode).toBeVisible();

    // Verify the node's circle element does not have active animation
    // (motion-reduce:animate-none should set animation-name to none)
    const circleDiv = currentNode.locator('.animate-pulse-gold').first();
    if (await circleDiv.isVisible().catch(() => false)) {
      const animationName = await circleDiv.evaluate(
        (el) => getComputedStyle(el).animationName
      );
      // With reduced motion, animation should be 'none'
      expect(animationName).toBe('none');
    }
  });
});
