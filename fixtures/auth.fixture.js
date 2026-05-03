import { test as base } from '@playwright/test';
import fs from 'fs';

export const test = base.extend({
  authToken: async ({}, use) => {
    const data = JSON.parse(fs.readFileSync('auth.json'));
    await use(data.token);
  },

  userId: async ({}, use) => {
    const data = JSON.parse(fs.readFileSync('auth.json'));
    await use(data.userId);
  }
});

export const expect = test.expect;