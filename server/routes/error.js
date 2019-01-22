module.exports = function (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    if (err.status != 404) {
      Logger.error(`[${req.sessionID}] ${err}`)
    } else {
      Logger.silly(err)
    }
    if (err.status) {
      res.status(err.status)
    } else {
      res.status(500)
    }
    const formatIsJson = (res.locals.format && res.locals.format === 'json')

    if (formatIsJson) {
      res.json({
        message: err.toString(),
        status: err.status,
      })
    } else if (req.accepts('html')) {
      res.render('error', {
        error: err,
        user: req.session.user,
      })
    } else { //Doesn't accepts html
      res.json({ ...err, message: err.message })
    }
  }
