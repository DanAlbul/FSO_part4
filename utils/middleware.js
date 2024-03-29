import logger from "./logger.js"

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  logger.next()
}

const errorHandler = (error, req, res, next) => {
  console.error(error)
  if (error.name === "CastError")
    return res.status(400).send({ error: "malformatted id" })
  else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message, type: error.name })
  }
  next(error)
}

const unknownEndpoint = (req, res) => res.status(404).send({ error: "unknown endpoint" })



export default { requestLogger, errorHandler, unknownEndpoint}