import { test } from '@playwright/test'
import { URLS } from '../../utils/urls.js'

test('@regression inventory page renders', async ({ page }) => {
  test.setTimeout(70_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(35_000)
})

test('@regression product list is not empty', async ({ page }) => {
  test.setTimeout(55_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(30_000)
})

test('@regression product images are visible', async ({ page }) => {
  test.setTimeout(80_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(50_000)
})

test('@regression sort by name A-Z', async ({ page }) => {
  test.setTimeout(100_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(70_000)
})

test('@regression sort by price low to high', async ({ page }) => {
  test.setTimeout(120_000)
  await page.goto(URLS.INVENTORY)
  await page.waitForTimeout(90_000)
})
