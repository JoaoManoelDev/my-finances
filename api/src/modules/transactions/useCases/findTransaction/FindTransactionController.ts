import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindTransactionUseCase } from "./FindTransactionUseCase"

export class FindTransactionController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.params

    const findTransactionUseCase = container.resolve(FindTransactionUseCase)

    const allTransactions = await findTransactionUseCase.execute(user_id)

    return response.status(200).json(allTransactions)
  }
}