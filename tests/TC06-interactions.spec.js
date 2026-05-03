import { test, expect } from '@playwright/test';

test('Simple Droppable using dragTo()', async ({ page }) => {
  await page.goto('/droppable');

  const draggable = page.locator('#draggable');
  const droppable = page.locator('#simpleDropContainer #droppable[class="drop-box ui-droppable"]');

  // Ensure elements are ready
  await expect(draggable).toBeVisible();
  await expect(droppable).toBeVisible();

  // Perform drag & drop
  await draggable.dragTo(droppable);

  // ✅ Validate drop success
  await expect(droppable.locator('p')).toHaveText('Dropped!');
});