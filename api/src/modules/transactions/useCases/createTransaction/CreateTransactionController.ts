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
      user,
    } = request.body

    const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

    await createTransactionUseCase.execute({
      description,
      type,
      category,
      price,
      user,
    })

    return response.status(201).json({ message: "Transaction created successfully." })

  }
}
