import { request } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

async function globalSetup() {
  const baseURL = process.env.DEMOQA_BASE_URL || 'https://demoqa.com';
  const userName = process.env.DEMOQA_USERNAME;
  const password = process.env.DEMOQA_PASSWORD;

  if (!userName || !password) {
    throw new Error(
      'DEMOQA_USERNAME and DEMOQA_PASSWORD must be set. Locally, add them to .env. On GitHub Actions, add them as repository secrets.'
    );
  }

  const apiContext = await request.newContext();

  const response = await apiContext.post(`${baseURL}/Account/v1/Login`, {
    data: { userName, password },
  });

  const raw = await response.text();
  if (!response.ok()) {
    throw new Error(`DemoQA login failed (${response.status()}): ${raw}`);
  }

  const body = JSON.parse(raw);

  fs.writeFileSync('auth.json', JSON.stringify({
    token: body.token,
    userId: body.userId,
  }));
}

export default globalSetup;