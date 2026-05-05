import { expect } from '@playwright/test'
import { BaseElements } from './BaseElements.js'

export class BasePage extends BaseElements {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page)
  }

  async navigate(url) {
    await this.page.goto(url)
    await this.waitForLoad()
  }

  async getTitle() {
    return this.page.title()
  }

  async clickOnElementBy(locator) {
    await this.getLocator(locator).click()
  }

  async fillInputField(locator, value) {
    await this.getLocator(locator).fill(value)
  }

  async waitForLoad() {
    await this.page.waitForLoadState('networkidle')
  }

  async expectElementText(locator, expectedText) {
    await expect(locator).toHaveText(expectedText)
  }

  async expectElementsText(locators, expectedTexts) {
    for (let i = 0; i < locators.length; i++) {
      await expect(locators[i]).toHaveText(expectedTexts[i])
    }
  }

  async expectVisible(locator) {
    await expect(locator).toBeVisible()
  }

  async expectHidden(locator) {
    await expect(locator).toBeHidden()
  }

  async expectUrl(urlOrRegex) {
    await expect(this.page).toHaveURL(urlOrRegex)
  }

  async expectTitle(titleOrRegex) {
    await expect(this.page).toHaveTitle(titleOrRegex)
  }
}
