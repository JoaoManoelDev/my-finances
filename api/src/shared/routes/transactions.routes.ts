import { Router } from "express"
import { CreateTransactionController } from "../../modules/transactions/useCases/createTransaction/CreateTransactionController"
import { FindTransactionController } from "../../modules/transactions/useCases/findTransaction/FindTransactionController"

export const transactionsRoutes = Router()

const createTransactionController = new CreateTransactionController()
const findTransactionController = new FindTransactionController()

transactionsRoutes.post("/", createTransactionController.handle)

transactionsRoutes.get("/:user_id", findTransactionController.handle)
