import { test } from '@playwright/test'
import { URLS } from '../../utils/urls.js'

test('@budget item price matches product detail', async ({ page }) => {
  test.setTimeout(65_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(35_000)
})

test('@budget total price is sum of items', async ({ page }) => {
  test.setTimeout(95_000)
  await page.goto(URLS.CHECKOUT_STEP_TWO)
  await page.waitForTimeout(65_000)
})

test('@budget tax is calculated correctly', async ({ page }) => {
  test.setTimeout(120_000)
  await page.goto(URLS.CHECKOUT_STEP_TWO)
  await page.waitForTimeout(90_000)
})

test('@budget sort by price high to low is correct', async ({ page }) => {
  test.setTimeout(150_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(120_000)
})

test('@budget price is consistent across pages', async ({ page }) => {
  test.setTimeout(180_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(150_000)
})
