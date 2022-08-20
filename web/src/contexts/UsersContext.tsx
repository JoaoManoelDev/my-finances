import { createContext, ReactNode } from 'react'
import { api } from '../lib/axios'

interface IfetchSignUp {
  email: string
  password: string
  passwordConfirm: string
  name: string
}

interface IUsersContext {
  fetchSignUp: ({
    email,
    name,
    password,
    passwordConfirm,
  }: IfetchSignUp) => Promise<void>
}

interface UsersProviderProps {
  children: ReactNode
}

export const UsersContext = createContext({} as IUsersContext)

export function UsersProvider({ children }: UsersProviderProps) {
  async function fetchSignUp({
    email,
    password,
    passwordConfirm,
    name,
  }: IfetchSignUp) {
    const response = await api.post('/users', {
      email,
      password,
      passwordConfirm,
      name,
    })

    console.log(response)
  }

  return (
    <UsersContext.Provider value={{ fetchSignUp }}>
      {children}
    </UsersContext.Provider>
  )
}
