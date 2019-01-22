const errorObj = (option) => {
  if (typeof option === 'string') {
    return new Error(option)
  } else { //Error Object it self
    return option
  }
}

export default {
  Invalid: (option) => {
    const error = errorObj(option)
    error.status = 400
    return error
  },
  Unauthorized: (option) => {
    const error = errorObj(option)
    error.status = 401
    return error
  },
  Forbidden: (option) => {
    const error = errorObj(option)
    error.status = 403
    return error
  },
  NotFound: (option) => {
    const error = errorObj(option)
    error.status = 404
    return error
  },
  InternalError: (option) => {
    const error = errorObj(option)
    error.status = 500
    return error
  },
}
