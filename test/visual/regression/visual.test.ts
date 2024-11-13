import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('homepage visual comparison', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('homepage.png');
  });

  test('portfolio page visual comparison', async ({ page }) => {
    await page.goto('/portfolio');
    await expect(page).toHaveScreenshot('portfolio.png');
  });
});
