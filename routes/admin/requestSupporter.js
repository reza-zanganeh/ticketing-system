const express = require("express")
const requsetSupporterController = require("../../controller/admin/requestSupporter")
const requestSupporterRouter = express.Router()
const { isAuthenticate } = require("../../middleware/Authetication.md.js")
const { isAdmin } = require("../../middleware/access")
// get all request supporter
requestSupporterRouter.get(
  "/",
  isAuthenticate,
  isAdmin,
  requsetSupporterController.getAllRequestSupporter
)
// confirm supporter
requestSupporterRouter.patch(
  "/accept/:id",
  isAuthenticate,
  isAdmin,
  requsetSupporterController.acceptRequestSupporter
)
// reject supporter
requestSupporterRouter.patch(
  "/reject/:id",
  isAuthenticate,
  isAdmin,
  requsetSupporterController.rejectRequestSupporter
)
//

module.exports = requestSupporterRouter
