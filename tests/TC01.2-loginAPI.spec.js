import { test, expect } from '../fixtures/auth.fixture';

test.describe('API Auth Tests', () => {

  test('Get user with saved session', async ({ request, authToken, userId }) => {

    const response = await request.get(
      `/Account/v1/User/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );

    const body = await response.json();

    console.log(body);
    expect(response.status()).toBe(200);
  });
});