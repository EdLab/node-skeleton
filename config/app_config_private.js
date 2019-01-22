
const configs = {
  'default': {

  },
  'development': {

  },
  'test': {

  },
  'integration': {

  },
  'production': {

  },
}
module.exports = (env = process.env.NODE_ENV) => {
  return Object.assign(configs['default'], configs[env])
}