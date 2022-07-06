/** @format */
const express = require("express")
const cors = require("cors")
const compression = require("compression")
const config = require("./config")
const { PrismaClient } = require("@prisma/client")
const app = express()
const { notFoundResponse, errorHandler } = require("./helper/responseHandler")
app.use(express.json({ limit: "30mb" }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(
  cors({
    origin: config.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
)
app.use(compression())

// add routes
const userRouter = require("./routes/user")
const ticketRouter = require("./routes/ticket")
const requestSupporterRouter = require("./routes/admin/requestSupporter")
app.get("/", (req, res, next) => {
  res.status(200).json({
    data: {},
    message: "server is up you can use it",
  })
})
app.use("/api/user", userRouter)
app.use("/api/ticket", ticketRouter)
app.use("/api/admin/request-supporter", requestSupporterRouter)
app.use("*", notFoundResponse)
app.use(errorHandler)

const PORT = config.PORT || 3000

const prismaClient = new PrismaClient()

prismaClient
  .$connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`)
    })
  })
  .catch((e) => {
    console.log(`server can not running ${e.message}`)
  })
