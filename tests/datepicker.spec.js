import { test, expect } from '@playwright/test';

test('Pick a date', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator("//input[@id='datepicker']").fill('03/30/2025')
 
 
 
 await page.waitForTimeout(5000);
});