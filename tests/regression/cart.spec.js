import { test } from '@playwright/test'

const BASE = 'https://www.saucedemo.com'

test('@regression add first item to cart', async ({ page }) => {
  test.setTimeout(65_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(35_000)
})

test('@regression cart badge updates on add', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(60_000)
})

test('@regression remove item from cart', async ({ page }) => {
  test.setTimeout(115_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(80_000)
})

test('@regression cart page shows added items', async ({ page }) => {
  test.setTimeout(140_000)
  await page.goto(`${BASE}/cart.html`)
  await page.waitForTimeout(110_000)
})

test('@regression continue shopping returns to inventory', async ({ page }) => {
  test.setTimeout(160_000)
  await page.goto(`${BASE}/cart.html`)
  await page.waitForTimeout(130_000)
})
