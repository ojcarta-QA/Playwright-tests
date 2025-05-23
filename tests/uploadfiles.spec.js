import { test, expect } from '@playwright/test';

test('Upload files', async ({ page }) => {
  await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')
  await page.locator("//input[@name='userfile']").setInputFiles('files/23 - 29th.xlsx')
 
 
 await page.waitForTimeout(5000);
});