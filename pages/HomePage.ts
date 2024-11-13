import { Page } from '@playwright/test';
import selectors from '../selectors/selectors.json';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForTimeout(1000);
  }

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await this.page.waitForSelector(selectors.home.aboutUsButton, { state: 'visible' });
    await this.page.waitForTimeout(1000);
  }

  async clickAboutUs() {
    await this.page.click(selectors.home.aboutUsButton);
    await this.page.waitForTimeout(1000);
  }
}

