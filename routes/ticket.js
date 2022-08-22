/** @format */

const { PrismaClient } = require("@prisma/client")
const express = require("express")
const ticketController = require("../controller/ticket")
const { isSupporterOrAdmin, isAdmin } = require("../middleware/access")
const ticketRouter = express.Router()
const { isAuthenticate } = require("../middleware/Authetication.md.js")

ticketRouter.get("/", isAuthenticate, ticketController.getTickets)
ticketRouter.get("/:id", isAuthenticate, ticketController.getTicketById)
ticketRouter.post("/", isAuthenticate, ticketController.createTicket)
ticketRouter.delete(
  "/:id",
  isAuthenticate,
  isAdmin,
  ticketController.removeTicket
)
// response to ticket by supporter or admin
ticketRouter.patch(
  "/response/:id",
  isAuthenticate,
  isSupporterOrAdmin,
  ticketController.responseToTicket
)
// reject ticket by supporter or admin
ticketRouter.patch(
  "/reject/:id",
  isAuthenticate,
  isSupporterOrAdmin,
  ticketController.rejectTicket
)

module.exports = ticketRouter
