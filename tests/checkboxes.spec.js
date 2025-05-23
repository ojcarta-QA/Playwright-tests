import { test, expect } from '@playwright/test';

test('Check a checkbox', async ({ page }) => {
  await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F');
  await page.locator("//input[@id='Input_RememberMe']").check();
  expect(await page.locator("//input[@id='Input_RememberMe']")).toBeChecked();
  await page.locator("//input[@id='Input_RememberMe']").uncheck();
 
 await page.waitForTimeout(5000);
});