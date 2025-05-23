import { test, expect } from '@playwright/test';

test('Add to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/')
  
  //LOGIN
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("orjilo")
    await page.locator('#loginpassword').fill("ojcarta7568")
    await page.locator("//button[normalize-space()='Log in']").click()

  //ADD TO CART
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

  //LOGOUT
    await page.locator("//a[@id='logout2']").click()
 
//  await page.waitForTimeout(5000);
});