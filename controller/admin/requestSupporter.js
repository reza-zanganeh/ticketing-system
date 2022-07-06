/** @format */
const { PrismaClient } = require("@prisma/client")
const config = require("../../config")
const {
  BadRequest,
} = require("../../helper/StatusCodeHandler.helper/ErrorstatusCode.Client")
const { resposeHandler } = require("../../helper/responseHandler")
const {
  Successfull,
} = require("../../helper/StatusCodeHandler.helper/SuccessStatusCode")
const prismaClient = new PrismaClient()
module.exports.getAllRequestSupporter = async (req, res, next) => {
  try {
    const requestSupporter = await prismaClient.requestSupporter.findMany({
      select: {
        id: true,
        status: true,
        user: {
          select: {
            fullname: true,
          },
        },
      },
    })
    res.status(Successfull.code).json({
      data: requestSupporter,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(BadRequest.code).json({ message: BadRequest.message })
  }
}

module.exports.acceptRequestSupporter = async (req, res, next) => {
  try {
    const requestId = Number(req.params.id)
    const updateRequest = await prismaClient.requestSupporter.update({
      where: {
        id: requestId,
      },
      data: {
        status: "ACCEPT",
      },
    })
    const userId = updateRequest.userId
    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: { role: "SUPPORTER" },
    })

    res.status(Successfull.code).json({
      data: updateRequest,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(BadRequest.code).json({ message: BadRequest.message })
  }
}

module.exports.rejectRequestSupporter = async (req, res, next) => {
  try {
    const requestId = Number(req.params.id)
    const updateRequest = await prismaClient.requestSupporter.update({
      where: {
        id: requestId,
      },
      data: {
        status: "REJECT",
      },
    })
    const userId = updateRequest.userId
    await prismaClient.user.update({
      where: {
        id: userId,
      },
      data: { role: "USER" },
    })
    res.status(Successfull.code).json({
      data: updateRequest,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(BadRequest.code).json({ message: BadRequest.message })
  }
}
