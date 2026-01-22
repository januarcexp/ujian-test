import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('TEST CHECKOUT DENGAN VOUCER (INVALID TEST)', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/');
  await page.getByRole('link', { name: 'Wallnut Kembang Kingwood Rp' }).click();
  await page.getByRole('button', { name: ' Tambah ke Keranjang' }).click();
  await page.getByRole('textbox', { name: 'Kode Voucher' }).click();
  await page.getByRole('textbox', { name: 'Kode Voucher' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Kode Voucher' }).fill('DIS21');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Terapkan' }).click();
});




