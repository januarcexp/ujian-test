import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('TEST USER CHAT KEPADA ADMIN', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/');
  await page.locator('a:nth-child(2)').first().click();
  await page.getByRole('textbox', { name: 'Tulis pesan...' }).click();
  await page.getByRole('textbox', { name: 'Tulis pesan...' }).fill('halo kak ini saya adel');
  await page.getByRole('button', { name: 'Kirim' }).click();
});