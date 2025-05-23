import { test, expect } from '@playwright/test';

test('Select item from dropdown', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/#google_vignette');
  await page.locator("//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select").selectOption({index:6})
 
 
 await page.waitForTimeout(5000);
});