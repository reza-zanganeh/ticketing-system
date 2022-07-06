/** @format */

const { PrismaClient } = require("@prisma/client")
const {
  Successfull,
  SuccessfullCreate,
} = require("../helper/StatusCodeHandler.helper/SuccessStatusCode")
const {
  NotFound,
  BadRequest,
} = require("../helper/StatusCodeHandler.helper/ErrorstatusCode.Client")
const prismaClient = new PrismaClient()
exports.getTickets = async (req, res, next) => {
  try {
    const tickets = await prismaClient.ticket.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        response: true,
        status: true,
        author: {
          select: {
            fullname: true,
          },
        },
      },
    })
    res.status(Successfull.code).json({
      data: tickets,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(BadRequest.code).json({ message: BadRequest.message })
  }
}

exports.getTicketById = async (req, res, next) => {
  try {
    const ticketId = Number(req.params.id)
    const ticket = await prismaClient.ticket.findUnique({
      where: {
        id: ticketId,
      },
    })
    if (!ticket) {
      const error = new Error()
      error.errorType = "BadRequest"
      return next(error)
    }
    res.status(Successfull.code).json({
      data: ticket,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(NotFound.code).json({ message: NotFound.message })
  }
}

exports.createTicket = async (req, res, next) => {
  try {
    const user = req.user
    const { username, id: authorId } = user
    const { title, content } = req.body

    const ticket = await prismaClient.ticket.create({
      data: {
        title,
        content,
        authorId,
      },
    })
    res.status(SuccessfullCreate.code).json({
      data: ticket,
      message: SuccessfullCreate.message,
    })
  } catch (error) {
    res
      .status(BadRequest.code)
      .send({ message: "create ticket faild , controll your input" })
  }
}

exports.removeTicket = async (req, res, next) => {
  try {
    const ticketId = Number(req.params.id)
    const { id: userId, role } = req.user
    const ticket = await prismaClient.ticket.findUnique({
      where: { id: ticketId },
    })

    if (!ticket) {
      const error = new Error()
      error.errorType = "BadRequest"
      return next(error)
    }

    if (ticket.authorId !== userId && role !== "ADMIN") {
      const error = new Error()
      error.errorType = "Forbidden"
      return next(error)
    }

    const response = await prismaClient.ticket.delete({
      where: {
        id: ticketId,
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

// response to ticket by supporter or admin
module.exports.responseToTicket = async (req, res, next) => {
  try {
    const ticketId = Number(req.params.id)
    const { response } = req.body
    if (!response) throw new Error()

    const ticket = await prismaClient.ticket.findUnique({
      where: {
        id: ticketId,
      },
    })

    if (ticket.status === "REJECT") throw new Error()

    const updateTicket = await prismaClient.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        status: "ANSWERED",
        response,
      },
    })
    res.status(Successfull.code).json({
      data: updateTicket,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(BadRequest.code).json({ message: BadRequest.message })
  }
}
// reject ticket by supporter or admin
module.exports.rejectTicket = async (req, res, next) => {
  try {
    const ticketId = Number(req.params.id)

    const ticket = await prismaClient.ticket.findUnique({
      where: {
        id: ticketId,
      },
    })

    if (ticket.status === "ANSWERED") throw new Error()

    const updateTicket = await prismaClient.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        status: "REJECT",
      },
    })
    res.status(Successfull.code).json({
      data: updateTicket,
      message: Successfull.message,
    })
  } catch (error) {
    res.status(BadRequest.code).json({ message: BadRequest.message })
  }
}
