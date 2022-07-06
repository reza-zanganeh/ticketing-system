/** @format */

require("dotenv").config()

const config = {
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
  TOKEN_KEY: process.env.TOKEN_KEY,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
  SALT: process.env.SALT,
  TOKEN_EXPIRES_TIME_IN_MILI_SECOND:
    process.env.TOKEN_EXPIRES_TIME_IN_MILI_SECOND,
}

module.exports = config
