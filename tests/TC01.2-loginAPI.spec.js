import { test, expect } from '../fixtures/auth.fixture';

test.describe('API Auth Tests', () => {

  test('Get user via API session', async ({ request }) => {

    const loginRes = await request.post('/Account/v1/Login', {
      data: {
        userName: process.env.DEMOQA_USERNAME,
        password: process.env.DEMOQA_PASSWORD
      }
    });

    const loginBody = await loginRes.json();
    const token = loginBody.token;
    const userId = loginBody.userId;

    const response = await request.get(
      `/Account/v1/User/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    expect(response.status()).toBe(200);
  });
});