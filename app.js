import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from "dotenv"
import personsRouter from "./controllers/persons.js"
import mongoose from "mongoose"
import logger from "./utils/logger.js"
import middleware from "./utils/middleware.js"
dotenv.config()

mongoose.set("strictQuery", false)

const url = process.env.MONGODB_URI

console.log("connecting to MongoDB...")

mongoose.connect(url)
  .then(result => {
    logger.info(result, "\nconnected to MongoDB")
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message)
  })

const customMorganFormat = ":method :url :status :res[content-length] - :response-time ms :data"
morgan.token("data", (req) => {
  return JSON.stringify(req.body)
})

const app = express()
dotenv.config()

app.use(cors())
app.use(express.static("dist"))
app.use(express.json())
app.use(morgan(customMorganFormat))

app.use('/api/persons', personsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.requestLogger)
app.use(middleware.errorHandler)

export default app