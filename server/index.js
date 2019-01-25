require('@babel/register')

const app = require('./app')
const http = require('http')
const server = http.createServer(app)

const PORT = process.env.PORT || AppConfig.PORT || 3000
server.listen(PORT)
if (AppConfig.isDevelopment) {
  const notifier = require('node-notifier')
  notifier.notify({
    title: 'Application Started',
    message: `Started on port ${PORT} in ${AppConfig.env} mode`,
    timeout: 5,
    open: `http://localhost:${PORT}`,
  })
}
Logger.info(`Started on port ${PORT} in ${AppConfig.env} mode`)

process.on('uncaughtException', (err) => {
  Logger.error(`${(new Date()).toUTCString()} uncaughtException:`, err.message)
  Logger.error(err.stack)
  process.exit(1)
})

module.exports = app
