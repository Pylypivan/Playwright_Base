import { test } from '@playwright/test'
import { URLS } from '../../utils/urls.js'

test('@sanity home page is reachable', async ({ page }) => {
  test.setTimeout(55_000)
  await page.goto(URLS.HOME)
  await page.waitForTimeout(30_000)
})

test('@sanity inventory url is accessible', async ({ page }) => {
  test.setTimeout(65_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(35_000)
})

test('@sanity cart page is accessible', async ({ page }) => {
  test.setTimeout(80_000)
  await page.goto(URLS.CART)
  await page.waitForTimeout(50_000)
})

test('@sanity checkout step one is accessible', async ({ page }) => {
  test.setTimeout(110_000)
  await page.goto(URLS.CHECKOUT_STEP_ONE)
  await page.waitForTimeout(80_000)
})

test('@sanity checkout complete page is accessible', async ({ page }) => {
  test.setTimeout(140_000)
  await page.goto(URLS.CHECKOUT_COMPLETE)
  await page.waitForTimeout(110_000)
})
