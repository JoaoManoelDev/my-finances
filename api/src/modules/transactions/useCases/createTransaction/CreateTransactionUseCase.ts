import { inject, injectable } from "tsyringe"
import { DeepPartial } from "typeorm"
import { Transaction } from "../../entities/Transaction"
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository"

interface IRequest {
  id?: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  user: DeepPartial<Transaction>
}

@injectable()
export class CreateTransactionUseCase {

  constructor(
    @inject("TransactionsRepository")
    private transactionRepository: ITransactionsRepository
  ) { }

  async execute({
    category,
    description,
    price,
    type,
    id,
    user
  }: IRequest) {
    await this.transactionRepository.create({
      category,
      description,
      price,
      type,
      user,
      id
    })

    return
  }
}