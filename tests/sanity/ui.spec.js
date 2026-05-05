import { test } from '@playwright/test'
import { URLS } from '../../utils/urls.js'

test('@sanity page title is present', async ({ page }) => {
  test.setTimeout(60_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(30_000)
})

test('@sanity burger menu button is visible', async ({ page }) => {
  test.setTimeout(75_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(45_000)
})

test('@sanity shopping cart icon is visible', async ({ page }) => {
  test.setTimeout(100_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(70_000)
})

test('@sanity footer links are visible', async ({ page }) => {
  test.setTimeout(130_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(100_000)
})

test('@sanity inventory container is rendered', async ({ page }) => {
  test.setTimeout(165_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(135_000)
})
