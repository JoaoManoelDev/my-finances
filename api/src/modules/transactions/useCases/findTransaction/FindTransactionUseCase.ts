import { inject, injectable } from "tsyringe"
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository"

@injectable()
export class FindTransactionUseCase {

  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) { }

  async execute(user_id: string) {

    const transactions = await this.transactionsRepository.findByUserId(user_id)

    return transactions

  }
}