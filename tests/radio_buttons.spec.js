import { test, expect } from '@playwright/test';

test('Select radio button', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/radio-buttons#google_vignette');
  await page.getByRole('radio', { name: 'Yellow' }).check();
 
 
});