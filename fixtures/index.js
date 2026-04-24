import { test as base } from '@playwright/test'
import { PlaywrightDocsPage } from '../pages/PlaywrightDocsPage.js'
import { LoginPage } from '../pages/login/loginPage.js'

export const test = base.extend({
  playwrightDocsPage: async ({ page }, use) => {
    await use(new PlaywrightDocsPage(page))
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
})

export { expect } from '@playwright/test'
