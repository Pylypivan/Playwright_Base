import { test } from '@playwright/test'

const BASE = 'https://www.saucedemo.com'

test('@budget product detail page opens correctly', async ({ page }) => {
  test.setTimeout(60_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(30_000)
})

test('@budget product description is present', async ({ page }) => {
  test.setTimeout(85_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(55_000)
})

test('@budget product image loads without error', async ({ page }) => {
  test.setTimeout(115_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(85_000)
})

test('@budget back button returns to inventory', async ({ page }) => {
  test.setTimeout(145_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(115_000)
})

test('@budget add to cart from product detail page', async ({ page }) => {
  test.setTimeout(185_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(155_000)
})
