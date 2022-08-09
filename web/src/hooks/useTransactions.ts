import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  return useContext(TransactionsContext)
}
