import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO"
import { Transaction } from "../entities/Transaction"

export interface ITransactionsRepository {
  create(data : ICreateTransactionDTO): Promise<void>
  findByUserId(user_id: string): Promise<Transaction[]>
}