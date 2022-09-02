import { inject, injectable } from "tsyringe"
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository"

@injectable()
export class FindTransactionUseCase {

  constructor(
    @inject("TransactionsRepository")
    private transactionsRepository: ITransactionsRepository
  ) { }

  async execute(user_id: string, _order?: string, q?: string) {

    const transactions = await this.transactionsRepository.findByUserId(user_id, _order, q)

    return transactions

  }
}