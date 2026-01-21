import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('DASBOARD TEST SEMUA TOMBOL FITUR', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/');
  await page.getByRole('link', { name: 'Produk' }).click();
  await page.getByRole('link', { name: 'Pemesanan' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.locator('.position-relative').first().click();
  await page.locator('a:nth-child(2)').first().click();
  await page.locator('a:nth-child(3)').click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('oak lurus');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.locator('section').click();
  await page.locator('.position-relative').first().click();
  await page.locator('#mainNav').click();
});