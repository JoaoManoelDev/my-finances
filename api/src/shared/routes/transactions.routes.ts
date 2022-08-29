import { Router } from "express"

import { ensureAuthenticateUser } from "../../middlewares/ensureAuthenticateUser"

import { CreateTransactionController } from "../../modules/transactions/useCases/createTransaction/CreateTransactionController"
import { FindTransactionController } from "../../modules/transactions/useCases/findTransaction/FindTransactionController"

export const transactionsRoutes = Router()

const createTransactionController = new CreateTransactionController()
const findTransactionController = new FindTransactionController()

transactionsRoutes.post("/", ensureAuthenticateUser, createTransactionController.handle)

transactionsRoutes.get("/", ensureAuthenticateUser, findTransactionController.handle)
