import { BasePage } from '../BasePage.js'

export class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page)
  }

  url = 'https://www.saucedemo.com/'
  inventoryUrl = "https://www.saucedemo.com/inventory.html"
  loginFieldName = '[data-test="username"]'
  passwordField = '[data-test="password"]'
  loginBtn = '#login-button'
  container = '[data-test="inventory-container"]'

  async open() {
    await this.navigate(this.url)
    await this.waitForLoad()
  }

  async openInventory() {
    await this.navigate(this.inventoryUrl)
    await this.waitForLoad()
  }

  async login(username, password) {
    await this.fillInputField(this.loginFieldName, username)
    await this.fillInputField(this.passwordField, password)
    await this.clickOnElementBy(this.loginBtn)
    await this.waitForLoad()
  }

  async verifySucseccgullLogin() {
    await this.expectUrl(this.inventoryUrl)
    await this.expectVisible(this.getLocator(this.container))
  }
}
