import "dotenv/config"

import { DataSource } from "typeorm"

const port = process.env.DB_PORT as undefined
const type = process.env.DB_TYPE as undefined

export const AppDataSource = new DataSource({
  type: type,
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password:  process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ["src/modules/**/entities/*.ts"],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
})

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize()
}
