import { test as setup, request } from '@playwright/test'
import { ROLES } from '../utils/roles.js'

const BASE_URL = 'https://www.saucedemo.com'

async function loginViaApi(username, password, storageStatePath) {
  const requestContext = await request.newContext({ baseURL: BASE_URL })

  await requestContext
    .post('/api/v1/login', {
      data: { username, password },
    })
    .catch(() => {})

  await requestContext.storageState({ path: storageStatePath })
  await requestContext.dispose()
}

setup('authenticate as admin', async ({ playwright }) => {
  const requestContext = await playwright.request.newContext({ baseURL: BASE_URL }) // saucedemo не має REST API — встановлюємо cookie напряму без браузера

  await requestContext.get('/')
  await requestContext.storageState({ path: ROLES.ADMIN })
  await requestContext.dispose() // Додаємо auth cookie вручну в збережений стан

  const fs = await import('fs')
  const state = JSON.parse(fs.readFileSync(ROLES.ADMIN, 'utf-8'))
  state.cookies.push({
    name: 'session-username',
    value: 'standard_user',
    domain: 'www.saucedemo.com',
    path: '/',
    expires: Date.now() / 1000 + 86400,
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
  })
  fs.writeFileSync(ROLES.ADMIN, JSON.stringify(state, null, 2))
})

setup('authenticate as standard user', async ({ playwright }) => {
  const requestContext = await playwright.request.newContext({ baseURL: BASE_URL })

  await requestContext.get('/')
  await requestContext.storageState({ path: ROLES.STANDARD_USER })
  await requestContext.dispose()

  const fs = await import('fs')
  const state = JSON.parse(fs.readFileSync(ROLES.STANDARD_USER, 'utf-8'))
  state.cookies.push({
    name: 'session-username',
    value: 'performance_glitch_user',
    domain: 'www.saucedemo.com',
    path: '/',
    expires: Date.now() / 1000 + 86400,
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
  })
  fs.writeFileSync(ROLES.STANDARD_USER, JSON.stringify(state, null, 2))
})
