import { test, expect } from '@playwright/test';

test('Stop progress at 50%', async ({ page }) => {
  await page.goto('/progress-bar');

  const progressBar = page.locator('#progressBar .progress-bar');
  const button = page.locator('#startStopButton');

  await button.click();

  // Wait until progress reaches ~50
  await page.waitForFunction(() => {
    const el = document.querySelector('#progressBar .progress-bar');
    return Number(el.getAttribute('aria-valuenow')) >= 50;
  });

  // Stop progress
  await button.click();

  const value = await progressBar.getAttribute('aria-valuenow');
  console.log('Stopped at:', value);

  expect(Number(value)).toBeGreaterThanOrEqual(50);
});