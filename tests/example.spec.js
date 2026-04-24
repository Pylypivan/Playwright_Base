import { test } from '../fixtures/index.js';

test('@regression has title',  async ({ playwrightDocsPage }) => {
  await playwrightDocsPage.open();
  await playwrightDocsPage.expectTitle(/Playwright/);
});

test('@regression get started link', async ({ playwrightDocsPage }) => {
  await playwrightDocsPage.open();
  await playwrightDocsPage.clickGetStarted();
  await playwrightDocsPage.expectInstallationVisible();
});
