import { test } from '../fixtures/index.js'
import { ROLES } from '../utils/roles.js'

test.describe('Test Admin rights', () => {
  test.use({ storageState: ROLES.ADMIN })

  test('@regression Login Test', async ({ loginPage }) => {
    await loginPage.openInventory()
    await loginPage.verifySucseccgullLogin()
  })
})

test.describe('Test Standard user rights', () => {
  test.use({ storageState: ROLES.STANDARD_USER })

  test('@regression Standard user Login Test', async ({ loginPage }) => {
    await loginPage.openInventory()
    await loginPage.verifySucseccgullLogin()
  })
})
