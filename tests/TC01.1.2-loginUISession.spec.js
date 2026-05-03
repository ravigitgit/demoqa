import { test, expect } from '@playwright/test';

test.use({ storageState: 'storageState.json' }); // ✅ load saved session

test('Access profile without login', async ({ page }) => {
  await page.goto('/profile');

  await expect(page.locator('#userName-value')).toBeVisible();
});