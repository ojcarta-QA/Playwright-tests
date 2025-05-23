import { test, expect } from '@playwright/test';

test('Create an account', async ({ page }) => {
  await page.goto('https://web.facebook.com/r.php?locale=en_GB&display=page&entry_point=login');
  await page.getByRole('textbox', { name: 'First name' }).fill('Igwe');
  await page.getByRole('textbox', { name: 'Surname' }).fill('Orji');
  await page.getByLabel('Day').selectOption('19');
  await page.getByLabel('Month').selectOption('11');
  await page.getByLabel('Year').selectOption('2000');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('09167182912');
  await page.getByRole('textbox', { name: 'New password' }).fill('Ojcarta78@');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  
});