import { test } from '@playwright/test';
import { WebTables } from '../pageObject/webTablesPage';

test('Web Tables - Add, Edit, and Delete User', async ({ page }) => {
  const webTables = new WebTables(page);

  await webTables.navigateToWebTables();

  await webTables.addUser({
    firstName: 'Ravi',
    lastName: 'Tiwari',
    email: 'ravi.tiwari@example.com',
    age: '30',
    salary: '50000',
    department: 'QA'
  });

  await webTables.editLastUserAge('35');

  await webTables.deleteLastUser('Ravi');
});
