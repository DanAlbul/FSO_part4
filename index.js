import app from './app.js'
const PORT = process.env.PORT || 3006
const hostname = `http://localhost:${PORT}`
import logger from './utils/logger.js'

app.listen(PORT, () => {
  logger.info(`Server running at ${hostname}/`)
})
