import { BasePage } from '../BasePage.js'
import { URLS } from '../../utils/urls.js'

export class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page)
  }

  url = URLS.HOME
  inventoryUrl = URLS.INVENTORY
  loginFieldName = '[data-test="username"]'
  passwordField = '[data-test="password"]'
  loginBtn = '#login-button'
  container = '[data-test="inventory-container"]'

  async open() {
    await this.navigate(this.url)
  }

  async openInventory() {
    await this.navigate(this.inventoryUrl)
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
