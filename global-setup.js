import { request } from '@playwright/test';
import fs from 'fs';

async function globalSetup() {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    `${process.env.DEMOQA_BASE_URL}/Account/v1/Login`,
    {
      data: {
        userName: process.env.DEMOQA_USERNAME,
        password: process.env.DEMOQA_PASSWORD,
      },
    }
  );

  const body = await response.json();

  fs.writeFileSync('auth.json', JSON.stringify({
    token: body.token,
    userId: body.userId,
  }));
}

export default globalSetup;