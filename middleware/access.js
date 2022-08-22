module.exports.isAdmin = (req, res, next) => {
  if (req?.user?.role === "ADMIN") next()
  else {
    const error = new Error()
    error.errorType = "Forbidden"
    return next(error)
  }
}

module.exports.isSupporter = (req, res, next) => {
  if (req?.user?.role === "SUPPORTER") next()
  else {
    const error = new Error()
    error.errorType = "Forbidden"
    return next(error)
  }
}

module.exports.isSupporterOrAdmin = (req, res, next) => {
  if (req?.user?.role === "SUPPORTER" || req?.user?.role === "ADMIN") next()
  else {
    const error = new Error()
    error.errorType = "Forbidden"
    return next(error)
  }
}
