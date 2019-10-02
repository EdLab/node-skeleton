require('dotenv-safe').config()

import * as Constants from '../config/constants'

const {
  NODE_ENV: env = 'development',
} = process.env
const publicConfig = require('./app_config')
const privateConfig = require('./app_config_private')
const {
  version,
} = require('../package.json')

let AppConfig = {
  env: env,
  isDevelopment: env === 'development',
  isProduction: env === 'production' || env === 'integration',
  isTesting: env === 'test',
  appVersion: version,
}

AppConfig = Object.assign(
  AppConfig,
  publicConfig(env),
  privateConfig(env))

global.AppConfig = AppConfig
global.Constants = Constants