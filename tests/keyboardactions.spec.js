import { test, expect } from '@playwright/test';

test('Keyboard actions', async ({ page }) => {
  await page.goto('https://gotranscript.com/text-compare');
  
  //get text area
  await page.fill("//textarea[@placeholder='Paste one version of the text here.']",'Welcome to automation')

  //ctrl A
    await page.keyboard.press('Meta+A')
  //ctrl C
  await page.keyboard.press('Meta+C')
  //Tab
  await page.keyboard.press('Tab')
  //ctrl V
  await page.keyboard.press('Meta+V')


  //ASSERTION
  const inputType = await page.locator("//textarea[@placeholder='Paste another version of the text here.']")
  await expect(inputType).toHaveValue('Welcome to automation')
  
 
 await page.waitForTimeout(5000);
});