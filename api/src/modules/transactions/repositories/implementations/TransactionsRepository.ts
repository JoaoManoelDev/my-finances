import { FindManyOptions, In, Repository } from "typeorm"
import { AppDataSource } from "../../../../database/data-source"
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO"
import { Transaction } from "../../entities/Transaction"
import { ITransactionsRepository } from "../ITransactionsRepository"

export class TransactionsRepository implements ITransactionsRepository {

  private repository: Repository<Transaction>

  constructor() {
    this.repository = AppDataSource.getTreeRepository(Transaction)
  }

  async create({
    category,
    description,
    price,
    type,
    user,
    id
  }: ICreateTransactionDTO): Promise<void> {
    const newTransaction = this.repository.create({
      user,
      category,
      description,
      id,
      price,
      type
    })

    await this.repository.save(newTransaction)
  }

  async findByUserId(user_id: string): Promise<Transaction[]> {
    const transactions = await this.repository.find({ user: user_id } as FindManyOptions<Transaction>)

    return transactions
  }

}