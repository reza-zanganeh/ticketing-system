const Error = require("../helper/StatusCodeHandler.helper/ErrorstatusCode.Client")
const {
  NotFound,
} = require("./StatusCodeHandler.helper/ErrorstatusCode.Client")
module.exports.errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || Error[err.errorType]?.code || 500).json({
    message:
      err.message || Error[err.errorType]?.message || "internal server error",
  })
}

module.exports.resposeHandler = (res, data, code, message) => {
  res.status(code).json({
    data: data || {},
    message,
  })
}

module.exports.notFoundResponse = (req, res, next) => {
  this.resposeHandler(res, {}, NotFound.code, NotFound.message)
}
