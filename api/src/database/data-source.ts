import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "9121",
  database: "my-finances-api",
  synchronize: false,
  logging: false,
  entities: ["src/modules/**/entities/*.ts"],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
})

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize()
}
