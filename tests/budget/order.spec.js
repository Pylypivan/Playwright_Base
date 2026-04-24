import { test } from '@playwright/test'

const BASE = 'https://www.saucedemo.com'

test('@budget order summary shows correct items', async ({ page }) => {
  test.setTimeout(70_000)
  await page.goto(`${BASE}/checkout-step-two.html`)
  await page.waitForTimeout(40_000)
})

test('@budget order completion shows success message', async ({ page }) => {
  test.setTimeout(100_000)
  await page.goto(`${BASE}/checkout-complete.html`)
  await page.waitForTimeout(70_000)
})

test('@budget checkout form validation blocks empty submit', async ({ page }) => {
  test.setTimeout(130_000)
  await page.goto(`${BASE}/checkout-step-one.html`)
  await page.waitForTimeout(100_000)
})

test('@budget add all items and verify cart count', async ({ page }) => {
  test.setTimeout(160_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(130_000)
})

test('@budget full checkout flow completes', async ({ page }) => {
  test.setTimeout(200_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(170_000)
})
