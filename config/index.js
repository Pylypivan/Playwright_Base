import staging from './envs/staging.js'
import production from './envs/production.js'
import dev from './envs/dev.js'

const envs = { staging, production, dev }

export const env = envs[process.env.TEST_ENV ?? 'staging']
