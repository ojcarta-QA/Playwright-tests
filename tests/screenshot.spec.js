import { test, expect } from '@playwright/test';

test('Take screenshot', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.screenshot({ path:'screenshots' + Date.now() + 'FullPage.png'});
 
 
});