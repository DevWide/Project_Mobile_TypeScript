import { Page } from '@playwright/test';
import selectors from '../selectors/selectors.json';

export class AboutUsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPageLoaded() {
    await this.page.waitForSelector('text=About Us', { state: 'visible' });
  }
}
