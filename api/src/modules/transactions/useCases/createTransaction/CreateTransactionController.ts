import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateTransactionUseCase } from "./CreateTransactionUseCase"

export class CreateTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      description,
      type,
      category,
      price,
    } = request.body

    const { id } = request.user

    const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

    await createTransactionUseCase.execute({
      description,
      type,
      category,
      price,
      user: { id }
    })

    return response.status(201).json({ message: "Transaction created successfully." })

  }
}
