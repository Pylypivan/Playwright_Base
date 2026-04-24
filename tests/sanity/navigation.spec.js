import { test } from '@playwright/test'

const BASE = 'https://www.saucedemo.com'

test('@sanity home page is reachable', async ({ page }) => {
  test.setTimeout(55_000)
  await page.goto(BASE)
  await page.waitForTimeout(30_000)
})

test('@sanity inventory url is accessible', async ({ page }) => {
  test.setTimeout(65_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(35_000)
})

test('@sanity cart page is accessible', async ({ page }) => {
  test.setTimeout(80_000)
  await page.goto(`${BASE}/cart.html`)
  await page.waitForTimeout(50_000)
})

test('@sanity checkout step one is accessible', async ({ page }) => {
  test.setTimeout(110_000)
  await page.goto(`${BASE}/checkout-step-one.html`)
  await page.waitForTimeout(80_000)
})

test('@sanity checkout complete page is accessible', async ({ page }) => {
  test.setTimeout(140_000)
  await page.goto(`${BASE}/checkout-complete.html`)
  await page.waitForTimeout(110_000)
})
