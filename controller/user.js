/** @format */
const { PrismaClient } = require("@prisma/client")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const config = require("../config")
const {
  BadRequest,
} = require("../helper/StatusCodeHandler.helper/ErrorstatusCode.Client")
const { resposeHandler } = require("../helper/responseHandler")
const {
  Successfull,
} = require("../helper/StatusCodeHandler.helper/SuccessStatusCode")
const prismaClient = new PrismaClient()
module.exports.signup = async (req, res, next) => {
  try {
    const { username, fullname, email, password } = req.body
    const hashedPass = await bcrypt.hash(password, 10)
    const user = await prismaClient.user.create({
      data: {
        username,
        fullname,
        email,
        password: hashedPass,
        role: "USER",
      },
    })
    const userCreatedId = user.id
    const token = jwt.sign(
      {
        id: userCreatedId,
        username: user.username,
        role: "USER",
      },
      config.TOKEN_KEY,
      {
        expiresIn: "1d",
      }
    )
    resposeHandler(
      res,
      {
        token,
        expiresIn: config.TOKEN_EXPIRES_TIME_IN_MILI_SECOND,
        username,
        fullname,
        role: user.role,
      },
      Successfull.code,
      Successfull.message
    )
  } catch (error) {
    if (error.code == "P2002") {
      error.statusCode = BadRequest.code
      error.message = `${error.meta.target[0]} must be unique`
    }
    next(error)
  }
}

module.exports.login = async (req, res, next) => {
  try {
    // find user with email
    const { username, password: inputPassword } = req.body
    const user = await prismaClient.user.findUnique({
      where: {
        username,
      },
    })
    const password = user.password
    const resultOfcomparePassword = await bcrypt.compare(
      inputPassword,
      password
    )
    // compare password
    if (!resultOfcomparePassword) {
      const err = new Error("your password is incorrect")
      err.errorType = "Unauthorized"
      return next(err)
    }
    // if true create and send token
    const userCreatedId = user.id
    const token = jwt.sign(
      {
        id: userCreatedId,
        username,
        role: user.role,
      },
      config.TOKEN_KEY,
      {
        expiresIn: "1d",
      }
    )
    // 7. send token in response
    resposeHandler(
      res,
      {
        token,
        expiresIn: config.TOKEN_EXPIRES_TIME_IN_MILI_SECOND,
        username,
        fullname: user.fullname,
        role: user.role,
      },
      Successfull.code,
      Successfull.message
    )
  } catch (error) {
    next(error)
  }
}

exports.getTicketsByUserId = async (req, res, next) => {
  try {
    const { id: userId } = req.user.id
    const tickets = await prismaClient.ticket.findMany({
      where: {
        authorId: userId,
      },
    })
    res.status(Successfull.code).json({
      data: tickets,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(NotFound.code).json({ message: NotFound.message })
  }
}

exports.requestToBecomeSupporter = async (req, res, next) => {
  try {
    const userId = Number(req.user.id)
    if (req.user.role !== "USER") {
      const err = new Error()
      err.errorType = "Forbidden"
      return next(err)
    }
    const response = await prismaClient.requestSupporter.create({
      data: {
        userId,
      },
    })
    res.status(Successfull.code).json({
      data: response,
      message: Successfull.message,
    })
  } catch (error) {
    res
      .status(BadRequest.code)
      .send({ message: "remove ticket faild , controll your input" })
  }
}
