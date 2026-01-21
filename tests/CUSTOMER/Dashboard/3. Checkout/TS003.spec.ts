import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('TEST PEMESANAN / CHECKOUT (tanpa voucher)', async ({ page }) => {
  await page.goto('http://localhost/plywood/public/');
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'White Oak Lurus Kingwood Rp' }).click();
  await page.getByRole('button', { name: ' Tambah ke Keranjang' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('2');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Catatan Tambahan (Opsional)' }).click();
  await page.getByRole('textbox', { name: 'Catatan Tambahan (Opsional)' }).fill('dikirim segera');
  await page.getByLabel('Pilih Pengiriman').selectOption('4');
  await page.getByText('BCA (Bank)').click();


  await page.getByRole('button', { name: 'Unggah Bukti Pembayaran' }).click();
  await page.getByRole('button', { name: 'Unggah Bukti Pembayaran' }).setInputFiles('/Users/ciptajanuardika/Desktop/jpg 2.png');
  await page.getByRole('button', { name: ' Bayar Sekarang' }).click();


});