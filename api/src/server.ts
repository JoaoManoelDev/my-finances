import "dotenv/config"
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import helmet from "helmet"
import 'reflect-metadata'
import 'express-async-errors'
import './shared/container'
import { createConnection } from './database/data-source'
import { AppError } from './shared/errors/AppError'
import { router } from './shared/routes'

createConnection()

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(helmet())

app.use(express.json())

app.use(router)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `internal server error - ${error.message}`
  })
})

app.listen(3333, () => console.log('Sever is running in port 3333'))