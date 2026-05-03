import { test, expect } from '@playwright/test';
import { AlertsFrameWindows } from '../pageObject/alertsFrameWindows';
import { handleAlertOnce, handleTimedAlert, handlePromptAlert } from '../utils/utility';

test('Complete Alert flow: navigate, fill, submit, and verify confirmation', async ({ page }) => {
    const alertsFrameWindows = new AlertsFrameWindows(page);

    await alertsFrameWindows.navigateToHeader('Alerts, Frame & Windows', 'Alerts');
    await expect(alertsFrameWindows.page).toHaveURL(/.*alerts/);
    await expect(alertsFrameWindows.locators.alertsTitle).toBeVisible();

    await handleAlertOnce(page, 'accept');
    await page.locator('#alertButton').click();
});

test('Complete Timer Alert flow: navigate, fill, submit, and verify confirmation', async ({ page }) => {
    const alertsFrameWindows = new AlertsFrameWindows(page);

    await alertsFrameWindows.navigateToHeader('Alerts, Frame & Windows', 'Alerts');
    await expect(alertsFrameWindows.page).toHaveURL(/.*alerts/);
    await expect(alertsFrameWindows.locators.alertsTitle).toBeVisible();

    await handleTimedAlert(
        page,
        () => page.locator('#timerAlertButton').click(),
        'accept'
    );
});

test('Complete Confirm & Cancel Alert flow: navigate, fill, submit, and verify confirmation', async ({ page }) => {
    const alertsFrameWindows = new AlertsFrameWindows(page);

    await test.step('Navigate to Alerts page', async () => {
        await alertsFrameWindows.navigateToHeader('Alerts, Frame & Windows', 'Alerts');
        await expect(alertsFrameWindows.page).toHaveURL(/.*alerts/);
        await expect(alertsFrameWindows.locators.alertsTitle).toBeVisible();
    });

    await test.step('Handle confirm alert - Accept (OK)', async () => {
        await handleAlertOnce(page, 'accept');
        await page.locator('#confirmButton').click();

        await expect(page.locator('#confirmResult'))
            .toHaveText('You selected Ok');
    });

    await test.step('Handle confirm alert - Dismiss (Cancel)', async () => {
        await handleAlertOnce(page, 'dismiss');
        await page.locator('#confirmButton').click();

        await expect(page.locator('#confirmResult'))
            .toHaveText('You selected Cancel');
    });
});

test('Complete Prompt Box Alert flow: navigate, fill, submit, and verify confirmation', async ({ page }) => {
    const alertsFrameWindows = new AlertsFrameWindows(page);

    await test.step('Navigate to Alerts page', async () => {
        await alertsFrameWindows.navigateToHeader('Alerts, Frame & Windows', 'Alerts');
        await expect(alertsFrameWindows.page).toHaveURL(/.*alerts/);
        await expect(alertsFrameWindows.locators.alertsTitle).toBeVisible();
    });

    await test.step('Handle prompt alert and accept with input', async () => {
        await handlePromptAlert(page, 'Ravi', 'accept');
        await page.locator('#promtButton').click();

        await expect(page.locator('#promptResult'))
            .toHaveText('You entered Ravi');
    });

    await test.step('Handle prompt alert and dismiss (Cancel)', async () => {
        await handlePromptAlert(page, 'Ravi', 'dismiss');
        await page.locator('#promtButton').click();

        await expect(page.locator('#promptResult'))
            .not.toBeVisible();
    });
});
