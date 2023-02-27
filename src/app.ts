import express from 'express'
import path from 'path'
import * as dotenv from 'dotenv'
// https://www.npmjs.com/package/morgan
// https://expressjs.com/en/resources/middleware/morgan.html
import logger from 'morgan'
import { Database } from './db/database'
import { loadApiEndpoints } from './routes'
import swaggerUi from 'swagger-ui-express'

// Create Express server
// https://expressjs.com/en/resources/middleware/cors.html
import cors from 'cors'

const app = express()
const db = new Database()


// Express configuration
const loggerConfig = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
dotenv.config()
app.set('env', process.env.NODE_ENV || 'development')
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(logger(loggerConfig))


app.use(
  express.static(
    path.join(__dirname, '../public'),
    { maxAge: 31557600000 }
  )
)

app.use(
  '/api/v1/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);

// load routes
loadApiEndpoints(app)

export default app
