/** @format */

const express = require("express")
const userController = require("../controller/user")
const { isAuthenticate } = require("../middleware/Authetication.md")
const userRouter = express.Router()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/tickets", isAuthenticate, userController.getTicketsByUserId)

// request to become supporter
userRouter.post(
  "/request-supporter",
  isAuthenticate,
  userController.requestToBecomeSupporter
)
//

module.exports = userRouter
