import { DeepPartial } from "typeorm"
import { Transaction } from "../entities/Transaction"

export interface ICreateTransactionDTO {
  id?: string
  description: string
  type: string
  category: string
  price: number
  user: DeepPartial<Transaction>
}