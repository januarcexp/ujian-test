import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('test', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/admin/dashboard');
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: ' Pelanggan' }).click();
  await page.getByRole('link', { name: ' Tambah Pelanggan' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('eleinaa 2');
  await page.getByRole('textbox', { name: 'Nama Lengkap' }).click();
  await page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('eleina 2');
  await page.getByRole('textbox', { name: 'No. Telepon' }).click();
  await page.getByRole('textbox', { name: 'No. Telepon' }).fill('08772774211');
  await page.getByRole('textbox', { name: 'Alamat' }).click();
  await page.getByRole('textbox', { name: 'Alamat' }).fill('jaln bersama 2');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('eleina2@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Kirim' }).click();
});