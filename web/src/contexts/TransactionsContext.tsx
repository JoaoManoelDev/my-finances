import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ITransactions {
  id: number
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt: Date
}

interface ITransactionsContext {
  transactions: ITransactions[]
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContext)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function fetchTransaction(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
