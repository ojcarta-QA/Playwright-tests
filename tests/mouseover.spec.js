import { test, expect } from '@playwright/test';

test('Mouseover action', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const product = await page.locator("//button[normalize-space()='START']")
    await product.hover()
 
 
 await page.waitForTimeout(5000);
});