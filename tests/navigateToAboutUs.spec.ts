import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage';

test.describe('Navegação para About Us e retorno à página principal', () => {
  test('Deve acessar About Us e voltar à página inicial', async ({ page }) => {
    const homePage = new HomePage(page);
    const aboutUsPage = new AboutUsPage(page);

    await homePage.goto();

    await homePage.scrollToFooter();

    await homePage.clickAboutUs();

    await expect(page).toHaveURL(/about/);

    await expect(page).toHaveURL(/barosa\.co/);
  });
});
