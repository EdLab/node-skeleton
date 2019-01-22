import bodyParser from 'body-parser'
import errorhandler from 'errorhandler'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import session from 'express-session'

import '../config' //Enable global.AppConfig
import Logger from './lib/Logger'
import Response from './lib/Response'

global.Logger = Logger(AppConfig.LOG_LEVEL)
global.Response = Response

const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (AppConfig.isDevelopment) {
    const notifier = require('node-notifier');
    app.use(errorhandler((err, str, req) => {
        const title = `Error in ${req.method} ${req.url}`
        notifier.notify({
            title: title,
            message: str
        })
    }))
}
app.use(AppConfig.isDevelopment ?
    morgan('dev') :
    morgan('combined', {
        skip: function (req, res) {
            return res.statusCode < 400
        }
    }))
app.use(bodyParser.json({
    limit: AppConfig.HTTP_BODY_LIMIT
}))
app.use(session({
    secret: 'SESSION_KEY',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))
app.get('/', (req, res) => {
    res.json({
        status: 200
    })
})
app.get('/error', (req, res, next) => {
    next(new Error('te'))
})

app.use(() => {
    const error = new Error('Resource Not Found')
    error.status = 404
    throw error
})

app.use(require('./routes/error'))

module.exports = app