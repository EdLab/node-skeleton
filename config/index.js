import * as Constants from '../config/constants'

const env = process.env.NODE_ENV || 'development'

const publicConfig = require('./app_config')
const privateConfig = require('./app_config_private')
const localConfig = require('dotenv').config()
const version = require('../jenkins.json').version

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
  privateConfig(env),
  localConfig.parsed)

global.AppConfig = AppConfig
global.Constants = Constants
