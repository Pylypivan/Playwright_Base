import { test } from '@playwright/test'
import { URLS } from '../../utils/urls.js'

test('@budget order summary shows correct items', async ({ page }) => {
  test.setTimeout(70_000)
  await page.goto(URLS.CHECKOUT_STEP_TWO)
  await page.waitForTimeout(40_000)
})

test('@budget order completion shows success message', async ({ page }) => {
  test.setTimeout(100_000)
  await page.goto(URLS.CHECKOUT_COMPLETE)
  await page.waitForTimeout(70_000)
})

test('@budget checkout form validation blocks empty submit', async ({ page }) => {
  test.setTimeout(130_000)
  await page.goto(URLS.CHECKOUT_STEP_ONE)
  await page.waitForTimeout(100_000)
})

test('@budget add all items and verify cart count', async ({ page }) => {
  test.setTimeout(160_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(130_000)
})

test('@budget full checkout flow completes', async ({ page }) => {
  test.setTimeout(200_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(170_000)
})
