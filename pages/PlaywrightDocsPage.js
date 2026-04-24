import { BasePage } from './BasePage.js';

export class PlaywrightDocsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
  }

  url = 'https://playwright.dev/';

  async open() {
    await this.navigate(this.url);
    await this.waitForLoad();
  }

  async clickGetStarted() {
    await this.getByRole('link', { name: 'Get started' }).click();
  }

  async expectInstallationVisible() {
    await this.expectVisible(this.getByRole('heading', { name: 'Installation' }));
  }
}
