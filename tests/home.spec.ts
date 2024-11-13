import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage';
import * as path from 'path';
import * as fs from 'fs';

test.describe('Navigation to About Us from the footer', () => {
  test('You should scroll to the footer, access About Us and check the navigation', async ({ page }) => {
    const homePage = new HomePage(page);
    const aboutUsPage = new AboutUsPage(page);

    await homePage.goto();

    await homePage.scrollToFooter();
    await homePage.clickAboutUs();

    await expect(page).toHaveURL(/about/);

    const screenshotsDir = path.resolve('screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }
    const screenshotPath = path.join(screenshotsDir, 'about_us_page.png');

    await page.screenshot({ path: screenshotPath });
    
    console.log(`Screenshot salva em: ${screenshotPath}`);
  });
});

