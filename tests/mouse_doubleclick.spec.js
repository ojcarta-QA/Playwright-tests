import { test, expect } from '@playwright/test';

test('Double click action', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const button = await page.locator("//button[normalize-space()='Copy Text']")
  await button.dblclick()
 
  //assertion
  const field2 = await page.locator("//input[@id='field2']")
  await expect(field2).toHaveValue("Hello World!")
 
 await page.waitForTimeout(5000);
});