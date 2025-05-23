import { test, expect } from '@playwright/test';

test('Drag and drop', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  const seoul = await page.locator("#box5")
  const Korea = await page.locator("#box105")

  await seoul.dragTo(Korea)
 
 await page.waitForTimeout(5000);
});