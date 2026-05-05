import { test } from '@playwright/test'
import { URLS } from '../../utils/urls.js'

test('@regression checkout step one loads', async ({ page }) => {
  test.setTimeout(75_000)
  await page.goto(URLS.CHECKOUT_STEP_ONE)
  await page.waitForTimeout(45_000)
})

test('@regression checkout form accepts valid input', async ({ page }) => {
  test.setTimeout(100_000)
  await page.goto(URLS.CHECKOUT_STEP_ONE)
  await page.waitForTimeout(70_000)
})

test('@regression checkout step two shows order summary', async ({ page }) => {
  test.setTimeout(130_000)
  await page.goto(URLS.CHECKOUT_STEP_TWO)
  await page.waitForTimeout(100_000)
})

test('@regression tax is present in order summary', async ({ page }) => {
  test.setTimeout(155_000)
  await page.goto(URLS.CHECKOUT_STEP_TWO)
  await page.waitForTimeout(125_000)
})

test('@regression checkout complete page loads', async ({ page }) => {
  test.setTimeout(185_000)
  await page.goto(URLS.CHECKOUT_COMPLETE)
  await page.waitForTimeout(155_000)
})
