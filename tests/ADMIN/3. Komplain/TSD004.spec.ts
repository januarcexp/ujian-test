import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/admin/dashboard');
  await page.getByRole('link', { name: ' Komplain Pelanggan' }).click();
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: '3' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).click();
  await page.getByRole('searchbox', { name: 'Search:' }).fill('adel');
});