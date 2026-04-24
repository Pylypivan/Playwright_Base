import { request } from '@playwright/test'
import { ROLES } from '../utils/roles.js'
import fs from 'fs'

const BASE_URL = 'https://www.saucedemo.com'

async function injectSessionCookie(username, storageStatePath) {
  const requestContext = await request.newContext({ baseURL: BASE_URL })
  await requestContext.get('/')
  await requestContext.storageState({ path: storageStatePath })
  await requestContext.dispose()

  const state = JSON.parse(fs.readFileSync(storageStatePath, 'utf-8'))
  state.cookies.push({
    name: 'session-username',
    value: username,
    domain: 'www.saucedemo.com',
    path: '/',
    expires: Date.now() / 1000 + 86400,
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
  })
  fs.writeFileSync(storageStatePath, JSON.stringify(state, null, 2))
}

export default async function globalSetup() {
  await injectSessionCookie('standard_user', ROLES.ADMIN)
  await injectSessionCookie('performance_glitch_user', ROLES.STANDARD_USER)
}
