import express from 'express'
import { createConnection } from './database/data-source'

createConnection()

const app = express()

app.listen(3333, () => console.log('Sever is running in port 3333'))