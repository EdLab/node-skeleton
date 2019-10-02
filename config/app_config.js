const configs = {
  'default': {
    HTTP_BODY_LIMIT: '50mb',
    LOG_LEVEL: 'info',
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

module.exports = (env) => {
  return Object.assign(configs['default'], configs[env])
}