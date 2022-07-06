/** @format */

exports.NotFound = {
  code: 404,
  message:
    "Not Found : the URL you used in your request doesn’t exist on the server",
}
exports.Unauthorized = {
  code: 401,
  message: "Unauthorized : Please Login to your account",
}

exports.Forbidden = {
  code: 403,
  message: "Forbidden : you don’t have permission to do this operation",
}

exports.BadRequest = {
  code: 400,
  message: "BadRequest : you have some mistake in your request",
}

exports.ToManyRequest = {
  code: 429,
  message: "ToManyRequest",
}
