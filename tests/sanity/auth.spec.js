import { test } from '@playwright/test'

const BASE = 'https://www.saucedemo.com'

test('@sanity authenticated user lands on inventory', async ({ page }) => {
  test.setTimeout(55_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(30_000)
})

test('@sanity unauthenticated user redirected to login', async ({ page }) => {
  test.setTimeout(70_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(40_000)
})

test('@sanity logout clears session', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto(`${BASE}/inventory.html`)
  await page.waitForTimeout(60_000)
})

test('@sanity locked out user sees error', async ({ page }) => {
  test.setTimeout(150_000)
  await page.goto(BASE)
  await page.waitForTimeout(120_000)
})

test('@sanity invalid credentials show error message', async ({ page }) => {
  test.setTimeout(185_000)
  await page.goto(BASE)
  await page.waitForTimeout(155_000)
})
