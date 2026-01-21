import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/admin.json'
});

test('DASHBOARD ADMIN TEST MEMASTIKAN SEMUA TOMBOL FITUR', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/admin/dashboard');
  await page.getByRole('link', { name: ' Daftar Pesanan' }).click();
  await page.getByRole('link', { name: ' Komplain Pelanggan' }).click();
  await page.getByRole('link', { name: ' Pelanggan' }).click();
  await page.getByRole('link', { name: ' Manajemen Produk ' }).click();
  await page.getByText('Kategori Produk Produk').click();
  await page.getByRole('link', { name: ' Manajemen Produk ' }).click();
  await page.getByRole('link', { name: ' Produk' }).click();
  await page.getByRole('link', { name: ' Manajemen Feedback ' }).click();
  await page.getByRole('link', { name: ' Review Produk' }).click();
  await page.getByRole('link', { name: ' Manajemen Feedback ' }).click();
  await page.getByRole('link', { name: ' Review Pelayanan &' }).click();
  await page.getByRole('link', { name: ' Diskon' }).click();
  await page.getByRole('link', { name: ' Pembayaran' }).click();
  await page.getByRole('link', { name: ' Ongkir' }).click();
  await page.getByRole('link', { name: ' Penjualan' }).click();
  await page.locator('#sidebarToggle').click();
  await page.locator('#sidebarToggle').click();
  await page.getByRole('link', { name: 'Chat' }).click();
  await page.getByRole('button', { name: 'admin' }).click();
  await page.getByRole('link', { name: ' Profile' }).click();


   await page.getByRole('button', { name: 'admin' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Logout' }).click();
});
