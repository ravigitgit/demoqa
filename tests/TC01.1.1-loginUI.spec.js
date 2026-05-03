import { test, expect } from '@playwright/test';
import { Login } from '../pageObject/login';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Login Tests', () => {
  let login;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    await page.goto('/login');
    await login.waitForLoginFields();
  });

  test('login with valid credentials', async () => {
    await login.login(process.env.DEMOQA_USERNAME, process.env.DEMOQA_PASSWORD);
    await login.assertSuccessfulLogin(process.env.DEMOQA_USERNAME);
  });

  test('invalid login shows error', async () => {
    await login.login('InvalidUser', 'WrongPass123');
    await login.assertLoginError();
  });

  test('required field validation', async () => {
    await login.validateRequiredFields();
  });

  test('Save UI session after login', async ({ page }) => {
    await login.login(process.env.DEMOQA_USERNAME, process.env.DEMOQA_PASSWORD);
    await login.assertSuccessfulLogin(process.env.DEMOQA_USERNAME);

    // ✅ Save session
    await page.context().storageState({ path: 'storageState.json' });
  });
});